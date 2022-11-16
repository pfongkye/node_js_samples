import ejs from 'ejs';

export default function vanillaController(app){
    app.get('/no-lib', (_req, res)=>{
        //NOTE: beware of file path resolution below. It will depend on where the process is run (see launch.json with localRoot set)
        ejs.renderFile('./vanilla/index.ejs', (_err, str)=>{
            res.send(str);
        })
    })
}