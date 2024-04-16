class item{

    constructor(i){
        this.id = i.id;
        this.nome = i.nome;
        this.descricao = i.descricao;
        this.valor = i.valor;
    
}
create(){
    return `INSERT INTO item VALUE ('${this.id} ',
         '${this.nome} ', 
         '${this.descricao}',
         '${this.valor})`
}
read() {
    if(this.id ==undefined)
    return `SELECT   * FROM item`
    else
    return `SELECT * FROM item WHERE id = '${this.id}'`
}
update(){
    return `UPDATE item SET
    nome = '${this.nome}',
    descricao = '${this.descricao}',
    valor = '${this.valor}'
    WHERE id = '${this.id}'`
}
delte() {
    return `DELETE FROM item WHERE id = '${this.id}'`
}
}
modele.exports = item;