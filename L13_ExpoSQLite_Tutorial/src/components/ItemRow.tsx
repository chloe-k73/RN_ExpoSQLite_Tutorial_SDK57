import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  name: string;
  quantity: number;
  onEdit: () => void;
  onDelete: () => void;
};

const ItemRow: React.FC<Props> = ({ name, quantity, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      {/* Left side: Item info */}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.qty}>Qty: {quantity}</Text>
      </View>
      {/* Right side: Action icons */}
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={onEdit}
          accessibilityRole="button"
          accessibilityLabel={`Edit ${name}`}
          style={styles.iconButton}
        >
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onDelete}
          accessibilityRole="button"
          accessibilityLabel={`Delete ${name}`}
          style={styles.iconButton}
        >
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  info: { flexShrink: 1 },
  name: { fontSize: 16, fontWeight: "600" },
  qty: { fontSize: 14, color: "#666", marginTop: 2 },
  actions: { flexDirection: "row", gap: 8 },
  iconButton: {
    padding: 4,
  },
  editButton: {
    color: "#007BFF",
    fontSize: 15,
  },
  deleteButton: {
    color: "#D32F2F",
    fontSize: 15,
  },
});
