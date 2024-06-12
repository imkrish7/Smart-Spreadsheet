import { PrismaVectorStore } from '@langchain/community/vectorstores/prisma'
import { PrismaClient, Prisma } from '@prisma/client'
import { MistralAIEmbeddings } from '@langchain/mistralai'

export const MISTRAL_KEY = "ADD YOUR KEY";


export const getVectorAndDbinstanaces = async()=>{
    const db = new PrismaClient();

    const vectorStore = PrismaVectorStore.withModel(db).create(
        new MistralAIEmbeddings({
            apiKey: MISTRAL_KEY
        }),
        {
            prisma: Prisma,
            tableName: 'Document',
            vectorColumnName: 'vector',
            columns: {
                id: PrismaVectorStore.IdColumn,
                content: PrismaVectorStore.ContentColumn
            }
        
    })

    const retriever = vectorStore.asRetriever();
    return {
        db,
        vectorStore,
        retriever
    }
}

