//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

if (this.WScript && this.WScript.LoadScriptFile)
{ // Check for running in ch
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = 
[
    {
        name: "Assignment to a property on a boolean without a setter in sloppy mode should be ignored",
        body: function ()
        {
            var flag = true;
            flag.a = 12;
            assert.areEqual(undefined, flag.a);
        }
    },
    {
        name: "Assignment to a property on a boolean without a setter in strict mode should throw an error",
        body: function ()
        {
            var flag = true;
            assert.throws(function() { "use strict"; flag.a = 1; }, TypeError, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to a property on a boolean without a setter in sloppy mode should be ignored",
        body: function ()
        {
            var flag = true;
            flag['a'] = 12;
            assert.areEqual(undefined, flag.a);
        }
    },
    {
        name: "Assignment to a property on a boolean without a setter in strict mode should throw an error",
        body: function ()
        {
            var flag = true;
            assert.throws(function() { "use strict"; flag['a'] = 1; }, TypeError, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to an index on a boolean without a setter in sloppy mode should be ignored",
        body: function ()
        {
            var flag = true;
            flag[66] = 12;
            assert.areEqual(undefined, flag.a);
        }
    },
    {
        name: "Assignment to an index on a boolean without a setter in strict mode should throw an error",
        body: function ()
        {
            var flag = true;
            assert.throws(function() { "use strict"; flag[66] = 1; }, TypeError, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
