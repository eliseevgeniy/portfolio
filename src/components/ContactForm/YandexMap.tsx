import { YMaps, Map, Placemark } from '@mr-igorinni/react-yandex-maps-fork';

// Координаты центра Абакана
const ABAKAN_COORDS = [53.7156, 91.4292];

export const YandexMap = () => {
  return (
    <div className="w-full h-100 rounded-2xl overflow-hidden border border-(--border-color) shadow-sm">
      <YMaps>
        <Map 
          defaultState={{ center: ABAKAN_COORDS, zoom: 12 }} 
          width="100%" 
          height="100%"
        >
          <Placemark 
            geometry={ABAKAN_COORDS} 
            properties={{ hintContent: 'Абакан' }} 
            options={{ preset: 'islands#redIcon' }}
          />
        </Map>
      </YMaps>
    </div>
  );
};