import axios from "axios"
import { readFileSync } from "fs";
import { METHODS } from "http";
import { url } from "inspector";



const PERPLEXITY_URI="https://api.perplexity.ai/chat/completions"
const PERPLEXITY_API_KEY="ADD YOUR KEY"


function parseAndSerialize(){
    const file = '../out.pdf';

    const f = readFileSync(file, { encoding: 'utf8' });

    axios({
				method: 'POST',
                url:PERPLEXITY_URI,
				headers: {accept: 'application/json', 'content-type': 'application/json', Authorization: `Bearer ${PERPLEXITY_API_KEY}`},
				body: JSON.stringify({
					model: 'pplx-7b-online',
					messages: [
						{role: 'system', content: 'Parse and serialize tables in json'},
						{ role: 'user', content: f },
					],
				})
			}).then((res)=>{
                console.log(res.data)
            }).catch((error)=>{
                console.error(error);
            })

    console.log(f);

}

export {
     parseAndSerialize
}










