import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { LugaresModel } from "./lugares.model"
import { inject } from "@angular/core";
import { LugaresService } from "../lugares.service";
import { Observable } from "rxjs";
import { TipoLugaresEnum } from "./tipo-lugares.enum";

const getLugaresDefault = () => {
  const lugar1 = new LugaresModel(
    'l1',
    'Casa em Pirinópolis',
    'Bela casa para temporada com armários e piscina',
    'https://suacasaempiri.com.br/wp-content/uploads/elementor/thumbs/IMG-20220507-WA0034-q0yjv9gni9uz3bnabnrxiclloqiqrho6nf76j34fc0.jpg',
    1200,
    TipoLugaresEnum.INDISPONIVEL
  );

  const lugar2 = new LugaresModel(
    'l2',
    'Apartamento em caldas novas',
    'Apartamento mobiliado com lazer completo',
    'https://images.trvl-media.com/lodging/20000000/19640000/19632400/19632397/w639h424x0y1-946b74f3.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    1000,
    TipoLugaresEnum.DISPONIVEL
  );
  const lugar3 = new LugaresModel(
    'l3',
    'Mansão em Jurerê-SC',
    'Incrível mansão próxima à melhor praia do Brasil!',
    'https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtu2hV-v1KyzcjsNYSZuSZoTSY0bK-9+aW80+4oc-JnoLGzfGucePB87kazqXKLESVkpVoSsItEBlFN+ZRVTDkBMKkIn1PpgSpp1vtT6EebXdu2VkUgk1T9Wa0UbuHwHgf4hafCKL98AKIY7DfWwxDQPlLCdkx8QdQ8Bi1SUxy8h8d55m-oS7TO7S-K5+hxzlXFx5k9oa+Squ619jCLJU4Vr0lNm4L5VMZWe0S2-TJT-8+5wEDqv3JFhXchgzWgPAoc9j0QdpBmqUDiF2VErVIuU3tzoWWjPT+OUTQYQA88L7Jq-CzOv-zHq+iOUm+lJsM94-capgLaM-0XURcFyQnDTsY4xHttr6b8A+sMGq223UqXwPNr+0ahBUJDQZRs4ZO+z3q1ImucBKTH5fazURFdZy9lg==.jpg',
    7899,
    TipoLugaresEnum.INDISPONIVEL
  );
  const lugar4 = new LugaresModel(
    'l4',
    'Chopana em Rio Verde-GO',
    'Natureza e paz!',
    'https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtu213yt984hM7npIrGZOXjiek28CP-vPH8hXK-oj9mpnm35jZdt-k1Y4PyaTLKhuQlIxhev0YFHFJQe9lGQHsQYOcDVpa+ASzqlTGeJVBTmNk1iAPl0tw43ngTKKhx2kW5Q+lKdnVtRyAdqK5PVsBGrMNAdsz6EIJ9xa9SUxy8h8d55m-oS7TO7S-K5+hxzlXFx5k9oa+Squ619jCLJU4Vr0lNm4L5VMZWe0S2-TJT-8+5wEDqv3JFhXchgzWgPAoc9j0QdpKn6QclQ6XT7cYvEzpxYTCh-b4ax7XM1E797+fqaS2NazwTP-sV2m8lIwR94+WBfp8Z8bkHWlWECw1I3BfqR-k+KGY8F8=.jpg',
    350,
    TipoLugaresEnum.DISPONIVEL
  );
  const lugar5 = new LugaresModel(
    'l5',
    'Chalé em Cadas Novas-GO',
    'Incrível na chalé localizado no melhor condomínio da cidade das águas!',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ad/24/a0/chale.jpg?w=1000&h=-1&s=1',
    500,
    TipoLugaresEnum.DISPONIVEL
  );
  const lugar6 = new LugaresModel(
    'l6',
    'Apartamento em Águas Claras-DF',
    'Apartamento de 3 qts com varanda na melhor cidade de Brasília-DF',
    'https://sardeiroimoveis.com.br/wp-content/uploads/2019/12/18-1024x767.jpg',
    450,
    TipoLugaresEnum.DISPONIVEL
  );
  const lugar7 = new LugaresModel(
    'l7',
    'Chalé Roots em Bonito-MS',
    'Chalezinho relax em Bonito!',
    'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/317035865.jpg?k=25f0fe0725278f72dc03e129f39063534398744b260783673d38a4822362119d&o=',
    500,
    TipoLugaresEnum.DISPONIVEL
  );
  const lugar8 = new LugaresModel(
    'l8',
    'Mansão no Guarujá-SP',
    '8 quartos, piscina, sauna, academia e praia privativa! Luxo Top!!',
    'https://www.matuetevillas.com/wp-content/uploads/2020/08/ambientes-matuete-villa-08-Guaruj%C3%A1-casas-de-luxo-2.jpg',
    500,
    TipoLugaresEnum.INDISPONIVEL
  );




  return [lugar1, lugar2, lugar3, lugar4,lugar5, lugar6, lugar7, lugar8]

}



export const HelperLugares = {
getLugaresDefault,
}
