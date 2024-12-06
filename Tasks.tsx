import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

const HomePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State for selected employee
  const [employeeForm, setEmployeeForm] = useState({ name: '', position: '', image: '', email: '', phone: '' }); // State for employee form
  const [employees, setEmployees] = useState([ // List of employees
    { id: '1', name: 'CHRISTIAN JAQUE NEMARIA', position: 'Front-end/Back-end Web Developer', image: 'https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/453221581_1940739126438303_1191582821244208440_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeERbYkC0gGRXbRc7wNAoT_GN7i4HzVd7rs3uLgfNV3uuyZfiiaYpos7-Na7GQ3mmx-osS5qttbbYGHYg65_potH&_nc_ohc=JRQCsAg_zDsQ7kNvgFg5UWq&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=ANNSP282AMRJ6G3dKAWsXX7&oh=00_AYB4H5LZGwnoEeATWYmlhpD5G3FcXJBxCqrbvyAdqV5DGA&oe=6754418E' },
    { id: '2', name: 'JAYRALD ANGCAP', position: 'Front-end/Back-end Web Developer', image: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/399586130_255334174184568_1965227539431390673_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE0bXjBEAQtvvoI9WLfPcsezb8v7KNg2cjNvy_so2DZyNY8SllXOptTVN639-RRIep9up4B4AXByfr0YtZOYTzs&_nc_ohc=05neeTwkfvwQ7kNvgFKs01p&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=AYi5pvuAoin2Pfb-2BORLKB&oh=00_AYAsaSQ_D8W4p93xuJPWW94OLCeGutikVaO_edvrv-tPCg&oe=675413D8' },
    { id: '3', name: 'ALHAIDA ULA', position: 'Web Designer', image: 'https://pics.craiyon.com/2023-09-25/103d99738957493a8e279bced4120860.webp' },
    { id: '4', name: 'JUSTINE ANTHONETE DAAROL', position: 'Web Designer', image: 'https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/361310163_661944549315839_9207275087641619129_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEeDAvJqexKdsPU3HkUMArd4WZpP_PjluXhZmk_8-OW5QleqCLqJq0vNiJizVoPOcC-QKk0_y9201Z2bgAKEdAJ&_nc_ohc=sZArt45eGZgQ7kNvgH9eAmY&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=A-ciFbxj4evxsN0zdm7Mvvc&oh=00_AYClJzqsT3bqZDh-ZkpU2dgc5Tx4x4Cxaux7k3odupgPbQ&oe=67542016' },
  ]);

  // Handle employee item click
  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
  };

  // Handle form input change
  const handleFormChange = (field, value) => {
    setEmployeeForm({ ...employeeForm, [field]: value });
  };

  // Handle form submission
  const handleFormSubmit = () => {
    const newEmployee = { id: String(employees.length + 1), ...employeeForm };
    setEmployees([...employees, newEmployee]); // Add new employee to the list
    setEmployeeForm({ name: '', position: '', image: '', email: '', phone: '' }); // Reset the form
    setModalVisible(false); // Close the modal
  };

  // Handle delete employee
  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id)); // Remove the employee from the list
  };

  // If no employee is selected, default to the first employee
  const currentEmployee = selectedEmployee || employees[0];


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>Group2MAD</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.mainText}>Employee Management System</Text>

        {/* Employee Card Section */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image source={{ uri: currentEmployee.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{currentEmployee.name}</Text>
              <Text style={styles.cardDescription}>{currentEmployee.position}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteEmployee(currentEmployee.id)} // Delete employee
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal Button for Adding Employee */}
        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.addButtonText}>Add Employee</Text>
        </TouchableOpacity>

        {/* Modal Component for Employee Form */}
        {modalVisible && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Add Employee</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  value={employeeForm.name}
                  onChangeText={(text) => handleFormChange('name', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Position"
                  value={employeeForm.position}
                  onChangeText={(text) => handleFormChange('position', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Image URL"
                  value={employeeForm.image}
                  onChangeText={(text) => handleFormChange('image', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={employeeForm.email}
                  onChangeText={(text) => handleFormChange('email', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Phone"
                  value={employeeForm.phone}
                  onChangeText={(text) => handleFormChange('phone', text)}
                />
                <Button title="Save" onPress={handleFormSubmit} />
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalCloseButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}

        {/* Employee List Section */}
        <View style={styles.listContainer}>
          {employees.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.listItem}
              onPress={() => handleEmployeeSelect(item)}
            >
              <Text style={styles.listItemTitle}>{item.name}</Text>
              <Text style={styles.listItemDescription}>{item.position}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    marginLeft: 20,
    fontSize: 16,
  },
  content: {
    marginTop: 20,
  },
  mainText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalCloseButton: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    marginTop: 20,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItemDescription: {
    fontSize: 14,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
});

export default HomePage;
