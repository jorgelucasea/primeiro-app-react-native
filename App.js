import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import FotoPerfil from './assets/minha-foto.png';
import Nature from './assets/natureza.jpeg';

export default function App() {
  return (
    <View style={styles.container}>
      
        <Image source={Nature} style={styles.img}/>
      
        <View style={styles.box}>
          <Image source={FotoPerfil} style=
          {styles.foto}/>
          <Text style={styles.titulo}>Jorge Lucas Elias Alves</Text>
          <Text style={styles.texto}>Estudando Análise e Desenvolvimento de Sistemas. Quero me tornar um desenvolvedor FullStack, especializado em JavaScript, HTML, CSS, React Native e Python.</Text>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  img: {
    height: 425,
    width:400,
    marginBottom: 20
  },
  box: {
    alignItems: 'center'
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  texto: {
    textAlign: 'center'
  }
});
