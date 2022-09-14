import {faFileCirclePlus, faClockRotateLeft, faChartLine, faSliders, faFileExport} from '@fortawesome/free-solid-svg-icons';
import IconMapInterface from '../interfaces/IconsMapInterface'

const icons : IconMapInterface = {
  addRecord: faFileCirclePlus,
  history: faClockRotateLeft,
  statistics: faChartLine,
  settings: faSliders,
  export: faFileExport,
}

export default icons;