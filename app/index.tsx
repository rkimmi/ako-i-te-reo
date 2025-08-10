import { Text, View, TouchableOpacity, Modal, TextInput } from "react-native";
import { useState } from "react";
import { useServices } from "./services/ServiceProvider";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const { openAiService } = useServices();

  const openAddNewCardModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const generateCard = () => {
    const res = openAiService.generateResponse(inputText);
    console.log(res);
    closeModal();
  };

  return (
    <View>
      <TouchableOpacity onPress={openAddNewCardModal}>
        <Text>Add</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: "80%",
            }}
          >
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 10,
                borderRadius: 5,
                marginBottom: 20,
                minHeight: 100,
              }}
              placeholder="Enter text here..."
              value={inputText}
              onChangeText={setInputText}
              multiline={true}
              textAlignVertical="top"
            />
            <TouchableOpacity
              onPress={generateCard}
              style={{
                backgroundColor: "#007AFF",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Generate card
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={closeModal}
              style={{
                backgroundColor: "#007AFF",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    </View>
  );
}
