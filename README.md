# logger.js
This is a Simple Logging function which displays either strings or (stringified) objects on screen.
Its not as robust as the Console.log() but it has the advantage of showing its output right on the screen itself. 
( I tend to find it to be easier when developing and debugging things )

````
// msg = A text String or an Object
// indent = The indentation ( or 'space' ) for stringifying an Object:
  /// null or -1, if msg is a text String
  /// 0, to have the JSON all on one flat line
  /// 1, or higher to have the JSON 'beautified' across multiple lines
// append = A Number which is used to determine what to do with prior entries
  /// null or 0, to overwrite the current values entirely
  /// 1, to add to below the prior five (5) lines
  /// -1 to add above the prior five (5) lines
  
log( msg, indent, append ) 
  // Creates a pre element which shows the output
````
