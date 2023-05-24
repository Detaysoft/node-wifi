const command = () => ({
  cmd: 'sudo',
  args: ['/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport', '--getinfo']
});

module.exports = command;
