import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {images} from '../constans';

const Two_B = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [starts, setStart] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ]);
  return (
    <View
      style={{
        width: screenWidth,
        height: screenHeight,
        overflow: 'hidden',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          marginTop: screenHeight * 0.026,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: screenHeight * 0.05,
        }}>
        <Image
          style={{
            width: screenHeight * 0.1,
            height: screenHeight * 0.1,
            overflow: 'hidden',
            marginHorizontal: screenWidth * 0.05,
          }}
          resizeMode="cover"
          source={images.usb}
        />
        <Text
          style={{
            textAlign: 'left',
            fontSize: 16,
            color: '#000',
            fontWeight: 'bold',
            width: screenWidth * 0.7,
            marginRight: 5,
          }}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: '#000',
          fontFamily: 'Roboto-Bold',
          fontWeight: '700',
          fontSize: 18,
          alignSelf: 'center',
          marginVertical: screenHeight * 0.03,
        }}>
        Cực kỳ hài lòng
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        {starts.map((item, index) => (
          <Image
            key={index}
            style={{
              height: screenHeight * 0.06,
              width: screenHeight * 0.06,
              marginHorizontal: 5,
            }}
            resizeMode="cover"
            source={images.Star}
          />
        ))}
      </View>

      <View
        style={{
          marginTop: screenHeight * 0.04,
          height: screenHeight * 0.11,
          width: screenWidth * 0.78,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          borderWidth: 2,
          borderColor: '#1511eb',
        }}>
        <Image
          style={{
            height: 32,
            width: 39,
            overflow: 'hidden',
            marginHorizontal: 15,
          }}
          resizeMode="cover"
          source={images.camera}
        />
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontWeight: '700',
            fontSize: 18,
            color: '#000',
          }}>
          Thêm hình ảnh
        </Text>
      </View>

      <View
        style={{
          marginTop: screenHeight * 0.03,
          height: screenHeight * 0.3,
          width: screenWidth * 0.78,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 8,
          borderWidth: 2,
          borderColor: '#c4c4c4',
        }}>
        <Text
          style={{
            marginHorizontal: 15,
            marginVertical: 10,
            textAlign: 'left',
            fontFamily: 'Roboto-Bold',
            fontWeight: '700',
            color: '#c4c4c4',
            fontSize: 18,
          }}>
          Hãy chia sẻ những điều bạn thích về sản phẩm
        </Text>
        <Text
          style={{
            position: 'absolute',
            bottom: 4,
            right: 4,
            fontSize: 12,
            fontWeight: '700',
            fontFamily: 'Roboto-Bold',
            color: '#000',
            textAlign: 'center',
          }}>
          https://meet.google.com/nsj-ojwi-xpp
        </Text>
      </View>

      <View
        style={{
          marginVertical: screenHeight * 0.03,
          backgroundColor: '#0d5db6',
          width: screenWidth * 0.78,
          height: screenHeight * 0.07,
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 5,
          borderColor: '#1511eb',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Roboto-Bold',
            fontWeight: '700',
          }}>
          Gửi
        </Text>
      </View>
    </View>
  );
};

export default Two_B;

const styles = StyleSheet.create({});
