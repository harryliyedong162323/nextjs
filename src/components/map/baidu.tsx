"use client";


import React, { useEffect, useState,useRef } from "react";

import {MapApiLoaderHOC } from 'react-bmapgl';

import geojsonData from '@/utils/geojson';


function addFillLayer(map:any) {

    let fillLayer = new BMapGL.FillLayer({
        crs: 'GCJ02',
        enablePicked: true,
        autoSelect: true,
        pickWidth: 30,
        pickHeight: 30,
        border: true,
        style: {
            pattern: true,
            //patternUrl: img,
            // patternMapping: ['match', ['get', 'name'], '海淀区', '4, 132, 120, 120', '朝阳区', '132, 4, 120, 120', '通州区', '132, 4, 120, 120', '丰台区', '4, 4, 120, 120', '房山区', '4, 4, 120, 120', '132, 132, 120, 120'],
            patternScale: .2,
            patternOffset: '0, 0',
            // fillColor: ['case', ['boolean', ['feature-state', 'picked'], false], 'red', 'orange'],
            fillOpacity: .3,
            strokeWeight: 1,
            strokeColor: 'red',
        }
    });

    fillLayer.addEventListener('click', function (e:any) {
        if (e.value.dataIndex !== -1 && e.value.dataItem) {
            console.log('click', e.value.dataItem);
            // 使用样式配置，实现单选或多选效果
            // this.updateState(e.value.dataIndex, { picked: true }, true)
        }
    })

    fillLayer.addEventListener('mousemove', function (e:any) {
        if (e.value.dataIndex !== -1 && e.value.dataItem) {
            console.log('mousemove', e.value.dataItem);
        }
    })

    map.addNormalLayer(fillLayer);
    fillLayer.setData(geojsonData);

}

declare const BMapGL: any;




