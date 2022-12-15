// --------------- LIBRARIES ---------------
import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    TextInput,
    Image,
    ActivityIndicator,
} from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Fonts, Matrics, Icons } from '../../CommonConfig';

// --------------- COMPONENT ---------------
const Input = ({
    inputRef,
    value,
    onChangeText,
    editable,
    placeholder,
    keyboardType,
    blurOnSubmit,
    onSubmitEditing,
    returnKeyType,
    secureTextEntry,
    icon,
    errorMsg,
    style,
    inputWrapperStyle,
    iconStyle,
    inputStyle,
    autoFocus,
    placeholderColor,
    onFocus,
    onBlur,
    autoCapitalize,
    rightButtonTextStyle,
    onPasswordToggle,
    showPasswordToggle,
    successMsg,
    isBottomBorderDisable
}) => {
    return (
        <View style={style}>
            <View
                style={[
                    styles.inputWrapper(errorMsg ?? null, isBottomBorderDisable ?? false),
                    inputWrapperStyle,
                ]}>
                {icon && (
                    <Image
                        style={[styles.icon(value ?? null), iconStyle]}
                        resizeMode='contain'
                        source={icon}
                    />
                )}
                <TextInput
                    style={[styles.input(icon),{color: Colors.BLACK}, inputStyle]}
                    ref={inputRef}
                    value={value}
                    onChangeText={onChangeText}
                    editable={editable ?? true}
                    placeholder={placeholder}
                    placeholderTextColor={
                        placeholderColor ?? Colors.BLACK
                    }
                    keyboardType={keyboardType ?? 'default'}
                    blurOnSubmit={blurOnSubmit}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                    secureTextEntry={secureTextEntry}
                    autoFocus={autoFocus ?? false}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    autoCapitalize={autoCapitalize ?? 'none'}
                    selectionColor={Colors.PRIMARY}
                />
                {showPasswordToggle && (
                    <TouchableOpacity
                        delayPressIn={0}
                        onPress={onPasswordToggle}
                        activeOpacity={0.5}
                        hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        style={styles.toggleButton}>
                        <Image
                            style={styles.toggleIcon}
                            resizeMode='contain'
                            source={
                                secureTextEntry
                                    ? Icons.IC_HIDE_EYE
                                    : Icons.IC_SHOW_EYE
                            }
                        />
                    </TouchableOpacity>
                )}
            </View>
            {(errorMsg ?? '') != '' ? (
                <Text style={styles.error}>{errorMsg}</Text>
            ) : (successMsg ?? '') != '' ? (
                <Text style={styles.success}>{successMsg}</Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    icon: (value) => ({
        height: Matrics.mvs(20),
        width: Matrics.mvs(20),
        marginHorizontal: Matrics.s(10),
        alignSelf: 'center',
    }),
    inputWrapper: (error,isBottomBorderDisable) => ({
        height: Matrics.mvs(45),
        flexDirection: 'row',
        borderBottomColor: error? Colors.RED : Colors.INPUTLINE,
        borderBottomWidth: isBottomBorderDisable ? 0 : 1,
    }),
    input: (isIcon) => ({
        flex: 1,
        paddingLeft: isIcon ? 0 : Matrics.s(0),
        paddingTop: 0,
        paddingRight: Matrics.s(18),
        paddingBottom: 0,
        fontSize: Matrics.mvs(14),
        fontFamily: Fonts.RobotoRegular,
    }),
    error: {
        fontFamily: Fonts.RobotoRegular,
        color: Colors.RED,
        fontSize: Matrics.mvs(14),
        paddingTop: Matrics.vs(5),
    },
    success: {
        fontFamily: Fonts.RobotoRegular,
        color: Colors.SECONDARY,
        fontSize: Matrics.mvs(10),
        paddingTop: Matrics.vs(2),
    },
    toggleButton: {
        alignSelf: 'center',
        marginRight: Matrics.s(18),
    },
    toggleIcon: {
        height: Matrics.mvs(20),
        width: Matrics.mvs(20),
    },
});

export default Input;