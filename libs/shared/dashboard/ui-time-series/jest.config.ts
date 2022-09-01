/* eslint-disable */
export default {
  displayName: 'shared-dashboard-ui-time-series',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../coverage/libs/shared/dashboard/ui-time-series',
};
