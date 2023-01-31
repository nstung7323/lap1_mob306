import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import InformationList from './src/components/InformationList';


export default function App() {
  const [isShow, setIsShow] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [uri, setUri] = useState('');

  const [data, setData] = useState([]);

  let dataTmp = [
    // {
    //   id: 1,
    //   uri: 'https://i.pinimg.com/564x/ae/9f/2f/ae9f2f516867be8a58bc555c424976a4.jpg',
    //   name: 'Nguyễn Sỹ Tùng',
    //   description: 'Mã SV - PH25350',
    // },
  ]

  function addData(nm, desc, ur) {
    if (name.length != 0 && desc.length != 0 && uri.length != 0) {
      dataTmp.push(
        {
          id: dataTmp.length + 1,
          name: nm,
          description: desc,
          uri: ur,
        },
      )
      alert(dataTmp.length)
      setData(dataTmp)

      setName('');
      setDescription('');
      setUri('');
    }
    else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.textTitleView}>Họ tên: Nguyễn Sỹ Tùng</Text>
        <Text style={styles.textTitleView}>Mã SV: PH25350</Text>
        <View style={styles.btnAddNew}>
          <Button
            title='Thêm mới'
            onPress={() => setIsShow(true)} />
        </View>

        {
          isShow == true ?
            <>
              <View style={styles.form}>
                <View>
                  <View style={styles.textInputForm}>
                    <TextInput
                      style={styles.textInputFormStyle}
                      autoCompleteType="text"
                      placeholder="Name"
                      onChangeText={(name) => setName(name)}
                      value={name}
                    />
                  </View>

                  <View style={styles.textInputForm}>
                    <TextInput
                      style={styles.textInputFormStyle}
                      placeholder="Description"
                      onChangeText={(description) => setDescription(description)}
                      value={description}
                    />
                  </View>
                  <View style={styles.textInputForm}>
                    <TextInput
                      style={styles.textInputFormStyle}
                      placeholder="Link Image"
                      onChangeText={(uri) => setUri(uri)}
                      value={uri}
                    />
                  </View>

                  <View style={styles.btnFormStyle}>
                    <View style={styles.btnForm}>
                      <Button
                        title='Hủy'
                        onPress={() => setIsShow(false)}
                      />
                    </View>
                    <View style={styles.btnForm}>
                      <Button
                        title='Lưu'
                        onPress={() => addData(name, description, uri)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </>
            : null
        }

      </View>

      <View style={styles.listInformation}>
        <InformationList list={data} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titleView: {
    flex: .3,
    justifyContent: 'flex-start',
    top: 50,
    paddingHorizontal: 20,
    // alignItems: 'center',
  },
  textTitleView: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnAddNew: {
    paddingTop: 20,
  },
  form: {
    backgroundColor: '#f1f1f1',
    marginTop: 10,
  },
  textInputForm: {
    // paddingVertical: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  textInputFormStyle: {
    backgroundColor: 'white',
    color: 'black',
    height: 50,
    marginHorizontal: 10,
  },
  btnFormStyle: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    marginBottom: 10,
  },
  btnForm: {
    width: '44%',
    marginHorizontal: 10,
  },
  listInformation: {
    marginTop: 350,
    marginHorizontal: 20,
  },
});
