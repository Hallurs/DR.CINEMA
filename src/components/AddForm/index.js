import React from 'react';
import {
  SafeAreaView,
  TouchableHighlight, Text, View, TextInput, Button,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';

function AddForm({
  takePhoto,
  selectFromCameraRoll,
  addContact,
  isOpen,
  addFormCloseOpenFunction,
}) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      phoneName: '',
      personNumber: '',
      contactPhoto: '',
    },
  });

  const onSubmit = (data) => {
    addContact(data);
  };
  if (isOpen === false)
  {
    return (
      <View></View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title]}>Add New Contact</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.textInput}
            placeholder="Enter new name here"
            onBlur={onBlur}
            onChangeText={(newValue) => onChange(newValue)}
            value={value}
          />
        )}
        name="phoneName"
      />
      {errors.phoneName && <Text style={styles.errorText}>Name is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.textInput}
            placeholder="Enter a new phonenumber"
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={(newValue) => onChange(newValue)}
            value={value}
          />
        )}
        name="personNumber"
      />
      {errors.personNumber && <Text style={styles.errorText}>Phone number is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.iconscontainer}>
            <TouchableHighlight
              value={value}
              onPress={async () => onChange(await takePhoto())}
            >
              <Entypo style={styles.icon} name="camera" />
            </TouchableHighlight>
            <TouchableHighlight
              value={value}
              onPress={async () => onChange(await selectFromCameraRoll())}
            >
              <Entypo style={styles.icon} name="image" />
            </TouchableHighlight>
          </View>
        )}
        name="contactPhoto"
      />
      {errors.contactPhoto && <Text style={styles.errorText}>Image is required.</Text>}

      <View style={styles.iconscontainer}>
        <View style={styles.singleIcon}>
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
        <View style={styles.singleIcon}>
          <Button title="Close" color="red" onPress={() => addFormCloseOpenFunction()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AddForm;
