
self.addEventListener("message", function (e)
	{
	// GETTING THE DATA FROM THE WEB WORKER MESSAGE
	var workerMessage = e.data;

	try
		{
		// OBFUSCATING THE CODE
		var obfuscationResult = JavaScriptObfuscator.obfuscate(workerMessage,
					{
					compact: true,
					controlFlowFlattening: true,
					controlFlowFlatteningThreshold: 0.75,
					deadCodeInjection: true,
					deadCodeInjectionThreshold: 0.4,
					debugProtection: false,
					debugProtectionInterval: false,
					disableConsoleOutput: true,
					identifierNamesGenerator: 'hexadecimal',
					log: false,
					numbersToExpressions: true,
					renameGlobals: false,
					rotateStringArray: true,
					selfDefending: true,
					shuffleStringArray: true,
					simplify: true,
					splitStrings: true,
					splitStringsChunkLength: 10,
					stringArray: true,
					stringArrayEncoding: ['base64'],
					stringArrayIndexShift: true,
					stringArrayWrappersCount: 2,
					stringArrayWrappersChainedCalls: true,
					stringArrayWrappersParametersMaxCount: 4,
					stringArrayWrappersType: 'function',
					stringArrayThreshold: 0.75,
					transformObjectKeys: true,
					unicodeEscapeSequence: false
					}
				);

		// SENDING THE OBFUSCATED CODE
		self.postMessage(obfuscationResult._obfuscatedCode || "/* no output! */");
		}
		catch(err)
		{
		// SENDING THE ERROR
		self.postMessage(err);
		}
	});