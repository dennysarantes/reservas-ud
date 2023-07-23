import { TipoLugaresEnum } from "../../model/tipo-lugares.enum";

const getTipo = (valor:string) => {
  switch (valor) {
    case 'disponivel': return TipoLugaresEnum.DISPONIVEL;
    case 'indisponivel': return TipoLugaresEnum.INDISPONIVEL;
    default: return TipoLugaresEnum.INDISPONIVEL
  }

}

export const HelperProcurar = {
  getTipo
}
