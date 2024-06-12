import { embedingStore } from "./utils/vectorStore.js";
import { parseAndSerialize } from "./utils/parse.js";
import { ask } from "./utils/askquestion.js";

// embedingStore().then(res=>{
//     console.log(res)
// }).catch(err => {
//     console.error(err)
// })

// parseAndSerialize()

const userQuestion = "What is the Total Cash and Cash Equivalent of Nov. 2023?";

ask(userQuestion).then(res=>{
    console.log("===============Result==============")
    console.log(res);
}).catch(error=>{
    console.error(error)
})