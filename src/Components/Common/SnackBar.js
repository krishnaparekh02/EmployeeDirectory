import React from 'react';
import {
    View,
    Text,
    Animated,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import { Colors, MainStyles, Matrics } from '../../CommonConfig';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TIMEOUT = 2500;

export default React.forwardRef((_, ref) => {
    React.useImperativeHandle(
        ref,
        () => ({
            show,
            hide,
        }),
        [config],
    );

    let _refTimeout = null;

    const insets = useSafeAreaInsets();

    const animations = {
        translateY: React.useRef(new Animated.Value(100)).current,
        opacity: React.useRef(new Animated.Value(0)).current,
    };

    const animationStyles = {
        container: {
            transform: [
                {
                    translateY: animations.translateY,
                },
                {
                    scale: animations.opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.9, 1],
                    }),
                },
            ],
            opacity: animations.opacity.interpolate({
                inputRange: [0, 0.9, 1],
                outputRange: [0, 0, 1],
            }),
        },
    };

    const [config, setConfig] = React.useState({ message: '' });

    const show = ({ message, bgColor }) => {
        if (_refTimeout) {
            clearTimeout(_refTimeout);
            _refTimeout = null;
        }
        _refTimeout = setTimeout(() => {
            hide();
            clearTimeout(_refTimeout);
            _refTimeout = null;
        }, TIMEOUT);

        if (_refTimeout != null) {
            animationsList(true).start(() => {
                setConfig({
                    message: message ?? '',
                    bgColor: bgColor,
                });
                animationsList(false).start();
            });
            return;
        }

        setConfig({
            message: message ?? 'Please pass title'
        });
        animationsList(false).start();
    };

    const hide = (callback = null) => {
        animationsList(true).start(() => {
            if (typeof callback == 'function') callback();
        });
    };

    const animationsList = (hide = false, bottom = 0) =>
        Animated.parallel([
            Animated.timing(animations.opacity, {
                toValue: hide ? 0 : 1,
                duration: 300,
                useNativeDriver: true
            }),
            Animated.timing(animations.translateY, {
                toValue: hide ? 100 : bottom,
                duration: 300,
                useNativeDriver: true
            }),
        ]);

    return (
        <Animated.View
            style={[
                styles.container,
                { bottom: insets.bottom + Matrics.mvs(50),
                backgroundColor: config.bgColor ? config.bgColor : Colors.OVERLAY_DARK_70, },
                animationStyles.container,
            ]}>
            <TouchableWithoutFeedback onPress={hide}>
                <View style={styles.wrapper}>
                    <Text style={[styles.message, { color: Colors.WHITE }]}>{config.message}</Text>
                </View>
            </TouchableWithoutFeedback>
        </Animated.View>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.OVERLAY_DARK_70,
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: Matrics.mvs(6),
        ...MainStyles.shadow([1, 1], 0.5, 2, 4),
    },
    wrapper: {
        padding: Matrics.mvs(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        fontSize: Matrics.mvs(12),
        color: Colors.WHITE,
        marginHorizontal: Matrics.mvs(8)
    },
});

