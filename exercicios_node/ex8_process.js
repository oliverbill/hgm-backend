function temParam(param){
    return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')){
    console.log('atencao total')
}else{
    console.log('tranquilo')
}
