export function buildIntlMap(optionMap, intl, messages) {
  const intlMap = {};
  Object.values(optionMap)
    .forEach(
      key => (
        intlMap[key] = intl.formatMessage(messages[key])
      ),
    );
  return intlMap;
}
