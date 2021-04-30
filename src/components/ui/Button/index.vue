<template>
  <button class="button">Применить</button>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import "../../../assets/scss/abstracts/variables";

.button {
  display: inline-block;
  padding: 0 26px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: none;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  transition: 0.2s ease-out;
}

.button:disabled,
.button--disabled {
  opacity: 0.3;
  cursor: default;
}

.button:disabled:hover {
  background: $color-cerulean;
}

.button--primary {
  color: #fff;
  background: $color-cerulean;
  box-shadow: 0 4px 10px rgba(0, 174, 234, 0.25);
}

.button--primary:hover {
  background: #38ccff;
}

.button--primary:active {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), $color-cerulean;
}

/*.button--success {
}

.button--danger {
}

.button--lg {
}

.button--md {
}

.button--sm {
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
}

.button-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  outline: none;
  font-size: 0;
  background: transparent;
  border: 1px solid #bac1c7;
}

.button-icon svg {
  fill: #bac1c7;
}

.button-icon--primary {
  background: rgba(0, 174, 234, 0.1);
  border: none;
}

.button-icon--primary svg {
  fill: #00aeea;
}

.button-icon--danger {
  background: rgba(229, 61, 0, 0.1);
  border: none;
}

.button-icon--danger svg {
  fill: #e53d00;
}

.button--outline {
  background: transparent;
  color: #0064be;
  border: 1px solid #0064be;
  box-shadow: none;
}

.button--outline:hover,
.button--outline:active {
  background: transparent;
}*/
</style>
