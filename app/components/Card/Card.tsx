'use client'
import { useEffect, useState } from "react";
import style from "./Card.module.css";

type Props = {
  isBorder?: boolean;
  imageUrl: string;
  title: string;
  address?: string;
  phone?: string;
  site?: string;
  information?: string;
  hover?: boolean;
  city?: string;
};



const Card = ({
  isBorder,
  imageUrl,
  title,
  address,
  phone,
  site,
  information,
  city,
  hover,
}: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  useEffect(() => {
    /* eslint-disable */
    let map;

    main();
    async function main() {
      // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты API
      // @ts-ignore
      await ymaps3.ready;

      // Создание карты
      // @ts-ignore
      map = new ymaps3.YMap(document.getElementById('map'), {
        location: {
          // Координаты центра карты
          // Порядок по умолчанию: «долгота, широта»
          center: [55.205247, 25.077816],

          // Уровень масштабирования
          // Допустимые значения: от 0 (весь мир) до 21.
          zoom: 10
        }
      });

      // Добавляем слой для отображения схематической карты
      // @ts-ignore
      map.addChild(new ymaps3.YMapDefaultSchemeLayer());
    }
    /*eslint-enable*/

  }, [isOpenModal])
  return (
    <>
      <div
        onClick={() => setIsOpenModal(true)}
        className={`${style.cardWrapper} ${isBorder && style.border} ${hover && style.hover
          }`}
      >
        <div className={style.bgImage}>
          {city && <span className={style.city}>{city}</span>}
          <img alt="cardImage" src={imageUrl} className={style.image} />
        </div>
        <h4 className={style.title}>{title}</h4>
        {address && (
          <div className={style.contact}>
            <div className={style.info}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z"
                  stroke="#FF0000"
                  stroke-width="1.5"
                />
                <path
                  d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
                  stroke="#FF0000"
                  stroke-width="1.5"
                />
              </svg>

              <h5 className={style.infoText}>{address}</h5>
            </div>
          </div>
        )}
        {phone && (
          <div className={style.contact}>
            <div className={style.info}>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
                    stroke="#ff0000"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <h5 className={style.infoText}>{phone}</h5>
            </div>
          </div>
        )}
        {site && (
          <div className={style.contact}>
            <div className={style.info}>
              <svg
                height="30px"
                width="30px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="red"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      className="st0"
                      d="M255.994,0.006C114.607,0.013,0.012,114.612,0,256c0.012,141.387,114.607,255.986,255.994,255.994 C397.393,511.986,511.992,397.387,512,256C511.992,114.612,397.393,0.013,255.994,0.006z M97.607,97.612 c23.34-23.328,51.761-41.475,83.455-52.725c-15.183,18.375-27.84,41.906-37.757,69.116H82.772 C87.452,108.308,92.396,102.824,97.607,97.612z M65.612,138.003h69.986c-9.008,31.929-14.41,67.834-15.363,105.997H32.327 C34.374,205.196,46.3,169.088,65.612,138.003z M65.612,373.997C46.3,342.912,34.374,306.804,32.327,268h87.991 c0.961,38.124,6.21,74.092,15.206,105.998H65.612z M97.607,414.386c-5.211-5.211-10.156-10.695-14.836-16.39h60.573 c4.28,11.774,9.019,22.944,14.312,33.21c6.954,13.438,14.758,25.468,23.348,35.89C149.332,455.846,120.931,437.699,97.607,414.386z M243.998,479.667c-3.746-0.196-7.469-0.477-11.164-0.86c-5.89-2.64-11.722-6.25-17.5-10.961 c-17.632-14.359-33.976-38.671-46.398-69.85h75.061V479.667z M243.998,373.997h-83.436c-9.477-31.171-15.316-67.311-16.328-105.998 h99.763V373.997z M243.998,244H144.31c1.008-38.71,6.875-74.819,16.359-105.997h83.33V244z M243.998,114.003h-74.951 c3.109-7.79,6.367-15.312,9.934-22.195c10.64-20.625,23.17-36.89,36.354-47.656c5.777-4.71,11.609-8.32,17.5-10.96 c3.695-0.382,7.417-0.664,11.164-0.859V114.003z M446.392,138.003c19.312,31.085,31.234,67.194,33.281,105.997h-87.991 c-0.961-38.124-6.21-74.092-15.21-105.997h546.392z M414.393,97.612c5.211,5.211,10.156,10.696,14.836,16.391h-60.577 c-4.281-11.773-9.023-22.945-14.312-33.21c-6.953-13.437-14.758-25.468-23.347-35.89C362.668,56.16,391.065,74.301,414.393,97.612z M267.998,32.333c3.746,0.195,7.469,0.484,11.16,0.859c5.89,2.649,11.723,6.25,17.504,10.96 c17.636,14.359,33.976,38.671,46.397,69.85h-75.061V32.333z M267.998,138.003h83.436c9.476,31.171,15.32,67.31,16.328,105.997 h-99.764V138.003z M267.998,268h99.685c-1.007,38.71-6.874,74.818-16.359,105.998h-83.326V268z M296.661,467.846 c-5.781,4.711-11.614,8.313-17.504,10.961c-3.691,0.375-7.414,0.664-11.16,0.86v-81.67h74.951 c-3.109,7.789-6.367,15.312-9.933,22.195C322.376,440.816,309.845,457.081,296.661,467.846z M414.393,414.386 c-23.336,23.328-51.764,41.476-83.459,52.725c15.187-18.375,27.835-41.905,37.757-69.115h60.538 C424.548,403.692,419.604,409.176,414.393,414.386z M446.392,373.997h-69.998c9.008-31.929,14.414-67.842,15.367-105.998h87.912 C477.626,306.804,465.704,342.912,446.392,373.997z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <a className={style.infoText} href={`https://${site}`} target="_blank">
                {site}
              </a>
            </div>
          </div>
        )}

        <p className={style.information}>{information}</p>
      </div>
      {isOpenModal && <div className={style.modalWrapper}  onClick={() => setIsOpenModal(false)}>
        <div className={style.popup} >
        {city && <span className={style.cityPopup}>{city}</span>}
          <img alt="cardImage" src={imageUrl} className={style.modalImg} />
          <p>{information}</p>
          {site && (
          <div className={style.contact}>
            <div className={style.info}>
              <svg
                height="30px"
                width="30px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="red"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      className="st0"
                      d="M255.994,0.006C114.607,0.013,0.012,114.612,0,256c0.012,141.387,114.607,255.986,255.994,255.994 C397.393,511.986,511.992,397.387,512,256C511.992,114.612,397.393,0.013,255.994,0.006z M97.607,97.612 c23.34-23.328,51.761-41.475,83.455-52.725c-15.183,18.375-27.84,41.906-37.757,69.116H82.772 C87.452,108.308,92.396,102.824,97.607,97.612z M65.612,138.003h69.986c-9.008,31.929-14.41,67.834-15.363,105.997H32.327 C34.374,205.196,46.3,169.088,65.612,138.003z M65.612,373.997C46.3,342.912,34.374,306.804,32.327,268h87.991 c0.961,38.124,6.21,74.092,15.206,105.998H65.612z M97.607,414.386c-5.211-5.211-10.156-10.695-14.836-16.39h60.573 c4.28,11.774,9.019,22.944,14.312,33.21c6.954,13.438,14.758,25.468,23.348,35.89C149.332,455.846,120.931,437.699,97.607,414.386z M243.998,479.667c-3.746-0.196-7.469-0.477-11.164-0.86c-5.89-2.64-11.722-6.25-17.5-10.961 c-17.632-14.359-33.976-38.671-46.398-69.85h75.061V479.667z M243.998,373.997h-83.436c-9.477-31.171-15.316-67.311-16.328-105.998 h99.763V373.997z M243.998,244H144.31c1.008-38.71,6.875-74.819,16.359-105.997h83.33V244z M243.998,114.003h-74.951 c3.109-7.79,6.367-15.312,9.934-22.195c10.64-20.625,23.17-36.89,36.354-47.656c5.777-4.71,11.609-8.32,17.5-10.96 c3.695-0.382,7.417-0.664,11.164-0.859V114.003z M446.392,138.003c19.312,31.085,31.234,67.194,33.281,105.997h-87.991 c-0.961-38.124-6.21-74.092-15.21-105.997h546.392z M414.393,97.612c5.211,5.211,10.156,10.696,14.836,16.391h-60.577 c-4.281-11.773-9.023-22.945-14.312-33.21c-6.953-13.437-14.758-25.468-23.347-35.89C362.668,56.16,391.065,74.301,414.393,97.612z M267.998,32.333c3.746,0.195,7.469,0.484,11.16,0.859c5.89,2.649,11.723,6.25,17.504,10.96 c17.636,14.359,33.976,38.671,46.397,69.85h-75.061V32.333z M267.998,138.003h83.436c9.476,31.171,15.32,67.31,16.328,105.997 h-99.764V138.003z M267.998,268h99.685c-1.007,38.71-6.874,74.818-16.359,105.998h-83.326V268z M296.661,467.846 c-5.781,4.711-11.614,8.313-17.504,10.961c-3.691,0.375-7.414,0.664-11.16,0.86v-81.67h74.951 c-3.109,7.789-6.367,15.312-9.933,22.195C322.376,440.816,309.845,457.081,296.661,467.846z M414.393,414.386 c-23.336,23.328-51.764,41.476-83.459,52.725c15.187-18.375,27.835-41.905,37.757-69.115h60.538 C424.548,403.692,419.604,409.176,414.393,414.386z M446.392,373.997h-69.998c9.008-31.929,14.414-67.842,15.367-105.998h87.912 C477.626,306.804,465.704,342.912,446.392,373.997z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <a className={style.infoText} href={`https://${site}`} target="_blank">
                {site}
              </a>
            </div>
          </div>
        )}
        </div>
      </div>}
    </>
  );
};

export default Card;
