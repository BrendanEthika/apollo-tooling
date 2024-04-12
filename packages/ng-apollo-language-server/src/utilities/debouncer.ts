import debounce from "lodash.debounce";
import { DebouncedFunc } from "lodash";  // Import the DebouncedFunc type from lodash

// Define the type for the handler function to improve type safety
type HandlerFunction = (...args: any[]) => any;

// Explicitly annotate the return type of debounceHandler to resolve the TS2742 error
export function debounceHandler(
    handler: HandlerFunction,
    leading: boolean = true
): DebouncedFunc<HandlerFunction> {
  return debounce(handler, 250, { leading });
}
