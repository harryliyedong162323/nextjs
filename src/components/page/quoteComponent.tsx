"use client";

import style from '@/styles/quoteComponent.module.css'
import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
function QuoteComponent(props: any) {

  useEffect(() => {

  }, []);

  return (
    // <section className={props.data.name}>
    //   {props.data.name}:<span className="text-ellipsis">{JSON.stringify(props)}</span>
    // </section>
    <div>
      <div className={style.quote_container}>
        <div className={style.quote_nav}>
          <div className={style.quote_logo}>
            <BaseImage
              alt='图片'
              width={44}
              height={44}
              mImg={require('../../../public/assets/quote_logo.png')}
              pImg={require('../../../public/assets/quote_logo.png')}></BaseImage>
          </div>
          <div className={style.quote_menu}>
            <BaseImage
              alt='图片'
              width={40}
              height={40}
              mImg={require('../../../public/assets/quote_menu.png')}
              pImg={require('../../../public/assets/quote_menu.png')}></BaseImage>
          </div>
        </div>
        <div className={style.quote_left}>
          <div className={style.quote_left_content}>
            <div className={style.line}></div>
            <div className={style.introduce}>
              <div className={style.introduce_title}>
                Activity
              </div>
              <p>Wildmoor is an epic series of
                extremely rare and old prestige Scotch whiskies from far-flung distilleries all over Scotland</p>
              <div className={style.introduce_more}>
                Learn More
              </div>
              <div className={style.introduce_btn}>
                Sign Up For VIP Club
              </div>
            </div>
          </div>
        </div>

        <div className={style.quote_course}>
          <div className={style.quto_arrow}>
            <div className={style.arrow_prev}></div>
            <div className={style.arrow_next}></div>
          </div>
          <div className={style.quote_vector}></div>
          <div className={style.quote_list}>
            <div className={style.quote_item}>
              <div className={style.quote_position}></div>
              <div className={style.quote_box}>
                <div className={style.quote_title}>New York</div>
                <div className={style.quote_img}>
                  <BaseImage
                    alt='图片'
                    width={307}
                    height={236}
                    mImg={require('../../../public/assets/quote_img.png')}
                    pImg={require('../../../public/assets/quote_img.png')}></BaseImage>
                </div>
                <div className={style.quote_calendar}>
                  <div className={style.left}></div>
                  <div className={style.right}>2023-11-11</div>
                </div>
                <p>Bring the drinking occasion to life in a way Bring the drinking occasion</p>
                <div className={style.quote_mor}>
                  <div className={style.left}>Learn More </div>
                  <div className={style.right}></div>
                </div>
              </div>
            </div>
            <div className={style.quote_item}>
              <div className={style.quote_position}></div>
              <div className={style.quote_box}>
                <div className={style.quote_title}>New York</div>
                <div className={style.quote_img}>
                  <BaseImage
                    alt='图片'
                    width={307}
                    height={236}
                    mImg={require('../../../public/assets/quote_img.png')}
                    pImg={require('../../../public/assets/quote_img.png')}></BaseImage>
                </div>
                <div className={style.quote_calendar}>
                  <div className={style.left}></div>
                  <div className={style.right}>2023-11-11</div>
                </div>
                <p>Bring the drinking occasion to life in a way Bring the drinking occasion</p>
                <div className={style.quote_mor}>
                  <div className={style.left}>Learn More </div>
                  <div className={style.right}></div>
                </div>
              </div>
            </div>
            <div className={style.quote_item}>
              <div className={style.quote_position}></div>
              <div className={style.quote_box}>
                <div className={style.quote_title}>New York</div>
                <div className={style.quote_img}>
                  <BaseImage
                    alt='图片'
                    width={307}
                    height={236}
                    mImg={require('../../../public/assets/quote_img.png')}
                    pImg={require('../../../public/assets/quote_img.png')}></BaseImage>
                </div>
                <div className={style.quote_calendar}>
                  <div className={style.left}></div>
                  <div className={style.right}>2023-11-11</div>
                </div>
                <p>Bring the drinking occasion to life in a way Bring the drinking occasion</p>
                <div className={style.quote_mor}>
                  <div className={style.left}>Learn More </div>
                  <div className={style.right}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={style.quote_small}>
        <div className={style.quote_small_nav}>
          <div className={style.logo}>
            <BaseImage
              alt='图片'
              width={58}
              height={58}
              mImg={require('../../../public/assets/info_logo.png')}
              pImg={require('../../../public/assets/info_logo.png')}></BaseImage>
          </div>
          <div className={style.menu}>
            <BaseImage
              alt='图片'
              width={42}
              height={30}
              mImg={require('../../../public/assets/info_menu.png')}
              pImg={require('../../../public/assets/info_menu.png')}></BaseImage>
          </div>
        </div>
        <div className={style.quote_small_content}>

          <div className={style.quote_small_title}>
            ACTIVITIES
          </div>
          <p>Wildmoor is an epic series of extremely rare and old prestige Scotch whiskies from far-flung distilleries all over Scotland</p>
          <div className={style.quote_small_next}></div>

        </div>
        <div className={style.quote_small_course}>
          <div className={style.line}></div>
          <div className={style.quote_small_list}>
            <div className={style.quote_small_item}>
              <div className={style.position}></div>
              <div className={style.box}>
                <div className={style.title}>New York</div>
                <div className={style.img}>
                  <BaseImage
                    alt='图片'
                    width={260}
                    height={180}
                    mImg={require('../../../public/assets/small-item.png')}
                    pImg={require('../../../public/assets/small-item.png')}></BaseImage>

                </div>
                <div className={style.calendar}>
                  <div className={style.left}></div>
                  <div className={style.right}>2023-11-11</div>
                </div>
                <p>
                  Bring the drinking occasion to life in a way Bring the drinking occasion
                </p>
                <div className={style.small_learn}>
                  <div className={style.left}>Learn More </div>
                  <div className={style.right}></div>
                </div>
              </div>
            </div>
            <div className={style.quote_small_item}>
              <div className={style.position}></div>
              <div className={style.box}>
                <div className={style.title}>New York</div>
                <div className={style.img}>
                  <BaseImage
                    alt='图片'
                    width={260}
                    height={180}
                    mImg={require('../../../public/assets/small-item.png')}
                    pImg={require('../../../public/assets/small-item.png')}></BaseImage>

                </div>
                <div className={style.calendar}>
                  <div className={style.left}></div>
                  <div className={style.right}>2023-11-11</div>
                </div>
                <p>
                  Bring the drinking occasion to life in a way Bring the drinking occasion
                </p>
                <div className={style.small_learn}>
                  <div className={style.left}>Learn More </div>
                  <div className={style.right}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className={style.quote_btn}>
          Sign Up For VIP Club
        </div>
        <div className={style.quto_next}>
          <div className={style.next}></div>
        </div>
      </div>
    </div>
  );
}

export default QuoteComponent;
