import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { icons } from '@/constants/icons';

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%] p-1"> 
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://placeholder.co/600x400/1a1a1a/ffffff.png'
          }}
          className="w-full h-48 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm font-bold text-left mt-2 w-full"
        numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4"/>
          <Text className="text-xs text-white font-bold">{(vote_average / 2).toFixed(1)}</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-gray-300 font-medium mt-1">
            {release_date?.split('-')[0]}  {/* Fixed: Extracts the year */}
          </Text>
          {/* <Text className="text-xs font-medium mt-1 text-gray-300 uppercase">
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
