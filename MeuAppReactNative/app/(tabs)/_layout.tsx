import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Pressable } from 'react-native';

import Colors from '@/constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3; // Total de páginas no seu aplicativo

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <Pressable onPress={handlePreviousPage}>
        <FontAwesome name="arrow-left" size={25} color={Colors.light.text} />
      </Pressable>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {[...Array(totalPages)].map((_, index) => (
          <FontAwesome
            key={index}
            name={index <= currentPage ? 'circle' : 'circle-o'}
            size={15}
            color={Colors.light.text}
            style={{ marginHorizontal: 5 }}
          />
        ))}
      </View>

      <Pressable onPress={handleNextPage}>
        <FontAwesome name="arrow-right" size={25} color={Colors.light.text} />
      </Pressable>
    </View>
  );
}
