"use client";

import style from '@/styles/textBlockComponent.module.css'
import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
function TextBlockComponent(props: any) {

  useEffect(() => {

  }, []);
  console.log(props)
  return (
    // <section className={props.data.name}>
    //   {props.data.name}:<span className="text-ellipsis">{JSON.stringify(props)}</span>
    // </section>
    <div>
      <div className={style.more_container}>
        {/* <img src="../../assets/more_bgc.png" alt="" /> */}
        <div className={style.more_nav}>
          <div className={style.morer_logo}>
            <BaseImage
              alt='图片'
              width={44}
              height={44}
              mImg={require('../../../public/assets/header_logo.png')}
              pImg={require('../../../public/assets/header_logo.png')}></BaseImage>
          </div>
          <div className={style.more_menu}>
            <BaseImage
              alt='图片'
              width={40}
              height={40}
              mImg={require('../../../public/assets/more_menu.png')}
              pImg={require('../../../public/assets/more_menu.png')}></BaseImage>
          </div>
        </div>

        <div className={style.explore_more}>
          <div className={style.exlore_more_introduce}>
            <div className={style.introduce_top}>
              <div className={style.left}>
                <p>40</p>
                <div>YEARS
                  <p>OLD</p>
                </div>
              </div>
              <div className={style.bar}></div>
              <div className={style.right}>
                <p>BLACK</p>
                <p>MOUNTAIN</p>
              </div>
            </div>
            <div className={style.introduce_middle}>
              <p>A deep and intense blend of grain and Highland malts enhanced by the addition of some ghosted stock from the reserve. Aged in American and European Oak, finished in PX Cask.</p>
              <p>Inspired by the great dark mountain peaks of Scotland’s north. The Summit of the range.</p>
            </div>
          </div>
          <div className={style.learn_buy}>
            Explore More
          </div>
          <div className={style.more_product}>
            <BaseImage
              alt='图片'
              width={556}
              height={556}
              mImg={require('../../../public/assets/more_item.png')}
              pImg={require('../../../public/assets/more_item.png')}></BaseImage>

          </div>
        </div>
        <div className={style.more_bottom}>
          <div className={style.more_list}>
            <div className={style.list_item}>
              <div className={style.code}>
                23
              </div>
              <div className={style.img}>
                <BaseImage
                  alt='图片'
                  width={80}
                  height={165}
                  mImg={require('../../../public/assets/list_item.png')}
                  pImg={require('../../../public/assets/list_item.png')}></BaseImage>

              </div>
              <div className={style.prod}>
                <p>ANCIENT</p>
                <p>MOORLAND</p>
              </div>
            </div>
            <div className={style.list_item}>
              <div className={style.code}>
                23
              </div>
              <div className={style.img}>
                <BaseImage
                  alt='图片'
                  width={80}
                  height={165}
                  mImg={require('../../../public/assets/list_item.png')}
                  pImg={require('../../../public/assets/list_item.png')}></BaseImage>
              </div>
              <div className={style.prod}>
                <p>ANCIENT</p>
                <p>MOORLAND</p>
              </div>
            </div>
            <div className={style.list_item}>
              <div className={style.code}>
                23
              </div>
              <div className={style.img}>
                <BaseImage
                  alt='图片'
                  width={80}
                  height={165}
                  mImg={require('../../../public/assets/list_item.png')}
                  pImg={require('../../../public/assets/list_item.png')}></BaseImage>
              </div>
              <div className={style.prod}>
                <p>ANCIENT</p>
                <p>MOORLAND</p>
              </div>
            </div>
            <div className={style.list_item}>
              <div className={style.code}>
                23
              </div>
              <div className={style.img}>
                <BaseImage
                  alt='图片'
                  width={80}
                  height={165}
                  mImg={require('../../../public/assets/list_item.png')}
                  pImg={require('../../../public/assets/list_item.png')}></BaseImage>
              </div>
              <div className={style.prod}>
                <p>ANCIENT</p>
                <p>MOORLAND</p>
              </div>
            </div>
            <div className={style.list_item}>
              <div className={style.code}>
                23
              </div>
              <div className={style.img}>
                <BaseImage
                  alt='图片'
                  width={80}
                  height={165}
                  mImg={require('../../../public/assets/list_item.png')}
                  pImg={require('../../../public/assets/list_item.png')}></BaseImage>
              </div>
              <div className={style.prod}>
                <p>ANCIENT</p>
                <p>MOORLAND</p>
              </div>
            </div>

          </div>
          <div className={style.arrow}>
            <div className={style.arrow_prev}></div>
            <div className={style.arrow_next}></div>
          </div>
        </div>
      </div>
      <div className={style.info_small}>
        <div className={style.info_small_bgc}>
          <img src="../../assets/info_small.png" alt="logo" />
          <div className={style.info_small_nav}>
            <div className={style.info_log}></div>
            <div className={style.info_menu}></div>
          </div>
          <div className={style.info_drink}>
            <BaseImage
              alt='图片'
              width={320}
              height={320}
              mImg={require('../../../public/assets/drink.png')}
              pImg={require('../../../public/assets/drink.png')}></BaseImage>

          </div>

        </div>
        <div className={style.info_title}>
          <div className={style.info_left}>
            <p className={style.num}>23</p>
            <div>
              YEARS
              <p>OLD</p>
            </div>
          </div>
          <div className={style.info_line}></div>
          <div className={style.info_right}>
            <p>ANCIENT</p>
            <p>MOORLAND</p>
          </div>
        </div>
        <div className={style.info_produce}>
          <p>Inspired by the great dark mountain peaks of</p>
          <p>Scotland’s north. The Summit of the range.</p>
        </div>
        <div className={style.info_more}>
          <div className={style.btn}>
            Learn More
          </div>
        </div>
        <div className={style.info_img}>
          <div className={style.img_item}>
            <div className={style.img}>
              <BaseImage
                alt='图片'
                width={80}
                mImg={require('../../../public/assets/small_drink.png')}
                pImg={require('../../../public/assets/small_drink.png')}></BaseImage>

            </div>
            <div className={style.in}>
              Ancient Moorland
            </div>
          </div>
          <div className={style.img_item}>
            <div className={style.img}>
              <BaseImage
                alt='图片'
                width={80}
                mImg={require('../../../public/assets/small_drink.png')}
                pImg={require('../../../public/assets/small_drink.png')}></BaseImage>

            </div>
            <div className={style.in}>
              Ancient Moorland
            </div>
          </div>
          <div className={style.img_item}>
            <div className={style.img}>
              <BaseImage
                alt='图片'
                width={80}
                mImg={require('../../../public/assets/small_drink.png')}
                pImg={require('../../../public/assets/small_drink.png')}></BaseImage>

            </div>
            <div className={style.in}>
              Ancient Moorland
            </div>
          </div>
          <div className={style.img_item}>
            <div className={style.img}>
              <BaseImage
                alt='图片'
                width={80}
                mImg={require('../../../public/assets/small_drink.png')}
                pImg={require('../../../public/assets/small_drink.png')}></BaseImage>

            </div>
            <div className={style.in}>
              Ancient Moorland
            </div>
          </div>
        </div>
        <div className={style.info_next}>
          <div className={style.next}>
            <BaseImage
              alt='图片'
              width={56}
              height={56}
              mImg={require('../../../public/assets/sma_next.png')}
              pImg={require('../../../public/assets/sma_next.png')}></BaseImage>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBlockComponent;
