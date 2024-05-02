export let something: boolean = false;

export function toggle(): void {
  something == false ? (something = true) : (something = false);
}