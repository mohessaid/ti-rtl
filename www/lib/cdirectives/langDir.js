/**
 * This is a directive (custom one) to solve the the problem of RTL support in Ionic (in general)
 * and Moodle Mobile App (in particular). The directive won't take all the credit on the solution
 * there are other player who will help to achieve the final results.
 * The langDir directive will act on some parts of Ionic like the ionNavBar directive, the sideMenu
 * directive and others. It won't override thier behavior but it will take over whenever they finish
 * their work which consiste on initializing and compiling their html.
 * 
 * How to use it:
 * ------------- 
 * 
 * 
 */
angular.module("ZadIonic", [])
    // This directive is an attribute, it will be attached to specific Ionic componenets or directives
    // which get affected by the language change, from an RTL language to an LTR language and vise versa. 
    .directive('langDir', function() {
        return {
            restrict: 'A', // Restricted to attribute (because this directive will act as one).
            //priority: 1200, // The priority of this directive should be less than all the directives.
            //controller: '?', // Inherit the controller of the directive of the same level.
            //scope: true, // Inherit the scope of the parent or element conrtoller.

            // In the link function of this directive we will take care of observing the langDir attribute
            // the same name of this directive, or in other word we will observe the directive itself and
            // update the views according to the value passed to us through landDir or "lang-dir".
            link: function($scope, $element, $attr) {
                console.log('Salem, brothers I am in the langDir directive');
                
                // Observe the langDir attribute value which will be like 'lang-dir' in
                // the html code. And it's the same name of the directive.
                // The value of this attribute may be equal to 'left', 'right'. All the other
                // values will be conscedired incovinient and will throw a warning or an error.
                $attr.$observe("langDir", function(value) {

                    // Beginning of the main switch block.
                    switch (value) { // Beginning of switch block (I) level of embodiment.

                        // First Case "left":
                        case "left":
                            { // If the value of the lang direction is left do:
                                console.log('In left case'); // Just for debuging need to be deleted in the production version.
                                // This is a switch block to check where we are, and we will
                                // apply this to the conserned directives or elements only. In
                                // this case ionNavBar and sideMenu.
                                switch ($element[0].tagName) { // Beginning of switch block (II) level of embodiment.

                                    // First Case "ION-NAV-BAR":
                                    case "ION-NAV-BAR":
                                        { // Beginning of First Case "ION-NAV-BAR".
                                            console.log("Hello, I am in ion nav bar");
                                            // This is the case of ionNavBar directive, when we apply this
                                            // directive "langDir" to it.
                                            var navBarBlock = $element.children();
                                            console.log('navBarBlock : ', navBarBlock);
                                            console.log('$element : ', $element);
                                            console.log('Forth child of navblock : ', navBarBlock[navBarBlock.length -1]);
                                            console.log('Third child of navblock : ', navBarBlock[navBarBlock.length -2]);
                                            navBarBlock[navBarBlock.length - 1].style.background = 'red';
                                            
                                            console.log('trying data');
                                            console.log(navBarBlock[3].firstChild.firstChild.data());
                                            break; // Break from the switch block.

                                        } // End of First Case "ION-NAV-BAR".

                                        // Second Case "ION-SIDE-MENU":
                                    case "ION-SIDE-MENU":
                                        { // Beginning of Second Case "ION-SIDE-MENU".

                                            // This is the case of ionSideMenu directive, when we apply this
                                            // directive "langDir" to it.

                                            break; // Break from the switch block.

                                        } // End of Second Case "ION-SIDE-MENU".

                                    default:
                                        { // Start of Default Case.

                                            // Other case to report error.

                                            break; // Break from the switch block.

                                        } // End of default case.

                                } // End of switch block (II) level of embodiment.

                                break; // Break from the switch block.

                            } // End of "Left" case

                            // Second 
                        case "right":
                            { // If the value of the lang direction is right do:
                                console.log('I am in the right case.')
                                // This is a switch block to check where we are, and we will
                                // apply this to the conserned directives or elements only. In
                                // this case ionNavBar and sideMenu.
                                switch ($element[0].tagName) { // Beginning of switch block (II) level of embodiment.

                                    // First Case "ION-NAV-BAR":
                                    case "ION-NAV-BAR":
                                        { // Beginning of First Case "ION-NAV-BAR".

                                            // This is the case of ionNavBar directive, when we apply this
                                            // directive "langDir" to it.

                                            break; // Break from the switch block.

                                        } // End of First Case "ION-NAV-BAR".

                                        // Second Case "ION-SIDE-MENU":
                                    case "ION-SIDE-MENU":
                                        { // Beginning of Second Case "ION-SIDE-MENU".

                                            // This is the case of ionSideMenu directive, when we apply this
                                            // directive "langDir" to it.

                                            break; // Break from the switch block.

                                        } // End of Second Case "ION-SIDE-MENU".

                                    default:
                                        { // Start of Default Case.

                                            // Other case to report error.

                                            break; // Break from the switch block.

                                        } // End of default case.
                                } // End of switch block (II) level of embodiment.

                                break; // Break from the switch block.

                            } // End of "Right" case.

                        default: // If the value of the lang direction is different from left/right do:
                            console.log("There is an error in your side langDir attribute : [", value,
                                "](this is the value we have now) , please recheck your model, " +
                                "$scope, and controller and of course the expression in the view!");
                    } // End of switch block.
                });
            }
        };
    });
