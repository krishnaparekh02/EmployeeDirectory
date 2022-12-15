// --------------- LIBRARIES ---------------
import * as React from 'react';
import { Platform } from 'react-native';
import { Colors, Matrics } from '../CommonConfig';

// Create alert ref
export const snackBarRef = React.createRef();

const BOTTOM_TAB_WIDTH = Platform.select({
    ios: Matrics.vs(55),
    android: Matrics.vs(60),
});
const TYPES = {
    SUCCESS: 'success',
    FAILED: 'failed',
    INFO: 'info',
    DELETE: 'delete',
};

/**
 * Display alert dialog
 * @param {Object} options
 */
const show = (message, { type, bottom = 0, icon } = {}) => {
    snackBarRef?.current?.show({ message, type, bottom, icon });
};

const success = (message, bgColor = Colors.SUCCESS, { bottom, icon, type = TYPES.SUCCESS } = {}) => {
    snackBarRef?.current?.show({ message,bgColor, type, bottom, icon });
};

const error = (message, bgColor = Colors.ERROR, { bottom, icon, type = TYPES.FAILED } = {}) => {
    snackBarRef?.current?.show({ message,bgColor, type, bottom, icon });
};

const info = (message, bgColor = Colors.INFO, { bottom, icon, type = TYPES.INFO } = {}) => {
    snackBarRef?.current?.show({ message, bgColor, type, bottom, icon });
};

/**
 * Hide alert dialog if visible
 */
const hide = () => {
    snackBarRef?.current?.hide();
};

export default {
    show,
    success,
    error,
    info,
    hide,
    BOTTOM_TAB_WIDTH,
    TYPES,
};
