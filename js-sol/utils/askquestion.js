import { ChatMistralAI} from "@langchain/mistralai";
import { ChatPromptTemplate } from "@langchain/core/prompts"
import { MISTRAL_KEY,getVectorAndDbinstanaces } from "./retriverandvector.js";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";

export const  ask = async(userQuestion)=>{
    const llm = new ChatMistralAI({
        model: "mistral-large-latest",
        temperature: 0,
        apiKey: MISTRAL_KEY
    })
    const { retriever } = await getVectorAndDbinstanaces();
    const systemTemplate = [
        `Analyze the finances`,
        `Use the following pieces of retrieved context to answer `,
        `the question. If you don't know the answer, say that you `,
        `don't know. Use three sentences maximum and keep the `,
        `answer concise.`,
        `\n\n`,
        `{context}`,
        ].join("");

    const prompt = ChatPromptTemplate.fromMessages(
        ["system", systemTemplate],
        ["human", "{input}"]
    )

    try {
        const questionAnswerChain = await createStuffDocumentsChain({llm, prompt});
    
        const ragChain = await createRetrievalChain({
            retriever,
            combineDocsChain: questionAnswerChain
        })

      
        const results = await ragChain.invoke({
            input: userQuestion
        }, {
            maxConcurrency: 1,
            recursionLimit: 1
        })

        return Promise.resolve(results);
        
    } catch (error) {
        return Promise.reject(error);
    }

}