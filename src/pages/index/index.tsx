import React, { useState, useEffect } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Map, Textarea } from "@tarojs/components";

import "./index.scss";

const Index = () => {
  const [mapCtx, setMapCtx] = useState<Taro.MapContext>();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {});

  useDidShow(() => {
    if (Taro.getEnv() !== Taro.ENV_TYPE.WEB) {
      const ctx = Taro.createMapContext("map") as Taro.MapContext;
      setMapCtx(ctx);
    }
    setTimeout(() => {
      const _center = { lng: 116.35297035953413, lat: 40.014460424314755 };
      console.log("_center ---> ", _center);
      setCenter(_center);
    }, 5000);
  });

  const regionChange = (e) => {
    console.log("e ---> ", e);
    if (e.type === "end") {
      mapCtx?.getCenterLocation({
        success: (data) => {
          const { longitude, latitude } = data;
          console.log("longitude, latitude ---> ", longitude, latitude);
        },
        fail: (err) => {
          console.log("err ---> ", err);
        },
      });
    }
  };

  return (
    <View className="index">
      {/* <Map
        id="map"
        latitude={center?.lat || 40.030609}
        longitude={center?.lng || 116.355688}
        enable-scroll
        scale={12}
        onRegionChange={regionChange}
      ></Map> */}
      <View className="container">
        <Textarea className="textArea" placeholderClass="placeholder" />
      </View>
    </View>
  );
};

export default Index;
