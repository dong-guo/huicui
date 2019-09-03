<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './store'
export default {
  name: 'App',
  store
}
</script>

<style>
body, dl, dd, ul, ol, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, textarea, optgroup, p, blockquote, figure, hr, menu, dir, thead, tbody, tfoot, th, td {
  margin: 0;
  padding: 0; }
ul, ol {
  list-style-type: none;
  list-style-image: none; }

a {
  text-decoration: none; }
  a:active {
    background-color: transparent;
    outline: 0 none; }
  a:hover {
    outline: 0 none; }
  a:focus {
    outline: 1px dotted; }

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  font-size: 62.5%; }

body {
  font-size: 14px;
  line-height: 1.8; }

h1, h2, h3, h4, h5, h6 {
  font-weight: 400; }

h1 {
  font-size: 36px; }

h2 {
  font-size: 30px; }

h3 {
  font-size: 22px; }

h4 {
  font-size: 18px; }

h5 {
  font-size: 14px; }

h6 {
  font-size: 12px; }

a {
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent; }
  a:link, a:visited, a:hover, a:active {
    text-decoration: none; }

button {
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  border: none;
  background: none; }

input {
  -webkit-appearance:none;
  border-radius:0;
  border: none;
  background: none; }
 input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
textarea {
  border: none;
  background: none;
  overflow: hidden; }

a {
  color: #020202; }
  a:hover {
    text-decoration: none; }
</style>