const BaiduMap = (props: any) => {
    const map_anchor = "https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/map_anchor.png?q-sign-algorithm=sha1&q-ak=AKID0r9CgQJfm4cblGc_Lne0hY2YfYqBtmAaNUoQ-m6BBlQsEA4itgO8IrTnPCwO6hlv&q-sign-time=1702985009;1702988609&q-key-time=1702985009;1702988609&q-header-list=host&q-url-param-list=ci-process&q-signature=6871bb1c63f62bf46f0511787d76c7395c4d47fb&x-cos-security-token=xr6GD1d3URN8BeHG2ZdvliyaHJ6Uu2Kaa0f5ee9bafefbba4f5086fdf6fd2c95bBu26YGerqgjX9K2Y8JJTXsvnw1psirQedR0COerCnRx41oeMZ09lxjA4Mqk1rQqD8svZLmP-QQCM6hozGREjVr5rivf1ZIawYfKioJPSUcOgOgvI9T5cc-YrpWQZnGQXikS37hKZHgNmS_1ibjFoiZl-0U1FTQn9yseo6Eg-x6__ar1xCjDcwOQM_Kp09JXp&ci-process=originImage";
    const [map,setMap] = useState(BMapGL);
    const mapContainerRef = useRef(null);
    const [shouldUpdateMap, setShouldUpdateMap] = useState(false); // 控制是否更新地图
    const {info,location,zoomIn,zoomOut} = props;

    const point = {
        lng: -73.868851,
        lat: 40.843036
    }

    const customIcon = new BMapGL.Icon(map_anchor, new BMapGL.Size(53, 75), {
        // 设置图标偏移量
        offset: new BMapGL.Size(0, 0),
        // 设置图标尺寸
        imageSize: new BMapGL.Size(53, 75)
    });

    // let map:any = null;

    useEffect(() => {
        console.log(location)
        if(location){
            map.clearOverlays();
            map.centerAndZoom(point, 10);
            map.addOverlay(new BMapGL.Marker(point, {
                title: '纽约',
                icon:customIcon,
            }))
        }

    },[location])
    useEffect(() => {

        if(zoomIn){
            console.log(zoomIn)
            map&&map?.zoomIn();
        }


    },[zoomIn])

    useEffect(() => {


        if(zoomOut){
            console.log(zoomOut)
            map&&map?.zoomOut();

        }

    },[zoomOut])
        useEffect(() => {

        // let mapInstance = new BMapGL.Map(mapContainerRef.current); // 创建地图实例



        if(info?.point.lng || info?.point.lat){
            map.clearOverlays();
            console.log(info.point)
            map.centerAndZoom(info.point, info.zoom);

            map.addOverlay(new BMapGL.Marker(info.point, {
                title: info.name,
                icon:customIcon,
            }))

        }


    },[map,info])


    useEffect(() => {

        if (!shouldUpdateMap) {
            // map = new BMapGL.Map(mapContainerRef.current); // 创建地图实例

            const mapInstance = new BMapGL.Map('mapContainer', {
                enableDblclickZoom: false,

                displayOptions: {
                    building: false
                }
            });


            const customIcon = new BMapGL.Icon(map_anchor, new BMapGL.Size(53, 75), {
                // 设置图标偏移量
                offset: new BMapGL.Size(0, 0),
                // 设置图标尺寸
                imageSize: new BMapGL.Size(53, 75)
            });

            mapInstance.centerAndZoom(new BMapGL.Point(-73.868851,40.843036), 11);
            mapInstance.addOverlay(new BMapGL.Marker(point, {
                title: '纽约',
                icon:customIcon,
            }))
            mapInstance.disableScrollWheelZoom();
            // mapInstance.disableDragging();
            // addFillLayer(mapInstance);
            // let mapInstance = new BMapGL.Map(mapContainerRef.current); // 创建地图实例

            setMap(mapInstance)

            // map.setSize(new BMapGL.Size(mapSize.width, mapSize.height));



            // mapInstance.centerAndZoom(new BMapGL.Point(-73.868851,40.843036), 11);

            // setTimeout(()=>{
            //     map.centerAndZoom(point, 10);
            //     map.addOverlay(new BMapGL.Marker(point, {title: '纽约'}))
            // },3000)




            // if(location){
            //     map.centerAndZoom(point, 10);
            //     map.addOverlay(new BMapGL.Marker(point, {title: '纽约'}))
            // }
            //
            // if(zoom && (info.point.lng || info.point.lat)){
            //     map.centerAndZoom(info.point, zoom);
            // }






            // console.log(geojsonData);


            // var img = "//mapopen-pub-jsapigl.bj.bcebos.com/svgmodel/fill_pattern.png"

            // 添加图层



            setShouldUpdateMap(true); // 重置更新状态

            // const bd = new BMapGL.Boundary();
            // bd.get('日本', function (rs:any) {
            //     // @ts-ignore
            //     const hole = new BMapGL.Polygon(rs.boundaries, {
            //         fillColor: '#000',
            //         fillOpacity: 0.2
            //     });
            //     map.addOverlay(hole);
            // });


            // const myGeo = new BMapGL.Geocoder();
            // // 将地址解析结果显示在地图上，并调整地图视野
            // myGeo.getPoint('宝山区', function(point:string){
            //     console.log(point)
            //     if(point){
            //         map.centerAndZoom(point, 8);
            //         // map.addOverlay(new BMapGL.Marker(point, {title: '东京'}))
            //     }else{
            //         alert('您选择的地址没有解析到结果！');
            //     }
            // }, '上海')
            // 监听窗口的 resize 事件


        }

        // return () => {
        //     map.clearOverlays();
        //
        // };

    },[map,shouldUpdateMap])


    // useEffect(() => {
    //
    //
    //     // setMap(new BMapGL.Map('mapContainer', {
    //     //     enableDblclickZoom: false,
    //     //     displayOptions: {
    //     //         building: false
    //     //     }
    //     // }))
    //
    //
    //
    //
    // }, []);

    // map,info,zoom,location  ref={mapContainerRef}
    return (
        <div id="mapContainer" className="h-full">

        </div>
    );


};

export default MapApiLoaderHOC({ak: '8h4GSgIS4KVrFzhrf7OXupDVP6d9ebsY'})(BaiduMap);
