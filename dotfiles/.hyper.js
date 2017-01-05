module.exports = {
  config: {
    fontSize: 14.5,
    fontFamily: 'Inconsolata, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
    termCSS: '::selection { background-color: rgba(233, 44, 108, 0.8); color: #fcfcfc; }',
    padding: '12px 14px',
    windowSize: [1100, 670],
    workingDirectory: '~/Projects',
  },
  plugins: [
    'hyperterm-snazzy',
    'hyperterm-working-directory',
  ],
  localPlugins: [],
};