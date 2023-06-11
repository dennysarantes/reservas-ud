import { LugaresModel } from "../../model/lugares.model";

const getOfertasDefault = () => {
  const oferta1 = new LugaresModel(
    'o1',
    'Casa em Brasília-DF',
    'Bela casa para aluguel com 4 dormitórios no coração de Brasília',
    'https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/cee782654922d1d192917893b88b38eb/casa-com-4-quartos-a-venda-560m-no-lago-norte-brasilia.jpg',
    5200
  );

  const oferta2 = new LugaresModel(
    'o2',
    'Apartamento em Rio Novo-MG',
    'Apartamento mobiliado com jardim',
    'https://img.olx.com.br/images/07/074304160490471.webp',
    650.89
  );
  const oferta3 = new LugaresModel(
    'o3',
    'Mansão em Goiânia-GO',
    'Incrível mansão na melhor cidade do Brasil!',
    'https://cdn.agil.net/cdn/agil/88/property/395/big/47af32c76b7e.webp',
    7899
  );
  return [oferta1, oferta2, oferta3]

}





export const HelperOfertas = {
  getOfertasDefault
}
