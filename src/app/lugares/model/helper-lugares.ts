import { LugaresModel } from "./lugares.model"

const getLugaresDefault = () => {
  const lugar1 = new LugaresModel(
    'l1',
    'Casa em Pirinópolis',
    'Bela casa para temporada com armários e piscina',
    'https://suacasaempiri.com.br/wp-content/uploads/elementor/thumbs/IMG-20220507-WA0034-q0yjv9gni9uz3bnabnrxiclloqiqrho6nf76j34fc0.jpg',
    1200
  );

  const lugar2 = new LugaresModel(
    'l2',
    'Apartamento em caldas novas',
    'Apartamento mobiliado com lazer completo',
    'https://images.trvl-media.com/lodging/20000000/19640000/19632400/19632397/w639h424x0y1-946b74f3.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    1000
  );
  const lugar3 = new LugaresModel(
    'l3',
    'Mansão em Jurerê-SC',
    'Incrível mansão próxima à melhor praia do Brasil!',
    'https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grq6lwb4htd1/b/tecimob-production/o/media/c3ed78b5-10fb-41e6-b5d7-b2c9dd68da89/properties/c57b2630-2e5e-4af7-8c99-9c213373f6e5/images/eb277ebe-f274-4ed1-bbff-7a9e67e285cb1674757179wpmE.jpg',
    7899
  );
  return [lugar1, lugar2, lugar3]

}





export const HelperLugares = {
getLugaresDefault
}
