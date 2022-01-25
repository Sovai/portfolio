export const getValue = (key, value = "", defaultValue = null) => {
  return _.get(key, value, defaultValue);
};

export default {
  computed: {},
  methods: {
    $_getValue: getValue,
  },
};
