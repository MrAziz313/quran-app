import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  LinearGradient,
  Modal,
  Pressable,
  Image,
} from "react-native";

const SurahIndex = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const menuItems = [
    {
      id: 1,
      title: "Resume",
      onPress: () => console.log("Resume pressed"),
    },
    {
      id: 2,
      title: "Juz Index",
      onPress: () => navigation.navigate("JuzIndex"),
    },
    {
      id: 3,
      title: "Surah Index",
      onPress: () => navigation.navigate("SurahList"),
    },
    {
      id: 4,
      title: "Go to page #",
      onPress: () => console.log("Go to page pressed"),
    },
    {
      id: 5,
      title: "Bookmarks",
      onPress: () => console.log("Bookmarks pressed"),
    },
    {
      id: 6,
      title: "Settings",
      onPress: () => console.log("Settings pressed"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Holy Quran</Text>
          <TouchableOpacity style={styles.menuIcon}>
            <Text style={styles.menuText}>⋮</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <View style={styles.islamicFrame}>
            {/* Decorative corners */}
            <View style={styles.cornerDecoration}>
              <Text style={styles.decorativeText}>✦</Text>
            </View>
            <View style={[styles.cornerDecoration, styles.topRight]}>
              <Text style={styles.decorativeText}>✦</Text>
            </View>
            <View style={[styles.cornerDecoration, styles.bottomLeft]}>
              <Text style={styles.decorativeText}>✦</Text>
            </View>
            <View style={[styles.cornerDecoration, styles.bottomRight]}>
              <Text style={styles.decorativeText}>✦</Text>
            </View>

            <View style={styles.menuContainer}>
              {menuItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.menuButton}
                  onPress={item.onPress}
                  activeOpacity={0.8}
                >
                  <Text style={styles.menuButtonText}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
       backgroundColor:"goldenrod",
          padding: 10,
          alignItems: "center",
          borderRadius: 10,
          margin: 10,
          marginBottom: 70,
        }}
      >
        {/* Pressable Text */}
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={{ color: "white", fontSize: 16 }}>
            <Text style={{ fontSize: 18 }}>Developer: </Text> Hafiz Aziz
          </Text>
        </Pressable>

        {/* Modal (Popup Card) */}
        <Modal
          transparent
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.card}>
              <Image
                source={require("./aziz.jpeg")}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.name}>Hafiz Aziz</Text>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={{ color: "white" }}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      {/* <View
        style={{
          padding: 10,
          alignItems: "center",
          backgroundColor: "goldenrod",
          borderRadius: 10,
          margin: 10,
          marginBottom: 70,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          <Text style={{ fontSize: 18 }}>Developer: </Text> Hafiz Aziz
        </Text>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(120, 144, 150, 0.3)",
    // backgroundColor: "#87CEEB", // Sky blue
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: "linear-gradient(135deg, #87CEEB 0%, #ADD8E6 100%)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 15,
    backgroundColor: "#012d46",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  menuIcon: {
    padding: 5,
  },
  menuText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  islamicFrame: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 20,
    padding: 25,
    borderWidth: 6,
    borderColor: "#1E3A8A",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 15,
    position: "relative",
  },
  cornerDecoration: {
    position: "absolute",
    top: -10,
    left: -10,
    width: 30,
    height: 30,
    backgroundColor: "#012d46",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  topRight: {
    top: -10,
    right: -10,
    left: "auto",
  },
  bottomLeft: {
    bottom: -10,
    top: "auto",
  },
  bottomRight: {
    bottom: -10,
    right: -10,
    top: "auto",
    left: "auto",
  },
  decorativeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  menuContainer: {
    gap: 15,
  },
  menuButton: {
    backgroundColor: "#012d46",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  menuButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default SurahIndex;
