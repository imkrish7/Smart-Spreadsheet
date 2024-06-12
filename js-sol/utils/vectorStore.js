// import "pdf-parse"; // need for typescript
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'
import { getVectorAndDbinstanaces } from './retriverandvector.js';


export const embedingStore = async ()=>{
    const FILE_PATH = '../out.pdf';
    const loader = new PDFLoader(FILE_PATH)
    const docs = await loader.load();
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 50,
        chunkOverlap: 10
    })

    const split = await splitter.splitDocuments(docs);
  
    const { vectorStore, db } = await getVectorAndDbinstanaces();
    await vectorStore.addModels(
        await db.$transaction(
            split.map(content=> db.document.create({data: { content: content.pageContent }}))
        )
    )

    return Promise.resolve('Done');
}
