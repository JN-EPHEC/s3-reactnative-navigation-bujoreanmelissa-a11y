import React from "react";
import { View, Text, Pressable, StyleSheet, Alert } from "react-native";

export default function SettingsScreen() {
  const handleChangePassword = () => {
    alert("Modifier le mot de passe");
  };
  const handleLogout = () => {
    alert("Déconnexion effectuée");
  };
  const handleDeleteAccount = () => {
    alert("Compte supprimé");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Paramètres</Text>
      <View style={styles.buttonBox}>
        <Pressable style={styles.button} onPress={handleChangePassword} accessibilityRole="button">
          <Text style={styles.buttonText}>Modifier le mot de passe</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleLogout} accessibilityRole="button">
          <Text style={styles.buttonText}>Se déconnecter</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.deleteButton]} onPress={handleDeleteAccount} accessibilityRole="button">
          <Text style={styles.buttonText}>Supprimer mon compte</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 22, fontWeight: "bold", marginBottom: 32 },
  buttonBox: { width: "100%", alignItems: "center" },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    marginBottom: 16,
    width: 240,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#d9534f",
  },
});
