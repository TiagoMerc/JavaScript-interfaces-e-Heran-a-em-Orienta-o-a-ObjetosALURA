/*
Ser autenticavel significa ter o método autenticar

Ducky type, ele passa o teste do pato. Se ele tem a propriedade que eu quero usar, então eu vou usá-lo dessa maneira.
*/

export class SistemaAutenticacao{
  static login(autenticavel, senha){
    if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
        return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(autenticavel){
    return "autenticar" in autenticavel &&
    autenticavel.autenticar instanceof Function
  }
}