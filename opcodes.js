// Instruction list taken from http://en.wikipedia.org/wiki/X86_instruction_listings
// Original instructions
var opcodes = [
  "AAA",
  "AAD",
  "AAM",
  "AAS",
  "ADC",
  "ADD",
  "AND",
  "CALL",
  "CBW",
  "CLC",
  "CLD",
  "CLI",
  "CMC",
  "CMP",
  "CMPSB",
  "CMPSW",
  "CWD",
  "DAA",
  "DAS",
  "DEC",
  "DIV",
  "ESC",
  "HLT",
  "IDIV",
  "IMUL",
  "IN",
  "INC",
  "INT",
  "INTO",
  "IRET",
  "JA",
  "JAE",
  "JB",
  "JBE",
  "JC",
  "JCXZ",
  "JE",
  "JG",
  "JGE",
  "JL",
  "JLE",
  "JNA",
  "JNAE",
  "JNB",
  "JNBE",
  "JNC",
  "JNE",
  "JNG",
  "JNGE",
  "JNL",
  "JNLE",
  "JNO",
  "JNP",
  "JNS",
  "JNZ",
  "JO",
  "JP",
  "JPE",
  "JPO",
  "JS",
  "JZ",
  "JMP",
  "LAHF",
  "LDS",
  "LEA",
  "LES",
  "LOCK",
  "LODSB",
  "LODSW",
  "LOOP",
  "LOOPE",
  "LOOPNE",
  "LOOPNZ",
  "LOOPZ",
  "MOV",
  "MOVSB",
  "MOVSW",
  "MUL",
  "NEG",
  "NOP",
  "NOT",
  "OR",
  "OUT",
  "POP",
  "POPF",
  "PUSH",
  "PUSHF",
  "RCL",
  "RCR",
  "REP",
  "REPE",
  "REPNE",
  "REPNZ",
  "REPZ",
  "RET",
  "RETN",
  "RETF",
  "ROL",
  "ROR",
  "SAHF",
  "SAL",
  "SAR",
  "SBB",
  "SCASB",
  "SCASW",
  "SHL",
  "SHR",
  "STC",
  "STD",
  "STI",
  "STOSB",
  "STOSW",
  "SUB",
  "TEST",
  "WAIT",
  "XCHG",
  "XLAT",
  "XOR",
  // Added with 80186/80188
  "BOUND",
  "ENTER",
  "INS",
  "LEAVE",
  "OUTS",
  "POPA",
  "PUSHA",
  // Added with 80286
  "ARPL",
  "CLTS",
  "LAR",
  "LGDT",
  "LIDT",
  "LLDT",
  "LMSW",
  "LOADALL", // Undocumented, (80)286 and 386 only
  "LSL",
  "LTR",
  "SGDT",
  "SIDT",
  "SLDT",
  "SMSW",
  "STR",
  "VERR",
  "VERW",
  // Added with 80386
  "BSF",
  "BSR",
  "BT",
  "BTC",
  "BTR",
  "BTS",
  "CDQ",
  "CMPSD",
  "CWDE",
  "INSB",
  "INSW",
  "INSD",
  "IRETD",
  "IRETF",
  "JCXZ",
  "JECXZ",
  "LFS",
  "LGS",
  "LSS",
  "LODSD",
  "LOOPW",
  "LOOPD",
  "LOOPEW",
  "LOOPED",
  "LOOPZW",
  "LOOPZD",
  "LOOPNEW",
  "LOOPNED",
  "LOOPNZW",
  "LOOPNZD",
  "MOVSW",
  "MOVSD",
  "MOVSX",
  "MOVZX",
  "POPAD",
  "POPFD",
  "PUSHAD",
  "PUSHFD",
  "SCASD",
  "SETA",
  "SETAE",
  "SETB",
  "SETBE",
  "SETC",
  "SETE",
  "SETG",
  "SETGE",
  "SETL",
  "SETLE",
  "SETNA",
  "SETNAE",
  "SETNB",
  "SETNBE",
  "SETNC",
  "SETNE",
  "SETNG",
  "SETNGE",
  "SETNL",
  "SETNLE",
  "SETNO",
  "SETNP",
  "SETNS",
  "SETNZ",
  "SETO",
  "SETP",
  "SETPE",
  "SETPO",
  "SETS",
  "SETZ",
  "SHLD",
  "SHRD",
  "STOS", // Not sure what variants there are on this one
  // Added with 80486
  "BSWAP",
  "CMPXCHG",
  "INVD",
  "INVLPG",
  "WBINVD",
  "XADD",
  // Added with Pentium
  "CPUID",
  "CMPXCHG8B",
  "RDMSR",
  "RDTSC",
  "WRMSR",
  "RSM",
  // Added with Pentium MMX
  "RDPMC" ];

var opcodeLookup = {};
for (var i=0; i<opcodes.length; i++) {
  opcodeLookup[opcodes[i]] = i;
}

