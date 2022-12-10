import React, {FC, useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ImageRowItemProps {
  imgUri: string;
  imgName: string;
  imgAuthor: string;
  onPress(): void;
}

export const ImageRowItem: FC<ImageRowItemProps> = props => {
  const ImgNameIfHasName = useMemo(() => {
    if (props.imgName) return <Text style={styles.title}>{props.imgName}</Text>;
  }, [props.imgName]);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: props.imgUri}} style={styles.img} />
      </View>

      <View style={styles.infoContainer}>
        {ImgNameIfHasName}

        <Text>{`@${props.imgAuthor}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray',
  },
  imgContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#9AA0A5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  img: {
    width: 60,
    height: 60,
  },
  infoContainer: {
    justifyContent: 'space-around',
  },
  title: {
    fontWeight: '500',
  },
});
