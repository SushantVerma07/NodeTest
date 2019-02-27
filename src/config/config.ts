const env = process.env.NODE_ENV ||'development' ; // 'production' or 'development'

const development = {
 app: {
     name:"PQ NortStar - Backend (Develpoment)",
     adapterurl:"http://132.186.215.71:1234/"
 }
};
const production = {
 app: {
    name:"PQ NortStar - Backend (Production)",
    adapterurl:""
 }
//,db: {name: process.env.TEST_DB_NAME || 'test'}
};

function selectedConfiguration() {
    if(!(env.toString() === 'development')){
        return production;
    }
    else
    return development;    
}

export default selectedConfiguration();
