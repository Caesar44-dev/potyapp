import { Dimensions } from 'react-native';

/**
 * Dimenciones para tamaños de dispositivos
 */

const { height, width } = Dimensions.get('window');

export const setHeight = (h: any) => (height / 100) * h;
export const setWidth = (w: any) => (width / 100) * w;

export const width_container = width * 0.8;