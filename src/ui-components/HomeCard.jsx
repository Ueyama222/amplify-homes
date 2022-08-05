/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="895px"
      height="848px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="40px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></View>
      <Image
        position="absolute"
        top="8.96%"
        bottom="41.39%"
        height="49.65%"
        left="28.83%"
        right="28.83%"
        width="42.35%"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="70px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="82.03125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="68.99%"
        bottom="20.99%"
        left="11.84%"
        right="71.84%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Title"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="70px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="82.03125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="79.01%"
        bottom="10.97%"
        left="11.84%"
        right="44.02%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Description&#xD;"
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </View>
  );
}
