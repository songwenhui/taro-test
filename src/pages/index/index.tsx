import { View, Map, Text } from '@tarojs/components'

import './index.scss'

const Index = () => {

  const regionChange = (e) => {
    console.log('e ---> ', e);
  }

  return (
    <View className='index'>
      <Map
        id='map'
        latitude={40.030609}
        longitude={116.355688}
        enable-scroll
        scale={12}
        onRegionChange={regionChange}
        // @ts-ignore
        bindRegionChange={regionChange}
        // @ts-ignore
        onBegin={regionChange}
        onEnd={regionChange}
      ></Map>
    </View>
  )
}

export default Index

