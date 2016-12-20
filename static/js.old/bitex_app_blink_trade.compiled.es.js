// Input 0
function $JSCompiler_alias_THROW$$($jscomp_throw_param$$) {
  throw $jscomp_throw_param$$;
}
var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_set$$($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
}
var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$exportPath_$$($name$$60$$, $opt_object$$) {
  var $parts$$ = $name$$60$$.split("."), $cur$$ = $goog$global$$;
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && $goog$isDef$$($opt_object$$) ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
}
function $goog$getObjectByName$$($name$$61_parts$$1$$) {
  $name$$61_parts$$1$$ = $name$$61_parts$$1$$.split(".");
  for(var $cur$$1$$ = $goog$global$$, $part$$1$$;$part$$1$$ = $name$$61_parts$$1$$.shift();) {
    if($cur$$1$$[$part$$1$$] != $JSCompiler_alias_NULL$$) {
      $cur$$1$$ = $cur$$1$$[$part$$1$$]
    }else {
      return $JSCompiler_alias_NULL$$
    }
  }
  return $cur$$1$$
}
function $goog$nullFunction$$() {
}
function $goog$addSingletonGetter$$($ctor$$) {
  $ctor$$.$getInstance$ = function $$ctor$$$$getInstance$$() {
    return $ctor$$.$instance_$ ? $ctor$$.$instance_$ : $ctor$$.$instance_$ = new $ctor$$
  }
}
function $goog$typeOf$$($value$$47$$) {
  var $s$$2$$ = typeof $value$$47$$;
  if("object" == $s$$2$$) {
    if($value$$47$$) {
      if($value$$47$$ instanceof Array) {
        return"array"
      }
      if($value$$47$$ instanceof Object) {
        return $s$$2$$
      }
      var $className$$2$$ = Object.prototype.toString.call($value$$47$$);
      if("[object Window]" == $className$$2$$) {
        return"object"
      }
      if("[object Array]" == $className$$2$$ || "number" == typeof $value$$47$$.length && "undefined" != typeof $value$$47$$.splice && "undefined" != typeof $value$$47$$.propertyIsEnumerable && !$value$$47$$.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == $className$$2$$ || "undefined" != typeof $value$$47$$.call && "undefined" != typeof $value$$47$$.propertyIsEnumerable && !$value$$47$$.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == $s$$2$$ && "undefined" == typeof $value$$47$$.call) {
      return"object"
    }
  }
  return $s$$2$$
}
function $goog$isDef$$($val$$) {
  return $val$$ !== $JSCompiler_alias_VOID$$
}
function $goog$isDefAndNotNull$$($val$$2$$) {
  return $val$$2$$ != $JSCompiler_alias_NULL$$
}
function $goog$isArray$$($val$$3$$) {
  return"array" == $goog$typeOf$$($val$$3$$)
}
function $goog$isArrayLike$$($val$$4$$) {
  var $type$$52$$ = $goog$typeOf$$($val$$4$$);
  return"array" == $type$$52$$ || "object" == $type$$52$$ && "number" == typeof $val$$4$$.length
}
function $goog$isString$$($val$$6$$) {
  return"string" == typeof $val$$6$$
}
function $goog$isNumber$$($val$$8$$) {
  return"number" == typeof $val$$8$$
}
function $goog$isFunction$$($val$$9$$) {
  return"function" == $goog$typeOf$$($val$$9$$)
}
function $goog$isObject$$($val$$10$$) {
  var $type$$53$$ = typeof $val$$10$$;
  return"object" == $type$$53$$ && $val$$10$$ != $JSCompiler_alias_NULL$$ || "function" == $type$$53$$
}
function $goog$getUid$$($obj$$36$$) {
  return $obj$$36$$[$goog$UID_PROPERTY_$$] || ($obj$$36$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1E9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0;
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$37$$) {
  return $fn$$.call.apply($fn$$.bind, arguments)
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$38$$) {
  $fn$$1$$ || $JSCompiler_alias_THROW$$(Error());
  if(2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$)
    }
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments)
  }
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$39$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply($JSCompiler_alias_NULL$$, arguments)
}
function $goog$partial$$($fn$$3$$, $var_args$$40$$) {
  var $args$$3$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$1$$ = Array.prototype.slice.call(arguments);
    $newArgs$$1$$.unshift.apply($newArgs$$1$$, $args$$3$$);
    return $fn$$3$$.apply(this, $newArgs$$1$$)
  }
}
var $goog$now$$ = Date.now || function() {
  return+new Date
};
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$
}
;
// Input 1
// Input 2
// Input 3
function $goog$string$isEmpty$$($str$$16$$) {
  return/^[\s\xa0]*$/.test($str$$16$$)
}
function $goog$string$trim$$($str$$27$$) {
  return $str$$27$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function $goog$string$htmlEscape$$($str$$33$$) {
  if(!$goog$string$allRe_$$.test($str$$33$$)) {
    return $str$$33$$
  }
  -1 != $str$$33$$.indexOf("&") && ($str$$33$$ = $str$$33$$.replace($goog$string$amperRe_$$, "&amp;"));
  -1 != $str$$33$$.indexOf("<") && ($str$$33$$ = $str$$33$$.replace($goog$string$ltRe_$$, "&lt;"));
  -1 != $str$$33$$.indexOf(">") && ($str$$33$$ = $str$$33$$.replace($goog$string$gtRe_$$, "&gt;"));
  -1 != $str$$33$$.indexOf('"') && ($str$$33$$ = $str$$33$$.replace($goog$string$quotRe_$$, "&quot;"));
  return $str$$33$$
}
var $goog$string$amperRe_$$ = /&/g, $goog$string$ltRe_$$ = /</g, $goog$string$gtRe_$$ = />/g, $goog$string$quotRe_$$ = /\"/g, $goog$string$allRe_$$ = /[&<>\"]/;
function $goog$string$remove$$($s$$10$$, $ss$$2$$) {
  var $re$$ = RegExp($goog$string$regExpEscape$$($ss$$2$$), "");
  return $s$$10$$.replace($re$$, "")
}
function $goog$string$regExpEscape$$($s$$12$$) {
  return String($s$$12$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
function $goog$string$getRandomString$$() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $goog$now$$()).toString(36)
}
function $goog$string$toNumber$$($str$$43$$) {
  var $num$$5$$ = Number($str$$43$$);
  return 0 == $num$$5$$ && $goog$string$isEmpty$$($str$$43$$) ? NaN : $num$$5$$
}
function $goog$string$toCamelCase$$($str$$44$$) {
  return String($str$$44$$).replace(/\-([a-z])/g, function($all$$, $match$$) {
    return $match$$.toUpperCase()
  })
}
function $goog$string$toTitleCase$$($str$$46$$) {
  var $delimiters$$ = $goog$isString$$($JSCompiler_alias_VOID$$) ? $goog$string$regExpEscape$$($JSCompiler_alias_VOID$$) : "\\s";
  return $str$$46$$.replace(RegExp("(^" + ($delimiters$$ ? "|[" + $delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($all$$1$$, $p1$$, $p2$$) {
    return $p1$$ + $p2$$.toUpperCase()
  })
}
;
// Input 4
// Input 5
var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$16$$, $obj$$40$$, $opt_fromIndex$$6$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$16$$, $obj$$40$$, $opt_fromIndex$$6$$)
} : function($arr$$17$$, $obj$$41$$, $fromIndex$$2_i$$12_opt_fromIndex$$7$$) {
  $fromIndex$$2_i$$12_opt_fromIndex$$7$$ = $fromIndex$$2_i$$12_opt_fromIndex$$7$$ == $JSCompiler_alias_NULL$$ ? 0 : 0 > $fromIndex$$2_i$$12_opt_fromIndex$$7$$ ? Math.max(0, $arr$$17$$.length + $fromIndex$$2_i$$12_opt_fromIndex$$7$$) : $fromIndex$$2_i$$12_opt_fromIndex$$7$$;
  if($goog$isString$$($arr$$17$$)) {
    return!$goog$isString$$($obj$$41$$) || 1 != $obj$$41$$.length ? -1 : $arr$$17$$.indexOf($obj$$41$$, $fromIndex$$2_i$$12_opt_fromIndex$$7$$)
  }
  for(;$fromIndex$$2_i$$12_opt_fromIndex$$7$$ < $arr$$17$$.length;$fromIndex$$2_i$$12_opt_fromIndex$$7$$++) {
    if($fromIndex$$2_i$$12_opt_fromIndex$$7$$ in $arr$$17$$ && $arr$$17$$[$fromIndex$$2_i$$12_opt_fromIndex$$7$$] === $obj$$41$$) {
      return $fromIndex$$2_i$$12_opt_fromIndex$$7$$
    }
  }
  return-1
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$20$$, $f$$, $opt_obj$$1$$) {
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$20$$, $f$$, $opt_obj$$1$$)
} : function($arr$$21$$, $f$$1$$, $opt_obj$$2$$) {
  for(var $l$$2$$ = $arr$$21$$.length, $arr2$$ = $goog$isString$$($arr$$21$$) ? $arr$$21$$.split("") : $arr$$21$$, $i$$14$$ = 0;$i$$14$$ < $l$$2$$;$i$$14$$++) {
    $i$$14$$ in $arr2$$ && $f$$1$$.call($opt_obj$$2$$, $arr2$$[$i$$14$$], $i$$14$$, $arr$$21$$)
  }
}, $goog$array$filter$$ = $goog$array$ARRAY_PROTOTYPE_$$.filter ? function($arr$$23$$, $f$$3$$, $opt_obj$$4$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.filter.call($arr$$23$$, $f$$3$$, $opt_obj$$4$$)
} : function($arr$$24$$, $f$$4$$, $opt_obj$$5$$) {
  for(var $l$$4$$ = $arr$$24$$.length, $res$$ = [], $resLength$$ = 0, $arr2$$2$$ = $goog$isString$$($arr$$24$$) ? $arr$$24$$.split("") : $arr$$24$$, $i$$16$$ = 0;$i$$16$$ < $l$$4$$;$i$$16$$++) {
    if($i$$16$$ in $arr2$$2$$) {
      var $val$$11$$ = $arr2$$2$$[$i$$16$$];
      $f$$4$$.call($opt_obj$$5$$, $val$$11$$, $i$$16$$, $arr$$24$$) && ($res$$[$resLength$$++] = $val$$11$$)
    }
  }
  return $res$$
}, $goog$array$map$$ = $goog$array$ARRAY_PROTOTYPE_$$.map ? function($arr$$25$$, $f$$5$$, $opt_obj$$6$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.map.call($arr$$25$$, $f$$5$$, $opt_obj$$6$$)
} : function($arr$$26$$, $f$$6$$, $opt_obj$$7$$) {
  for(var $l$$5$$ = $arr$$26$$.length, $res$$1$$ = Array($l$$5$$), $arr2$$3$$ = $goog$isString$$($arr$$26$$) ? $arr$$26$$.split("") : $arr$$26$$, $i$$17$$ = 0;$i$$17$$ < $l$$5$$;$i$$17$$++) {
    $i$$17$$ in $arr2$$3$$ && ($res$$1$$[$i$$17$$] = $f$$6$$.call($opt_obj$$7$$, $arr2$$3$$[$i$$17$$], $i$$17$$, $arr$$26$$))
  }
  return $res$$1$$
}, $goog$array$every$$ = $goog$array$ARRAY_PROTOTYPE_$$.every ? function($arr$$31$$, $f$$11$$, $opt_obj$$12$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.every.call($arr$$31$$, $f$$11$$, $opt_obj$$12$$)
} : function($arr$$32$$, $f$$12$$, $opt_obj$$13$$) {
  for(var $l$$7$$ = $arr$$32$$.length, $arr2$$5$$ = $goog$isString$$($arr$$32$$) ? $arr$$32$$.split("") : $arr$$32$$, $i$$19$$ = 0;$i$$19$$ < $l$$7$$;$i$$19$$++) {
    if($i$$19$$ in $arr2$$5$$ && !$f$$12$$.call($opt_obj$$13$$, $arr2$$5$$[$i$$19$$], $i$$19$$, $arr$$32$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
function $goog$array$find$$($arr$$35$$, $f$$14$$) {
  var $i$$20$$ = $goog$array$findIndex$$($arr$$35$$, $f$$14$$, $JSCompiler_alias_VOID$$);
  return 0 > $i$$20$$ ? $JSCompiler_alias_NULL$$ : $goog$isString$$($arr$$35$$) ? $arr$$35$$.charAt($i$$20$$) : $arr$$35$$[$i$$20$$]
}
function $goog$array$findIndex$$($arr$$36$$, $f$$15$$, $opt_obj$$16$$) {
  for(var $l$$8$$ = $arr$$36$$.length, $arr2$$6$$ = $goog$isString$$($arr$$36$$) ? $arr$$36$$.split("") : $arr$$36$$, $i$$21$$ = 0;$i$$21$$ < $l$$8$$;$i$$21$$++) {
    if($i$$21$$ in $arr2$$6$$ && $f$$15$$.call($opt_obj$$16$$, $arr2$$6$$[$i$$21$$], $i$$21$$, $arr$$36$$)) {
      return $i$$21$$
    }
  }
  return-1
}
function $goog$array$contains$$($arr$$39$$, $obj$$44$$) {
  return 0 <= $goog$array$indexOf$$($arr$$39$$, $obj$$44$$)
}
function $goog$array$remove$$($arr$$46$$, $obj$$48$$) {
  var $i$$26$$ = $goog$array$indexOf$$($arr$$46$$, $obj$$48$$);
  0 <= $i$$26$$ && $goog$array$ARRAY_PROTOTYPE_$$.splice.call($arr$$46$$, $i$$26$$, 1)
}
function $goog$array$toArray$$($object$$2$$) {
  var $length$$15$$ = $object$$2$$.length;
  if(0 < $length$$15$$) {
    for(var $rv$$3$$ = Array($length$$15$$), $i$$29$$ = 0;$i$$29$$ < $length$$15$$;$i$$29$$++) {
      $rv$$3$$[$i$$29$$] = $object$$2$$[$i$$29$$]
    }
    return $rv$$3$$
  }
  return[]
}
function $goog$array$splice$$($arr$$49$$, $index$$50$$, $howMany$$, $var_args$$55$$) {
  $goog$array$ARRAY_PROTOTYPE_$$.splice.apply($arr$$49$$, $goog$array$slice$$(arguments, 1))
}
function $goog$array$slice$$($arr$$50$$, $start$$6$$, $opt_end$$13$$) {
  return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$50$$, $start$$6$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$50$$, $start$$6$$, $opt_end$$13$$)
}
;
// Input 6
var $goog$dom$defaultDomHelper_$$;
function $goog$dom$classes$get$$($className$$5_element$$9$$) {
  $className$$5_element$$9$$ = $className$$5_element$$9$$.className;
  return $goog$isString$$($className$$5_element$$9$$) && $className$$5_element$$9$$.match(/\S+/g) || []
}
function $goog$dom$classes$add$$($element$$10$$, $var_args$$58$$) {
  var $classes$$ = $goog$dom$classes$get$$($element$$10$$), $args$$6$$ = $goog$array$slice$$(arguments, 1), $expectedCount$$ = $classes$$.length + $args$$6$$.length;
  $goog$dom$classes$add_$$($classes$$, $args$$6$$);
  $element$$10$$.className = $classes$$.join(" ");
  return $classes$$.length == $expectedCount$$
}
function $goog$dom$classes$remove$$($element$$11$$, $var_args$$59$$) {
  var $classes$$1$$ = $goog$dom$classes$get$$($element$$11$$), $args$$7$$ = $goog$array$slice$$(arguments, 1), $newClasses$$ = $goog$dom$classes$getDifference_$$($classes$$1$$, $args$$7$$);
  $element$$11$$.className = $newClasses$$.join(" ");
  return $newClasses$$.length == $classes$$1$$.length - $args$$7$$.length
}
function $goog$dom$classes$add_$$($classes$$2$$, $args$$8$$) {
  for(var $i$$41$$ = 0;$i$$41$$ < $args$$8$$.length;$i$$41$$++) {
    $goog$array$contains$$($classes$$2$$, $args$$8$$[$i$$41$$]) || $classes$$2$$.push($args$$8$$[$i$$41$$])
  }
}
function $goog$dom$classes$getDifference_$$($arr1$$4$$, $arr2$$12$$) {
  return $goog$array$filter$$($arr1$$4$$, function($item$$) {
    return!$goog$array$contains$$($arr2$$12$$, $item$$)
  })
}
function $goog$dom$classes$addRemove$$($element$$13$$, $classesToRemove$$, $classesToAdd$$) {
  var $classes$$4$$ = $goog$dom$classes$get$$($element$$13$$);
  $goog$isString$$($classesToRemove$$) ? $goog$array$remove$$($classes$$4$$, $classesToRemove$$) : $goog$isArray$$($classesToRemove$$) && ($classes$$4$$ = $goog$dom$classes$getDifference_$$($classes$$4$$, $classesToRemove$$));
  $goog$isString$$($classesToAdd$$) && !$goog$array$contains$$($classes$$4$$, $classesToAdd$$) ? $classes$$4$$.push($classesToAdd$$) : $goog$isArray$$($classesToAdd$$) && $goog$dom$classes$add_$$($classes$$4$$, $classesToAdd$$);
  $element$$13$$.className = $classes$$4$$.join(" ")
}
function $goog$dom$classes$has$$($element$$14$$, $className$$6$$) {
  return $goog$array$contains$$($goog$dom$classes$get$$($element$$14$$), $className$$6$$)
}
;
// Input 7
function $goog$object$forEach$$($obj$$49$$, $f$$19$$, $opt_obj$$22$$) {
  for(var $key$$21$$ in $obj$$49$$) {
    $f$$19$$.call($opt_obj$$22$$, $obj$$49$$[$key$$21$$], $key$$21$$, $obj$$49$$)
  }
}
function $goog$object$getValues$$($obj$$58$$) {
  var $res$$4$$ = [], $i$$43$$ = 0, $key$$29$$;
  for($key$$29$$ in $obj$$58$$) {
    $res$$4$$[$i$$43$$++] = $obj$$58$$[$key$$29$$]
  }
  return $res$$4$$
}
function $goog$object$getKeys$$($obj$$59$$) {
  var $res$$5$$ = [], $i$$44$$ = 0, $key$$30$$;
  for($key$$30$$ in $obj$$59$$) {
    $res$$5$$[$i$$44$$++] = $key$$30$$
  }
  return $res$$5$$
}
function $goog$object$findKey$$($obj$$63$$, $f$$24$$) {
  for(var $key$$33$$ in $obj$$63$$) {
    if($f$$24$$.call($JSCompiler_alias_VOID$$, $obj$$63$$[$key$$33$$], $key$$33$$, $obj$$63$$)) {
      return $key$$33$$
    }
  }
}
function $goog$object$isEmpty$$() {
  var $obj$$65$$ = $goog$fx$anim$activeAnimations_$$, $key$$35$$;
  for($key$$35$$ in $obj$$65$$) {
    return $JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_alias_TRUE$$
}
function $goog$object$remove$$($obj$$67$$, $key$$36$$) {
  $key$$36$$ in $obj$$67$$ && delete $obj$$67$$[$key$$36$$]
}
function $goog$object$add$$($obj$$68$$, $key$$37$$, $val$$18$$) {
  $key$$37$$ in $obj$$68$$ && $JSCompiler_alias_THROW$$(Error('The object already contains the key "' + $key$$37$$ + '"'));
  $obj$$68$$[$key$$37$$] = $val$$18$$
}
function $goog$object$get$$($obj$$69$$, $key$$38$$, $opt_val$$) {
  return $key$$38$$ in $obj$$69$$ ? $obj$$69$$[$key$$38$$] : $opt_val$$
}
function $goog$object$unsafeClone$$($obj$$73$$) {
  var $clone$$1_type$$56$$ = $goog$typeOf$$($obj$$73$$);
  if("object" == $clone$$1_type$$56$$ || "array" == $clone$$1_type$$56$$) {
    if($obj$$73$$.clone) {
      return $obj$$73$$.clone()
    }
    var $clone$$1_type$$56$$ = "array" == $clone$$1_type$$56$$ ? [] : {}, $key$$42$$;
    for($key$$42$$ in $obj$$73$$) {
      $clone$$1_type$$56$$[$key$$42$$] = $goog$object$unsafeClone$$($obj$$73$$[$key$$42$$])
    }
    return $clone$$1_type$$56$$
  }
  return $obj$$73$$
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function $goog$object$extend$$($target$$48$$, $var_args$$61$$) {
  for(var $key$$44$$, $source$$2$$, $i$$47$$ = 1;$i$$47$$ < arguments.length;$i$$47$$++) {
    $source$$2$$ = arguments[$i$$47$$];
    for($key$$44$$ in $source$$2$$) {
      $target$$48$$[$key$$44$$] = $source$$2$$[$key$$44$$]
    }
    for(var $j$$4$$ = 0;$j$$4$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$4$$++) {
      $key$$44$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$4$$], Object.prototype.hasOwnProperty.call($source$$2$$, $key$$44$$) && ($target$$48$$[$key$$44$$] = $source$$2$$[$key$$44$$])
    }
  }
}
;
// Input 8
// Input 9
var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedGecko_$$, $goog$userAgent$detectedMac_$$;
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : $JSCompiler_alias_NULL$$
}
function $goog$userAgent$getNavigator$$() {
  return $goog$global$$.navigator
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = $JSCompiler_alias_FALSE$$;
var $ua$$inline_90$$;
if($ua$$inline_90$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_91$$ = $goog$userAgent$getNavigator$$();
  $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_90$$.indexOf("Opera");
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_90$$.indexOf("MSIE");
  $goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_90$$.indexOf("WebKit");
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_91$$.product
}
var $goog$userAgent$OPERA$$ = $goog$userAgent$detectedOpera_$$, $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $navigator$$inline_93$$ = $goog$userAgent$getNavigator$$();
$goog$userAgent$detectedMac_$$ = -1 != ($navigator$$inline_93$$ && $navigator$$inline_93$$.platform || "").indexOf("Mac");
var $goog$userAgent$X11$$ = !!$goog$userAgent$getNavigator$$() && -1 != ($goog$userAgent$getNavigator$$().appVersion || "").indexOf("X11");
function $goog$userAgent$getDocumentMode_$$() {
  var $doc$$4$$ = $goog$global$$.document;
  return $doc$$4$$ ? $doc$$4$$.documentMode : $JSCompiler_alias_VOID$$
}
var $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_96$$ = "", $re$$inline_97$$;
  if($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    var $operaVersion$$inline_98$$ = $goog$global$$.opera.version, $version$$inline_96$$ = "function" == typeof $operaVersion$$inline_98$$ ? $operaVersion$$inline_98$$() : $operaVersion$$inline_98$$
  }else {
    if($goog$userAgent$GECKO$$ ? $re$$inline_97$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_97$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_97$$ = /WebKit\/(\S+)/), $re$$inline_97$$) {
      var $arr$$inline_99$$ = $re$$inline_97$$.exec($goog$userAgent$getUserAgentString$$()), $version$$inline_96$$ = $arr$$inline_99$$ ? $arr$$inline_99$$[1] : ""
    }
  }
  if($goog$userAgent$IE$$) {
    var $docMode$$inline_100$$ = $goog$userAgent$getDocumentMode_$$();
    if($docMode$$inline_100$$ > parseFloat($version$$inline_96$$)) {
      $goog$userAgent$VERSION$$ = String($docMode$$inline_100$$);
      break a
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_96$$
}
var $goog$userAgent$isVersionCache_$$ = {};
function $goog$userAgent$isVersion$$($version$$8$$) {
  var $JSCompiler_temp$$71_order$$inline_104$$;
  if(!($JSCompiler_temp$$71_order$$inline_104$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$])) {
    $JSCompiler_temp$$71_order$$inline_104$$ = 0;
    for(var $v1Subs$$inline_105$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$$inline_106$$ = $goog$string$trim$$(String($version$$8$$)).split("."), $subCount$$inline_107$$ = Math.max($v1Subs$$inline_105$$.length, $v2Subs$$inline_106$$.length), $subIdx$$inline_108$$ = 0;0 == $JSCompiler_temp$$71_order$$inline_104$$ && $subIdx$$inline_108$$ < $subCount$$inline_107$$;$subIdx$$inline_108$$++) {
      var $v1Sub$$inline_109$$ = $v1Subs$$inline_105$$[$subIdx$$inline_108$$] || "", $v2Sub$$inline_110$$ = $v2Subs$$inline_106$$[$subIdx$$inline_108$$] || "", $v1CompParser$$inline_111$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_112$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_113$$ = $v1CompParser$$inline_111$$.exec($v1Sub$$inline_109$$) || ["", "", ""], $v2Comp$$inline_114$$ = $v2CompParser$$inline_112$$.exec($v2Sub$$inline_110$$) || ["", "", ""];
        if(0 == $v1Comp$$inline_113$$[0].length && 0 == $v2Comp$$inline_114$$[0].length) {
          break
        }
        $JSCompiler_temp$$71_order$$inline_104$$ = ((0 == $v1Comp$$inline_113$$[1].length ? 0 : parseInt($v1Comp$$inline_113$$[1], 10)) < (0 == $v2Comp$$inline_114$$[1].length ? 0 : parseInt($v2Comp$$inline_114$$[1], 10)) ? -1 : (0 == $v1Comp$$inline_113$$[1].length ? 0 : parseInt($v1Comp$$inline_113$$[1], 10)) > (0 == $v2Comp$$inline_114$$[1].length ? 0 : parseInt($v2Comp$$inline_114$$[1], 10)) ? 1 : 0) || ((0 == $v1Comp$$inline_113$$[2].length) < (0 == $v2Comp$$inline_114$$[2].length) ? -1 : (0 == 
        $v1Comp$$inline_113$$[2].length) > (0 == $v2Comp$$inline_114$$[2].length) ? 1 : 0) || ($v1Comp$$inline_113$$[2] < $v2Comp$$inline_114$$[2] ? -1 : $v1Comp$$inline_113$$[2] > $v2Comp$$inline_114$$[2] ? 1 : 0)
      }while(0 == $JSCompiler_temp$$71_order$$inline_104$$)
    }
    $JSCompiler_temp$$71_order$$inline_104$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$] = 0 <= $JSCompiler_temp$$71_order$$inline_104$$
  }
  return $JSCompiler_temp$$71_order$$inline_104$$
}
var $doc$$inline_116$$ = $goog$global$$.document, $goog$userAgent$DOCUMENT_MODE$$ = !$doc$$inline_116$$ || !$goog$userAgent$IE$$ ? $JSCompiler_alias_VOID$$ : $goog$userAgent$getDocumentMode_$$() || ("CSS1Compat" == $doc$$inline_116$$.compatMode ? parseInt($goog$userAgent$VERSION$$, 10) : 5);
// Input 10
function $goog$math$Size$$($width$$12$$, $height$$11$$) {
  this.width = $width$$12$$;
  this.height = $height$$11$$
}
$goog$math$Size$$.prototype.clone = function $$goog$math$Size$$$$clone$() {
  return new $goog$math$Size$$(this.width, this.height)
};
$goog$math$Size$$.prototype.ceil = function $$goog$math$Size$$$$ceil$() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
$goog$math$Size$$.prototype.floor = function $$goog$math$Size$$$$floor$() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
$goog$math$Size$$.prototype.round = function $$goog$math$Size$$$$round$() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
// Input 11
var $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ = !$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.1"), $goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("9"), 
$goog$dom$BrowserFeature$CAN_USE_PARENT_ELEMENT_PROPERTY$$ = $goog$userAgent$IE$$ || $goog$userAgent$OPERA$$ || $goog$userAgent$WEBKIT$$;
// Input 12
// Input 13
function $goog$math$Coordinate$$($opt_x$$, $opt_y$$) {
  this.x = $goog$isDef$$($opt_x$$) ? $opt_x$$ : 0;
  this.y = $goog$isDef$$($opt_y$$) ? $opt_y$$ : 0
}
$goog$math$Coordinate$$.prototype.clone = function $$goog$math$Coordinate$$$$clone$() {
  return new $goog$math$Coordinate$$(this.x, this.y)
};
$goog$math$Coordinate$$.prototype.ceil = function $$goog$math$Coordinate$$$$ceil$() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this
};
$goog$math$Coordinate$$.prototype.floor = function $$goog$math$Coordinate$$$$floor$() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this
};
$goog$math$Coordinate$$.prototype.round = function $$goog$math$Coordinate$$$$round$() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};
// Input 14
function $goog$dom$getDomHelper$$($opt_element$$10$$) {
  return $opt_element$$10$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($opt_element$$10$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$)
}
function $goog$dom$getElement$$($element$$17$$) {
  return $goog$isString$$($element$$17$$) ? document.getElementById($element$$17$$) : $element$$17$$
}
function $goog$dom$getElementsByTagNameAndClass$$($opt_tag$$, $opt_class$$, $opt_el$$) {
  return $goog$dom$getElementsByTagNameAndClass_$$(document, $opt_tag$$, $opt_class$$, $opt_el$$)
}
function $goog$dom$getElementsByClass$$($className$$9$$, $opt_el$$1$$) {
  var $parent$$2$$ = $opt_el$$1$$ || document;
  return $parent$$2$$.querySelectorAll && $parent$$2$$.querySelector ? $parent$$2$$.querySelectorAll("." + $className$$9$$) : $parent$$2$$.getElementsByClassName ? $parent$$2$$.getElementsByClassName($className$$9$$) : $goog$dom$getElementsByTagNameAndClass_$$(document, "*", $className$$9$$, $opt_el$$1$$)
}
function $goog$dom$getElementByClass$$($className$$10$$, $opt_el$$2$$) {
  var $parent$$3$$ = $opt_el$$2$$ || document, $retVal$$ = $JSCompiler_alias_NULL$$;
  return($retVal$$ = $parent$$3$$.querySelectorAll && $parent$$3$$.querySelector ? $parent$$3$$.querySelector("." + $className$$10$$) : $goog$dom$getElementsByClass$$($className$$10$$, $opt_el$$2$$)[0]) || $JSCompiler_alias_NULL$$
}
function $goog$dom$getElementsByTagNameAndClass_$$($doc$$6_els_parent$$5$$, $className$$11_opt_tag$$1_tagName$$1$$, $opt_class$$1$$, $arrayLike_opt_el$$3$$) {
  $doc$$6_els_parent$$5$$ = $arrayLike_opt_el$$3$$ || $doc$$6_els_parent$$5$$;
  $className$$11_opt_tag$$1_tagName$$1$$ = $className$$11_opt_tag$$1_tagName$$1$$ && "*" != $className$$11_opt_tag$$1_tagName$$1$$ ? $className$$11_opt_tag$$1_tagName$$1$$.toUpperCase() : "";
  if($doc$$6_els_parent$$5$$.querySelectorAll && $doc$$6_els_parent$$5$$.querySelector && ($className$$11_opt_tag$$1_tagName$$1$$ || $opt_class$$1$$)) {
    return $doc$$6_els_parent$$5$$.querySelectorAll($className$$11_opt_tag$$1_tagName$$1$$ + ($opt_class$$1$$ ? "." + $opt_class$$1$$ : ""))
  }
  if($opt_class$$1$$ && $doc$$6_els_parent$$5$$.getElementsByClassName) {
    $doc$$6_els_parent$$5$$ = $doc$$6_els_parent$$5$$.getElementsByClassName($opt_class$$1$$);
    if($className$$11_opt_tag$$1_tagName$$1$$) {
      $arrayLike_opt_el$$3$$ = {};
      for(var $len$$ = 0, $i$$51$$ = 0, $el$$1$$;$el$$1$$ = $doc$$6_els_parent$$5$$[$i$$51$$];$i$$51$$++) {
        $className$$11_opt_tag$$1_tagName$$1$$ == $el$$1$$.nodeName && ($arrayLike_opt_el$$3$$[$len$$++] = $el$$1$$)
      }
      $arrayLike_opt_el$$3$$.length = $len$$;
      return $arrayLike_opt_el$$3$$
    }
    return $doc$$6_els_parent$$5$$
  }
  $doc$$6_els_parent$$5$$ = $doc$$6_els_parent$$5$$.getElementsByTagName($className$$11_opt_tag$$1_tagName$$1$$ || "*");
  if($opt_class$$1$$) {
    $arrayLike_opt_el$$3$$ = {};
    for($i$$51$$ = $len$$ = 0;$el$$1$$ = $doc$$6_els_parent$$5$$[$i$$51$$];$i$$51$$++) {
      $className$$11_opt_tag$$1_tagName$$1$$ = $el$$1$$.className, "function" == typeof $className$$11_opt_tag$$1_tagName$$1$$.split && $goog$array$contains$$($className$$11_opt_tag$$1_tagName$$1$$.split(/\s+/), $opt_class$$1$$) && ($arrayLike_opt_el$$3$$[$len$$++] = $el$$1$$)
    }
    $arrayLike_opt_el$$3$$.length = $len$$;
    return $arrayLike_opt_el$$3$$
  }
  return $doc$$6_els_parent$$5$$
}
function $goog$dom$setProperties$$($element$$18$$, $properties$$3$$) {
  $goog$object$forEach$$($properties$$3$$, function($val$$20$$, $key$$45$$) {
    "style" == $key$$45$$ ? $element$$18$$.style.cssText = $val$$20$$ : "class" == $key$$45$$ ? $element$$18$$.className = $val$$20$$ : "for" == $key$$45$$ ? $element$$18$$.htmlFor = $val$$20$$ : $key$$45$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? $element$$18$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$45$$], $val$$20$$) : 0 == $key$$45$$.lastIndexOf("aria-", 0) || 0 == $key$$45$$.lastIndexOf("data-", 0) ? $element$$18$$.setAttribute($key$$45$$, $val$$20$$) : $element$$18$$[$key$$45$$] = 
    $val$$20$$
  })
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function $goog$dom$getViewportSize_$$($doc$$7_el$$2_win$$) {
  $doc$$7_el$$2_win$$ = $doc$$7_el$$2_win$$.document;
  $doc$$7_el$$2_win$$ = "CSS1Compat" == $doc$$7_el$$2_win$$.compatMode ? $doc$$7_el$$2_win$$.documentElement : $doc$$7_el$$2_win$$.body;
  return new $goog$math$Size$$($doc$$7_el$$2_win$$.clientWidth, $doc$$7_el$$2_win$$.clientHeight)
}
function $goog$dom$getWindow_$$($doc$$11$$) {
  return $doc$$11$$.parentWindow || $doc$$11$$.defaultView
}
function $goog$dom$createDom$$($tagName$$2$$, $opt_attributes$$, $var_args$$67$$) {
  return $goog$dom$createDom_$$(document, arguments)
}
function $goog$dom$createDom_$$($doc$$12$$, $args$$9$$) {
  var $element$$19_tagName$$3_tagNameArr$$ = $args$$9$$[0], $attributes$$ = $args$$9$$[1];
  if(!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$ && ($attributes$$.name || $attributes$$.type)) {
    $element$$19_tagName$$3_tagNameArr$$ = ["<", $element$$19_tagName$$3_tagNameArr$$];
    $attributes$$.name && $element$$19_tagName$$3_tagNameArr$$.push(' name="', $goog$string$htmlEscape$$($attributes$$.name), '"');
    if($attributes$$.type) {
      $element$$19_tagName$$3_tagNameArr$$.push(' type="', $goog$string$htmlEscape$$($attributes$$.type), '"');
      var $clone$$2$$ = {};
      $goog$object$extend$$($clone$$2$$, $attributes$$);
      delete $clone$$2$$.type;
      $attributes$$ = $clone$$2$$
    }
    $element$$19_tagName$$3_tagNameArr$$.push(">");
    $element$$19_tagName$$3_tagNameArr$$ = $element$$19_tagName$$3_tagNameArr$$.join("")
  }
  $element$$19_tagName$$3_tagNameArr$$ = $doc$$12$$.createElement($element$$19_tagName$$3_tagNameArr$$);
  $attributes$$ && ($goog$isString$$($attributes$$) ? $element$$19_tagName$$3_tagNameArr$$.className = $attributes$$ : $goog$isArray$$($attributes$$) ? $goog$dom$classes$add$$.apply($JSCompiler_alias_NULL$$, [$element$$19_tagName$$3_tagNameArr$$].concat($attributes$$)) : $goog$dom$setProperties$$($element$$19_tagName$$3_tagNameArr$$, $attributes$$));
  2 < $args$$9$$.length && $goog$dom$append_$$($doc$$12$$, $element$$19_tagName$$3_tagNameArr$$, $args$$9$$, 2);
  return $element$$19_tagName$$3_tagNameArr$$
}
function $goog$dom$append_$$($doc$$13$$, $parent$$6$$, $args$$10$$, $i$$52_startIndex$$) {
  function $childHandler$$($child$$1$$) {
    $child$$1$$ && $parent$$6$$.appendChild($goog$isString$$($child$$1$$) ? $doc$$13$$.createTextNode($child$$1$$) : $child$$1$$)
  }
  for(;$i$$52_startIndex$$ < $args$$10$$.length;$i$$52_startIndex$$++) {
    var $arg$$5$$ = $args$$10$$[$i$$52_startIndex$$];
    $goog$isArrayLike$$($arg$$5$$) && !($goog$isObject$$($arg$$5$$) && 0 < $arg$$5$$.nodeType) ? $goog$array$forEach$$($goog$dom$isNodeList$$($arg$$5$$) ? $goog$array$toArray$$($arg$$5$$) : $arg$$5$$, $childHandler$$) : $childHandler$$($arg$$5$$)
  }
}
function $goog$dom$appendChild$$($parent$$7$$, $child$$2$$) {
  $parent$$7$$.appendChild($child$$2$$)
}
function $goog$dom$append$$($parent$$8$$, $var_args$$68$$) {
  $goog$dom$append_$$($goog$dom$getOwnerDocument$$($parent$$8$$), $parent$$8$$, arguments, 1)
}
function $goog$dom$removeChildren$$($node$$6$$) {
  for(var $child$$3$$;$child$$3$$ = $node$$6$$.firstChild;) {
    $node$$6$$.removeChild($child$$3$$)
  }
}
function $goog$dom$insertSiblingBefore$$($newNode$$1$$, $refNode$$8$$) {
  $refNode$$8$$.parentNode && $refNode$$8$$.parentNode.insertBefore($newNode$$1$$, $refNode$$8$$)
}
function $goog$dom$insertChildAt$$($parent$$9$$, $child$$4$$, $index$$54$$) {
  $parent$$9$$.insertBefore($child$$4$$, $parent$$9$$.childNodes[$index$$54$$] || $JSCompiler_alias_NULL$$)
}
function $goog$dom$removeNode$$($node$$7$$) {
  return $node$$7$$ && $node$$7$$.parentNode ? $node$$7$$.parentNode.removeChild($node$$7$$) : $JSCompiler_alias_NULL$$
}
function $goog$dom$getChildren$$($element$$21$$) {
  return $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ && $element$$21$$.children != $JSCompiler_alias_VOID$$ ? $element$$21$$.children : $goog$array$filter$$($element$$21$$.childNodes, function($node$$8$$) {
    return 1 == $node$$8$$.nodeType
  })
}
function $goog$dom$getFirstElementChild$$($node$$9$$) {
  return $node$$9$$.firstElementChild != $JSCompiler_alias_VOID$$ ? $node$$9$$.firstElementChild : $goog$dom$getNextElementNode_$$($node$$9$$.firstChild)
}
function $goog$dom$getNextElementSibling$$($node$$11$$) {
  return $node$$11$$.nextElementSibling != $JSCompiler_alias_VOID$$ ? $node$$11$$.nextElementSibling : $goog$dom$getNextElementNode_$$($node$$11$$.nextSibling)
}
function $goog$dom$getNextElementNode_$$($node$$13$$) {
  for(;$node$$13$$ && 1 != $node$$13$$.nodeType;) {
    $node$$13$$ = $node$$13$$.nextSibling
  }
  return $node$$13$$
}
function $goog$dom$getParentElement$$($element$$22_parent$$12$$) {
  if($goog$dom$BrowserFeature$CAN_USE_PARENT_ELEMENT_PROPERTY$$) {
    return $element$$22_parent$$12$$.parentElement
  }
  $element$$22_parent$$12$$ = $element$$22_parent$$12$$.parentNode;
  return $goog$isObject$$($element$$22_parent$$12$$) && 1 == $element$$22_parent$$12$$.nodeType ? $element$$22_parent$$12$$ : $JSCompiler_alias_NULL$$
}
function $goog$dom$contains$$($parent$$13$$, $descendant$$) {
  if($parent$$13$$.contains && 1 == $descendant$$.nodeType) {
    return $parent$$13$$ == $descendant$$ || $parent$$13$$.contains($descendant$$)
  }
  if("undefined" != typeof $parent$$13$$.compareDocumentPosition) {
    return $parent$$13$$ == $descendant$$ || Boolean($parent$$13$$.compareDocumentPosition($descendant$$) & 16)
  }
  for(;$descendant$$ && $parent$$13$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode
  }
  return $descendant$$ == $parent$$13$$
}
function $goog$dom$getOwnerDocument$$($node$$18$$) {
  return 9 == $node$$18$$.nodeType ? $node$$18$$ : $node$$18$$.ownerDocument || $node$$18$$.document
}
function $goog$dom$setTextContent$$($element$$23$$, $text$$7$$) {
  if("textContent" in $element$$23$$) {
    $element$$23$$.textContent = $text$$7$$
  }else {
    if($element$$23$$.firstChild && 3 == $element$$23$$.firstChild.nodeType) {
      for(;$element$$23$$.lastChild != $element$$23$$.firstChild;) {
        $element$$23$$.removeChild($element$$23$$.lastChild)
      }
      $element$$23$$.firstChild.data = $text$$7$$
    }else {
      $goog$dom$removeChildren$$($element$$23$$), $element$$23$$.appendChild($goog$dom$getOwnerDocument$$($element$$23$$).createTextNode(String($text$$7$$)))
    }
  }
}
var $goog$dom$TAGS_TO_IGNORE_$$ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, $goog$dom$PREDEFINED_TAG_VALUES_$$ = {IMG:" ", BR:"\n"};
function $goog$dom$isFocusableTabIndex$$($element$$25_index$$55$$) {
  var $attrNode$$ = $element$$25_index$$55$$.getAttributeNode("tabindex");
  return $attrNode$$ && $attrNode$$.specified ? ($element$$25_index$$55$$ = $element$$25_index$$55$$.tabIndex, $goog$isNumber$$($element$$25_index$$55$$) && 0 <= $element$$25_index$$55$$ && 32768 > $element$$25_index$$55$$) : $JSCompiler_alias_FALSE$$
}
function $goog$dom$setFocusableTabIndex$$($element$$26$$, $enable$$) {
  $enable$$ ? $element$$26$$.tabIndex = 0 : ($element$$26$$.tabIndex = -1, $element$$26$$.removeAttribute("tabIndex"))
}
function $goog$dom$getTextContent$$($node$$19_textContent$$) {
  if($goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ && "innerText" in $node$$19_textContent$$) {
    $node$$19_textContent$$ = $node$$19_textContent$$.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var $buf$$ = [];
    $goog$dom$getTextContent_$$($node$$19_textContent$$, $buf$$, $JSCompiler_alias_TRUE$$);
    $node$$19_textContent$$ = $buf$$.join("")
  }
  $node$$19_textContent$$ = $node$$19_textContent$$.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  $node$$19_textContent$$ = $node$$19_textContent$$.replace(/\u200B/g, "");
  $goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ || ($node$$19_textContent$$ = $node$$19_textContent$$.replace(/ +/g, " "));
  " " != $node$$19_textContent$$ && ($node$$19_textContent$$ = $node$$19_textContent$$.replace(/^\s*/, ""));
  return $node$$19_textContent$$
}
function $goog$dom$getRawTextContent$$($node$$20$$) {
  var $buf$$1$$ = [];
  $goog$dom$getTextContent_$$($node$$20$$, $buf$$1$$, $JSCompiler_alias_FALSE$$);
  return $buf$$1$$.join("")
}
function $goog$dom$getTextContent_$$($child$$7_node$$21$$, $buf$$2$$, $normalizeWhitespace$$) {
  if(!($child$$7_node$$21$$.nodeName in $goog$dom$TAGS_TO_IGNORE_$$)) {
    if(3 == $child$$7_node$$21$$.nodeType) {
      $normalizeWhitespace$$ ? $buf$$2$$.push(String($child$$7_node$$21$$.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : $buf$$2$$.push($child$$7_node$$21$$.nodeValue)
    }else {
      if($child$$7_node$$21$$.nodeName in $goog$dom$PREDEFINED_TAG_VALUES_$$) {
        $buf$$2$$.push($goog$dom$PREDEFINED_TAG_VALUES_$$[$child$$7_node$$21$$.nodeName])
      }else {
        for($child$$7_node$$21$$ = $child$$7_node$$21$$.firstChild;$child$$7_node$$21$$;) {
          $goog$dom$getTextContent_$$($child$$7_node$$21$$, $buf$$2$$, $normalizeWhitespace$$), $child$$7_node$$21$$ = $child$$7_node$$21$$.nextSibling
        }
      }
    }
  }
}
function $goog$dom$isNodeList$$($val$$21$$) {
  if($val$$21$$ && "number" == typeof $val$$21$$.length) {
    if($goog$isObject$$($val$$21$$)) {
      return"function" == typeof $val$$21$$.item || "string" == typeof $val$$21$$.item
    }
    if($goog$isFunction$$($val$$21$$)) {
      return"function" == typeof $val$$21$$.item
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $goog$dom$getAncestorByTagNameAndClass$$($element$$27$$, $opt_tag$$2$$, $opt_class$$2$$) {
  if(!$opt_tag$$2$$ && !$opt_class$$2$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $tagName$$4$$ = $opt_tag$$2$$ ? $opt_tag$$2$$.toUpperCase() : $JSCompiler_alias_NULL$$;
  return $goog$dom$getAncestor$$($element$$27$$, function($node$$24$$) {
    return(!$tagName$$4$$ || $node$$24$$.nodeName == $tagName$$4$$) && (!$opt_class$$2$$ || $goog$dom$classes$has$$($node$$24$$, $opt_class$$2$$))
  })
}
function $goog$dom$getAncestor$$($element$$29$$, $matcher$$) {
  for(var $steps$$ = 0;$element$$29$$;) {
    if($matcher$$($element$$29$$)) {
      return $element$$29$$
    }
    $element$$29$$ = $element$$29$$.parentNode;
    $steps$$++
  }
  return $JSCompiler_alias_NULL$$
}
function $goog$dom$DomHelper$$($opt_document$$) {
  this.$document_$ = $opt_document$$ || $goog$global$$.document || document
}
$JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype;
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $goog$dom$getDomHelper$$;
function $JSCompiler_StaticMethods_getDocument$$($JSCompiler_StaticMethods_getDocument$self$$) {
  return $JSCompiler_StaticMethods_getDocument$self$$.$document_$
}
$JSCompiler_prototypeAlias$$.$getElement$ = function $$JSCompiler_prototypeAlias$$$$getElement$$($element$$30$$) {
  return $goog$isString$$($element$$30$$) ? this.$document_$.getElementById($element$$30$$) : $element$$30$$
};
$JSCompiler_prototypeAlias$$.$getElementsByClass$ = function $$JSCompiler_prototypeAlias$$$$getElementsByClass$$($className$$13$$, $opt_el$$5$$) {
  return $goog$dom$getElementsByClass$$($className$$13$$, $opt_el$$5$$ || this.$document_$)
};
$JSCompiler_prototypeAlias$$.$getElementByClass$ = function $$JSCompiler_prototypeAlias$$$$getElementByClass$$($className$$14$$, $opt_el$$6$$) {
  return $goog$dom$getElementByClass$$($className$$14$$, $opt_el$$6$$ || this.$document_$)
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($tagName$$5$$, $opt_attributes$$1$$, $var_args$$70$$) {
  return $goog$dom$createDom_$$(this.$document_$, arguments)
};
$JSCompiler_prototypeAlias$$.createElement = function $$JSCompiler_prototypeAlias$$$createElement$($name$$64$$) {
  return this.$document_$.createElement($name$$64$$)
};
$JSCompiler_prototypeAlias$$.createTextNode = function $$JSCompiler_prototypeAlias$$$createTextNode$($content$$5$$) {
  return this.$document_$.createTextNode(String($content$$5$$))
};
function $JSCompiler_StaticMethods_getDocumentScroll$$($JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_119$$) {
  var $doc$$inline_118_win$$inline_120$$ = $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_119$$.$document_$;
  $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_119$$ = !$goog$userAgent$WEBKIT$$ && "CSS1Compat" == $doc$$inline_118_win$$inline_120$$.compatMode ? $doc$$inline_118_win$$inline_120$$.documentElement : $doc$$inline_118_win$$inline_120$$.body;
  $doc$$inline_118_win$$inline_120$$ = $goog$dom$getWindow_$$($doc$$inline_118_win$$inline_120$$);
  return new $goog$math$Coordinate$$($doc$$inline_118_win$$inline_120$$.pageXOffset || $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_119$$.scrollLeft, $doc$$inline_118_win$$inline_120$$.pageYOffset || $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_119$$.scrollTop)
}
$JSCompiler_prototypeAlias$$.appendChild = $goog$dom$appendChild$$;
$JSCompiler_prototypeAlias$$.$removeChildren$ = $goog$dom$removeChildren$$;
$JSCompiler_prototypeAlias$$.$insertSiblingBefore$ = $goog$dom$insertSiblingBefore$$;
$JSCompiler_prototypeAlias$$.$insertChildAt$ = $goog$dom$insertChildAt$$;
$JSCompiler_prototypeAlias$$.removeNode = $goog$dom$removeNode$$;
$JSCompiler_prototypeAlias$$.$getChildren$ = $goog$dom$getChildren$$;
$JSCompiler_prototypeAlias$$.$getFirstElementChild$ = $goog$dom$getFirstElementChild$$;
$JSCompiler_prototypeAlias$$.contains = $goog$dom$contains$$;
$JSCompiler_prototypeAlias$$.$setTextContent$ = $goog$dom$setTextContent$$;
// Input 15
function $goog$soy$renderElement$$($element$$31$$, $template$$1$$, $opt_templateData$$) {
  $element$$31$$.innerHTML = $goog$soy$verifyTemplateOutputSafe_$$($template$$1$$($opt_templateData$$ || $goog$soy$defaultTemplateData_$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$))
}
function $goog$soy$renderAsElement$$($firstChild_template$$3$$, $opt_templateData$$2$$, $opt_injectedData$$2$$, $opt_domHelper$$1_wrapper$$) {
  $opt_domHelper$$1_wrapper$$ = ($opt_domHelper$$1_wrapper$$ || $goog$dom$getDomHelper$$()).createElement("DIV");
  $opt_domHelper$$1_wrapper$$.innerHTML = $goog$soy$verifyTemplateOutputSafe_$$($firstChild_template$$3$$($opt_templateData$$2$$ || $goog$soy$defaultTemplateData_$$, $JSCompiler_alias_VOID$$, $opt_injectedData$$2$$));
  return 1 == $opt_domHelper$$1_wrapper$$.childNodes.length && ($firstChild_template$$3$$ = $opt_domHelper$$1_wrapper$$.firstChild, 1 == $firstChild_template$$3$$.nodeType) ? $firstChild_template$$3$$ : $opt_domHelper$$1_wrapper$$
}
function $goog$soy$verifyTemplateOutputSafe_$$($templateResult$$) {
  return!$goog$isObject$$($templateResult$$) ? String($templateResult$$) : "zSoyz"
}
var $goog$soy$defaultTemplateData_$$ = {};
// Input 16
function $goog$math$Box$$($top$$2$$, $right$$5$$, $bottom$$1$$, $left$$5$$) {
  this.top = $top$$2$$;
  this.right = $right$$5$$;
  this.bottom = $bottom$$1$$;
  this.left = $left$$5$$
}
$JSCompiler_prototypeAlias$$ = $goog$math$Box$$.prototype;
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$math$Box$$(this.top, this.right, this.bottom, this.left)
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($other$$4$$) {
  return!this || !$other$$4$$ ? $JSCompiler_alias_FALSE$$ : $other$$4$$ instanceof $goog$math$Box$$ ? $other$$4$$.left >= this.left && $other$$4$$.right <= this.right && $other$$4$$.top >= this.top && $other$$4$$.bottom <= this.bottom : $other$$4$$.x >= this.left && $other$$4$$.x <= this.right && $other$$4$$.y >= this.top && $other$$4$$.y <= this.bottom
};
$JSCompiler_prototypeAlias$$.ceil = function $$JSCompiler_prototypeAlias$$$ceil$() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this
};
$JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};
$JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};
// Input 17
function $goog$math$Rect$$($x$$59$$, $y$$37$$, $w$$5$$, $h$$4$$) {
  this.left = $x$$59$$;
  this.top = $y$$37$$;
  this.width = $w$$5$$;
  this.height = $h$$4$$
}
$JSCompiler_prototypeAlias$$ = $goog$math$Rect$$.prototype;
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$math$Rect$$(this.left, this.top, this.width, this.height)
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($another$$) {
  return $another$$ instanceof $goog$math$Rect$$ ? this.left <= $another$$.left && this.left + this.width >= $another$$.left + $another$$.width && this.top <= $another$$.top && this.top + this.height >= $another$$.top + $another$$.height : $another$$.x >= this.left && $another$$.x <= this.left + this.width && $another$$.y >= this.top && $another$$.y <= this.top + this.height
};
$JSCompiler_prototypeAlias$$.ceil = function $$JSCompiler_prototypeAlias$$$ceil$() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
$JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
$JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
// Input 18
// Input 19
function $goog$style$setStyle$$($element$$32$$, $style$$, $opt_value$$5$$) {
  $goog$isString$$($style$$) ? $goog$style$setStyle_$$($element$$32$$, $opt_value$$5$$, $style$$) : $goog$object$forEach$$($style$$, $goog$partial$$($goog$style$setStyle_$$, $element$$32$$))
}
function $goog$style$setStyle_$$($element$$33$$, $value$$67$$, $prefixedStyle$$inline_125_style$$1$$) {
  var $camelStyle$$inline_124_propertyName$$8$$;
  a: {
    if($camelStyle$$inline_124_propertyName$$8$$ = $goog$string$toCamelCase$$($prefixedStyle$$inline_125_style$$1$$), $element$$33$$.style[$camelStyle$$inline_124_propertyName$$8$$] === $JSCompiler_alias_VOID$$ && ($prefixedStyle$$inline_125_style$$1$$ = ($goog$userAgent$WEBKIT$$ ? "Webkit" : $goog$userAgent$GECKO$$ ? "Moz" : $goog$userAgent$IE$$ ? "ms" : $goog$userAgent$OPERA$$ ? "O" : $JSCompiler_alias_NULL$$) + $goog$string$toTitleCase$$($prefixedStyle$$inline_125_style$$1$$), $element$$33$$.style[$prefixedStyle$$inline_125_style$$1$$] !== 
    $JSCompiler_alias_VOID$$)) {
      $camelStyle$$inline_124_propertyName$$8$$ = $prefixedStyle$$inline_125_style$$1$$;
      break a
    }
  }
  $camelStyle$$inline_124_propertyName$$8$$ && ($element$$33$$.style[$camelStyle$$inline_124_propertyName$$8$$] = $value$$67$$)
}
function $goog$style$getComputedStyle$$($element$$37$$, $property$$4$$) {
  var $doc$$24_styles$$ = $goog$dom$getOwnerDocument$$($element$$37$$);
  return $doc$$24_styles$$.defaultView && $doc$$24_styles$$.defaultView.getComputedStyle && ($doc$$24_styles$$ = $doc$$24_styles$$.defaultView.getComputedStyle($element$$37$$, $JSCompiler_alias_NULL$$)) ? $doc$$24_styles$$[$property$$4$$] || $doc$$24_styles$$.getPropertyValue($property$$4$$) || "" : ""
}
function $goog$style$getStyle_$$($element$$39$$, $style$$5$$) {
  return $goog$style$getComputedStyle$$($element$$39$$, $style$$5$$) || ($element$$39$$.currentStyle ? $element$$39$$.currentStyle[$style$$5$$] : $JSCompiler_alias_NULL$$) || $element$$39$$.style && $element$$39$$.style[$style$$5$$]
}
function $goog$style$setPosition$$($el$$4$$, $arg1$$76_y$$38$$, $opt_arg2$$) {
  var $x$$60$$, $buggyGeckoSubPixelPos$$ = $goog$userAgent$GECKO$$ && ($goog$userAgent$detectedMac_$$ || $goog$userAgent$X11$$) && $goog$userAgent$isVersion$$("1.9");
  $arg1$$76_y$$38$$ instanceof $goog$math$Coordinate$$ ? ($x$$60$$ = $arg1$$76_y$$38$$.x, $arg1$$76_y$$38$$ = $arg1$$76_y$$38$$.y) : ($x$$60$$ = $arg1$$76_y$$38$$, $arg1$$76_y$$38$$ = $opt_arg2$$);
  $el$$4$$.style.left = $goog$style$getPixelStyleValue_$$($x$$60$$, $buggyGeckoSubPixelPos$$);
  $el$$4$$.style.top = $goog$style$getPixelStyleValue_$$($arg1$$76_y$$38$$, $buggyGeckoSubPixelPos$$)
}
function $goog$style$setSize$$($element$$52$$, $w$$6$$, $h$$5_opt_h$$) {
  $w$$6$$ instanceof $goog$math$Size$$ ? ($h$$5_opt_h$$ = $w$$6$$.height, $w$$6$$ = $w$$6$$.width) : $h$$5_opt_h$$ == $JSCompiler_alias_VOID$$ && $JSCompiler_alias_THROW$$(Error("missing height argument"));
  $goog$style$setWidth$$($element$$52$$, $w$$6$$);
  $element$$52$$.style.height = $goog$style$getPixelStyleValue_$$($h$$5_opt_h$$, $JSCompiler_alias_TRUE$$)
}
function $goog$style$getPixelStyleValue_$$($value$$68$$, $round$$) {
  "number" == typeof $value$$68$$ && ($value$$68$$ = ($round$$ ? Math.round($value$$68$$) : $value$$68$$) + "px");
  return $value$$68$$
}
function $goog$style$setWidth$$($element$$54$$, $width$$13$$) {
  $element$$54$$.style.width = $goog$style$getPixelStyleValue_$$($width$$13$$, $JSCompiler_alias_TRUE$$)
}
function $goog$style$getSize$$($element$$55_size$$10$$) {
  if("none" != $goog$style$getStyle_$$($element$$55_size$$10$$, "display")) {
    return $goog$style$getSizeWithDisplay_$$($element$$55_size$$10$$)
  }
  var $style$$6$$ = $element$$55_size$$10$$.style, $originalDisplay$$ = $style$$6$$.display, $originalVisibility$$ = $style$$6$$.visibility, $originalPosition$$ = $style$$6$$.position;
  $style$$6$$.visibility = "hidden";
  $style$$6$$.position = "absolute";
  $style$$6$$.display = "inline";
  $element$$55_size$$10$$ = $goog$style$getSizeWithDisplay_$$($element$$55_size$$10$$);
  $style$$6$$.display = $originalDisplay$$;
  $style$$6$$.position = $originalPosition$$;
  $style$$6$$.visibility = $originalVisibility$$;
  return $element$$55_size$$10$$
}
function $goog$style$getSizeWithDisplay_$$($doc$$inline_132_element$$56$$) {
  var $offsetWidth_rect$$inline_131$$ = $doc$$inline_132_element$$56$$.offsetWidth, $offsetHeight$$ = $doc$$inline_132_element$$56$$.offsetHeight, $webkitOffsetsZero$$ = $goog$userAgent$WEBKIT$$ && !$offsetWidth_rect$$inline_131$$ && !$offsetHeight$$;
  return(!$goog$isDef$$($offsetWidth_rect$$inline_131$$) || $webkitOffsetsZero$$) && $doc$$inline_132_element$$56$$.getBoundingClientRect ? ($offsetWidth_rect$$inline_131$$ = $doc$$inline_132_element$$56$$.getBoundingClientRect(), $goog$userAgent$IE$$ && ($doc$$inline_132_element$$56$$ = $doc$$inline_132_element$$56$$.ownerDocument, $offsetWidth_rect$$inline_131$$.left -= $doc$$inline_132_element$$56$$.documentElement.clientLeft + $doc$$inline_132_element$$56$$.body.clientLeft, $offsetWidth_rect$$inline_131$$.top -= 
  $doc$$inline_132_element$$56$$.documentElement.clientTop + $doc$$inline_132_element$$56$$.body.clientTop), new $goog$math$Size$$($offsetWidth_rect$$inline_131$$.right - $offsetWidth_rect$$inline_131$$.left, $offsetWidth_rect$$inline_131$$.bottom - $offsetWidth_rect$$inline_131$$.top)) : new $goog$math$Size$$($offsetWidth_rect$$inline_131$$, $offsetHeight$$)
}
function $goog$style$setOpacity$$($el$$15$$, $alpha$$3$$) {
  var $style$$8$$ = $el$$15$$.style;
  "opacity" in $style$$8$$ ? $style$$8$$.opacity = $alpha$$3$$ : "MozOpacity" in $style$$8$$ ? $style$$8$$.MozOpacity = $alpha$$3$$ : "filter" in $style$$8$$ && ($style$$8$$.filter = "" === $alpha$$3$$ ? "" : "alpha(opacity=" + 100 * $alpha$$3$$ + ")")
}
function $goog$style$showElement$$($el$$18$$, $display$$) {
  $el$$18$$.style.display = $display$$ ? "" : "none"
}
function $goog$style$isRightToLeft$$($el$$22$$) {
  return"rtl" == $goog$style$getStyle_$$($el$$22$$, "direction")
}
var $goog$style$unselectableStyle_$$ = $goog$userAgent$GECKO$$ ? "MozUserSelect" : $goog$userAgent$WEBKIT$$ ? "WebkitUserSelect" : $JSCompiler_alias_NULL$$, $goog$style$ieBorderWidthKeywords_$$ = {thin:2, medium:4, thick:6};
function $goog$style$getIePixelBorder_$$($element$$69$$, $prop$$4$$) {
  if("none" == ($element$$69$$.currentStyle ? $element$$69$$.currentStyle[$prop$$4$$ + "Style"] : $JSCompiler_alias_NULL$$)) {
    return 0
  }
  var $pixelValue$$inline_140_width$$15$$ = $element$$69$$.currentStyle ? $element$$69$$.currentStyle[$prop$$4$$ + "Width"] : $JSCompiler_alias_NULL$$, $JSCompiler_temp$$14_oldStyleValue$$inline_138$$;
  if($pixelValue$$inline_140_width$$15$$ in $goog$style$ieBorderWidthKeywords_$$) {
    $JSCompiler_temp$$14_oldStyleValue$$inline_138$$ = $goog$style$ieBorderWidthKeywords_$$[$pixelValue$$inline_140_width$$15$$]
  }else {
    if(/^\d+px?$/.test($pixelValue$$inline_140_width$$15$$)) {
      $JSCompiler_temp$$14_oldStyleValue$$inline_138$$ = parseInt($pixelValue$$inline_140_width$$15$$, 10)
    }else {
      $JSCompiler_temp$$14_oldStyleValue$$inline_138$$ = $element$$69$$.style.left;
      var $oldRuntimeValue$$inline_139$$ = $element$$69$$.runtimeStyle.left;
      $element$$69$$.runtimeStyle.left = $element$$69$$.currentStyle.left;
      $element$$69$$.style.left = $pixelValue$$inline_140_width$$15$$;
      $pixelValue$$inline_140_width$$15$$ = $element$$69$$.style.pixelLeft;
      $element$$69$$.style.left = $JSCompiler_temp$$14_oldStyleValue$$inline_138$$;
      $element$$69$$.runtimeStyle.left = $oldRuntimeValue$$inline_139$$;
      $JSCompiler_temp$$14_oldStyleValue$$inline_138$$ = $pixelValue$$inline_140_width$$15$$
    }
  }
  return $JSCompiler_temp$$14_oldStyleValue$$inline_138$$
}
function $goog$style$getBorderBox$$($bottom$$5_element$$70$$) {
  if($goog$userAgent$IE$$) {
    var $left$$8$$ = $goog$style$getIePixelBorder_$$($bottom$$5_element$$70$$, "borderLeft"), $right$$9$$ = $goog$style$getIePixelBorder_$$($bottom$$5_element$$70$$, "borderRight"), $top$$6$$ = $goog$style$getIePixelBorder_$$($bottom$$5_element$$70$$, "borderTop");
    $bottom$$5_element$$70$$ = $goog$style$getIePixelBorder_$$($bottom$$5_element$$70$$, "borderBottom");
    return new $goog$math$Box$$($top$$6$$, $right$$9$$, $bottom$$5_element$$70$$, $left$$8$$)
  }
  $left$$8$$ = $goog$style$getComputedStyle$$($bottom$$5_element$$70$$, "borderLeftWidth");
  $right$$9$$ = $goog$style$getComputedStyle$$($bottom$$5_element$$70$$, "borderRightWidth");
  $top$$6$$ = $goog$style$getComputedStyle$$($bottom$$5_element$$70$$, "borderTopWidth");
  $bottom$$5_element$$70$$ = $goog$style$getComputedStyle$$($bottom$$5_element$$70$$, "borderBottomWidth");
  return new $goog$math$Box$$(parseFloat($top$$6$$), parseFloat($right$$9$$), parseFloat($bottom$$5_element$$70$$), parseFloat($left$$8$$))
}
;
// Input 20
// Input 21
// Input 22
function $goog$Disposable$$() {
  0 != $goog$Disposable$MonitoringMode$OFF$$ && (this.$creationStack$ = Error().stack, $goog$Disposable$instances_$$[$goog$getUid$$(this)] = this)
}
var $goog$Disposable$MonitoringMode$OFF$$ = 0, $goog$Disposable$instances_$$ = {};
$goog$Disposable$$.prototype.$disposed_$ = $JSCompiler_alias_FALSE$$;
$goog$Disposable$$.prototype.$dispose$ = function $$goog$Disposable$$$$$dispose$$() {
  if(!this.$disposed_$ && (this.$disposed_$ = $JSCompiler_alias_TRUE$$, this.$disposeInternal$(), 0 != $goog$Disposable$MonitoringMode$OFF$$)) {
    var $uid$$ = $goog$getUid$$(this);
    delete $goog$Disposable$instances_$$[$uid$$]
  }
};
$goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
  if(this.$onDisposeCallbacks_$) {
    for(;this.$onDisposeCallbacks_$.length;) {
      this.$onDisposeCallbacks_$.shift()()
    }
  }
};
function $goog$dispose$$($obj$$82$$) {
  $obj$$82$$ && "function" == typeof $obj$$82$$.$dispose$ && $obj$$82$$.$dispose$()
}
;
// Input 23
function $goog$events$Event$$($type$$57$$, $opt_target$$1$$) {
  this.type = $type$$57$$;
  this.currentTarget = this.target = $opt_target$$1$$
}
$JSCompiler_prototypeAlias$$ = $goog$events$Event$$.prototype;
$JSCompiler_prototypeAlias$$.$disposeInternal$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$dispose$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$propagationStopped_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.defaultPrevented = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$returnValue_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.stopPropagation = function $$JSCompiler_prototypeAlias$$$stopPropagation$() {
  this.$propagationStopped_$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  this.defaultPrevented = $JSCompiler_alias_TRUE$$;
  this.$returnValue_$ = $JSCompiler_alias_FALSE$$
};
function $goog$events$Event$preventDefault$$($e$$15$$) {
  $e$$15$$.preventDefault()
}
;
// Input 24
var $goog$events$ListenableKey$counter_$$ = 0;
// Input 25
function $goog$events$Listener$$() {
}
$JSCompiler_prototypeAlias$$ = $goog$events$Listener$$.prototype;
$JSCompiler_prototypeAlias$$.key = 0;
$JSCompiler_prototypeAlias$$.$removed$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$callOnce$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$($listener$$32$$, $proxy$$, $src$$5$$, $type$$58$$, $capture$$, $opt_handler$$) {
  $goog$isFunction$$($listener$$32$$) ? this.$isFunctionListener_$ = $JSCompiler_alias_TRUE$$ : $listener$$32$$ && $listener$$32$$.handleEvent && $goog$isFunction$$($listener$$32$$.handleEvent) ? this.$isFunctionListener_$ = $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_THROW$$(Error("Invalid listener argument"));
  this.$listener$ = $listener$$32$$;
  this.proxy = $proxy$$;
  this.src = $src$$5$$;
  this.type = $type$$58$$;
  this.capture = !!$capture$$;
  this.$handler$ = $opt_handler$$;
  this.$callOnce$ = $JSCompiler_alias_FALSE$$;
  this.key = ++$goog$events$ListenableKey$counter_$$;
  this.$removed$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$($eventObject$$) {
  return this.$isFunctionListener_$ ? this.$listener$.call(this.$handler$ || this.src, $eventObject$$) : this.$listener$.handleEvent.call(this.$listener$, $eventObject$$)
};
// Input 26
var $goog$events$BrowserFeature$HAS_W3C_BUTTON$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("9");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersion$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && !$goog$userAgent$isVersion$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
// Input 27
// Input 28
// Input 29
// Input 30
function $goog$reflect$sinkValue$$($x$$62$$) {
  $goog$reflect$sinkValue$$[" "]($x$$62$$);
  return $x$$62$$
}
$goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
// Input 31
function $goog$events$BrowserEvent$$($opt_e$$, $opt_currentTarget$$) {
  $opt_e$$ && this.init($opt_e$$, $opt_currentTarget$$)
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
var $goog$events$BrowserEvent$IEButtonMap$$ = [1, 4, 2];
$JSCompiler_prototypeAlias$$ = $goog$events$BrowserEvent$$.prototype;
$JSCompiler_prototypeAlias$$.target = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.relatedTarget = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.offsetX = 0;
$JSCompiler_prototypeAlias$$.offsetY = 0;
$JSCompiler_prototypeAlias$$.clientX = 0;
$JSCompiler_prototypeAlias$$.clientY = 0;
$JSCompiler_prototypeAlias$$.screenX = 0;
$JSCompiler_prototypeAlias$$.screenY = 0;
$JSCompiler_prototypeAlias$$.button = 0;
$JSCompiler_prototypeAlias$$.keyCode = 0;
$JSCompiler_prototypeAlias$$.charCode = 0;
$JSCompiler_prototypeAlias$$.ctrlKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.altKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.shiftKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.metaKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$platformModifierKey$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$event_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$($e$$17$$, $opt_currentTarget$$1$$) {
  var $type$$60$$ = this.type = $e$$17$$.type;
  $goog$events$Event$$.call(this, $type$$60$$);
  this.target = $e$$17$$.target || $e$$17$$.srcElement;
  this.currentTarget = $opt_currentTarget$$1$$;
  var $relatedTarget$$ = $e$$17$$.relatedTarget;
  if($relatedTarget$$) {
    if($goog$userAgent$GECKO$$) {
      var $JSCompiler_inline_result$$29$$;
      a: {
        try {
          $goog$reflect$sinkValue$$($relatedTarget$$.nodeName);
          $JSCompiler_inline_result$$29$$ = $JSCompiler_alias_TRUE$$;
          break a
        }catch($e$$inline_144$$) {
        }
        $JSCompiler_inline_result$$29$$ = $JSCompiler_alias_FALSE$$
      }
      $JSCompiler_inline_result$$29$$ || ($relatedTarget$$ = $JSCompiler_alias_NULL$$)
    }
  }else {
    "mouseover" == $type$$60$$ ? $relatedTarget$$ = $e$$17$$.fromElement : "mouseout" == $type$$60$$ && ($relatedTarget$$ = $e$$17$$.toElement)
  }
  this.relatedTarget = $relatedTarget$$;
  this.offsetX = $goog$userAgent$WEBKIT$$ || $e$$17$$.offsetX !== $JSCompiler_alias_VOID$$ ? $e$$17$$.offsetX : $e$$17$$.layerX;
  this.offsetY = $goog$userAgent$WEBKIT$$ || $e$$17$$.offsetY !== $JSCompiler_alias_VOID$$ ? $e$$17$$.offsetY : $e$$17$$.layerY;
  this.clientX = $e$$17$$.clientX !== $JSCompiler_alias_VOID$$ ? $e$$17$$.clientX : $e$$17$$.pageX;
  this.clientY = $e$$17$$.clientY !== $JSCompiler_alias_VOID$$ ? $e$$17$$.clientY : $e$$17$$.pageY;
  this.screenX = $e$$17$$.screenX || 0;
  this.screenY = $e$$17$$.screenY || 0;
  this.button = $e$$17$$.button;
  this.keyCode = $e$$17$$.keyCode || 0;
  this.charCode = $e$$17$$.charCode || ("keypress" == $type$$60$$ ? $e$$17$$.keyCode : 0);
  this.ctrlKey = $e$$17$$.ctrlKey;
  this.altKey = $e$$17$$.altKey;
  this.shiftKey = $e$$17$$.shiftKey;
  this.metaKey = $e$$17$$.metaKey;
  this.$platformModifierKey$ = $goog$userAgent$detectedMac_$$ ? $e$$17$$.metaKey : $e$$17$$.ctrlKey;
  this.state = $e$$17$$.state;
  this.$event_$ = $e$$17$$;
  $e$$17$$.defaultPrevented && this.preventDefault();
  delete this.$propagationStopped_$
};
function $JSCompiler_StaticMethods_isMouseActionButton$$($JSCompiler_StaticMethods_isMouseActionButton$self$$) {
  return($goog$events$BrowserFeature$HAS_W3C_BUTTON$$ ? 0 == $JSCompiler_StaticMethods_isMouseActionButton$self$$.$event_$.button : "click" == $JSCompiler_StaticMethods_isMouseActionButton$self$$.type ? $JSCompiler_alias_TRUE$$ : !!($JSCompiler_StaticMethods_isMouseActionButton$self$$.$event_$.button & $goog$events$BrowserEvent$IEButtonMap$$[0])) && !($goog$userAgent$WEBKIT$$ && $goog$userAgent$detectedMac_$$ && $JSCompiler_StaticMethods_isMouseActionButton$self$$.ctrlKey)
}
$JSCompiler_prototypeAlias$$.stopPropagation = function $$JSCompiler_prototypeAlias$$$stopPropagation$() {
  $goog$events$BrowserEvent$$.$superClass_$.stopPropagation.call(this);
  this.$event_$.stopPropagation ? this.$event_$.stopPropagation() : this.$event_$.cancelBubble = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  $goog$events$BrowserEvent$$.$superClass_$.preventDefault.call(this);
  var $be$$ = this.$event_$;
  if($be$$.preventDefault) {
    $be$$.preventDefault()
  }else {
    if($be$$.returnValue = $JSCompiler_alias_FALSE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
      try {
        if($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1
        }
      }catch($ex$$1$$) {
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = $JSCompiler_emptyFn$$();
// Input 32
var $goog$events$listeners_$$ = {}, $goog$events$listenerTree_$$ = {}, $goog$events$sources_$$ = {}, $goog$events$onStringMap_$$ = {};
function $goog$events$listen$$($listenableKey_src$$8$$, $key$$47_type$$61$$, $listener$$35$$, $opt_capt$$2$$, $opt_handler$$1$$) {
  if($goog$isArray$$($key$$47_type$$61$$)) {
    for(var $i$$62$$ = 0;$i$$62$$ < $key$$47_type$$61$$.length;$i$$62$$++) {
      $goog$events$listen$$($listenableKey_src$$8$$, $key$$47_type$$61$$[$i$$62$$], $listener$$35$$, $opt_capt$$2$$, $opt_handler$$1$$)
    }
    return $JSCompiler_alias_NULL$$
  }
  $listenableKey_src$$8$$ = $goog$events$listen_$$($listenableKey_src$$8$$, $key$$47_type$$61$$, $listener$$35$$, $JSCompiler_alias_FALSE$$, $opt_capt$$2$$, $opt_handler$$1$$);
  $key$$47_type$$61$$ = $listenableKey_src$$8$$.key;
  $goog$events$listeners_$$[$key$$47_type$$61$$] = $listenableKey_src$$8$$;
  return $key$$47_type$$61$$
}
function $goog$events$listen_$$($src$$9$$, $type$$62$$, $listener$$36$$, $callOnce$$, $capture$$1_opt_capt$$3$$, $opt_handler$$2$$) {
  $type$$62$$ || $JSCompiler_alias_THROW$$(Error("Invalid event type"));
  $capture$$1_opt_capt$$3$$ = !!$capture$$1_opt_capt$$3$$;
  var $listenerObj_map$$ = $goog$events$listenerTree_$$;
  $type$$62$$ in $listenerObj_map$$ || ($listenerObj_map$$[$type$$62$$] = {$count_$:0, $remaining_$:0});
  $listenerObj_map$$ = $listenerObj_map$$[$type$$62$$];
  $capture$$1_opt_capt$$3$$ in $listenerObj_map$$ || ($listenerObj_map$$[$capture$$1_opt_capt$$3$$] = {$count_$:0, $remaining_$:0}, $listenerObj_map$$.$count_$++);
  var $listenerObj_map$$ = $listenerObj_map$$[$capture$$1_opt_capt$$3$$], $srcUid$$ = $goog$getUid$$($src$$9$$), $listenerArray$$;
  $listenerObj_map$$.$remaining_$++;
  if($listenerObj_map$$[$srcUid$$]) {
    $listenerArray$$ = $listenerObj_map$$[$srcUid$$];
    for(var $i$$63_proxy$$1$$ = 0;$i$$63_proxy$$1$$ < $listenerArray$$.length;$i$$63_proxy$$1$$++) {
      if($listenerObj_map$$ = $listenerArray$$[$i$$63_proxy$$1$$], $listenerObj_map$$.$listener$ == $listener$$36$$ && $listenerObj_map$$.$handler$ == $opt_handler$$2$$) {
        if($listenerObj_map$$.$removed$) {
          break
        }
        $callOnce$$ || ($listenerArray$$[$i$$63_proxy$$1$$].$callOnce$ = $JSCompiler_alias_FALSE$$);
        return $listenerArray$$[$i$$63_proxy$$1$$]
      }
    }
  }else {
    $listenerArray$$ = $listenerObj_map$$[$srcUid$$] = [], $listenerObj_map$$.$count_$++
  }
  $i$$63_proxy$$1$$ = $goog$events$getProxy$$();
  $listenerObj_map$$ = new $goog$events$Listener$$;
  $listenerObj_map$$.init($listener$$36$$, $i$$63_proxy$$1$$, $src$$9$$, $type$$62$$, $capture$$1_opt_capt$$3$$, $opt_handler$$2$$);
  $listenerObj_map$$.$callOnce$ = $callOnce$$;
  $i$$63_proxy$$1$$.src = $src$$9$$;
  $i$$63_proxy$$1$$.$listener$ = $listenerObj_map$$;
  $listenerArray$$.push($listenerObj_map$$);
  $goog$events$sources_$$[$srcUid$$] || ($goog$events$sources_$$[$srcUid$$] = []);
  $goog$events$sources_$$[$srcUid$$].push($listenerObj_map$$);
  $src$$9$$.addEventListener ? ($src$$9$$ == $goog$global$$ || !$src$$9$$.$customEvent_$) && $src$$9$$.addEventListener($type$$62$$, $i$$63_proxy$$1$$, $capture$$1_opt_capt$$3$$) : $src$$9$$.attachEvent($type$$62$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$62$$] : $goog$events$onStringMap_$$[$type$$62$$] = "on" + $type$$62$$, $i$$63_proxy$$1$$);
  return $listenerObj_map$$
}
function $goog$events$getProxy$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$$26$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$1$$) {
    return $proxyCallbackFunction$$.call($f$$26$$.src, $f$$26$$.$listener$, $eventObject$$1$$)
  } : function($eventObject$$2_v$$) {
    $eventObject$$2_v$$ = $proxyCallbackFunction$$.call($f$$26$$.src, $f$$26$$.$listener$, $eventObject$$2_v$$);
    if(!$eventObject$$2_v$$) {
      return $eventObject$$2_v$$
    }
  };
  return $f$$26$$
}
function $goog$events$listenOnce$$($listenableKey$$1_src$$10$$, $key$$48_type$$63$$, $listener$$37$$, $opt_capt$$4$$, $opt_handler$$3$$) {
  if($goog$isArray$$($key$$48_type$$63$$)) {
    for(var $i$$64$$ = 0;$i$$64$$ < $key$$48_type$$63$$.length;$i$$64$$++) {
      $goog$events$listenOnce$$($listenableKey$$1_src$$10$$, $key$$48_type$$63$$[$i$$64$$], $listener$$37$$, $opt_capt$$4$$, $opt_handler$$3$$)
    }
    return $JSCompiler_alias_NULL$$
  }
  $listenableKey$$1_src$$10$$ = $goog$events$listen_$$($listenableKey$$1_src$$10$$, $key$$48_type$$63$$, $listener$$37$$, $JSCompiler_alias_TRUE$$, $opt_capt$$4$$, $opt_handler$$3$$);
  $key$$48_type$$63$$ = $listenableKey$$1_src$$10$$.key;
  $goog$events$listeners_$$[$key$$48_type$$63$$] = $listenableKey$$1_src$$10$$;
  return $key$$48_type$$63$$
}
function $goog$events$unlisten$$($listenerArray$$1_src$$12$$, $type$$64$$, $listener$$39$$, $capture$$2_opt_capt$$6$$, $opt_handler$$5$$) {
  if($goog$isArray$$($type$$64$$)) {
    for(var $i$$65$$ = 0;$i$$65$$ < $type$$64$$.length;$i$$65$$++) {
      $goog$events$unlisten$$($listenerArray$$1_src$$12$$, $type$$64$$[$i$$65$$], $listener$$39$$, $capture$$2_opt_capt$$6$$, $opt_handler$$5$$)
    }
  }else {
    if($capture$$2_opt_capt$$6$$ = !!$capture$$2_opt_capt$$6$$, $listenerArray$$1_src$$12$$ = $goog$events$getListeners_$$($listenerArray$$1_src$$12$$, $type$$64$$, $capture$$2_opt_capt$$6$$)) {
      for($i$$65$$ = 0;$i$$65$$ < $listenerArray$$1_src$$12$$.length;$i$$65$$++) {
        if($listenerArray$$1_src$$12$$[$i$$65$$].$listener$ == $listener$$39$$ && $listenerArray$$1_src$$12$$[$i$$65$$].capture == $capture$$2_opt_capt$$6$$ && $listenerArray$$1_src$$12$$[$i$$65$$].$handler$ == $opt_handler$$5$$) {
          $goog$events$unlistenByKey$$($listenerArray$$1_src$$12$$[$i$$65$$].key);
          break
        }
      }
    }
  }
}
function $goog$events$unlistenByKey$$($key$$49$$) {
  var $listener$$40_listenerArray$$2$$ = $goog$events$listeners_$$[$key$$49$$];
  if(!$listener$$40_listenerArray$$2$$ || $listener$$40_listenerArray$$2$$.$removed$) {
    return $JSCompiler_alias_FALSE$$
  }
  var $src$$13_srcUid$$1$$ = $listener$$40_listenerArray$$2$$.src, $type$$65$$ = $listener$$40_listenerArray$$2$$.type, $proxy$$2_sourcesArray$$ = $listener$$40_listenerArray$$2$$.proxy, $capture$$3$$ = $listener$$40_listenerArray$$2$$.capture;
  $src$$13_srcUid$$1$$.removeEventListener ? ($src$$13_srcUid$$1$$ == $goog$global$$ || !$src$$13_srcUid$$1$$.$customEvent_$) && $src$$13_srcUid$$1$$.removeEventListener($type$$65$$, $proxy$$2_sourcesArray$$, $capture$$3$$) : $src$$13_srcUid$$1$$.detachEvent && $src$$13_srcUid$$1$$.detachEvent($type$$65$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$65$$] : $goog$events$onStringMap_$$[$type$$65$$] = "on" + $type$$65$$, $proxy$$2_sourcesArray$$);
  $src$$13_srcUid$$1$$ = $goog$getUid$$($src$$13_srcUid$$1$$);
  $goog$events$sources_$$[$src$$13_srcUid$$1$$] && ($proxy$$2_sourcesArray$$ = $goog$events$sources_$$[$src$$13_srcUid$$1$$], $goog$array$remove$$($proxy$$2_sourcesArray$$, $listener$$40_listenerArray$$2$$), 0 == $proxy$$2_sourcesArray$$.length && delete $goog$events$sources_$$[$src$$13_srcUid$$1$$]);
  $listener$$40_listenerArray$$2$$.$removed$ = $JSCompiler_alias_TRUE$$;
  if($listener$$40_listenerArray$$2$$ = $goog$events$listenerTree_$$[$type$$65$$][$capture$$3$$][$src$$13_srcUid$$1$$]) {
    $listener$$40_listenerArray$$2$$.$needsCleanup_$ = $JSCompiler_alias_TRUE$$, $goog$events$cleanUp_$$($type$$65$$, $capture$$3$$, $src$$13_srcUid$$1$$, $listener$$40_listenerArray$$2$$)
  }
  delete $goog$events$listeners_$$[$key$$49$$];
  return $JSCompiler_alias_TRUE$$
}
function $goog$events$cleanUp_$$($type$$66$$, $capture$$4$$, $srcUid$$2$$, $listenerArray$$3$$) {
  if(!$listenerArray$$3$$.$locked_$ && $listenerArray$$3$$.$needsCleanup_$) {
    for(var $oldIndex$$ = 0, $newIndex$$ = 0;$oldIndex$$ < $listenerArray$$3$$.length;$oldIndex$$++) {
      $listenerArray$$3$$[$oldIndex$$].$removed$ ? $listenerArray$$3$$[$oldIndex$$].proxy.src = $JSCompiler_alias_NULL$$ : ($oldIndex$$ != $newIndex$$ && ($listenerArray$$3$$[$newIndex$$] = $listenerArray$$3$$[$oldIndex$$]), $newIndex$$++)
    }
    $listenerArray$$3$$.length = $newIndex$$;
    $listenerArray$$3$$.$needsCleanup_$ = $JSCompiler_alias_FALSE$$;
    0 == $newIndex$$ && (delete $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$][$srcUid$$2$$], $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$].$count_$--, 0 == $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$].$count_$ && (delete $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$], $goog$events$listenerTree_$$[$type$$66$$].$count_$--), 0 == $goog$events$listenerTree_$$[$type$$66$$].$count_$ && delete $goog$events$listenerTree_$$[$type$$66$$])
  }
}
function $goog$events$removeAll$$($opt_obj$$27_sourcesArray$$1_srcUid$$3$$) {
  var $count$$9$$ = 0;
  if($opt_obj$$27_sourcesArray$$1_srcUid$$3$$ != $JSCompiler_alias_NULL$$) {
    if($opt_obj$$27_sourcesArray$$1_srcUid$$3$$ = $goog$getUid$$($opt_obj$$27_sourcesArray$$1_srcUid$$3$$), $goog$events$sources_$$[$opt_obj$$27_sourcesArray$$1_srcUid$$3$$]) {
      $opt_obj$$27_sourcesArray$$1_srcUid$$3$$ = $goog$events$sources_$$[$opt_obj$$27_sourcesArray$$1_srcUid$$3$$];
      for(var $i$$66$$ = $opt_obj$$27_sourcesArray$$1_srcUid$$3$$.length - 1;0 <= $i$$66$$;$i$$66$$--) {
        $goog$events$unlistenByKey$$($opt_obj$$27_sourcesArray$$1_srcUid$$3$$[$i$$66$$].key), $count$$9$$++
      }
    }
  }else {
    $goog$object$forEach$$($goog$events$listeners_$$, function($listener$$43$$, $key$$50$$) {
      $goog$events$unlistenByKey$$($key$$50$$);
      $count$$9$$++
    })
  }
}
function $goog$events$getListeners_$$($obj$$86_objUid$$, $type$$68$$, $capture$$6$$) {
  var $map$$1$$ = $goog$events$listenerTree_$$;
  return $type$$68$$ in $map$$1$$ && ($map$$1$$ = $map$$1$$[$type$$68$$], $capture$$6$$ in $map$$1$$ && ($map$$1$$ = $map$$1$$[$capture$$6$$], $obj$$86_objUid$$ = $goog$getUid$$($obj$$86_objUid$$), $map$$1$$[$obj$$86_objUid$$])) ? $map$$1$$[$obj$$86_objUid$$] : $JSCompiler_alias_NULL$$
}
function $goog$events$fireListeners_$$($map$$4$$, $obj$$89_objUid$$2$$, $type$$72$$, $capture$$9$$, $eventObject$$4$$) {
  var $retval$$ = 1;
  $obj$$89_objUid$$2$$ = $goog$getUid$$($obj$$89_objUid$$2$$);
  if($map$$4$$[$obj$$89_objUid$$2$$]) {
    var $remaining$$ = --$map$$4$$.$remaining_$, $listenerArray$$5$$ = $map$$4$$[$obj$$89_objUid$$2$$];
    $listenerArray$$5$$.$locked_$ ? $listenerArray$$5$$.$locked_$++ : $listenerArray$$5$$.$locked_$ = 1;
    try {
      for(var $length$$16$$ = $listenerArray$$5$$.length, $i$$68$$ = 0;$i$$68$$ < $length$$16$$;$i$$68$$++) {
        var $listener$$46$$ = $listenerArray$$5$$[$i$$68$$];
        $listener$$46$$ && !$listener$$46$$.$removed$ && ($retval$$ &= $goog$events$fireListener$$($listener$$46$$, $eventObject$$4$$) !== $JSCompiler_alias_FALSE$$)
      }
    }finally {
      $map$$4$$.$remaining_$ = Math.max($remaining$$, $map$$4$$.$remaining_$), $listenerArray$$5$$.$locked_$--, $goog$events$cleanUp_$$($type$$72$$, $capture$$9$$, $obj$$89_objUid$$2$$, $listenerArray$$5$$)
    }
  }
  return Boolean($retval$$)
}
function $goog$events$fireListener$$($listener$$47$$, $eventObject$$5$$) {
  $listener$$47$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$$47$$.key);
  return $listener$$47$$.handleEvent($eventObject$$5$$)
}
function $goog$events$handleBrowserEvent_$$($listener$$48$$, $opt_evt$$) {
  if($listener$$48$$.$removed$) {
    return $JSCompiler_alias_TRUE$$
  }
  var $be$$1_type$$74$$ = $listener$$48$$.type, $map$$6$$ = $goog$events$listenerTree_$$;
  if(!($be$$1_type$$74$$ in $map$$6$$)) {
    return $JSCompiler_alias_TRUE$$
  }
  var $map$$6$$ = $map$$6$$[$be$$1_type$$74$$], $ieEvent_retval$$1$$, $targetsMap$$1$$;
  if(!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    $ieEvent_retval$$1$$ = $opt_evt$$ || $goog$getObjectByName$$("window.event");
    var $hasCapture$$2$$ = $JSCompiler_alias_TRUE$$ in $map$$6$$, $hasBubble$$1$$ = $JSCompiler_alias_FALSE$$ in $map$$6$$;
    if($hasCapture$$2$$) {
      if(0 > $ieEvent_retval$$1$$.keyCode || $ieEvent_retval$$1$$.returnValue != $JSCompiler_alias_VOID$$) {
        return $JSCompiler_alias_TRUE$$
      }
      a: {
        var $evt$$16_useReturnValue$$inline_150$$ = $JSCompiler_alias_FALSE$$;
        if(0 == $ieEvent_retval$$1$$.keyCode) {
          try {
            $ieEvent_retval$$1$$.keyCode = -1;
            break a
          }catch($ex$$inline_151$$) {
            $evt$$16_useReturnValue$$inline_150$$ = $JSCompiler_alias_TRUE$$
          }
        }
        if($evt$$16_useReturnValue$$inline_150$$ || $ieEvent_retval$$1$$.returnValue == $JSCompiler_alias_VOID$$) {
          $ieEvent_retval$$1$$.returnValue = $JSCompiler_alias_TRUE$$
        }
      }
    }
    $evt$$16_useReturnValue$$inline_150$$ = new $goog$events$BrowserEvent$$;
    $evt$$16_useReturnValue$$inline_150$$.init($ieEvent_retval$$1$$, this);
    $ieEvent_retval$$1$$ = $JSCompiler_alias_TRUE$$;
    try {
      if($hasCapture$$2$$) {
        for(var $ancestors$$2$$ = [], $parent$$19$$ = $evt$$16_useReturnValue$$inline_150$$.currentTarget;$parent$$19$$;$parent$$19$$ = $parent$$19$$.parentNode) {
          $ancestors$$2$$.push($parent$$19$$)
        }
        $targetsMap$$1$$ = $map$$6$$[$JSCompiler_alias_TRUE$$];
        $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
        for(var $i$$70$$ = $ancestors$$2$$.length - 1;!$evt$$16_useReturnValue$$inline_150$$.$propagationStopped_$ && 0 <= $i$$70$$ && $targetsMap$$1$$.$remaining_$;$i$$70$$--) {
          $evt$$16_useReturnValue$$inline_150$$.currentTarget = $ancestors$$2$$[$i$$70$$], $ieEvent_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$2$$[$i$$70$$], $be$$1_type$$74$$, $JSCompiler_alias_TRUE$$, $evt$$16_useReturnValue$$inline_150$$)
        }
        if($hasBubble$$1$$) {
          $targetsMap$$1$$ = $map$$6$$[$JSCompiler_alias_FALSE$$];
          $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
          for($i$$70$$ = 0;!$evt$$16_useReturnValue$$inline_150$$.$propagationStopped_$ && $i$$70$$ < $ancestors$$2$$.length && $targetsMap$$1$$.$remaining_$;$i$$70$$++) {
            $evt$$16_useReturnValue$$inline_150$$.currentTarget = $ancestors$$2$$[$i$$70$$], $ieEvent_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$2$$[$i$$70$$], $be$$1_type$$74$$, $JSCompiler_alias_FALSE$$, $evt$$16_useReturnValue$$inline_150$$)
          }
        }
      }else {
        $ieEvent_retval$$1$$ = $goog$events$fireListener$$($listener$$48$$, $evt$$16_useReturnValue$$inline_150$$)
      }
    }finally {
      $ancestors$$2$$ && ($ancestors$$2$$.length = 0)
    }
    return $ieEvent_retval$$1$$
  }
  $be$$1_type$$74$$ = new $goog$events$BrowserEvent$$($opt_evt$$, this);
  return $ieEvent_retval$$1$$ = $goog$events$fireListener$$($listener$$48$$, $be$$1_type$$74$$)
}
var $goog$events$uniqueIdCounter_$$ = 0;
// Input 33
function $goog$events$EventHandler$$($opt_handler$$8$$) {
  $goog$Disposable$$.call(this);
  this.$handler_$ = $opt_handler$$8$$;
  this.$keys_$ = []
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
function $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$self$$, $src$$17$$, $type$$75$$, $opt_fn$$4$$, $opt_capture$$1$$) {
  $goog$isArray$$($type$$75$$) || ($goog$events$EventHandler$typeArray_$$[0] = $type$$75$$, $type$$75$$ = $goog$events$EventHandler$typeArray_$$);
  for(var $i$$71$$ = 0;$i$$71$$ < $type$$75$$.length;$i$$71$$++) {
    var $key$$52$$ = $goog$events$listen$$($src$$17$$, $type$$75$$[$i$$71$$], $opt_fn$$4$$ || $JSCompiler_StaticMethods_listen$self$$, $opt_capture$$1$$ || $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_listen$self$$.$handler_$ || $JSCompiler_StaticMethods_listen$self$$);
    $JSCompiler_StaticMethods_listen$self$$.$keys_$.push($key$$52$$)
  }
  return $JSCompiler_StaticMethods_listen$self$$
}
function $JSCompiler_StaticMethods_listenOnce$$($JSCompiler_StaticMethods_listenOnce$self$$, $key$$53_src$$18$$, $type$$76$$, $opt_fn$$5$$, $opt_capture$$2$$, $opt_handler$$10$$) {
  if($goog$isArray$$($type$$76$$)) {
    for(var $i$$72$$ = 0;$i$$72$$ < $type$$76$$.length;$i$$72$$++) {
      $JSCompiler_StaticMethods_listenOnce$$($JSCompiler_StaticMethods_listenOnce$self$$, $key$$53_src$$18$$, $type$$76$$[$i$$72$$], $opt_fn$$5$$, $opt_capture$$2$$, $opt_handler$$10$$)
    }
  }else {
    $key$$53_src$$18$$ = $goog$events$listenOnce$$($key$$53_src$$18$$, $type$$76$$, $opt_fn$$5$$ || $JSCompiler_StaticMethods_listenOnce$self$$, $opt_capture$$2$$, $opt_handler$$10$$ || $JSCompiler_StaticMethods_listenOnce$self$$.$handler_$ || $JSCompiler_StaticMethods_listenOnce$self$$), $JSCompiler_StaticMethods_listenOnce$self$$.$keys_$.push($key$$53_src$$18$$)
  }
}
function $JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$self$$, $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$, $i$$inline_160_type$$77$$, $listener$$inline_155_opt_fn$$6$$, $capture$$inline_158_opt_capture$$3$$, $opt_handler$$12_opt_handler$$inline_157$$) {
  if($goog$isArray$$($i$$inline_160_type$$77$$)) {
    for(var $i$$73$$ = 0;$i$$73$$ < $i$$inline_160_type$$77$$.length;$i$$73$$++) {
      $JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$self$$, $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$, $i$$inline_160_type$$77$$[$i$$73$$], $listener$$inline_155_opt_fn$$6$$, $capture$$inline_158_opt_capture$$3$$, $opt_handler$$12_opt_handler$$inline_157$$)
    }
  }else {
    a: {
      $listener$$inline_155_opt_fn$$6$$ = $listener$$inline_155_opt_fn$$6$$ || $JSCompiler_StaticMethods_unlisten$self$$;
      $opt_handler$$12_opt_handler$$inline_157$$ = $opt_handler$$12_opt_handler$$inline_157$$ || $JSCompiler_StaticMethods_unlisten$self$$.$handler_$ || $JSCompiler_StaticMethods_unlisten$self$$;
      $capture$$inline_158_opt_capture$$3$$ = !!$capture$$inline_158_opt_capture$$3$$;
      if($key$$54_listener$$51_listenerArray$$inline_159_src$$20$$ = $goog$events$getListeners_$$($key$$54_listener$$51_listenerArray$$inline_159_src$$20$$, $i$$inline_160_type$$77$$, $capture$$inline_158_opt_capture$$3$$)) {
        for($i$$inline_160_type$$77$$ = 0;$i$$inline_160_type$$77$$ < $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$.length;$i$$inline_160_type$$77$$++) {
          if(!$key$$54_listener$$51_listenerArray$$inline_159_src$$20$$[$i$$inline_160_type$$77$$].$removed$ && $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$[$i$$inline_160_type$$77$$].$listener$ == $listener$$inline_155_opt_fn$$6$$ && $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$[$i$$inline_160_type$$77$$].capture == $capture$$inline_158_opt_capture$$3$$ && $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$[$i$$inline_160_type$$77$$].$handler$ == $opt_handler$$12_opt_handler$$inline_157$$) {
            $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$ = $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$[$i$$inline_160_type$$77$$];
            break a
          }
        }
      }
      $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$ = $JSCompiler_alias_NULL$$
    }
    $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$ && ($key$$54_listener$$51_listenerArray$$inline_159_src$$20$$ = $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$.key, $goog$events$unlistenByKey$$($key$$54_listener$$51_listenerArray$$inline_159_src$$20$$), $goog$array$remove$$($JSCompiler_StaticMethods_unlisten$self$$.$keys_$, $key$$54_listener$$51_listenerArray$$inline_159_src$$20$$))
  }
  return $JSCompiler_StaticMethods_unlisten$self$$
}
$goog$events$EventHandler$$.prototype.$removeAll$ = function $$goog$events$EventHandler$$$$$removeAll$$() {
  $goog$array$forEach$$(this.$keys_$, $goog$events$unlistenByKey$$);
  this.$keys_$.length = 0
};
$goog$events$EventHandler$$.prototype.$disposeInternal$ = function $$goog$events$EventHandler$$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.$removeAll$()
};
$goog$events$EventHandler$$.prototype.handleEvent = function $$goog$events$EventHandler$$$$handleEvent$() {
  $JSCompiler_alias_THROW$$(Error("EventHandler.handleEvent not implemented"))
};
// Input 34
function $goog$ui$IdGenerator$$() {
}
$goog$addSingletonGetter$$($goog$ui$IdGenerator$$);
$goog$ui$IdGenerator$$.prototype.$nextId_$ = 0;
$goog$ui$IdGenerator$$.$getInstance$();
// Input 35
function $goog$events$EventTarget$$() {
  $goog$Disposable$$.call(this)
}
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$events$EventTarget$$.prototype;
$JSCompiler_prototypeAlias$$.$customEvent_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$parentEventTarget_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = $JSCompiler_set$$("$parentEventTarget_$");
$JSCompiler_prototypeAlias$$.addEventListener = function $$JSCompiler_prototypeAlias$$$addEventListener$($type$$78$$, $handler$$40$$, $opt_capture$$4$$, $opt_handlerScope$$) {
  $goog$events$listen$$(this, $type$$78$$, $handler$$40$$, $opt_capture$$4$$, $opt_handlerScope$$)
};
$JSCompiler_prototypeAlias$$.removeEventListener = function $$JSCompiler_prototypeAlias$$$removeEventListener$($type$$79$$, $handler$$41$$, $opt_capture$$5$$, $opt_handlerScope$$1$$) {
  $goog$events$unlisten$$(this, $type$$79$$, $handler$$41$$, $opt_capture$$5$$, $opt_handlerScope$$1$$)
};
$JSCompiler_prototypeAlias$$.dispatchEvent = function $$JSCompiler_prototypeAlias$$$dispatchEvent$($JSCompiler_inline_result$$19_e$$24_e$$inline_163$$) {
  var $hasCapture$$inline_169_type$$inline_164$$ = $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.type || $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$, $map$$inline_165$$ = $goog$events$listenerTree_$$;
  if($hasCapture$$inline_169_type$$inline_164$$ in $map$$inline_165$$) {
    if($goog$isString$$($JSCompiler_inline_result$$19_e$$24_e$$inline_163$$)) {
      $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$ = new $goog$events$Event$$($JSCompiler_inline_result$$19_e$$24_e$$inline_163$$, this)
    }else {
      if($JSCompiler_inline_result$$19_e$$24_e$$inline_163$$ instanceof $goog$events$Event$$) {
        $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.target = $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.target || this
      }else {
        var $oldEvent$$inline_166_rv$$inline_167$$ = $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$;
        $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$ = new $goog$events$Event$$($hasCapture$$inline_169_type$$inline_164$$, this);
        $goog$object$extend$$($JSCompiler_inline_result$$19_e$$24_e$$inline_163$$, $oldEvent$$inline_166_rv$$inline_167$$)
      }
    }
    var $oldEvent$$inline_166_rv$$inline_167$$ = 1, $ancestors$$inline_168_current$$inline_173$$, $map$$inline_165$$ = $map$$inline_165$$[$hasCapture$$inline_169_type$$inline_164$$], $hasCapture$$inline_169_type$$inline_164$$ = $JSCompiler_alias_TRUE$$ in $map$$inline_165$$, $parent$$inline_171_targetsMap$$inline_170$$;
    if($hasCapture$$inline_169_type$$inline_164$$) {
      $ancestors$$inline_168_current$$inline_173$$ = [];
      for($parent$$inline_171_targetsMap$$inline_170$$ = this;$parent$$inline_171_targetsMap$$inline_170$$;$parent$$inline_171_targetsMap$$inline_170$$ = $parent$$inline_171_targetsMap$$inline_170$$.$parentEventTarget_$) {
        $ancestors$$inline_168_current$$inline_173$$.push($parent$$inline_171_targetsMap$$inline_170$$)
      }
      $parent$$inline_171_targetsMap$$inline_170$$ = $map$$inline_165$$[$JSCompiler_alias_TRUE$$];
      $parent$$inline_171_targetsMap$$inline_170$$.$remaining_$ = $parent$$inline_171_targetsMap$$inline_170$$.$count_$;
      for(var $i$$inline_172$$ = $ancestors$$inline_168_current$$inline_173$$.length - 1;!$JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.$propagationStopped_$ && 0 <= $i$$inline_172$$ && $parent$$inline_171_targetsMap$$inline_170$$.$remaining_$;$i$$inline_172$$--) {
        $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.currentTarget = $ancestors$$inline_168_current$$inline_173$$[$i$$inline_172$$], $oldEvent$$inline_166_rv$$inline_167$$ &= $goog$events$fireListeners_$$($parent$$inline_171_targetsMap$$inline_170$$, $ancestors$$inline_168_current$$inline_173$$[$i$$inline_172$$], $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.type, $JSCompiler_alias_TRUE$$, $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$) && $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.$returnValue_$ != 
        $JSCompiler_alias_FALSE$$
      }
    }
    if($JSCompiler_alias_FALSE$$ in $map$$inline_165$$) {
      if($parent$$inline_171_targetsMap$$inline_170$$ = $map$$inline_165$$[$JSCompiler_alias_FALSE$$], $parent$$inline_171_targetsMap$$inline_170$$.$remaining_$ = $parent$$inline_171_targetsMap$$inline_170$$.$count_$, $hasCapture$$inline_169_type$$inline_164$$) {
        for($i$$inline_172$$ = 0;!$JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.$propagationStopped_$ && $i$$inline_172$$ < $ancestors$$inline_168_current$$inline_173$$.length && $parent$$inline_171_targetsMap$$inline_170$$.$remaining_$;$i$$inline_172$$++) {
          $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.currentTarget = $ancestors$$inline_168_current$$inline_173$$[$i$$inline_172$$], $oldEvent$$inline_166_rv$$inline_167$$ &= $goog$events$fireListeners_$$($parent$$inline_171_targetsMap$$inline_170$$, $ancestors$$inline_168_current$$inline_173$$[$i$$inline_172$$], $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.type, $JSCompiler_alias_FALSE$$, $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$) && $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.$returnValue_$ != 
          $JSCompiler_alias_FALSE$$
        }
      }else {
        for($ancestors$$inline_168_current$$inline_173$$ = this;!$JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.$propagationStopped_$ && $ancestors$$inline_168_current$$inline_173$$ && $parent$$inline_171_targetsMap$$inline_170$$.$remaining_$;$ancestors$$inline_168_current$$inline_173$$ = $ancestors$$inline_168_current$$inline_173$$.$parentEventTarget_$) {
          $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.currentTarget = $ancestors$$inline_168_current$$inline_173$$, $oldEvent$$inline_166_rv$$inline_167$$ &= $goog$events$fireListeners_$$($parent$$inline_171_targetsMap$$inline_170$$, $ancestors$$inline_168_current$$inline_173$$, $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.type, $JSCompiler_alias_FALSE$$, $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$) && $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$.$returnValue_$ != $JSCompiler_alias_FALSE$$
        }
      }
    }
    $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$ = Boolean($oldEvent$$inline_166_rv$$inline_167$$)
  }else {
    $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$ = $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_inline_result$$19_e$$24_e$$inline_163$$
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$removeAll$$(this);
  this.$parentEventTarget_$ = $JSCompiler_alias_NULL$$
};
// Input 36
function $goog$ui$Component$$($opt_domHelper$$2$$) {
  $goog$Disposable$$.call(this);
  this.$dom_$ = $opt_domHelper$$2$$ || $goog$dom$getDomHelper$$();
  this.$rightToLeft_$ = $goog$ui$Component$defaultRightToLeft_$$
}
$goog$inherits$$($goog$ui$Component$$, $goog$events$EventTarget$$);
$goog$ui$Component$$.prototype.$idGenerator_$ = $goog$ui$IdGenerator$$.$getInstance$();
var $goog$ui$Component$defaultRightToLeft_$$ = $JSCompiler_alias_NULL$$;
function $goog$ui$Component$getStateTransitionEvent$$($state$$, $isEntering$$) {
  switch($state$$) {
    case 1:
      return $isEntering$$ ? "disable" : "enable";
    case 2:
      return $isEntering$$ ? "highlight" : "unhighlight";
    case 4:
      return $isEntering$$ ? "activate" : "deactivate";
    case 8:
      return $isEntering$$ ? "select" : "unselect";
    case 16:
      return $isEntering$$ ? "check" : "uncheck";
    case 32:
      return $isEntering$$ ? "focus" : "blur";
    case 64:
      return $isEntering$$ ? "open" : "close"
  }
  $JSCompiler_alias_THROW$$(Error("Invalid component state"))
}
$JSCompiler_prototypeAlias$$ = $goog$ui$Component$$.prototype;
$JSCompiler_prototypeAlias$$.$id_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$inDocument_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$rightToLeft_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$model_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$parent_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$children_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$childIndex_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$wasDecorated_$ = $JSCompiler_alias_FALSE$$;
function $JSCompiler_StaticMethods_getId$$($JSCompiler_StaticMethods_getId$self$$) {
  return $JSCompiler_StaticMethods_getId$self$$.$id_$ || ($JSCompiler_StaticMethods_getId$self$$.$id_$ = ":" + ($JSCompiler_StaticMethods_getId$self$$.$idGenerator_$.$nextId_$++).toString(36))
}
function $JSCompiler_StaticMethods_setId$$($JSCompiler_StaticMethods_setId$self$$, $id$$3$$) {
  $JSCompiler_StaticMethods_setId$self$$.$parent_$ && $JSCompiler_StaticMethods_setId$self$$.$parent_$.$childIndex_$ && ($goog$object$remove$$($JSCompiler_StaticMethods_setId$self$$.$parent_$.$childIndex_$, $JSCompiler_StaticMethods_setId$self$$.$id_$), $goog$object$add$$($JSCompiler_StaticMethods_setId$self$$.$parent_$.$childIndex_$, $id$$3$$, $JSCompiler_StaticMethods_setId$self$$));
  $JSCompiler_StaticMethods_setId$self$$.$id_$ = $id$$3$$
}
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$getElementsByClass$ = function $$JSCompiler_prototypeAlias$$$$getElementsByClass$$($className$$15$$) {
  return this.$element_$ ? this.$dom_$.$getElementsByClass$($className$$15$$, this.$element_$) : []
};
$JSCompiler_prototypeAlias$$.$getElementByClass$ = function $$JSCompiler_prototypeAlias$$$$getElementByClass$$($className$$16$$) {
  return this.$element_$ ? this.$dom_$.$getElementByClass$($className$$16$$, this.$element_$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getHandler$ = function $$JSCompiler_prototypeAlias$$$$getHandler$$() {
  return this.$googUiComponentHandler_$ || (this.$googUiComponentHandler_$ = new $goog$events$EventHandler$$(this))
};
function $JSCompiler_StaticMethods_setParent$$($JSCompiler_StaticMethods_setParent$self$$, $parent$$21$$) {
  $JSCompiler_StaticMethods_setParent$self$$ == $parent$$21$$ && $JSCompiler_alias_THROW$$(Error("Unable to set parent component"));
  $parent$$21$$ && ($JSCompiler_StaticMethods_setParent$self$$.$parent_$ && $JSCompiler_StaticMethods_setParent$self$$.$id_$ && $JSCompiler_StaticMethods_setParent$self$$.$parent_$.$childIndex_$ && $JSCompiler_StaticMethods_setParent$self$$.$id_$ && $goog$object$get$$($JSCompiler_StaticMethods_setParent$self$$.$parent_$.$childIndex_$, $JSCompiler_StaticMethods_setParent$self$$.$id_$) && $JSCompiler_StaticMethods_setParent$self$$.$parent_$ != $parent$$21$$) && $JSCompiler_alias_THROW$$(Error("Unable to set parent component"));
  $JSCompiler_StaticMethods_setParent$self$$.$parent_$ = $parent$$21$$;
  $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call($JSCompiler_StaticMethods_setParent$self$$, $parent$$21$$)
}
$JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$parent_$");
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = function $$JSCompiler_prototypeAlias$$$$setParentEventTarget$$($parent$$22$$) {
  this.$parent_$ && this.$parent_$ != $parent$$22$$ && $JSCompiler_alias_THROW$$(Error("Method not supported"));
  $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$22$$)
};
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = this.$dom_$.createElement("div")
};
$JSCompiler_prototypeAlias$$.render = function $$JSCompiler_prototypeAlias$$$render$($opt_parentElement$$) {
  $JSCompiler_StaticMethods_render_$$(this, $opt_parentElement$$)
};
function $JSCompiler_StaticMethods_render_$$($JSCompiler_StaticMethods_render_$self$$, $opt_parentElement$$1$$, $opt_beforeNode$$) {
  $JSCompiler_StaticMethods_render_$self$$.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  $JSCompiler_StaticMethods_render_$self$$.$element_$ || $JSCompiler_StaticMethods_render_$self$$.$createDom$();
  $opt_parentElement$$1$$ ? $opt_parentElement$$1$$.insertBefore($JSCompiler_StaticMethods_render_$self$$.$element_$, $opt_beforeNode$$ || $JSCompiler_alias_NULL$$) : $JSCompiler_StaticMethods_render_$self$$.$dom_$.$document_$.body.appendChild($JSCompiler_StaticMethods_render_$self$$.$element_$);
  (!$JSCompiler_StaticMethods_render_$self$$.$parent_$ || $JSCompiler_StaticMethods_render_$self$$.$parent_$.$inDocument_$) && $JSCompiler_StaticMethods_render_$self$$.$enterDocument$()
}
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($element$$73$$) {
  this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  if($element$$73$$ && this.$canDecorate$($element$$73$$)) {
    this.$wasDecorated_$ = $JSCompiler_alias_TRUE$$;
    if(!this.$dom_$ || this.$dom_$.$document_$ != $goog$dom$getOwnerDocument$$($element$$73$$)) {
      this.$dom_$ = $goog$dom$getDomHelper$$($element$$73$$)
    }
    this.$decorateInternal$($element$$73$$);
    this.$enterDocument$()
  }else {
    $JSCompiler_alias_THROW$$(Error("Invalid element to decorate"))
  }
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  this.$inDocument_$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$8$$) {
    !$child$$8$$.$inDocument_$ && $child$$8$$.$getElement$() && $child$$8$$.$enterDocument$()
  })
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$9$$) {
    $child$$9$$.$inDocument_$ && $child$$9$$.$exitDocument$()
  });
  this.$googUiComponentHandler_$ && this.$googUiComponentHandler_$.$removeAll$();
  this.$inDocument_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$inDocument_$ && this.$exitDocument$();
  this.$googUiComponentHandler_$ && (this.$googUiComponentHandler_$.$dispose$(), delete this.$googUiComponentHandler_$);
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$10$$) {
    $child$$10$$.$dispose$()
  });
  !this.$wasDecorated_$ && this.$element_$ && $goog$dom$removeNode$$(this.$element_$);
  this.$parent_$ = this.$model_$ = this.$element_$ = this.$childIndex_$ = this.$children_$ = $JSCompiler_alias_NULL$$;
  $goog$ui$Component$$.$superClass_$.$disposeInternal$.call(this)
};
function $JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_makeId$self$$, $idFragment$$) {
  return $JSCompiler_StaticMethods_getId$$($JSCompiler_StaticMethods_makeId$self$$) + "." + $idFragment$$
}
$JSCompiler_prototypeAlias$$.$getModel$ = $JSCompiler_get$$("$model_$");
function $JSCompiler_StaticMethods_setModel$$($JSCompiler_StaticMethods_setModel$self$$, $obj$$90$$) {
  $JSCompiler_StaticMethods_setModel$self$$.$model_$ = $obj$$90$$
}
function $JSCompiler_StaticMethods_addChild$$($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$, $child$$11$$, $opt_render$$) {
  var $index$$inline_178_sibling$$inline_181$$ = $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$children_$ ? $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$children_$.length : 0;
  $child$$11$$.$inDocument_$ && ($opt_render$$ || !$JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$inDocument_$) && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  (0 > $index$$inline_178_sibling$$inline_181$$ || $index$$inline_178_sibling$$inline_181$$ > ($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$children_$ ? $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$children_$.length : 0)) && $JSCompiler_alias_THROW$$(Error("Child component index out of bounds"));
  if(!$JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$childIndex_$ || !$JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$children_$) {
    $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$childIndex_$ = {}, $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$children_$ = []
  }
  if($child$$11$$.getParent() == $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$) {
    var $key$$inline_1142$$ = $JSCompiler_StaticMethods_getId$$($child$$11$$);
    $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$childIndex_$[$key$$inline_1142$$] = $child$$11$$;
    $goog$array$remove$$($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$children_$, $child$$11$$)
  }else {
    $goog$object$add$$($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$childIndex_$, $JSCompiler_StaticMethods_getId$$($child$$11$$), $child$$11$$)
  }
  $JSCompiler_StaticMethods_setParent$$($child$$11$$, $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$);
  $goog$array$splice$$($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$children_$, $index$$inline_178_sibling$$inline_181$$, 0, $child$$11$$);
  $child$$11$$.$inDocument_$ && $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$inDocument_$ && $child$$11$$.getParent() == $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$ ? ($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$ = $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$getContentElement$(), $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.insertBefore($child$$11$$.$getElement$(), $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.childNodes[$index$$inline_178_sibling$$inline_181$$] || 
  $JSCompiler_alias_NULL$$)) : $opt_render$$ ? ($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$element_$ || $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$createDom$(), $index$$inline_178_sibling$$inline_181$$ = $JSCompiler_StaticMethods_getChildAt$$($JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$, $index$$inline_178_sibling$$inline_181$$ + 1), $JSCompiler_StaticMethods_render_$$($child$$11$$, $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$getContentElement$(), 
  $index$$inline_178_sibling$$inline_181$$ ? $index$$inline_178_sibling$$inline_181$$.$element_$ : $JSCompiler_alias_NULL$$)) : $JSCompiler_StaticMethods_addChild$self_contentElement$$inline_180$$.$inDocument_$ && (!$child$$11$$.$inDocument_$ && $child$$11$$.$element_$ && $child$$11$$.$element_$.parentNode && 1 == $child$$11$$.$element_$.parentNode.nodeType) && $child$$11$$.$enterDocument$()
}
$JSCompiler_prototypeAlias$$.$getContentElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$isRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$isRightToLeft$$() {
  this.$rightToLeft_$ == $JSCompiler_alias_NULL$$ && (this.$rightToLeft_$ = $goog$style$isRightToLeft$$(this.$inDocument_$ ? this.$element_$ : this.$dom_$.$document_$.body));
  return this.$rightToLeft_$
};
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$setRightToLeft$$($rightToLeft$$1$$) {
  this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  this.$rightToLeft_$ = $rightToLeft$$1$$
};
function $JSCompiler_StaticMethods_getChildAt$$($JSCompiler_StaticMethods_getChildAt$self$$, $index$$59$$) {
  return $JSCompiler_StaticMethods_getChildAt$self$$.$children_$ ? $JSCompiler_StaticMethods_getChildAt$self$$.$children_$[$index$$59$$] || $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods_forEachChild$$($JSCompiler_StaticMethods_forEachChild$self$$, $f$$27$$) {
  $JSCompiler_StaticMethods_forEachChild$self$$.$children_$ && $goog$array$forEach$$($JSCompiler_StaticMethods_forEachChild$self$$.$children_$, $f$$27$$, $JSCompiler_alias_VOID$$)
}
$JSCompiler_prototypeAlias$$.removeChild = function $$JSCompiler_prototypeAlias$$$removeChild$($child$$15$$, $opt_unrender$$) {
  if($child$$15$$) {
    var $id$$6$$ = $goog$isString$$($child$$15$$) ? $child$$15$$ : $JSCompiler_StaticMethods_getId$$($child$$15$$);
    $child$$15$$ = this.$childIndex_$ && $id$$6$$ ? $goog$object$get$$(this.$childIndex_$, $id$$6$$) || $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$;
    $id$$6$$ && $child$$15$$ && ($goog$object$remove$$(this.$childIndex_$, $id$$6$$), $goog$array$remove$$(this.$children_$, $child$$15$$), $opt_unrender$$ && ($child$$15$$.$exitDocument$(), $child$$15$$.$element_$ && $goog$dom$removeNode$$($child$$15$$.$element_$)), $JSCompiler_StaticMethods_setParent$$($child$$15$$, $JSCompiler_alias_NULL$$))
  }
  $child$$15$$ || $JSCompiler_alias_THROW$$(Error("Child is not in parent component"));
  return $child$$15$$
};
$JSCompiler_prototypeAlias$$.$removeChildren$ = function $$JSCompiler_prototypeAlias$$$$removeChildren$$($opt_unrender$$2$$) {
  for(var $removedChildren$$ = [];this.$children_$ && 0 != this.$children_$.length;) {
    $removedChildren$$.push(this.removeChild($JSCompiler_StaticMethods_getChildAt$$(this, 0), $opt_unrender$$2$$))
  }
  return $removedChildren$$
};
// Input 37
// Input 38
function $goog$crypt$Hash$$() {
}
;
// Input 39
function $goog$crypt$Sha2$$() {
  this.$chunk$ = [];
  this.total = this.$inChunk$ = 0;
  for(var $array$$inline_189$$ = [], $i$$inline_190$$ = 0;64 > $i$$inline_190$$;$i$$inline_190$$++) {
    $array$$inline_189$$[$i$$inline_190$$] = 0
  }
  this.$pad_$ = $array$$inline_189$$;
  this.$pad_$[0] = 128;
  this.hash = [];
  this.$numHashBlocks$ = 0;
  this.reset()
}
$goog$inherits$$($goog$crypt$Sha2$$, $goog$crypt$Hash$$);
function $JSCompiler_StaticMethods_computeChunk_$$($JSCompiler_StaticMethods_computeChunk_$self$$, $chunk$$) {
  for(var $w$$7$$ = [], $i$$85_index$$61$$ = 0, $a$$29_offset$$17$$ = 0;$a$$29_offset$$17$$ < $chunk$$.length;) {
    $w$$7$$[$i$$85_index$$61$$++] = $chunk$$[$a$$29_offset$$17$$] << 24 | $chunk$$[$a$$29_offset$$17$$ + 1] << 16 | $chunk$$[$a$$29_offset$$17$$ + 2] << 8 | $chunk$$[$a$$29_offset$$17$$ + 3], $a$$29_offset$$17$$ = 4 * $i$$85_index$$61$$
  }
  for($i$$85_index$$61$$ = 16;64 > $i$$85_index$$61$$;$i$$85_index$$61$$++) {
    $w$$7$$[$i$$85_index$$61$$] = $w$$7$$[$i$$85_index$$61$$ - 16] + (($w$$7$$[$i$$85_index$$61$$ - 15] >>> 7 | $w$$7$$[$i$$85_index$$61$$ - 15] << 25) ^ ($w$$7$$[$i$$85_index$$61$$ - 15] >>> 18 | $w$$7$$[$i$$85_index$$61$$ - 15] << 14) ^ $w$$7$$[$i$$85_index$$61$$ - 15] >>> 3) + $w$$7$$[$i$$85_index$$61$$ - 7] + (($w$$7$$[$i$$85_index$$61$$ - 2] >>> 17 | $w$$7$$[$i$$85_index$$61$$ - 2] << 15) ^ ($w$$7$$[$i$$85_index$$61$$ - 2] >>> 19 | $w$$7$$[$i$$85_index$$61$$ - 2] << 13) ^ $w$$7$$[$i$$85_index$$61$$ - 
    2] >>> 10) & 4294967295
  }
  for(var $a$$29_offset$$17$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[0], $b$$25$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[1], $c$$4$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[2], $d$$1$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[3], $e$$26$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[4], $f$$28$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[5], $g$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[6], $h$$6$$ = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[7], 
  $i$$85_index$$61$$ = 0;64 > $i$$85_index$$61$$;$i$$85_index$$61$$++) {
    var $t2$$ = (($a$$29_offset$$17$$ >>> 2 | $a$$29_offset$$17$$ << 30) ^ ($a$$29_offset$$17$$ >>> 13 | $a$$29_offset$$17$$ << 19) ^ ($a$$29_offset$$17$$ >>> 22 | $a$$29_offset$$17$$ << 10)) + ($a$$29_offset$$17$$ & $b$$25$$ ^ $a$$29_offset$$17$$ & $c$$4$$ ^ $b$$25$$ & $c$$4$$) & 4294967295, $t1$$ = $h$$6$$ + (($e$$26$$ >>> 6 | $e$$26$$ << 26) ^ ($e$$26$$ >>> 11 | $e$$26$$ << 21) ^ ($e$$26$$ >>> 25 | $e$$26$$ << 7)) + ($e$$26$$ & $f$$28$$ ^ ~$e$$26$$ & $g$$) + $JSCompiler_StaticMethods_computeChunk_$self$$.$K_$[$i$$85_index$$61$$] + 
    $w$$7$$[$i$$85_index$$61$$] & 4294967295, $h$$6$$ = $g$$, $g$$ = $f$$28$$, $f$$28$$ = $e$$26$$, $e$$26$$ = $d$$1$$ + $t1$$ & 4294967295, $d$$1$$ = $c$$4$$, $c$$4$$ = $b$$25$$, $b$$25$$ = $a$$29_offset$$17$$, $a$$29_offset$$17$$ = $t1$$ + $t2$$ & 4294967295
  }
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[0] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[0] + $a$$29_offset$$17$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[1] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[1] + $b$$25$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[2] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[2] + $c$$4$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[3] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[3] + $d$$1$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[4] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[4] + $e$$26$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[5] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[5] + $f$$28$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[6] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[6] + $g$$ & 4294967295;
  $JSCompiler_StaticMethods_computeChunk_$self$$.hash[7] = $JSCompiler_StaticMethods_computeChunk_$self$$.hash[7] + $h$$6$$ & 4294967295
}
$goog$crypt$Sha2$$.prototype.update = function $$goog$crypt$Sha2$$$$update$($message$$20$$, $opt_length$$10$$) {
  $goog$isDef$$($opt_length$$10$$) || ($opt_length$$10$$ = $message$$20$$.length);
  var $n$$5$$ = 0, $inChunk$$ = this.$inChunk$;
  if($goog$isString$$($message$$20$$)) {
    for(;$n$$5$$ < $opt_length$$10$$;) {
      this.$chunk$[$inChunk$$++] = $message$$20$$.charCodeAt($n$$5$$++), 64 == $inChunk$$ && ($JSCompiler_StaticMethods_computeChunk_$$(this, this.$chunk$), $inChunk$$ = 0)
    }
  }else {
    for(;$n$$5$$ < $opt_length$$10$$;) {
      this.$chunk$[$inChunk$$++] = $message$$20$$[$n$$5$$++], 64 == $inChunk$$ && ($JSCompiler_StaticMethods_computeChunk_$$(this, this.$chunk$), $inChunk$$ = 0)
    }
  }
  this.$inChunk$ = $inChunk$$;
  this.total += $opt_length$$10$$
};
$goog$crypt$Sha2$$.prototype.$K_$ = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 
2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
// Input 40
function $goog$crypt$Sha256$$() {
  $goog$crypt$Sha2$$.call(this)
}
$goog$inherits$$($goog$crypt$Sha256$$, $goog$crypt$Sha2$$);
$goog$crypt$Sha256$$.prototype.reset = function $$goog$crypt$Sha256$$$$reset$() {
  this.$chunk$ = [];
  this.total = this.$inChunk$ = 0;
  this.hash = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  this.$numHashBlocks$ = 8
};
// Input 41
function $goog$math$Long$$($low$$, $high$$) {
  this.$low_$ = $low$$ | 0;
  this.$high_$ = $high$$ | 0
}
var $goog$math$Long$IntCache_$$ = {};
function $goog$math$Long$fromInt$$($value$$76$$) {
  if(-128 <= $value$$76$$ && 128 > $value$$76$$) {
    var $cachedObj_obj$$91$$ = $goog$math$Long$IntCache_$$[$value$$76$$];
    if($cachedObj_obj$$91$$) {
      return $cachedObj_obj$$91$$
    }
  }
  $cachedObj_obj$$91$$ = new $goog$math$Long$$($value$$76$$ | 0, 0 > $value$$76$$ ? -1 : 0);
  -128 <= $value$$76$$ && 128 > $value$$76$$ && ($goog$math$Long$IntCache_$$[$value$$76$$] = $cachedObj_obj$$91$$);
  return $cachedObj_obj$$91$$
}
function $goog$math$Long$fromNumber$$($value$$77$$) {
  return isNaN($value$$77$$) || !isFinite($value$$77$$) ? $goog$math$Long$ZERO$$ : $value$$77$$ <= -$goog$math$Long$TWO_PWR_63_DBL_$$ ? $goog$math$Long$MIN_VALUE$$ : $value$$77$$ + 1 >= $goog$math$Long$TWO_PWR_63_DBL_$$ ? $goog$math$Long$MAX_VALUE$$ : 0 > $value$$77$$ ? $JSCompiler_StaticMethods_negate$$($goog$math$Long$fromNumber$$(-$value$$77$$)) : new $goog$math$Long$$($value$$77$$ % $goog$math$Long$TWO_PWR_32_DBL_$$ | 0, $value$$77$$ / $goog$math$Long$TWO_PWR_32_DBL_$$ | 0)
}
var $goog$math$Long$TWO_PWR_32_DBL_$$ = 4294967296, $goog$math$Long$TWO_PWR_63_DBL_$$ = $goog$math$Long$TWO_PWR_32_DBL_$$ * $goog$math$Long$TWO_PWR_32_DBL_$$ / 2, $goog$math$Long$ZERO$$ = $goog$math$Long$fromInt$$(0), $goog$math$Long$ONE$$ = $goog$math$Long$fromInt$$(1), $goog$math$Long$NEG_ONE$$ = $goog$math$Long$fromInt$$(-1), $goog$math$Long$MAX_VALUE$$ = new $goog$math$Long$$(-1, 2147483647), $goog$math$Long$MIN_VALUE$$ = new $goog$math$Long$$(0, -2147483648), $goog$math$Long$TWO_PWR_24_$$ = 
$goog$math$Long$fromInt$$(16777216);
$JSCompiler_prototypeAlias$$ = $goog$math$Long$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$($opt_radix$$2_radix$$1$$) {
  $opt_radix$$2_radix$$1$$ = $opt_radix$$2_radix$$1$$ || 10;
  (2 > $opt_radix$$2_radix$$1$$ || 36 < $opt_radix$$2_radix$$1$$) && $JSCompiler_alias_THROW$$(Error("radix out of range: " + $opt_radix$$2_radix$$1$$));
  if($JSCompiler_StaticMethods_isZero$$(this)) {
    return"0"
  }
  if(0 > this.$high_$) {
    if(this.$equals$($goog$math$Long$MIN_VALUE$$)) {
      var $radixLong_rem$$ = $goog$math$Long$fromNumber$$($opt_radix$$2_radix$$1$$), $div$$2_radixToPower$$1$$ = $JSCompiler_StaticMethods_div$$(this, $radixLong_rem$$), $radixLong_rem$$ = $JSCompiler_StaticMethods_subtract$$($div$$2_radixToPower$$1$$.multiply($radixLong_rem$$), this);
      return $div$$2_radixToPower$$1$$.toString($opt_radix$$2_radix$$1$$) + $radixLong_rem$$.$low_$.toString($opt_radix$$2_radix$$1$$)
    }
    return"-" + $JSCompiler_StaticMethods_negate$$(this).toString($opt_radix$$2_radix$$1$$)
  }
  for(var $div$$2_radixToPower$$1$$ = $goog$math$Long$fromNumber$$(Math.pow($opt_radix$$2_radix$$1$$, 6)), $radixLong_rem$$ = this, $result$$11$$ = "";;) {
    var $remDiv$$ = $JSCompiler_StaticMethods_div$$($radixLong_rem$$, $div$$2_radixToPower$$1$$), $digits$$ = $JSCompiler_StaticMethods_subtract$$($radixLong_rem$$, $remDiv$$.multiply($div$$2_radixToPower$$1$$)).$low_$.toString($opt_radix$$2_radix$$1$$), $radixLong_rem$$ = $remDiv$$;
    if($JSCompiler_StaticMethods_isZero$$($radixLong_rem$$)) {
      return $digits$$ + $result$$11$$
    }
    for(;6 > $digits$$.length;) {
      $digits$$ = "0" + $digits$$
    }
    $result$$11$$ = "" + $digits$$ + $result$$11$$
  }
};
function $JSCompiler_StaticMethods_getLowBitsUnsigned$$($JSCompiler_StaticMethods_getLowBitsUnsigned$self$$) {
  return 0 <= $JSCompiler_StaticMethods_getLowBitsUnsigned$self$$.$low_$ ? $JSCompiler_StaticMethods_getLowBitsUnsigned$self$$.$low_$ : $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$self$$.$low_$
}
function $JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_isZero$self$$) {
  return 0 == $JSCompiler_StaticMethods_isZero$self$$.$high_$ && 0 == $JSCompiler_StaticMethods_isZero$self$$.$low_$
}
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($other$$6$$) {
  return this.$high_$ == $other$$6$$.$high_$ && this.$low_$ == $other$$6$$.$low_$
};
function $JSCompiler_StaticMethods_compare$$($JSCompiler_StaticMethods_compare$self$$, $other$$12$$) {
  if($JSCompiler_StaticMethods_compare$self$$.$equals$($other$$12$$)) {
    return 0
  }
  var $thisNeg$$ = 0 > $JSCompiler_StaticMethods_compare$self$$.$high_$, $otherNeg$$ = 0 > $other$$12$$.$high_$;
  return $thisNeg$$ && !$otherNeg$$ ? -1 : !$thisNeg$$ && $otherNeg$$ ? 1 : 0 > $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_compare$self$$, $other$$12$$).$high_$ ? -1 : 1
}
function $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_negate$self$$) {
  return $JSCompiler_StaticMethods_negate$self$$.$equals$($goog$math$Long$MIN_VALUE$$) ? $goog$math$Long$MIN_VALUE$$ : $JSCompiler_StaticMethods_negate$self$$.not().add($goog$math$Long$ONE$$)
}
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($c16_other$$13$$) {
  var $a48$$ = this.$high_$ >>> 16, $a32_c48$$ = this.$high_$ & 65535, $a16_c32$$ = this.$low_$ >>> 16, $b48$$ = $c16_other$$13$$.$high_$ >>> 16, $b32$$ = $c16_other$$13$$.$high_$ & 65535, $b16$$ = $c16_other$$13$$.$low_$ >>> 16, $c00$$;
  $c00$$ = 0 + ((this.$low_$ & 65535) + ($c16_other$$13$$.$low_$ & 65535));
  $c16_other$$13$$ = 0 + ($c00$$ >>> 16);
  $c16_other$$13$$ += $a16_c32$$ + $b16$$;
  $a16_c32$$ = 0 + ($c16_other$$13$$ >>> 16);
  $a16_c32$$ += $a32_c48$$ + $b32$$;
  $a32_c48$$ = 0 + ($a16_c32$$ >>> 16);
  $a32_c48$$ = $a32_c48$$ + ($a48$$ + $b48$$) & 65535;
  return new $goog$math$Long$$(($c16_other$$13$$ & 65535) << 16 | $c00$$ & 65535, $a32_c48$$ << 16 | $a16_c32$$ & 65535)
};
function $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_subtract$self$$, $other$$14$$) {
  return $JSCompiler_StaticMethods_subtract$self$$.add($JSCompiler_StaticMethods_negate$$($other$$14$$))
}
$JSCompiler_prototypeAlias$$.multiply = function $$JSCompiler_prototypeAlias$$$multiply$($b00$$1_other$$15$$) {
  if($JSCompiler_StaticMethods_isZero$$(this) || $JSCompiler_StaticMethods_isZero$$($b00$$1_other$$15$$)) {
    return $goog$math$Long$ZERO$$
  }
  if(this.$equals$($goog$math$Long$MIN_VALUE$$)) {
    return 1 == ($b00$$1_other$$15$$.$low_$ & 1) ? $goog$math$Long$MIN_VALUE$$ : $goog$math$Long$ZERO$$
  }
  if($b00$$1_other$$15$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
    return 1 == (this.$low_$ & 1) ? $goog$math$Long$MIN_VALUE$$ : $goog$math$Long$ZERO$$
  }
  if(0 > this.$high_$) {
    return 0 > $b00$$1_other$$15$$.$high_$ ? $JSCompiler_StaticMethods_negate$$(this).multiply($JSCompiler_StaticMethods_negate$$($b00$$1_other$$15$$)) : $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_negate$$(this).multiply($b00$$1_other$$15$$))
  }
  if(0 > $b00$$1_other$$15$$.$high_$) {
    return $JSCompiler_StaticMethods_negate$$(this.multiply($JSCompiler_StaticMethods_negate$$($b00$$1_other$$15$$)))
  }
  if(0 > $JSCompiler_StaticMethods_compare$$(this, $goog$math$Long$TWO_PWR_24_$$) && 0 > $JSCompiler_StaticMethods_compare$$($b00$$1_other$$15$$, $goog$math$Long$TWO_PWR_24_$$)) {
    return $goog$math$Long$fromNumber$$((this.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$(this)) * ($b00$$1_other$$15$$.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$($b00$$1_other$$15$$)))
  }
  var $a48$$1$$ = this.$high_$ >>> 16, $a32$$1$$ = this.$high_$ & 65535, $a16$$1$$ = this.$low_$ >>> 16, $a00$$1$$ = this.$low_$ & 65535, $b48$$1$$ = $b00$$1_other$$15$$.$high_$ >>> 16, $b32$$1$$ = $b00$$1_other$$15$$.$high_$ & 65535, $b16$$1$$ = $b00$$1_other$$15$$.$low_$ >>> 16;
  $b00$$1_other$$15$$ = $b00$$1_other$$15$$.$low_$ & 65535;
  var $c48$$1$$, $c32$$1$$, $c16$$1$$, $c00$$1$$;
  $c00$$1$$ = 0 + $a00$$1$$ * $b00$$1_other$$15$$;
  $c16$$1$$ = 0 + ($c00$$1$$ >>> 16);
  $c16$$1$$ += $a16$$1$$ * $b00$$1_other$$15$$;
  $c32$$1$$ = 0 + ($c16$$1$$ >>> 16);
  $c16$$1$$ = ($c16$$1$$ & 65535) + $a00$$1$$ * $b16$$1$$;
  $c32$$1$$ += $c16$$1$$ >>> 16;
  $c16$$1$$ &= 65535;
  $c32$$1$$ += $a32$$1$$ * $b00$$1_other$$15$$;
  $c48$$1$$ = 0 + ($c32$$1$$ >>> 16);
  $c32$$1$$ = ($c32$$1$$ & 65535) + $a16$$1$$ * $b16$$1$$;
  $c48$$1$$ += $c32$$1$$ >>> 16;
  $c32$$1$$ &= 65535;
  $c32$$1$$ += $a00$$1$$ * $b32$$1$$;
  $c48$$1$$ += $c32$$1$$ >>> 16;
  $c32$$1$$ &= 65535;
  $c48$$1$$ = $c48$$1$$ + ($a48$$1$$ * $b00$$1_other$$15$$ + $a32$$1$$ * $b16$$1$$ + $a16$$1$$ * $b32$$1$$ + $a00$$1$$ * $b48$$1$$) & 65535;
  return new $goog$math$Long$$($c16$$1$$ << 16 | $c00$$1$$ & 65535, $c48$$1$$ << 16 | $c32$$1$$)
};
function $JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_div$self$$, $other$$16$$) {
  $JSCompiler_StaticMethods_isZero$$($other$$16$$) && $JSCompiler_alias_THROW$$(Error("division by zero"));
  if($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_div$self$$)) {
    return $goog$math$Long$ZERO$$
  }
  if($JSCompiler_StaticMethods_div$self$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
    if($other$$16$$.$equals$($goog$math$Long$ONE$$) || $other$$16$$.$equals$($goog$math$Long$NEG_ONE$$)) {
      return $goog$math$Long$MIN_VALUE$$
    }
    if($other$$16$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
      return $goog$math$Long$ONE$$
    }
    var $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$;
    $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$ = 1;
    if(0 == $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$) {
      $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$ = $JSCompiler_StaticMethods_div$self$$
    }else {
      var $high$$inline_198_rem$$1$$ = $JSCompiler_StaticMethods_div$self$$.$high_$;
      $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$ = 32 > $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$ ? new $goog$math$Long$$($JSCompiler_StaticMethods_div$self$$.$low_$ >>> $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$ | $high$$inline_198_rem$$1$$ << 32 - $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$, $high$$inline_198_rem$$1$$ >> $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$) : new $goog$math$Long$$($high$$inline_198_rem$$1$$ >> 
      $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$ - 32, 0 <= $high$$inline_198_rem$$1$$ ? 0 : -1)
    }
    $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$ = $JSCompiler_StaticMethods_div$$($JSCompiler_inline_result$$20_approx_numBits$$inline_197$$, $other$$16$$).shiftLeft(1);
    if($JSCompiler_inline_result$$20_approx_numBits$$inline_197$$.$equals$($goog$math$Long$ZERO$$)) {
      return 0 > $other$$16$$.$high_$ ? $goog$math$Long$ONE$$ : $goog$math$Long$NEG_ONE$$
    }
    $high$$inline_198_rem$$1$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_div$self$$, $other$$16$$.multiply($JSCompiler_inline_result$$20_approx_numBits$$inline_197$$));
    return $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$.add($JSCompiler_StaticMethods_div$$($high$$inline_198_rem$$1$$, $other$$16$$))
  }
  if($other$$16$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
    return $goog$math$Long$ZERO$$
  }
  if(0 > $JSCompiler_StaticMethods_div$self$$.$high_$) {
    return 0 > $other$$16$$.$high_$ ? $JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$self$$), $JSCompiler_StaticMethods_negate$$($other$$16$$)) : $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$self$$), $other$$16$$))
  }
  if(0 > $other$$16$$.$high_$) {
    return $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_div$self$$, $JSCompiler_StaticMethods_negate$$($other$$16$$)))
  }
  for(var $res$$7$$ = $goog$math$Long$ZERO$$, $high$$inline_198_rem$$1$$ = $JSCompiler_StaticMethods_div$self$$;0 <= $JSCompiler_StaticMethods_compare$$($high$$inline_198_rem$$1$$, $other$$16$$);) {
    $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$ = Math.max(1, Math.floor(($high$$inline_198_rem$$1$$.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$($high$$inline_198_rem$$1$$)) / ($other$$16$$.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$($other$$16$$))));
    for(var $delta$$1_log2$$ = Math.ceil(Math.log($JSCompiler_inline_result$$20_approx_numBits$$inline_197$$) / Math.LN2), $delta$$1_log2$$ = 48 >= $delta$$1_log2$$ ? 1 : Math.pow(2, $delta$$1_log2$$ - 48), $approxRes$$ = $goog$math$Long$fromNumber$$($JSCompiler_inline_result$$20_approx_numBits$$inline_197$$), $approxRem$$ = $approxRes$$.multiply($other$$16$$);0 > $approxRem$$.$high_$ || 0 < $JSCompiler_StaticMethods_compare$$($approxRem$$, $high$$inline_198_rem$$1$$);) {
      $JSCompiler_inline_result$$20_approx_numBits$$inline_197$$ -= $delta$$1_log2$$, $approxRes$$ = $goog$math$Long$fromNumber$$($JSCompiler_inline_result$$20_approx_numBits$$inline_197$$), $approxRem$$ = $approxRes$$.multiply($other$$16$$)
    }
    $JSCompiler_StaticMethods_isZero$$($approxRes$$) && ($approxRes$$ = $goog$math$Long$ONE$$);
    $res$$7$$ = $res$$7$$.add($approxRes$$);
    $high$$inline_198_rem$$1$$ = $JSCompiler_StaticMethods_subtract$$($high$$inline_198_rem$$1$$, $approxRem$$)
  }
  return $res$$7$$
}
$JSCompiler_prototypeAlias$$.not = function $$JSCompiler_prototypeAlias$$$not$() {
  return new $goog$math$Long$$(~this.$low_$, ~this.$high_$)
};
$JSCompiler_prototypeAlias$$.shiftLeft = function $$JSCompiler_prototypeAlias$$$shiftLeft$($numBits$$) {
  $numBits$$ &= 63;
  if(0 == $numBits$$) {
    return this
  }
  var $low$$1$$ = this.$low_$;
  return 32 > $numBits$$ ? new $goog$math$Long$$($low$$1$$ << $numBits$$, this.$high_$ << $numBits$$ | $low$$1$$ >>> 32 - $numBits$$) : new $goog$math$Long$$(0, $low$$1$$ << $numBits$$ - 32)
};
// Input 42
function $bitex$util$decimalPlaces$$($match$$2_num$$10$$) {
  $match$$2_num$$10$$ = ("" + $match$$2_num$$10$$).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return!$match$$2_num$$10$$ ? 0 : Math.max(0, ($match$$2_num$$10$$[1] ? $match$$2_num$$10$$[1].length : 0) - ($match$$2_num$$10$$[2] ? +$match$$2_num$$10$$[2] : 0))
}
function $bitex$util$getFormAsJSON$$($element$$76$$) {
  for(var $json_res$$ = {}, $el$$30_form_value_values$$5$$, $i$$88$$ = 0;$el$$30_form_value_values$$5$$ = $element$$76$$.elements[$i$$88$$];$i$$88$$++) {
    if(!($el$$30_form_value_values$$5$$.disabled || "fieldset" == $el$$30_form_value_values$$5$$.tagName.toLowerCase())) {
      var $name$$67$$ = $el$$30_form_value_values$$5$$.name;
      if(!$goog$string$isEmpty$$($name$$67$$)) {
        switch($el$$30_form_value_values$$5$$.type.toLowerCase()) {
          case "file":
          ;
          case "submit":
          ;
          case "reset":
          ;
          case "button":
            break;
          case "select-multiple":
            $el$$30_form_value_values$$5$$ = $goog$dom$forms$getValue$$($el$$30_form_value_values$$5$$);
            if($el$$30_form_value_values$$5$$ != $JSCompiler_alias_NULL$$) {
              $json_res$$[$name$$67$$] = [];
              for(var $value$$79$$, $j$$8$$ = 0;$value$$79$$ = $el$$30_form_value_values$$5$$[$j$$8$$];$j$$8$$++) {
                $json_res$$[$name$$67$$].push($value$$79$$)
              }
            }
            break;
          default:
            $el$$30_form_value_values$$5$$ = $goog$dom$forms$getValue$$($el$$30_form_value_values$$5$$), $el$$30_form_value_values$$5$$ != $JSCompiler_alias_NULL$$ && ($json_res$$[$name$$67$$] = $el$$30_form_value_values$$5$$)
        }
      }
    }
  }
  return $json_res$$
}
function $bitex$util$getCountries$$() {
  return{AF:"Afghanistan", AX:"\u00c5land Islands", AL:"Albania", DZ:"Algeria", AS:"American Samoa", AD:"Andorra", AO:"Angola", AI:"Anguilla", AQ:"Antarctica", AG:"Antigua and Barbuda", AR:"Argentina", AM:"Armenia", AW:"Aruba", AC:"Ascension Island", AU:"Australia", AT:"Austria", AZ:"Azerbaijan", BS:"Bahamas", BH:"Bahrain", BD:"Bangladesh", BB:"Barbados", BY:"Belarus", BE:"Belgium", BZ:"Belize", BJ:"Benin", BM:"Bermuda", BT:"Bhutan", BO:"Bolivia", BQ:"Bonaire, Sint Eustatius, and Saba", BA:"Bosnia and Herzegovina", 
  BW:"Botswana", BV:"Bouvet Island", BR:"Brazil", IO:"British Indian Ocean Territory", VG:"British Virgin Islands", BN:"Brunei", BG:"Bulgaria", BF:"Burkina Faso", BI:"Burundi", KH:"Cambodia", CM:"Cameroon", CA:"Canada", IC:"Canary Islands", CV:"Cape Verde", KY:"Cayman Islands", CF:"Central African Republic", EA:"Ceuta and Melilla", TD:"Chad", CL:"Chile", CN:"China", CX:"Christmas Island", CP:"Clipperton Island", CC:"Cocos [Keeling] Islands", CO:"Colombia", KM:"Comoros", CG:"Congo - Brazzaville", 
  CD:"Congo - Kinshasa", CK:"Cook Islands", CR:"Costa Rica", CI:"C\u00f4te d\u2019Ivoire", HR:"Croatia", CU:"Cuba", CW:"Cura\u00e7ao", CY:"Cyprus", CZ:"Czech Republic", DK:"Denmark", DG:"Diego Garcia", DJ:"Djibouti", DM:"Dominica", DO:"Dominican Republic", EC:"Ecuador", EG:"Egypt", SV:"El Salvador", GQ:"Equatorial Guinea", ER:"Eritrea", EE:"Estonia", ET:"Ethiopia", EU:"European Union", FK:"Falkland Islands", FO:"Faroe Islands", FJ:"Fiji", FI:"Finland", FR:"France", GF:"French Guiana", PF:"French Polynesia", 
  TF:"French Southern Territories", GA:"Gabon", GM:"Gambia", GE:"Georgia", DE:"Germany", GH:"Ghana", GI:"Gibraltar", GR:"Greece", GL:"Greenland", GD:"Grenada", GP:"Guadeloupe", GU:"Guam", GT:"Guatemala", GG:"Guernsey", GN:"Guinea", GW:"Guinea-Bissau", GY:"Guyana", HT:"Haiti", HM:"Heard Island and McDonald Islands", HN:"Honduras", HK:"Hong Kong SAR China", HU:"Hungary", IS:"Iceland", IN:"India", ID:"Indonesia", IR:"Iran", IQ:"Iraq", IE:"Ireland", IM:"Isle of Man", IL:"Israel", IT:"Italy", JM:"Jamaica", 
  JP:"Japan", JE:"Jersey", JO:"Jordan", KZ:"Kazakhstan", KE:"Kenya", KI:"Kiribati", KW:"Kuwait", KG:"Kyrgyzstan", LA:"Laos", LV:"Latvia", LB:"Lebanon", LS:"Lesotho", LR:"Liberia", LY:"Libya", LI:"Liechtenstein", LT:"Lithuania", LU:"Luxembourg", MO:"Macau SAR China", MK:"Macedonia", MG:"Madagascar", MW:"Malawi", MY:"Malaysia", MV:"Maldives", ML:"Mali", MT:"Malta", MH:"Marshall Islands", MQ:"Martinique", MR:"Mauritania", MU:"Mauritius", YT:"Mayotte", MX:"Mexico", FM:"Micronesia", MD:"Moldova", MC:"Monaco", 
  MN:"Mongolia", ME:"Montenegro", MS:"Montserrat", MA:"Morocco", MZ:"Mozambique", MM:"Myanmar [Burma]", NA:"Namibia", NR:"Nauru", NP:"Nepal", NL:"Netherlands", AN:"Netherlands Antilles", NC:"New Caledonia", NZ:"New Zealand", NI:"Nicaragua", NE:"Niger", NG:"Nigeria", NU:"Niue", NF:"Norfolk Island", KP:"North Korea", MP:"Northern Mariana Islands", NO:"Norway", OM:"Oman", QO:"Outlying Oceania", PK:"Pakistan", PW:"Palau", PS:"Palestinian Territories", PA:"Panama", PG:"Papua New Guinea", PY:"Paraguay", 
  PE:"Peru", PH:"Philippines", PN:"Pitcairn Islands", PL:"Poland", PT:"Portugal", PR:"Puerto Rico", QA:"Qatar", RE:"R\u00e9union", RO:"Romania", RU:"Russia", RW:"Rwanda", BL:"Saint Barth\u00e9lemy", SH:"Saint Helena", KN:"Saint Kitts and Nevis", LC:"Saint Lucia", MF:"Saint Martin", PM:"Saint Pierre and Miquelon", VC:"Saint Vincent and the Grenadines", WS:"Samoa", SM:"San Marino", ST:"S\u00e3o Tom\u00e9 and Pr\u00edncipe", SA:"Saudi Arabia", SN:"Senegal", RS:"Serbia", CS:"Serbia and Montenegro", SC:"Seychelles", 
  SL:"Sierra Leone", SG:"Singapore", SX:"Sint Maarten", SK:"Slovakia", SI:"Slovenia", SB:"Solomon Islands", SO:"Somalia", ZA:"South Africa", GS:"South Georgia and the South Sandwich Islands", KR:"South Korea", SS:"South Sudan", ES:"Spain", LK:"Sri Lanka", SD:"Sudan", SR:"Suriname", SJ:"Svalbard and Jan Mayen", SZ:"Swaziland", SE:"Sweden", CH:"Switzerland", SY:"Syria", TW:"Taiwan", TJ:"Tajikistan", TZ:"Tanzania", TH:"Thailand", TL:"Timor-Leste", TG:"Togo", TK:"Tokelau", TO:"Tonga", TT:"Trinidad and Tobago", 
  TA:"Tristan da Cunha", TN:"Tunisia", TR:"Turkey", TM:"Turkmenistan", TC:"Turks and Caicos Islands", TV:"Tuvalu", UM:"U.S. Minor Outlying Islands", VI:"U.S. Virgin Islands", UG:"Uganda", UA:"Ukraine", AE:"United Arab Emirates", GB:"United Kingdom", US:["United States", "AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VE|VA|WA|WV|WI|WY", "Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming"], 
  UY:"Uruguay", UZ:"Uzbekistan", VU:"Vanuatu", VA:"Vatican City", VE:"Venezuela", VN:"Vietnam", WF:"Wallis and Futuna", EH:"Western Sahara", YE:"Yemen", ZM:"Zambia", ZW:"Zimbabwe"}
}
function $bitex$util$calculatePriceAmountAndFee$$($user_input$$, $verb$$, $order_depth$$, $username$$, $fee$$) {
  var $amount$$ = 0, $price$$ = 0, $vwap$$ = 0, $order$$1$$, $total_volume$$ = 0;
  $fee$$ = $user_input$$ * $fee$$ / 1E4;
  var $work_total$$ = $user_input$$ - $fee$$, $order_idx$$;
  for($order_idx$$ in $order_depth$$) {
    if($order$$1$$ = $order_depth$$[$order_idx$$], $username$$ != $order$$1$$[2]) {
      var $order_volume$$ = $order$$1$$[0] * $order$$1$$[1] / 1E8;
      if(0 == $verb$$) {
        if($order_volume$$ >= $work_total$$) {
          $amount$$ += 1E8 * ($work_total$$ / $order$$1$$[0]);
          $price$$ = $order$$1$$[0];
          $work_total$$ = 0;
          $vwap$$ = ($user_input$$ - $fee$$) / $amount$$;
          break
        }else {
          $order_volume$$ < $work_total$$ && ($amount$$ += $order$$1$$[1], $work_total$$ -= $order_volume$$)
        }
      }else {
        if(1 == $verb$$) {
          if($order$$1$$[1] >= $work_total$$) {
            $price$$ = $order$$1$$[0];
            $total_volume$$ += $order$$1$$[0] * $work_total$$ / 1E8;
            $vwap$$ = $total_volume$$ / ($user_input$$ - $fee$$);
            $amount$$ = $vwap$$ * ($user_input$$ - $fee$$);
            $work_total$$ = 0;
            break
          }else {
            $order$$1$$[1] < $work_total$$ && ($total_volume$$ += $order_volume$$, $work_total$$ -= $order$$1$$[1])
          }
        }
      }
    }
  }
  if(0 === $work_total$$ && 0 < $amount$$) {
    return[$price$$, parseInt($amount$$, 10), parseInt($fee$$, 10), $vwap$$]
  }
}
function $bitex$util$isValidAddress$$($address_bytes$$1$$) {
  $address_bytes$$1$$ = $bitex$util$base58Decode$$($address_bytes$$1$$);
  var $end$$4$$ = $address_bytes$$1$$.length - 4, $checksum_hash$$ = $address_bytes$$1$$.slice(0, $end$$4$$), $checksum_hash$$ = $bitex$util$sha256_digest$$($bitex$util$sha256_digest$$($checksum_hash$$));
  return $checksum_hash$$[0] != $address_bytes$$1$$[$end$$4$$] || $checksum_hash$$[1] != $address_bytes$$1$$[$end$$4$$ + 1] || $checksum_hash$$[2] != $address_bytes$$1$$[$end$$4$$ + 2] || $checksum_hash$$[3] != $address_bytes$$1$$[$end$$4$$ + 3] ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
}
function $bitex$util$sha256_digest$$($data$$32_digest$$inline_201$$) {
  var $sha256$$ = new $goog$crypt$Sha256$$;
  $sha256$$.update($data$$32_digest$$inline_201$$);
  $data$$32_digest$$inline_201$$ = [];
  var $n$$inline_204_totalBits$$inline_202$$ = 8 * $sha256$$.total;
  56 > $sha256$$.$inChunk$ ? $sha256$$.update($sha256$$.$pad_$, 56 - $sha256$$.$inChunk$) : $sha256$$.update($sha256$$.$pad_$, 64 - ($sha256$$.$inChunk$ - 56));
  for(var $i$$inline_203$$ = 63;56 <= $i$$inline_203$$;$i$$inline_203$$--) {
    $sha256$$.$chunk$[$i$$inline_203$$] = $n$$inline_204_totalBits$$inline_202$$ & 255, $n$$inline_204_totalBits$$inline_202$$ /= 256
  }
  $JSCompiler_StaticMethods_computeChunk_$$($sha256$$, $sha256$$.$chunk$);
  for($i$$inline_203$$ = $n$$inline_204_totalBits$$inline_202$$ = 0;$i$$inline_203$$ < $sha256$$.$numHashBlocks$;$i$$inline_203$$++) {
    for(var $j$$inline_205$$ = 24;0 <= $j$$inline_205$$;$j$$inline_205$$ -= 8) {
      $data$$32_digest$$inline_201$$[$n$$inline_204_totalBits$$inline_202$$++] = $sha256$$.hash[$i$$inline_203$$] >> $j$$inline_205$$ & 255
    }
  }
  return $data$$32_digest$$inline_201$$
}
function $bitex$util$base58Decode$$($input_string$$2$$) {
  if(0 === $input_string$$2$$.length) {
    return""
  }
  for(var $ALPHABET_MAP$$ = {}, $i$$89$$ = 0;58 > $i$$89$$;$i$$89$$++) {
    $ALPHABET_MAP$$["123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".charAt($i$$89$$)] = $i$$89$$
  }
  $input_string$$2$$ = $input_string$$2$$.split("").map(function($c$$5$$) {
    return $ALPHABET_MAP$$[$c$$5$$]
  });
  for(var $j$$9$$, $bytes$$2$$ = [0], $i$$89$$ = 0;$i$$89$$ < $input_string$$2$$.length;$i$$89$$++) {
    for($j$$9$$ = 0;$j$$9$$ < $bytes$$2$$.length;$j$$9$$++) {
      $bytes$$2$$[$j$$9$$] *= 58
    }
    $bytes$$2$$[$bytes$$2$$.length - 1] += $input_string$$2$$[$i$$89$$];
    var $carry$$ = 0;
    for($j$$9$$ = $bytes$$2$$.length - 1;0 <= $j$$9$$;$j$$9$$--) {
      $bytes$$2$$[$j$$9$$] += $carry$$, $carry$$ = $bytes$$2$$[$j$$9$$] >> 8, $bytes$$2$$[$j$$9$$] &= 255
    }
    for(;$carry$$;) {
      $bytes$$2$$.unshift($carry$$), $carry$$ = $bytes$$2$$[0] >> 8, $bytes$$2$$[0] &= 255
    }
  }
  for($i$$89$$ = 0;$i$$89$$ < $input_string$$2$$.length - 1 && 0 == $input_string$$2$$[$i$$89$$];$i$$89$$++) {
    $bytes$$2$$.unshift(0)
  }
  return $bytes$$2$$
}
;
// Input 43
// Input 44
// Input 45
// Input 46
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$(8);
// Input 47
// Input 48
// Input 49
function $soy$renderAsElement$$($template$$5$$, $opt_templateData$$4$$) {
  return $goog$soy$renderAsElement$$($template$$5$$, $opt_templateData$$4$$, $JSCompiler_alias_VOID$$, new $goog$dom$DomHelper$$($JSCompiler_alias_VOID$$))
}
function $soy$$0$0escapeHtml$$($value$$80$$) {
  return"object" === typeof $value$$80$$ && $value$$80$$ && 0 === $value$$80$$.$contentKind$ ? $value$$80$$.content : String($value$$80$$).replace($soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$, $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$)
}
var $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$ = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\x0B":"&#11;", "\f":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$($ch$$7$$) {
  return $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$[$ch$$7$$]
}
var $soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$ = /[\x00\x22\x26\x27\x3c\x3e]/g;
// Input 50
function $bitex$ui$SimpleOrderEntry$templates$SimpleOrderEntry$$($opt_data$$3$$) {
  var $output$$2$$ = "", $MSG_UNNAMED_75$$ = "Precio per " + ($soy$$0$0escapeHtml$$($opt_data$$3$$.$cryptocurrencydescription$) + " :"), $output$$2$$ = $output$$2$$ + ('<div id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '" class="simple-order-entry well" ><div class="row-fluid"><div class="span10"><div class="row-fluid"><div class="pull-left"><span class="simple-order-entry-text" >'), $output$$2$$ = 1 == $opt_data$$3$$.$side$ ? $output$$2$$ + "Quiero comprar" : $output$$2$$ + "Quiero vender", 
  $output$$2$$ = $output$$2$$ + ('</span><div class="input-prepend"><span class="add-on simple-order-entry-price-sign">' + $soy$$0$0escapeHtml$$($opt_data$$3$$.$crypto_currency_symbol$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_qty" class="input-small simple-order-entry-qty" type="text" required/></div></div><div class="pull-left"><span class="simple-order-entry-text" >para un total de</span><div class="input-prepend "><span class="add-on simple-order-entry-price-sign">' + 
  $soy$$0$0escapeHtml$$($opt_data$$3$$.$currency_symbol$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_total" class="input-small simple-order-entry-total" type="text" required/></div></div></div><div class="row-fluid"><small>Comision ( ' + $soy$$0$0escapeHtml$$($opt_data$$3$$.$formatted_fee$) + ' ) : <span id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_fee"></span>,' + $MSG_UNNAMED_75$$ + '<strong><span id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_avg_price"></span></strong></strong></small></div></div><div class="span2"><div class="row-fluid">'), 
  $output$$2$$ = 1 == $opt_data$$3$$.$side$ ? $output$$2$$ + ('<button id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_action_simple" class="btn btn-large btn-success order-entry-action span12">COMPRA</button>') : $output$$2$$ + ('<button id="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.id) + '_action_simple" class="btn btn-large btn-danger order-entry-action span12">VENTA</button>');
  return $output$$2$$ + "</div></div></div></div>"
}
;
// Input 51
var $goog$i18n$NumberFormatSymbols_en$$ = {$DECIMAL_SEP$:".", $GROUP_SEP$:",", $PERCENT$:"%", $ZERO_DIGIT$:"0", $PLUS_SIGN$:"+", $MINUS_SIGN$:"-", $EXP_SYMBOL$:"E", $PERMILL$:"\u2030", $INFINITY$:"\u221e", $NAN$:"NaN", $DECIMAL_PATTERN$:"#,##0.###", $SCIENTIFIC_PATTERN$:"#E0", $PERCENT_PATTERN$:"#,##0%", $CURRENCY_PATTERN$:"\u00a4#,##0.00;(\u00a4#,##0.00)", $DEF_CURRENCY_CODE$:"USD"}, $goog$i18n$NumberFormatSymbols$$ = $goog$i18n$NumberFormatSymbols_en$$, $goog$i18n$NumberFormatSymbols$$ = $goog$i18n$NumberFormatSymbols_en$$;
// Input 52
var $goog$i18n$currency$CurrencyInfo$$ = {AED:[2, "dh", "\u062f.\u0625.", "DH"], AUD:[2, "$", "AU$"], BDT:[2, "\u09f3", "Tk"], BRL:[2, "R$", "R$"], CAD:[2, "$", "C$"], CHF:[2, "CHF", "CHF"], CLP:[0, "$", "CL$"], CNY:[2, "\u00a5", "RMB\u00a5"], COP:[0, "$", "COL$"], CRC:[0, "\u20a1", "CR\u20a1"], CZK:[2, "K\u010d", "K\u010d"], DKK:[18, "kr", "kr"], DOP:[2, "$", "RD$"], EGP:[2, "\u00a3", "LE"], EUR:[18, "\u20ac", "\u20ac"], GBP:[2, "\u00a3", "GB\u00a3"], HKD:[2, "$", "HK$"], ILS:[2, "\u20aa", "IL\u20aa"], 
INR:[2, "\u20b9", "Rs"], ISK:[0, "kr", "kr"], JMD:[2, "$", "JA$"], JPY:[0, "\u00a5", "JP\u00a5"], KRW:[0, "\u20a9", "KR\u20a9"], LKR:[2, "Rs", "SLRs"], MNT:[0, "\u20ae", "MN\u20ae"], MXN:[2, "$", "Mex$"], MYR:[2, "RM", "RM"], NOK:[18, "kr", "NOkr"], PAB:[2, "B/.", "B/."], PEN:[2, "S/.", "S/."], PHP:[2, "\u20b1", "Php"], PKR:[0, "Rs", "PKRs."], RUB:[42, "\u0440\u0443\u0431.", "\u0440\u0443\u0431."], SAR:[2, "Rial", "Rial"], SEK:[2, "kr", "kr"], SGD:[2, "$", "S$"], THB:[2, "\u0e3f", "THB"], TRY:[2, 
"TL", "YTL"], TWD:[2, "NT$", "NT$"], USD:[2, "$", "US$"], UYU:[2, "$", "UY$"], VND:[0, "\u20ab", "VN\u20ab"], YER:[0, "Rial", "Rial"], ZAR:[2, "R", "ZAR"]};
// Input 53
function $goog$i18n$NumberFormat$$($JSCompiler_inline_result$$1137_pattern$$2_pattern$$inline_1150$$, $opt_currency_strParts$$inline_1151$$, $opt_currencyStyle_precision$$inline_1152$$) {
  this.$intlCurrencyCode_$ = $opt_currency_strParts$$inline_1151$$ || $goog$i18n$NumberFormatSymbols$$.$DEF_CURRENCY_CODE$;
  this.$currencyStyle_$ = $opt_currencyStyle_precision$$inline_1152$$ || $goog$i18n$NumberFormat$CurrencyStyle$LOCAL$$;
  this.$maximumIntegerDigits_$ = 40;
  this.$minimumIntegerDigits_$ = 1;
  this.$maximumFractionDigits_$ = 3;
  this.$minExponentDigits_$ = this.$minimumFractionDigits_$ = 0;
  this.$useSignForPositiveExponent_$ = $JSCompiler_alias_FALSE$$;
  this.$positiveSuffix_$ = this.$positivePrefix_$ = "";
  this.$negativePrefix_$ = "-";
  this.$negativeSuffix_$ = "";
  this.$multiplier_$ = 1;
  this.$groupingSize_$ = 3;
  this.$useExponentialNotation_$ = this.$decimalSeparatorAlwaysShown_$ = $JSCompiler_alias_FALSE$$;
  if("number" == typeof $JSCompiler_inline_result$$1137_pattern$$2_pattern$$inline_1150$$) {
    switch($JSCompiler_inline_result$$1137_pattern$$2_pattern$$inline_1150$$) {
      case 1:
        $JSCompiler_StaticMethods_applyPattern_$$(this, $goog$i18n$NumberFormatSymbols$$.$DECIMAL_PATTERN$);
        break;
      case 2:
        $JSCompiler_StaticMethods_applyPattern_$$(this, $goog$i18n$NumberFormatSymbols$$.$SCIENTIFIC_PATTERN$);
        break;
      case 3:
        $JSCompiler_StaticMethods_applyPattern_$$(this, $goog$i18n$NumberFormatSymbols$$.$PERCENT_PATTERN$);
        break;
      case 4:
        $JSCompiler_inline_result$$1137_pattern$$2_pattern$$inline_1150$$ = $goog$i18n$NumberFormatSymbols$$.$CURRENCY_PATTERN$;
        $opt_currency_strParts$$inline_1151$$ = ["0"];
        $opt_currencyStyle_precision$$inline_1152$$ = $goog$i18n$currency$CurrencyInfo$$[this.$intlCurrencyCode_$][0] & 7;
        if(0 < $opt_currencyStyle_precision$$inline_1152$$) {
          $opt_currency_strParts$$inline_1151$$.push(".");
          for(var $i$$inline_1153$$ = 0;$i$$inline_1153$$ < $opt_currencyStyle_precision$$inline_1152$$;$i$$inline_1153$$++) {
            $opt_currency_strParts$$inline_1151$$.push("0")
          }
        }
        $JSCompiler_inline_result$$1137_pattern$$2_pattern$$inline_1150$$ = $JSCompiler_inline_result$$1137_pattern$$2_pattern$$inline_1150$$.replace(/0.00/g, $opt_currency_strParts$$inline_1151$$.join(""));
        $JSCompiler_StaticMethods_applyPattern_$$(this, $JSCompiler_inline_result$$1137_pattern$$2_pattern$$inline_1150$$);
        break;
      default:
        $JSCompiler_alias_THROW$$(Error("Unsupported pattern type."))
    }
  }else {
    $JSCompiler_StaticMethods_applyPattern_$$(this, $JSCompiler_inline_result$$1137_pattern$$2_pattern$$inline_1150$$)
  }
}
var $goog$i18n$NumberFormat$CurrencyStyle$LOCAL$$ = 0;
function $JSCompiler_StaticMethods_setMinimumFractionDigits$$($JSCompiler_StaticMethods_setMinimumFractionDigits$self$$) {
  2 > $JSCompiler_StaticMethods_setMinimumFractionDigits$self$$.$maximumFractionDigits_$ && $JSCompiler_alias_THROW$$(Error("Min value must be less than max value"));
  $JSCompiler_StaticMethods_setMinimumFractionDigits$self$$.$minimumFractionDigits_$ = 2
}
function $JSCompiler_StaticMethods_setMaximumFractionDigits$$($JSCompiler_StaticMethods_setMaximumFractionDigits$self$$) {
  2 < $JSCompiler_StaticMethods_setMaximumFractionDigits$self$$.$minimumFractionDigits_$ && $JSCompiler_alias_THROW$$(Error("Min value must be less than max value"));
  $JSCompiler_StaticMethods_setMaximumFractionDigits$self$$.$maximumFractionDigits_$ = 2
}
function $JSCompiler_StaticMethods_applyPattern_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$) {
  $JSCompiler_StaticMethods_applyPattern_$self$$.$pattern_$ = $pattern$$3$$.replace(/ /g, "\u00a0");
  var $pos$$6$$ = [0];
  $JSCompiler_StaticMethods_applyPattern_$self$$.$positivePrefix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$, $pos$$6$$);
  for(var $trunkLen_trunkStart$$ = $pos$$6$$[0], $decimalPos$$inline_213$$ = -1, $digitLeftCount$$inline_214$$ = 0, $n$$inline_220_zeroDigitCount$$inline_215$$ = 0, $digitRightCount$$inline_216_totalDigits$$inline_221$$ = 0, $groupingCount$$inline_217$$ = -1, $len$$inline_218$$ = $pattern$$3$$.length, $loop$$inline_219$$ = $JSCompiler_alias_TRUE$$;$pos$$6$$[0] < $len$$inline_218$$ && $loop$$inline_219$$;$pos$$6$$[0]++) {
    switch($pattern$$3$$.charAt($pos$$6$$[0])) {
      case "#":
        0 < $n$$inline_220_zeroDigitCount$$inline_215$$ ? $digitRightCount$$inline_216_totalDigits$$inline_221$$++ : $digitLeftCount$$inline_214$$++;
        0 <= $groupingCount$$inline_217$$ && 0 > $decimalPos$$inline_213$$ && $groupingCount$$inline_217$$++;
        break;
      case "0":
        0 < $digitRightCount$$inline_216_totalDigits$$inline_221$$ && $JSCompiler_alias_THROW$$(Error('Unexpected "0" in pattern "' + $pattern$$3$$ + '"'));
        $n$$inline_220_zeroDigitCount$$inline_215$$++;
        0 <= $groupingCount$$inline_217$$ && 0 > $decimalPos$$inline_213$$ && $groupingCount$$inline_217$$++;
        break;
      case ",":
        $groupingCount$$inline_217$$ = 0;
        break;
      case ".":
        0 <= $decimalPos$$inline_213$$ && $JSCompiler_alias_THROW$$(Error('Multiple decimal separators in pattern "' + $pattern$$3$$ + '"'));
        $decimalPos$$inline_213$$ = $digitLeftCount$$inline_214$$ + $n$$inline_220_zeroDigitCount$$inline_215$$ + $digitRightCount$$inline_216_totalDigits$$inline_221$$;
        break;
      case "E":
        $JSCompiler_StaticMethods_applyPattern_$self$$.$useExponentialNotation_$ && $JSCompiler_alias_THROW$$(Error('Multiple exponential symbols in pattern "' + $pattern$$3$$ + '"'));
        $JSCompiler_StaticMethods_applyPattern_$self$$.$useExponentialNotation_$ = $JSCompiler_alias_TRUE$$;
        $JSCompiler_StaticMethods_applyPattern_$self$$.$minExponentDigits_$ = 0;
        $pos$$6$$[0] + 1 < $len$$inline_218$$ && "+" == $pattern$$3$$.charAt($pos$$6$$[0] + 1) && ($pos$$6$$[0]++, $JSCompiler_StaticMethods_applyPattern_$self$$.$useSignForPositiveExponent_$ = $JSCompiler_alias_TRUE$$);
        for(;$pos$$6$$[0] + 1 < $len$$inline_218$$ && "0" == $pattern$$3$$.charAt($pos$$6$$[0] + 1);) {
          $pos$$6$$[0]++, $JSCompiler_StaticMethods_applyPattern_$self$$.$minExponentDigits_$++
        }
        (1 > $digitLeftCount$$inline_214$$ + $n$$inline_220_zeroDigitCount$$inline_215$$ || 1 > $JSCompiler_StaticMethods_applyPattern_$self$$.$minExponentDigits_$) && $JSCompiler_alias_THROW$$(Error('Malformed exponential pattern "' + $pattern$$3$$ + '"'));
        $loop$$inline_219$$ = $JSCompiler_alias_FALSE$$;
        break;
      default:
        $pos$$6$$[0]--, $loop$$inline_219$$ = $JSCompiler_alias_FALSE$$
    }
  }
  0 == $n$$inline_220_zeroDigitCount$$inline_215$$ && (0 < $digitLeftCount$$inline_214$$ && 0 <= $decimalPos$$inline_213$$) && ($n$$inline_220_zeroDigitCount$$inline_215$$ = $decimalPos$$inline_213$$, 0 == $n$$inline_220_zeroDigitCount$$inline_215$$ && $n$$inline_220_zeroDigitCount$$inline_215$$++, $digitRightCount$$inline_216_totalDigits$$inline_221$$ = $digitLeftCount$$inline_214$$ - $n$$inline_220_zeroDigitCount$$inline_215$$, $digitLeftCount$$inline_214$$ = $n$$inline_220_zeroDigitCount$$inline_215$$ - 
  1, $n$$inline_220_zeroDigitCount$$inline_215$$ = 1);
  (0 > $decimalPos$$inline_213$$ && 0 < $digitRightCount$$inline_216_totalDigits$$inline_221$$ || 0 <= $decimalPos$$inline_213$$ && ($decimalPos$$inline_213$$ < $digitLeftCount$$inline_214$$ || $decimalPos$$inline_213$$ > $digitLeftCount$$inline_214$$ + $n$$inline_220_zeroDigitCount$$inline_215$$) || 0 == $groupingCount$$inline_217$$) && $JSCompiler_alias_THROW$$(Error('Malformed pattern "' + $pattern$$3$$ + '"'));
  $digitRightCount$$inline_216_totalDigits$$inline_221$$ = $digitLeftCount$$inline_214$$ + $n$$inline_220_zeroDigitCount$$inline_215$$ + $digitRightCount$$inline_216_totalDigits$$inline_221$$;
  $JSCompiler_StaticMethods_applyPattern_$self$$.$maximumFractionDigits_$ = 0 <= $decimalPos$$inline_213$$ ? $digitRightCount$$inline_216_totalDigits$$inline_221$$ - $decimalPos$$inline_213$$ : 0;
  0 <= $decimalPos$$inline_213$$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$minimumFractionDigits_$ = $digitLeftCount$$inline_214$$ + $n$$inline_220_zeroDigitCount$$inline_215$$ - $decimalPos$$inline_213$$, 0 > $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumFractionDigits_$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$minimumFractionDigits_$ = 0));
  $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$ = (0 <= $decimalPos$$inline_213$$ ? $decimalPos$$inline_213$$ : $digitRightCount$$inline_216_totalDigits$$inline_221$$) - $digitLeftCount$$inline_214$$;
  $JSCompiler_StaticMethods_applyPattern_$self$$.$useExponentialNotation_$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$maximumIntegerDigits_$ = $digitLeftCount$$inline_214$$ + $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$, 0 == $JSCompiler_StaticMethods_applyPattern_$self$$.$maximumFractionDigits_$ && 0 == $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$ = 1));
  $JSCompiler_StaticMethods_applyPattern_$self$$.$groupingSize_$ = Math.max(0, $groupingCount$$inline_217$$);
  $JSCompiler_StaticMethods_applyPattern_$self$$.$decimalSeparatorAlwaysShown_$ = 0 == $decimalPos$$inline_213$$ || $decimalPos$$inline_213$$ == $digitRightCount$$inline_216_totalDigits$$inline_221$$;
  $trunkLen_trunkStart$$ = $pos$$6$$[0] - $trunkLen_trunkStart$$;
  $JSCompiler_StaticMethods_applyPattern_$self$$.$positiveSuffix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$, $pos$$6$$);
  $pos$$6$$[0] < $pattern$$3$$.length && $pattern$$3$$.charAt($pos$$6$$[0]) == $goog$i18n$NumberFormat$PATTERN_SEPARATOR_$$ ? ($pos$$6$$[0]++, $JSCompiler_StaticMethods_applyPattern_$self$$.$negativePrefix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$, $pos$$6$$), $pos$$6$$[0] += $trunkLen_trunkStart$$, $JSCompiler_StaticMethods_applyPattern_$self$$.$negativeSuffix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, 
  $pattern$$3$$, $pos$$6$$)) : ($JSCompiler_StaticMethods_applyPattern_$self$$.$negativePrefix_$ = $JSCompiler_StaticMethods_applyPattern_$self$$.$positivePrefix_$ + $JSCompiler_StaticMethods_applyPattern_$self$$.$negativePrefix_$, $JSCompiler_StaticMethods_applyPattern_$self$$.$negativeSuffix_$ += $JSCompiler_StaticMethods_applyPattern_$self$$.$positiveSuffix_$)
}
$goog$i18n$NumberFormat$$.prototype.parse = function $$goog$i18n$NumberFormat$$$$parse$($text$$14$$, $opt_pos$$) {
  var $pos$$7$$ = $opt_pos$$ || [0], $ret$$2_text$$inline_224$$ = NaN;
  $text$$14$$ = $text$$14$$.replace(/ /g, "\u00a0");
  var $gotPositive$$ = $text$$14$$.indexOf(this.$positivePrefix_$, $pos$$7$$[0]) == $pos$$7$$[0], $gotNegative$$ = $text$$14$$.indexOf(this.$negativePrefix_$, $pos$$7$$[0]) == $pos$$7$$[0];
  $gotPositive$$ && $gotNegative$$ && (this.$positivePrefix_$.length > this.$negativePrefix_$.length ? $gotNegative$$ = $JSCompiler_alias_FALSE$$ : this.$positivePrefix_$.length < this.$negativePrefix_$.length && ($gotPositive$$ = $JSCompiler_alias_FALSE$$));
  $gotPositive$$ ? $pos$$7$$[0] += this.$positivePrefix_$.length : $gotNegative$$ && ($pos$$7$$[0] += this.$negativePrefix_$.length);
  if($text$$14$$.indexOf($goog$i18n$NumberFormatSymbols$$.$INFINITY$, $pos$$7$$[0]) == $pos$$7$$[0]) {
    $pos$$7$$[0] += $goog$i18n$NumberFormatSymbols$$.$INFINITY$.length, $ret$$2_text$$inline_224$$ = Infinity
  }else {
    for(var $ret$$2_text$$inline_224$$ = $text$$14$$, $sawDecimal$$inline_226$$ = $JSCompiler_alias_FALSE$$, $sawExponent$$inline_227$$ = $JSCompiler_alias_FALSE$$, $sawDigit$$inline_228$$ = $JSCompiler_alias_FALSE$$, $scale$$inline_229$$ = 1, $decimal$$inline_230$$ = $goog$i18n$NumberFormatSymbols$$.$DECIMAL_SEP$, $grouping$$inline_231$$ = $goog$i18n$NumberFormatSymbols$$.$GROUP_SEP$, $exponentChar$$inline_232$$ = $goog$i18n$NumberFormatSymbols$$.$EXP_SYMBOL$, $normalizedText$$inline_233$$ = "";$pos$$7$$[0] < 
    $ret$$2_text$$inline_224$$.length;$pos$$7$$[0]++) {
      var $ch$$inline_234$$ = $ret$$2_text$$inline_224$$.charAt($pos$$7$$[0]), $digit$$inline_235$$ = $JSCompiler_StaticMethods_getDigit_$$($ch$$inline_234$$);
      if(0 <= $digit$$inline_235$$ && 9 >= $digit$$inline_235$$) {
        $normalizedText$$inline_233$$ += $digit$$inline_235$$, $sawDigit$$inline_228$$ = $JSCompiler_alias_TRUE$$
      }else {
        if($ch$$inline_234$$ == $decimal$$inline_230$$.charAt(0)) {
          if($sawDecimal$$inline_226$$ || $sawExponent$$inline_227$$) {
            break
          }
          $normalizedText$$inline_233$$ += ".";
          $sawDecimal$$inline_226$$ = $JSCompiler_alias_TRUE$$
        }else {
          if($ch$$inline_234$$ == $grouping$$inline_231$$.charAt(0) && ("\u00a0" != $grouping$$inline_231$$.charAt(0) || $pos$$7$$[0] + 1 < $ret$$2_text$$inline_224$$.length && 0 <= $JSCompiler_StaticMethods_getDigit_$$($ret$$2_text$$inline_224$$.charAt($pos$$7$$[0] + 1)))) {
            if($sawDecimal$$inline_226$$ || $sawExponent$$inline_227$$) {
              break
            }
          }else {
            if($ch$$inline_234$$ == $exponentChar$$inline_232$$.charAt(0)) {
              if($sawExponent$$inline_227$$) {
                break
              }
              $normalizedText$$inline_233$$ += "E";
              $sawExponent$$inline_227$$ = $JSCompiler_alias_TRUE$$
            }else {
              if("+" == $ch$$inline_234$$ || "-" == $ch$$inline_234$$) {
                $normalizedText$$inline_233$$ += $ch$$inline_234$$
              }else {
                if($ch$$inline_234$$ == $goog$i18n$NumberFormatSymbols$$.$PERCENT$.charAt(0)) {
                  if(1 != $scale$$inline_229$$) {
                    break
                  }
                  $scale$$inline_229$$ = 100;
                  if($sawDigit$$inline_228$$) {
                    $pos$$7$$[0]++;
                    break
                  }
                }else {
                  if($ch$$inline_234$$ == $goog$i18n$NumberFormatSymbols$$.$PERMILL$.charAt(0)) {
                    if(1 != $scale$$inline_229$$) {
                      break
                    }
                    $scale$$inline_229$$ = 1E3;
                    if($sawDigit$$inline_228$$) {
                      $pos$$7$$[0]++;
                      break
                    }
                  }else {
                    break
                  }
                }
              }
            }
          }
        }
      }
    }
    $ret$$2_text$$inline_224$$ = parseFloat($normalizedText$$inline_233$$) / $scale$$inline_229$$
  }
  if($gotPositive$$) {
    if($text$$14$$.indexOf(this.$positiveSuffix_$, $pos$$7$$[0]) != $pos$$7$$[0]) {
      return NaN
    }
    $pos$$7$$[0] += this.$positiveSuffix_$.length
  }else {
    if($gotNegative$$) {
      if($text$$14$$.indexOf(this.$negativeSuffix_$, $pos$$7$$[0]) != $pos$$7$$[0]) {
        return NaN
      }
      $pos$$7$$[0] += this.$negativeSuffix_$.length
    }
  }
  return $gotNegative$$ ? -$ret$$2_text$$inline_224$$ : $ret$$2_text$$inline_224$$
};
$goog$i18n$NumberFormat$$.prototype.$format$ = function $$goog$i18n$NumberFormat$$$$$format$$($number_number$$inline_238$$) {
  if(isNaN($number_number$$inline_238$$)) {
    return $goog$i18n$NumberFormatSymbols$$.$NAN$
  }
  var $parts$$3$$ = [], $isNegative$$ = 0 > $number_number$$inline_238$$ || 0 == $number_number$$inline_238$$ && 0 > 1 / $number_number$$inline_238$$;
  $parts$$3$$.push($isNegative$$ ? this.$negativePrefix_$ : this.$positivePrefix_$);
  if(isFinite($number_number$$inline_238$$)) {
    if($number_number$$inline_238$$ = $number_number$$inline_238$$ * ($isNegative$$ ? -1 : 1) * this.$multiplier_$, this.$useExponentialNotation_$) {
      if(0 == $number_number$$inline_238$$) {
        $JSCompiler_StaticMethods_subformatFixed_$$(this, $number_number$$inline_238$$, this.$minimumIntegerDigits_$, $parts$$3$$), $JSCompiler_StaticMethods_addExponentPart_$$(this, 0, $parts$$3$$)
      }else {
        var $exponent$$inline_240$$ = Math.floor(Math.log($number_number$$inline_238$$) / Math.log(10));
        $number_number$$inline_238$$ /= Math.pow(10, $exponent$$inline_240$$);
        var $minIntDigits$$inline_241$$ = this.$minimumIntegerDigits_$;
        if(1 < this.$maximumIntegerDigits_$ && this.$maximumIntegerDigits_$ > this.$minimumIntegerDigits_$) {
          for(;0 != $exponent$$inline_240$$ % this.$maximumIntegerDigits_$;) {
            $number_number$$inline_238$$ *= 10, $exponent$$inline_240$$--
          }
          $minIntDigits$$inline_241$$ = 1
        }else {
          1 > this.$minimumIntegerDigits_$ ? ($exponent$$inline_240$$++, $number_number$$inline_238$$ /= 10) : ($exponent$$inline_240$$ -= this.$minimumIntegerDigits_$ - 1, $number_number$$inline_238$$ *= Math.pow(10, this.$minimumIntegerDigits_$ - 1))
        }
        $JSCompiler_StaticMethods_subformatFixed_$$(this, $number_number$$inline_238$$, $minIntDigits$$inline_241$$, $parts$$3$$);
        $JSCompiler_StaticMethods_addExponentPart_$$(this, $exponent$$inline_240$$, $parts$$3$$)
      }
    }else {
      $JSCompiler_StaticMethods_subformatFixed_$$(this, $number_number$$inline_238$$, this.$minimumIntegerDigits_$, $parts$$3$$)
    }
  }else {
    $parts$$3$$.push($goog$i18n$NumberFormatSymbols$$.$INFINITY$)
  }
  $parts$$3$$.push($isNegative$$ ? this.$negativeSuffix_$ : this.$positiveSuffix_$);
  return $parts$$3$$.join("")
};
function $JSCompiler_StaticMethods_subformatFixed_$$($JSCompiler_StaticMethods_subformatFixed_$self$$, $i$$97_intValue_number$$1$$, $fracPart_minIntDigits$$, $parts$$4$$) {
  var $fracLen_power$$1$$ = Math.pow(10, $JSCompiler_StaticMethods_subformatFixed_$self$$.$maximumFractionDigits_$), $shiftedNumber_translatableInt_zeroCode$$ = Math.round($i$$97_intValue_number$$1$$ * $fracLen_power$$1$$), $fracValue$$;
  isFinite($shiftedNumber_translatableInt_zeroCode$$) ? ($i$$97_intValue_number$$1$$ = Math.floor($shiftedNumber_translatableInt_zeroCode$$ / $fracLen_power$$1$$), $fracValue$$ = Math.floor($shiftedNumber_translatableInt_zeroCode$$ - $i$$97_intValue_number$$1$$ * $fracLen_power$$1$$)) : $fracValue$$ = 0;
  for(var $fractionPresent$$ = 0 < $JSCompiler_StaticMethods_subformatFixed_$self$$.$minimumFractionDigits_$ || 0 < $fracValue$$, $intPart$$ = "", $shiftedNumber_translatableInt_zeroCode$$ = $i$$97_intValue_number$$1$$;1E20 < $shiftedNumber_translatableInt_zeroCode$$;) {
    $intPart$$ = "0" + $intPart$$, $shiftedNumber_translatableInt_zeroCode$$ = Math.round($shiftedNumber_translatableInt_zeroCode$$ / 10)
  }
  var $intPart$$ = $shiftedNumber_translatableInt_zeroCode$$ + $intPart$$, $decimal$$1$$ = $goog$i18n$NumberFormatSymbols$$.$DECIMAL_SEP$, $grouping$$1$$ = $goog$i18n$NumberFormatSymbols$$.$GROUP_SEP$, $shiftedNumber_translatableInt_zeroCode$$ = $goog$i18n$NumberFormatSymbols$$.$ZERO_DIGIT$.charCodeAt(0), $digitLen$$ = $intPart$$.length;
  if(0 < $i$$97_intValue_number$$1$$ || 0 < $fracPart_minIntDigits$$) {
    for($i$$97_intValue_number$$1$$ = $digitLen$$;$i$$97_intValue_number$$1$$ < $fracPart_minIntDigits$$;$i$$97_intValue_number$$1$$++) {
      $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$))
    }
    for($i$$97_intValue_number$$1$$ = 0;$i$$97_intValue_number$$1$$ < $digitLen$$;$i$$97_intValue_number$$1$$++) {
      $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$ + 1 * $intPart$$.charAt($i$$97_intValue_number$$1$$))), 1 < $digitLen$$ - $i$$97_intValue_number$$1$$ && (0 < $JSCompiler_StaticMethods_subformatFixed_$self$$.$groupingSize_$ && 1 == ($digitLen$$ - $i$$97_intValue_number$$1$$) % $JSCompiler_StaticMethods_subformatFixed_$self$$.$groupingSize_$) && $parts$$4$$.push($grouping$$1$$)
    }
  }else {
    $fractionPresent$$ || $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$))
  }
  ($JSCompiler_StaticMethods_subformatFixed_$self$$.$decimalSeparatorAlwaysShown_$ || $fractionPresent$$) && $parts$$4$$.push($decimal$$1$$);
  $fracPart_minIntDigits$$ = "" + ($fracValue$$ + $fracLen_power$$1$$);
  for($fracLen_power$$1$$ = $fracPart_minIntDigits$$.length;"0" == $fracPart_minIntDigits$$.charAt($fracLen_power$$1$$ - 1) && $fracLen_power$$1$$ > $JSCompiler_StaticMethods_subformatFixed_$self$$.$minimumFractionDigits_$ + 1;) {
    $fracLen_power$$1$$--
  }
  for($i$$97_intValue_number$$1$$ = 1;$i$$97_intValue_number$$1$$ < $fracLen_power$$1$$;$i$$97_intValue_number$$1$$++) {
    $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$ + 1 * $fracPart_minIntDigits$$.charAt($i$$97_intValue_number$$1$$)))
  }
}
function $JSCompiler_StaticMethods_addExponentPart_$$($JSCompiler_StaticMethods_addExponentPart_$self$$, $exponent_exponentDigits$$, $parts$$5$$) {
  $parts$$5$$.push($goog$i18n$NumberFormatSymbols$$.$EXP_SYMBOL$);
  0 > $exponent_exponentDigits$$ ? ($exponent_exponentDigits$$ = -$exponent_exponentDigits$$, $parts$$5$$.push($goog$i18n$NumberFormatSymbols$$.$MINUS_SIGN$)) : $JSCompiler_StaticMethods_addExponentPart_$self$$.$useSignForPositiveExponent_$ && $parts$$5$$.push($goog$i18n$NumberFormatSymbols$$.$PLUS_SIGN$);
  $exponent_exponentDigits$$ = "" + $exponent_exponentDigits$$;
  for(var $zeroChar$$ = $goog$i18n$NumberFormatSymbols$$.$ZERO_DIGIT$, $i$$98$$ = $exponent_exponentDigits$$.length;$i$$98$$ < $JSCompiler_StaticMethods_addExponentPart_$self$$.$minExponentDigits_$;$i$$98$$++) {
    $parts$$5$$.push($zeroChar$$)
  }
  $parts$$5$$.push($exponent_exponentDigits$$)
}
function $JSCompiler_StaticMethods_getDigit_$$($ch$$12_code$$4$$) {
  $ch$$12_code$$4$$ = $ch$$12_code$$4$$.charCodeAt(0);
  if(48 <= $ch$$12_code$$4$$ && 58 > $ch$$12_code$$4$$) {
    return $ch$$12_code$$4$$ - 48
  }
  var $zeroCode$$1$$ = $goog$i18n$NumberFormatSymbols$$.$ZERO_DIGIT$.charCodeAt(0);
  return $zeroCode$$1$$ <= $ch$$12_code$$4$$ && $ch$$12_code$$4$$ < $zeroCode$$1$$ + 10 ? $ch$$12_code$$4$$ - $zeroCode$$1$$ : -1
}
var $goog$i18n$NumberFormat$PATTERN_SEPARATOR_$$ = ";";
function $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_parseAffix_$self$$, $pattern$$4$$, $pos$$9$$) {
  for(var $affix$$ = "", $inQuote$$ = $JSCompiler_alias_FALSE$$, $len$$2$$ = $pattern$$4$$.length;$pos$$9$$[0] < $len$$2$$;$pos$$9$$[0]++) {
    var $ch$$13_currencyCode$$inline_243$$ = $pattern$$4$$.charAt($pos$$9$$[0]);
    if("'" == $ch$$13_currencyCode$$inline_243$$) {
      $pos$$9$$[0] + 1 < $len$$2$$ && "'" == $pattern$$4$$.charAt($pos$$9$$[0] + 1) ? ($pos$$9$$[0]++, $affix$$ += "'") : $inQuote$$ = !$inQuote$$
    }else {
      if($inQuote$$) {
        $affix$$ += $ch$$13_currencyCode$$inline_243$$
      }else {
        switch($ch$$13_currencyCode$$inline_243$$) {
          case "#":
          ;
          case "0":
          ;
          case ",":
          ;
          case ".":
          ;
          case $goog$i18n$NumberFormat$PATTERN_SEPARATOR_$$:
            return $affix$$;
          case "\u00a4":
            if($pos$$9$$[0] + 1 < $len$$2$$ && "\u00a4" == $pattern$$4$$.charAt($pos$$9$$[0] + 1)) {
              $pos$$9$$[0]++, $affix$$ += $JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$
            }else {
              switch($JSCompiler_StaticMethods_parseAffix_$self$$.$currencyStyle_$) {
                case $goog$i18n$NumberFormat$CurrencyStyle$LOCAL$$:
                  $affix$$ += $goog$i18n$currency$CurrencyInfo$$[$JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$][1];
                  break;
                case 2:
                  var $ch$$13_currencyCode$$inline_243$$ = $JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$, $info$$inline_244$$ = $goog$i18n$currency$CurrencyInfo$$[$ch$$13_currencyCode$$inline_243$$], $affix$$ = $affix$$ + ($ch$$13_currencyCode$$inline_243$$ == $info$$inline_244$$[1] ? $ch$$13_currencyCode$$inline_243$$ : $ch$$13_currencyCode$$inline_243$$ + " " + $info$$inline_244$$[1]);
                  break;
                case 1:
                  $affix$$ += $goog$i18n$currency$CurrencyInfo$$[$JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$][2]
              }
            }
            break;
          case "%":
            1 != $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ && $JSCompiler_alias_THROW$$(Error("Too many percent/permill"));
            $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ = 100;
            $affix$$ += $goog$i18n$NumberFormatSymbols$$.$PERCENT$;
            break;
          case "\u2030":
            1 != $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ && $JSCompiler_alias_THROW$$(Error("Too many percent/permill"));
            $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ = 1E3;
            $affix$$ += $goog$i18n$NumberFormatSymbols$$.$PERMILL$;
            break;
          default:
            $affix$$ += $ch$$13_currencyCode$$inline_243$$
        }
      }
    }
  }
  return $affix$$
}
;
// Input 54
function $bitex$ui$SimpleOrderEntry$$($opt_blinkDelay$$, $opt_domHelper$$3$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$3$$);
  this.$order_depth_$ = []
}
$goog$inherits$$($bitex$ui$SimpleOrderEntry$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$SimpleOrderEntry$$.prototype;
$JSCompiler_prototypeAlias$$.$getBaseCssClass$ = $JSCompiler_returnArg$$("simple-order-entry");
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$SimpleOrderEntry$templates$SimpleOrderEntry$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "order_entry"), $symbol$:this.$model_$.$symbol$, $crypto_currency_symbol$:this.$model_$.$crypto_currency_symbol$, $cryptocurrencydescription$:this.$model_$.$crypto_currency_description$, $currency_symbol$:this.$model_$.$currency_symbol$, $currency_description$:this.$model_$.$currency_description$, $side$:this.$model_$.$side$, type:this.$model_$.type, 
  $broker_id$:this.$model_$.$broker_id$, $formatted_fee$:this.$model_$.$formatted_fee$, $client_id$:this.$model_$.$client_id$})
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$SimpleOrderEntry$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$42$$ = this.$getHandler$();
  this.$getDomHelper$();
  this.$qty_element_$ = $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_qty"));
  this.$total_element_$ = $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_total"));
  $JSCompiler_StaticMethods_listen$$($handler$$42$$, new $goog$events$KeyHandler$$(this.$total_element_$), $goog$events$KeyHandler$EventType$KEY$$, this.$onBlockNonNumberKeys_$);
  $JSCompiler_StaticMethods_listen$$($handler$$42$$, new $goog$events$KeyHandler$$(this.$qty_element_$), $goog$events$KeyHandler$EventType$KEY$$, this.$onBlockNonNumberKeys_$);
  $JSCompiler_StaticMethods_listen$$($handler$$42$$, new $goog$events$InputHandler$$(this.$total_element_$), $goog$events$InputHandler$EventType$INPUT$$, this.$onChangeTotal_$);
  $JSCompiler_StaticMethods_listen$$($handler$$42$$, new $goog$events$InputHandler$$(this.$qty_element_$), $goog$events$InputHandler$EventType$INPUT$$, this.$onChangeQty_$);
  $JSCompiler_StaticMethods_listen$$($handler$$42$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_action_simple")), "click", this.$onActionSimple_$)
};
$JSCompiler_prototypeAlias$$.$onBlockNonNumberKeys_$ = function $$JSCompiler_prototypeAlias$$$$onBlockNonNumberKeys_$$($e$$27$$) {
  var $inputEl$$ = $e$$27$$.target, $inputValue$$ = $goog$dom$forms$getValue$$($inputEl$$);
  if(!$goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$27$$) && ($e$$27$$.keyCode == $goog$events$KeyCodes$UP$$ || $e$$27$$.keyCode == $goog$events$KeyCodes$DOWN$$)) {
    var $new_value_value_to_change$$, $number_of_decimal_places_originalEndPos_startPos$$ = $inputEl$$.selectionStart, $endPos$$1_originalStartPos$$ = $inputEl$$.selectionEnd;
    $number_of_decimal_places_originalEndPos_startPos$$ === $endPos$$1_originalStartPos$$ && 0 === $number_of_decimal_places_originalEndPos_startPos$$ ? ($new_value_value_to_change$$ = $inputValue$$, $endPos$$1_originalStartPos$$ = $inputValue$$.length) : ("." === $inputValue$$.substr($number_of_decimal_places_originalEndPos_startPos$$ - 1, 1) && --$endPos$$1_originalStartPos$$, $new_value_value_to_change$$ = $inputValue$$.substr(0, $endPos$$1_originalStartPos$$));
    var $number_of_decimal_places_originalEndPos_startPos$$ = $bitex$util$decimalPlaces$$($new_value_value_to_change$$), $value_to_add$$ = 1 / Math.pow(10, $number_of_decimal_places_originalEndPos_startPos$$);
    $new_value_value_to_change$$ = $goog$string$toNumber$$($new_value_value_to_change$$);
    if(isNaN($new_value_value_to_change$$)) {
      return
    }
    $new_value_value_to_change$$ = $e$$27$$.keyCode == $goog$events$KeyCodes$UP$$ ? $new_value_value_to_change$$ + $value_to_add$$ : $new_value_value_to_change$$ - $value_to_add$$;
    $new_value_value_to_change$$ = (Math.round($new_value_value_to_change$$ * Math.pow(10, $number_of_decimal_places_originalEndPos_startPos$$)) / Math.pow(10, $number_of_decimal_places_originalEndPos_startPos$$)).toFixed($number_of_decimal_places_originalEndPos_startPos$$);
    $new_value_value_to_change$$ = "" + $new_value_value_to_change$$ + $inputValue$$.substr($endPos$$1_originalStartPos$$);
    0 > $goog$string$toNumber$$($new_value_value_to_change$$) && ($new_value_value_to_change$$ = (0).toFixed($number_of_decimal_places_originalEndPos_startPos$$));
    $endPos$$1_originalStartPos$$ = $inputEl$$.selectionStart;
    $number_of_decimal_places_originalEndPos_startPos$$ = $inputEl$$.selectionEnd;
    $goog$dom$forms$setValue$$($inputEl$$, $new_value_value_to_change$$);
    $inputValue$$.length == $new_value_value_to_change$$.length ? ($inputEl$$.selectionStart = $endPos$$1_originalStartPos$$, $inputEl$$.selectionEnd = $number_of_decimal_places_originalEndPos_startPos$$) : $inputValue$$.length > $new_value_value_to_change$$.length ? ($inputEl$$.selectionStart = $endPos$$1_originalStartPos$$ - 1, $inputEl$$.selectionEnd = $number_of_decimal_places_originalEndPos_startPos$$ - 1) : ($inputEl$$.selectionStart = $endPos$$1_originalStartPos$$ + 1, $inputEl$$.selectionEnd = 
    $number_of_decimal_places_originalEndPos_startPos$$ + 1);
    $e$$27$$.target == this.$qty_element_$ ? this.$onChangeQty_$() : $e$$27$$.target == this.$total_element_$ && this.$onChangeTotal_$($e$$27$$);
    $e$$27$$.preventDefault()
  }
  if(!$e$$27$$.ctrlKey && ($e$$27$$.shiftKey || !($e$$27$$.keyCode >= $goog$events$KeyCodes$ZERO$$ && $e$$27$$.keyCode <= $goog$events$KeyCodes$NINE$$ || $e$$27$$.keyCode >= $goog$events$KeyCodes$NUM_ZERO$$ && $e$$27$$.keyCode <= $goog$events$KeyCodes$NUM_NINE$$)) && $goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$27$$)) {
    switch($e$$27$$.keyCode) {
      case $goog$events$KeyCodes$DELETE$$:
      ;
      case $goog$events$KeyCodes$BACKSPACE$$:
      ;
      case $goog$events$KeyCodes$TAB$$:
        return;
      case $goog$events$KeyCodes$NUM_PERIOD$$:
      ;
      case $goog$events$KeyCodes$PERIOD$$:
        if($inputEl$$ = $e$$27$$.target, $inputValue$$ = $goog$dom$forms$getValue$$($inputEl$$), 0 > $inputValue$$.indexOf(".")) {
          return
        }
    }
    $e$$27$$.preventDefault()
  }
};
$JSCompiler_prototypeAlias$$.$onActionSimple_$ = function $$JSCompiler_prototypeAlias$$$$onActionSimple_$$($e$$28$$) {
  $e$$28$$.preventDefault();
  this.dispatchEvent("simple_order_entry_submitted")
};
function $JSCompiler_StaticMethods_disableActions_$$($JSCompiler_StaticMethods_disableActions_$self$$, $enabled$$1$$) {
  var $action_button$$ = new $goog$ui$Button$$;
  $action_button$$.$decorate$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_disableActions_$self$$, "order_entry_action_simple")));
  $action_button$$.$setEnabled$($enabled$$1$$);
  $enabled$$1$$ ? $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_disableActions_$self$$, "order_entry_avg_price")), "") : $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_disableActions_$self$$, "order_entry_avg_price")), "** No hay liquidez, por favor cambie a modo avanzado")
}
$JSCompiler_prototypeAlias$$.$onChangeQty_$ = function $$JSCompiler_prototypeAlias$$$$onChangeQty_$$() {
  this.$last_changed_field_$ = "qty";
  $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_TRUE$$);
  if(this.$order_depth_$ != $JSCompiler_alias_NULL$$) {
    if(this.$order_depth_$.length) {
      var $inputValue$$1_total$$1_vwap$$1$$ = $goog$dom$forms$getValue$$(this.$qty_element_$), $inputValue$$1_total$$1_vwap$$1$$ = $goog$string$toNumber$$($inputValue$$1_total$$1_vwap$$1$$);
      if(!isNaN($inputValue$$1_total$$1_vwap$$1$$)) {
        var $inputValue$$1_total$$1_vwap$$1$$ = 1E8 * $inputValue$$1_total$$1_vwap$$1$$, $formatted_fee_human_average_price_price_amount_fee$$;
        $formatted_fee_human_average_price_price_amount_fee$$ = $bitex$util$calculatePriceAmountAndFee$$($inputValue$$1_total$$1_vwap$$1$$, 1, this.$order_depth_$, this.$model_$.$username$, this.$model_$.$fee$);
        if($formatted_fee_human_average_price_price_amount_fee$$ != $JSCompiler_alias_NULL$$) {
          this.$model_$.$price$ = $formatted_fee_human_average_price_price_amount_fee$$[0];
          this.$model_$.$amount$ = $inputValue$$1_total$$1_vwap$$1$$;
          var $order_fee$$ = $formatted_fee_human_average_price_price_amount_fee$$[2], $inputValue$$1_total$$1_vwap$$1$$ = $formatted_fee_human_average_price_price_amount_fee$$[3], $currency_formatter$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$currency_format$, this.$model_$.$currency_code$), $crypto_currency_formatter$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$crypto_currency_format$, this.$model_$.$crypto_currency_code$);
          $goog$dom$forms$setValue$$(this.$total_element_$, $formatted_fee_human_average_price_price_amount_fee$$[1] / 1E8);
          $formatted_fee_human_average_price_price_amount_fee$$ = $crypto_currency_formatter$$.$format$($order_fee$$ / 1E8);
          $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_fee")), $formatted_fee_human_average_price_price_amount_fee$$);
          $formatted_fee_human_average_price_price_amount_fee$$ = $currency_formatter$$.$format$($inputValue$$1_total$$1_vwap$$1$$);
          "2" == this.$model_$.$side$ && ($formatted_fee_human_average_price_price_amount_fee$$ = $crypto_currency_formatter$$.$format$($inputValue$$1_total$$1_vwap$$1$$));
          $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_avg_price")), $formatted_fee_human_average_price_price_amount_fee$$)
        }else {
          $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
        }
      }
    }else {
      $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
    }
  }else {
    $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$onChangeTotal_$ = function $$JSCompiler_prototypeAlias$$$$onChangeTotal_$$() {
  this.$last_changed_field_$ = "total";
  $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_TRUE$$);
  if(this.$order_depth_$ != $JSCompiler_alias_NULL$$) {
    if(this.$order_depth_$.length) {
      var $price_amount_fee$$1_total$$2_vwap$$2$$ = 1E8 * this.$getTotal$(), $price_amount_fee$$1_total$$2_vwap$$2$$ = $bitex$util$calculatePriceAmountAndFee$$($price_amount_fee$$1_total$$2_vwap$$2$$, 0, this.$order_depth_$, this.$model_$.$username$, this.$model_$.$fee$);
      if($price_amount_fee$$1_total$$2_vwap$$2$$ != $JSCompiler_alias_NULL$$) {
        this.$model_$.$price$ = $price_amount_fee$$1_total$$2_vwap$$2$$[0];
        this.$model_$.$amount$ = $price_amount_fee$$1_total$$2_vwap$$2$$[1];
        var $formatted_fee$$1_human_average_price$$1_order_fee$$1$$ = $price_amount_fee$$1_total$$2_vwap$$2$$[2], $price_amount_fee$$1_total$$2_vwap$$2$$ = $price_amount_fee$$1_total$$2_vwap$$2$$[3], $spend_formatter$$, $receive_formatter$$;
        "1" == this.$model_$.$side$ ? ($spend_formatter$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$currency_format$, this.$model_$.$currency_code$), $receive_formatter$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$crypto_currency_format$, this.$model_$.$crypto_currency_code$)) : ($spend_formatter$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$crypto_currency_format$, this.$model_$.$crypto_currency_code$), $receive_formatter$$ = new $goog$i18n$NumberFormat$$(this.$model_$.$currency_format$, 
        this.$model_$.$currency_code$));
        $goog$dom$forms$setValue$$(this.$qty_element_$, this.$model_$.$amount$ / 1E8);
        $formatted_fee$$1_human_average_price$$1_order_fee$$1$$ = $spend_formatter$$.$format$($formatted_fee$$1_human_average_price$$1_order_fee$$1$$ / 1E8);
        $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_fee")), $formatted_fee$$1_human_average_price$$1_order_fee$$1$$);
        $formatted_fee$$1_human_average_price$$1_order_fee$$1$$ = $spend_formatter$$.$format$($price_amount_fee$$1_total$$2_vwap$$2$$);
        "2" == this.$model_$.$side$ && ($formatted_fee$$1_human_average_price$$1_order_fee$$1$$ = $receive_formatter$$.$format$($price_amount_fee$$1_total$$2_vwap$$2$$));
        $goog$dom$setTextContent$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_avg_price")), $formatted_fee$$1_human_average_price$$1_order_fee$$1$$)
      }else {
        $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
      }
    }else {
      $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
    }
  }else {
    $JSCompiler_StaticMethods_disableActions_$$(this, $JSCompiler_alias_FALSE$$)
  }
};
function $JSCompiler_StaticMethods_setOrderDepth$$($JSCompiler_StaticMethods_setOrderDepth$self$$, $order_depth$$1$$) {
  $JSCompiler_StaticMethods_setOrderDepth$self$$.$order_depth_$ = $order_depth$$1$$;
  "total" == $JSCompiler_StaticMethods_setOrderDepth$self$$.$last_changed_field_$ ? $JSCompiler_StaticMethods_setOrderDepth$self$$.$onChangeTotal_$() : "qty" == $JSCompiler_StaticMethods_setOrderDepth$self$$.$last_changed_field_$ && $JSCompiler_StaticMethods_setOrderDepth$self$$.$onChangeQty_$()
}
$JSCompiler_prototypeAlias$$.$getTotal$ = function $$JSCompiler_prototypeAlias$$$$getTotal$$() {
  var $inputValue$$2_res$$8$$ = $goog$dom$forms$getValue$$(this.$total_element_$), $inputValue$$2_res$$8$$ = $goog$string$toNumber$$($inputValue$$2_res$$8$$);
  isNaN($inputValue$$2_res$$8$$) && ($inputValue$$2_res$$8$$ = 0);
  return $inputValue$$2_res$$8$$
};
$JSCompiler_prototypeAlias$$.$getSymbol$ = function $$JSCompiler_prototypeAlias$$$$getSymbol$$() {
  return this.$model_$.$symbol$
};
$JSCompiler_prototypeAlias$$.$getSide$ = function $$JSCompiler_prototypeAlias$$$$getSide$$() {
  return this.$model_$.$side$
};
$JSCompiler_prototypeAlias$$.$getBrokerID$ = function $$JSCompiler_prototypeAlias$$$$getBrokerID$$() {
  return this.$model_$.$broker_id$
};
$JSCompiler_prototypeAlias$$.$setBrokerID$ = function $$JSCompiler_prototypeAlias$$$$setBrokerID$$($broker_id$$) {
  this.$model_$.$broker_id$ = $broker_id$$;
  $goog$dom$forms$setValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "order_entry_broker_id")))
};
$JSCompiler_prototypeAlias$$.$getClientID$ = function $$JSCompiler_prototypeAlias$$$$getClientID$$() {
  return this.$model_$.$client_id$
};
$JSCompiler_prototypeAlias$$.$getPrice$ = function $$JSCompiler_prototypeAlias$$$$getPrice$$() {
  return this.$model_$.$price$
};
$JSCompiler_prototypeAlias$$.$getAmount$ = function $$JSCompiler_prototypeAlias$$$$getAmount$$() {
  return this.$model_$.$amount$
};
// Input 55
function $goog$ui$registry$setDecoratorByClassName$$($className$$18$$, $decoratorFn$$) {
  $className$$18$$ || $JSCompiler_alias_THROW$$(Error("Invalid class name " + $className$$18$$));
  $goog$isFunction$$($decoratorFn$$) || $JSCompiler_alias_THROW$$(Error("Invalid decorator function " + $decoratorFn$$))
}
var $goog$ui$registry$defaultRenderers_$$ = {};
// Input 56
function $goog$Timer$$($opt_interval$$, $opt_timerObject$$) {
  $goog$Disposable$$.call(this);
  this.$interval_$ = $opt_interval$$ || 1;
  this.$timerObject_$ = $opt_timerObject$$ || $goog$Timer$defaultTimerObject$$;
  this.$boundTick_$ = $goog$bind$$(this.$tick_$, this);
  this.$last_$ = $goog$now$$()
}
$goog$inherits$$($goog$Timer$$, $goog$events$EventTarget$$);
$goog$Timer$$.prototype.enabled = $JSCompiler_alias_FALSE$$;
var $goog$Timer$defaultTimerObject$$ = $goog$global$$;
$JSCompiler_prototypeAlias$$ = $goog$Timer$$.prototype;
$JSCompiler_prototypeAlias$$.$timer_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$tick_$ = function $$JSCompiler_prototypeAlias$$$$tick_$$() {
  if(this.enabled) {
    var $elapsed$$ = $goog$now$$() - this.$last_$;
    0 < $elapsed$$ && $elapsed$$ < 0.8 * this.$interval_$ ? this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$ - $elapsed$$) : (this.dispatchEvent($goog$Timer$TICK$$), this.enabled && (this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$), this.$last_$ = $goog$now$$()))
  }
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  this.enabled = $JSCompiler_alias_TRUE$$;
  this.$timer_$ || (this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$), this.$last_$ = $goog$now$$())
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  this.enabled = $JSCompiler_alias_FALSE$$;
  this.$timer_$ && (this.$timerObject_$.clearTimeout(this.$timer_$), this.$timer_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$Timer$$.$superClass_$.$disposeInternal$.call(this);
  this.stop();
  delete this.$timerObject_$
};
var $goog$Timer$TICK$$ = "tick";
function $goog$Timer$callOnce$$($listener$$60$$, $opt_delay$$, $opt_handler$$14$$) {
  $goog$isFunction$$($listener$$60$$) ? $opt_handler$$14$$ && ($listener$$60$$ = $goog$bind$$($listener$$60$$, $opt_handler$$14$$)) : $listener$$60$$ && "function" == typeof $listener$$60$$.handleEvent ? $listener$$60$$ = $goog$bind$$($listener$$60$$.handleEvent, $listener$$60$$) : $JSCompiler_alias_THROW$$(Error("Invalid listener argument"));
  return 2147483647 < $opt_delay$$ ? -1 : $goog$Timer$defaultTimerObject$$.setTimeout($listener$$60$$, $opt_delay$$ || 0)
}
;
// Input 57
function $bitex$ui$DataGrid$templates$DataGrid$$($opt_data$$4$$) {
  var $output$$3$$ = "<div " + ($opt_data$$4$$.id ? 'id="' + $soy$$0$0escapeHtml$$($opt_data$$4$$.id) + '"' : "") + '  class="fuelux ' + ($opt_data$$4$$.$base_class$ ? $soy$$0$0escapeHtml$$($opt_data$$4$$.$base_class$) : "") + '" style="width:100%;"><table class="table table-bordered datagrid datagrid-stretch-header"><thead><tr><th colspan="4" ' + (!$opt_data$$4$$.title && !$opt_data$$4$$.$show_search$ ? 'style="display: none;"' : "") + '><span class="datagrid-header-title"  ' + (!$opt_data$$4$$.title ? 
  'style="display: none;"' : "") + " ><strong>" + $soy$$0$0escapeHtml$$($opt_data$$4$$.title) + '</strong></span><div class="datagrid-header-left" ' + (!$opt_data$$4$$.$show_search$ ? 'style="display: none;"' : "") + '><div class="input-append search datagrid-search"><input type="text" class="input-medium" placeholder="' + $soy$$0$0escapeHtml$$($opt_data$$4$$.$search_placeholder$) + '"><button type="button" class="btn"><i class="icon-search"></i></button></div></div><div class="datagrid-header-right">';
  if($opt_data$$4$$.$button_filters$) {
    for(var $output$$3$$ = $output$$3$$ + '<div class="select filter datagrid-filter" data-resize="auto"><button type="button" data-toggle="dropdown" class="btn dropdown-toggle">', $buttonList33_buttonList41$$ = $opt_data$$4$$.$button_filters$, $buttonListLen33_buttonListLen41$$ = $buttonList33_buttonList41$$.length, $buttonIndex33_buttonIndex41$$ = 0;$buttonIndex33_buttonIndex41$$ < $buttonListLen33_buttonListLen41$$;$buttonIndex33_buttonIndex41$$++) {
      var $buttonData33_buttonData41$$ = $buttonList33_buttonList41$$[$buttonIndex33_buttonIndex41$$], $output$$3$$ = $output$$3$$ + (0 == $buttonIndex33_buttonIndex41$$ ? '<span class="dropdown-label" style="width: 111px;">' + $soy$$0$0escapeHtml$$($buttonData33_buttonData41$$.label) + "</span>" : "")
    }
    $output$$3$$ += '<span class="caret"></span></button><ul class="dropdown-menu">';
    $buttonList33_buttonList41$$ = $opt_data$$4$$.$button_filters$;
    $buttonListLen33_buttonListLen41$$ = $buttonList33_buttonList41$$.length;
    for($buttonIndex33_buttonIndex41$$ = 0;$buttonIndex33_buttonIndex41$$ < $buttonListLen33_buttonListLen41$$;$buttonIndex33_buttonIndex41$$++) {
      $buttonData33_buttonData41$$ = $buttonList33_buttonList41$$[$buttonIndex33_buttonIndex41$$], $output$$3$$ += '<li data-value="' + $soy$$0$0escapeHtml$$($buttonData33_buttonData41$$.value) + '"><a href="#">' + $soy$$0$0escapeHtml$$($buttonData33_buttonData41$$.label) + "</a></li>"
    }
    $output$$3$$ += "</ul></div>"
  }
  return $output$$3$$ += '</div></th></tr></thead></table><div class="datagrid-stretch-wrapper" style="height:' + ($opt_data$$4$$.$wrapper_height$ ? $soy$$0$0escapeHtml$$($opt_data$$4$$.$wrapper_height$) : "360") + 'px;"><table class="table table-bordered datagrid"><tbody></tbody></table></div><table class="table table-bordered datagrid datagrid-stretch-footer"><tfoot><tr><th colspan="4"><div class="datagrid-footer-left" style="visibility: visible;"><div class="grid-controls"><span><span class="grid-start"></span> -<span class="grid-end"></span></span></div></div><div class="datagrid-footer-right" style="visibility: visible;"><div class="grid-pager"><button type="button" class="btn grid-refresh"><i class="icon-repeat"></i></button><button type="button" class="btn grid-prevpage"><i class="icon-chevron-left"></i></button><button type="button" class="btn grid-nextpage"><i class="icon-chevron-right"></i></button></div></div></th></tr></tfoot></table></div>'
}
;
// Input 58
var $goog$events$KeyCodes$BACKSPACE$$ = 8, $goog$events$KeyCodes$TAB$$ = 9, $goog$events$KeyCodes$UP$$ = 38, $goog$events$KeyCodes$DOWN$$ = 40, $goog$events$KeyCodes$DELETE$$ = 46, $goog$events$KeyCodes$ZERO$$ = 48, $goog$events$KeyCodes$NINE$$ = 57, $goog$events$KeyCodes$NUM_ZERO$$ = 96, $goog$events$KeyCodes$NUM_NINE$$ = 105, $goog$events$KeyCodes$NUM_PERIOD$$ = 110, $goog$events$KeyCodes$PERIOD$$ = 190, $goog$events$KeyCodes$$ = {};
function $goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$31$$) {
  if($e$$31$$.altKey && !$e$$31$$.ctrlKey || $e$$31$$.metaKey || 112 <= $e$$31$$.keyCode && 123 >= $e$$31$$.keyCode) {
    return $JSCompiler_alias_FALSE$$
  }
  switch($e$$31$$.keyCode) {
    case 18:
    ;
    case 20:
    ;
    case 93:
    ;
    case 17:
    ;
    case $goog$events$KeyCodes$DOWN$$:
    ;
    case 35:
    ;
    case 27:
    ;
    case 36:
    ;
    case 45:
    ;
    case 37:
    ;
    case 224:
    ;
    case 91:
    ;
    case 144:
    ;
    case 12:
    ;
    case 34:
    ;
    case 33:
    ;
    case 19:
    ;
    case 255:
    ;
    case 44:
    ;
    case 39:
    ;
    case 145:
    ;
    case 16:
    ;
    case $goog$events$KeyCodes$UP$$:
    ;
    case 224:
    ;
    case 92:
      return $JSCompiler_alias_FALSE$$;
    case 0:
      return!$goog$userAgent$GECKO$$;
    default:
      return 166 > $e$$31$$.keyCode || 183 < $e$$31$$.keyCode
  }
}
function $goog$events$KeyCodes$firesKeyPressEvent$$($keyCode$$, $opt_heldKeyCode$$, $opt_shiftKey$$, $opt_ctrlKey$$, $opt_altKey$$) {
  if(!$goog$userAgent$IE$$ && (!$goog$userAgent$WEBKIT$$ || !$goog$userAgent$isVersion$$("525"))) {
    return $JSCompiler_alias_TRUE$$
  }
  if($goog$userAgent$detectedMac_$$ && $opt_altKey$$) {
    return $goog$events$KeyCodes$isCharacterKey$$($keyCode$$)
  }
  if($opt_altKey$$ && !$opt_ctrlKey$$ || !$opt_shiftKey$$ && (17 == $opt_heldKeyCode$$ || 18 == $opt_heldKeyCode$$ || $goog$userAgent$detectedMac_$$ && 91 == $opt_heldKeyCode$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  if($goog$userAgent$WEBKIT$$ && $opt_ctrlKey$$ && $opt_shiftKey$$) {
    switch($keyCode$$) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case 188:
      ;
      case $goog$events$KeyCodes$PERIOD$$:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return $JSCompiler_alias_FALSE$$
    }
  }
  if($goog$userAgent$IE$$ && $opt_ctrlKey$$ && $opt_heldKeyCode$$ == $keyCode$$) {
    return $JSCompiler_alias_FALSE$$
  }
  switch($keyCode$$) {
    case 13:
      return!($goog$userAgent$IE$$ && $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$);
    case 27:
      return!$goog$userAgent$WEBKIT$$
  }
  return $goog$events$KeyCodes$isCharacterKey$$($keyCode$$)
}
function $goog$events$KeyCodes$isCharacterKey$$($keyCode$$1$$) {
  if($keyCode$$1$$ >= $goog$events$KeyCodes$ZERO$$ && $keyCode$$1$$ <= $goog$events$KeyCodes$NINE$$ || $keyCode$$1$$ >= $goog$events$KeyCodes$NUM_ZERO$$ && 106 >= $keyCode$$1$$ || 65 <= $keyCode$$1$$ && 90 >= $keyCode$$1$$ || $goog$userAgent$WEBKIT$$ && 0 == $keyCode$$1$$) {
    return $JSCompiler_alias_TRUE$$
  }
  switch($keyCode$$1$$) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case $goog$events$KeyCodes$NUM_PERIOD$$:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case $goog$events$KeyCodes$PERIOD$$:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return $JSCompiler_alias_TRUE$$;
    default:
      return $JSCompiler_alias_FALSE$$
  }
}
function $goog$events$KeyCodes$normalizeGeckoKeyCode$$($keyCode$$2$$) {
  switch($keyCode$$2$$) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return $keyCode$$2$$
  }
}
;
// Input 59
function $goog$events$InputHandler$$($element$$80_emulateInputEvents$$) {
  $goog$Disposable$$.call(this);
  this.$element_$ = $element$$80_emulateInputEvents$$;
  $element$$80_emulateInputEvents$$ = $goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && !$goog$userAgent$isVersion$$("531") && "TEXTAREA" == $element$$80_emulateInputEvents$$.tagName;
  this.$eventHandler_$ = new $goog$events$EventHandler$$(this);
  $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, this.$element_$, $element$$80_emulateInputEvents$$ ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
}
$goog$inherits$$($goog$events$InputHandler$$, $goog$events$EventTarget$$);
var $goog$events$InputHandler$EventType$INPUT$$ = "input";
$goog$events$InputHandler$$.prototype.$timer_$ = $JSCompiler_alias_NULL$$;
$goog$events$InputHandler$$.prototype.handleEvent = function $$goog$events$InputHandler$$$$handleEvent$($e$$32$$) {
  if("input" == $e$$32$$.type) {
    $JSCompiler_StaticMethods_cancelTimerIfSet_$$(this), (!$goog$userAgent$OPERA$$ || this.$element_$ == $goog$dom$getOwnerDocument$$(this.$element_$).activeElement) && this.dispatchEvent($JSCompiler_StaticMethods_createInputEvent_$$($e$$32$$))
  }else {
    if("keydown" != $e$$32$$.type || $goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$32$$)) {
      var $valueBeforeKey$$ = "keydown" == $e$$32$$.type ? this.$element_$.value : $JSCompiler_alias_NULL$$;
      $goog$userAgent$IE$$ && 229 == $e$$32$$.keyCode && ($valueBeforeKey$$ = $JSCompiler_alias_NULL$$);
      var $inputEvent$$ = $JSCompiler_StaticMethods_createInputEvent_$$($e$$32$$);
      $JSCompiler_StaticMethods_cancelTimerIfSet_$$(this);
      this.$timer_$ = $goog$Timer$callOnce$$(function() {
        this.$timer_$ = $JSCompiler_alias_NULL$$;
        this.$element_$.value != $valueBeforeKey$$ && this.dispatchEvent($inputEvent$$)
      }, 0, this)
    }
  }
};
function $JSCompiler_StaticMethods_cancelTimerIfSet_$$($JSCompiler_StaticMethods_cancelTimerIfSet_$self$$) {
  $JSCompiler_StaticMethods_cancelTimerIfSet_$self$$.$timer_$ != $JSCompiler_alias_NULL$$ && ($goog$Timer$defaultTimerObject$$.clearTimeout($JSCompiler_StaticMethods_cancelTimerIfSet_$self$$.$timer_$), $JSCompiler_StaticMethods_cancelTimerIfSet_$self$$.$timer_$ = $JSCompiler_alias_NULL$$)
}
function $JSCompiler_StaticMethods_createInputEvent_$$($be$$2_e$$33$$) {
  $be$$2_e$$33$$ = new $goog$events$BrowserEvent$$($be$$2_e$$33$$.$event_$);
  $be$$2_e$$33$$.type = $goog$events$InputHandler$EventType$INPUT$$;
  return $be$$2_e$$33$$
}
$goog$events$InputHandler$$.prototype.$disposeInternal$ = function $$goog$events$InputHandler$$$$$disposeInternal$$() {
  $goog$events$InputHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.$eventHandler_$.$dispose$();
  $JSCompiler_StaticMethods_cancelTimerIfSet_$$(this);
  delete this.$element_$
};
// Input 60
// Input 61
function $goog$structs$getCount$$($JSCompiler_temp$$4_JSCompiler_temp$$5_col$$) {
  if("function" == typeof $JSCompiler_temp$$4_JSCompiler_temp$$5_col$$.$getCount$) {
    $JSCompiler_temp$$4_JSCompiler_temp$$5_col$$ = $JSCompiler_temp$$4_JSCompiler_temp$$5_col$$.$getCount$()
  }else {
    if($goog$isArrayLike$$($JSCompiler_temp$$4_JSCompiler_temp$$5_col$$) || $goog$isString$$($JSCompiler_temp$$4_JSCompiler_temp$$5_col$$)) {
      $JSCompiler_temp$$4_JSCompiler_temp$$5_col$$ = $JSCompiler_temp$$4_JSCompiler_temp$$5_col$$.length
    }else {
      var $rv$$inline_257$$ = 0, $key$$inline_258$$;
      for($key$$inline_258$$ in $JSCompiler_temp$$4_JSCompiler_temp$$5_col$$) {
        $rv$$inline_257$$++
      }
      $JSCompiler_temp$$4_JSCompiler_temp$$5_col$$ = $rv$$inline_257$$
    }
  }
  return $JSCompiler_temp$$4_JSCompiler_temp$$5_col$$
}
function $goog$structs$getValues$$($col$$1$$) {
  if("function" == typeof $col$$1$$.$getValues$) {
    return $col$$1$$.$getValues$()
  }
  if($goog$isString$$($col$$1$$)) {
    return $col$$1$$.split("")
  }
  if($goog$isArrayLike$$($col$$1$$)) {
    for(var $rv$$17$$ = [], $l$$12$$ = $col$$1$$.length, $i$$103$$ = 0;$i$$103$$ < $l$$12$$;$i$$103$$++) {
      $rv$$17$$.push($col$$1$$[$i$$103$$])
    }
    return $rv$$17$$
  }
  return $goog$object$getValues$$($col$$1$$)
}
function $goog$structs$getKeys$$($col$$2_l$$13$$) {
  if("function" == typeof $col$$2_l$$13$$.$getKeys$) {
    return $col$$2_l$$13$$.$getKeys$()
  }
  if("function" != typeof $col$$2_l$$13$$.$getValues$) {
    if($goog$isArrayLike$$($col$$2_l$$13$$) || $goog$isString$$($col$$2_l$$13$$)) {
      var $rv$$18$$ = [];
      $col$$2_l$$13$$ = $col$$2_l$$13$$.length;
      for(var $i$$104$$ = 0;$i$$104$$ < $col$$2_l$$13$$;$i$$104$$++) {
        $rv$$18$$.push($i$$104$$)
      }
      return $rv$$18$$
    }
    return $goog$object$getKeys$$($col$$2_l$$13$$)
  }
}
function $goog$structs$forEach$$($col$$6$$, $f$$37$$, $opt_obj$$37$$) {
  if("function" == typeof $col$$6$$.forEach) {
    $col$$6$$.forEach($f$$37$$, $opt_obj$$37$$)
  }else {
    if($goog$isArrayLike$$($col$$6$$) || $goog$isString$$($col$$6$$)) {
      $goog$array$forEach$$($col$$6$$, $f$$37$$, $opt_obj$$37$$)
    }else {
      for(var $keys$$1$$ = $goog$structs$getKeys$$($col$$6$$), $values$$6$$ = $goog$structs$getValues$$($col$$6$$), $l$$14$$ = $values$$6$$.length, $i$$105$$ = 0;$i$$105$$ < $l$$14$$;$i$$105$$++) {
        $f$$37$$.call($opt_obj$$37$$, $values$$6$$[$i$$105$$], $keys$$1$$ && $keys$$1$$[$i$$105$$], $col$$6$$)
      }
    }
  }
}
function $goog$structs$every$$($col$$10$$, $f$$41$$) {
  if("function" == typeof $col$$10$$.every) {
    return $col$$10$$.every($f$$41$$, $JSCompiler_alias_VOID$$)
  }
  if($goog$isArrayLike$$($col$$10$$) || $goog$isString$$($col$$10$$)) {
    return $goog$array$every$$($col$$10$$, $f$$41$$, $JSCompiler_alias_VOID$$)
  }
  for(var $keys$$5$$ = $goog$structs$getKeys$$($col$$10$$), $values$$10$$ = $goog$structs$getValues$$($col$$10$$), $l$$18$$ = $values$$10$$.length, $i$$109$$ = 0;$i$$109$$ < $l$$18$$;$i$$109$$++) {
    if(!$f$$41$$.call($JSCompiler_alias_VOID$$, $values$$10$$[$i$$109$$], $keys$$5$$ && $keys$$5$$[$i$$109$$], $col$$10$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
}
;
// Input 62
function $goog$structs$Map$$($opt_map$$, $var_args$$77$$) {
  this.$map_$ = {};
  this.$keys_$ = [];
  var $argLength$$2$$ = arguments.length;
  if(1 < $argLength$$2$$) {
    $argLength$$2$$ % 2 && $JSCompiler_alias_THROW$$(Error("Uneven number of arguments"));
    for(var $i$$110$$ = 0;$i$$110$$ < $argLength$$2$$;$i$$110$$ += 2) {
      this.set(arguments[$i$$110$$], arguments[$i$$110$$ + 1])
    }
  }else {
    $opt_map$$ && this.$addAll$($opt_map$$)
  }
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Map$$.prototype;
$JSCompiler_prototypeAlias$$.$count_$ = 0;
$JSCompiler_prototypeAlias$$.$version_$ = 0;
$JSCompiler_prototypeAlias$$.$getCount$ = $JSCompiler_get$$("$count_$");
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for(var $rv$$21$$ = [], $i$$111$$ = 0;$i$$111$$ < this.$keys_$.length;$i$$111$$++) {
    $rv$$21$$.push(this.$map_$[this.$keys_$[$i$$111$$]])
  }
  return $rv$$21$$
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$keys_$.concat()
};
$JSCompiler_prototypeAlias$$.$containsValue$ = function $$JSCompiler_prototypeAlias$$$$containsValue$$($val$$36$$) {
  for(var $i$$112$$ = 0;$i$$112$$ < this.$keys_$.length;$i$$112$$++) {
    var $key$$64$$ = this.$keys_$[$i$$112$$];
    if($goog$structs$Map$hasKey_$$(this.$map_$, $key$$64$$) && this.$map_$[$key$$64$$] == $val$$36$$) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($otherMap$$1$$, $opt_equalityFn$$) {
  if(this === $otherMap$$1$$) {
    return $JSCompiler_alias_TRUE$$
  }
  if(this.$count_$ != $otherMap$$1$$.$getCount$()) {
    return $JSCompiler_alias_FALSE$$
  }
  var $equalityFn$$ = $opt_equalityFn$$ || $goog$structs$Map$defaultEquals$$;
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for(var $key$$65$$, $i$$113$$ = 0;$key$$65$$ = this.$keys_$[$i$$113$$];$i$$113$$++) {
    if(!$equalityFn$$(this.get($key$$65$$), $otherMap$$1$$.get($key$$65$$))) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
function $goog$structs$Map$defaultEquals$$($a$$31$$, $b$$27$$) {
  return $a$$31$$ === $b$$27$$
}
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$ = {};
  this.$version_$ = this.$count_$ = this.$keys_$.length = 0
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($key$$66$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$66$$) ? (delete this.$map_$[$key$$66$$], this.$count_$--, this.$version_$++, this.$keys_$.length > 2 * this.$count_$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
function $JSCompiler_StaticMethods_cleanupKeysArray_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $srcIndex$$ = 0, $destIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      var $key$$67$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$map_$, $key$$67$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$67$$);
      $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $seen$$2$$ = {}, $destIndex$$ = $srcIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      $key$$67$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$$2$$, $key$$67$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$67$$, $seen$$2$$[$key$$67$$] = 1), $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
}
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$$68$$, $opt_val$$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$68$$) ? this.$map_$[$key$$68$$] : $opt_val$$1$$
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$69$$, $value$$108$$) {
  $goog$structs$Map$hasKey_$$(this.$map_$, $key$$69$$) || (this.$count_$++, this.$keys_$.push($key$$69$$), this.$version_$++);
  this.$map_$[$key$$69$$] = $value$$108$$
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($map$$8_values$$11$$) {
  var $keys$$6$$;
  $map$$8_values$$11$$ instanceof $goog$structs$Map$$ ? ($keys$$6$$ = $map$$8_values$$11$$.$getKeys$(), $map$$8_values$$11$$ = $map$$8_values$$11$$.$getValues$()) : ($keys$$6$$ = $goog$object$getKeys$$($map$$8_values$$11$$), $map$$8_values$$11$$ = $goog$object$getValues$$($map$$8_values$$11$$));
  for(var $i$$114$$ = 0;$i$$114$$ < $keys$$6$$.length;$i$$114$$++) {
    this.set($keys$$6$$[$i$$114$$], $map$$8_values$$11$$[$i$$114$$])
  }
};
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$structs$Map$$(this)
};
function $goog$structs$Map$hasKey_$$($obj$$93$$, $key$$73$$) {
  return Object.prototype.hasOwnProperty.call($obj$$93$$, $key$$73$$)
}
;
// Input 63
function $goog$dom$forms$getFormDataString$$($form$$1$$) {
  for(var $sb$$2$$ = [], $fnAppend$$inline_262$$ = $goog$dom$forms$addFormDataToStringBuffer_$$, $els$$inline_263_inputs$$inline_270$$ = $form$$1$$.elements, $el$$inline_264_input$$inline_271_values$$inline_267$$, $i$$inline_265$$ = 0;$el$$inline_264_input$$inline_271_values$$inline_267$$ = $els$$inline_263_inputs$$inline_270$$[$i$$inline_265$$];$i$$inline_265$$++) {
    if(!($el$$inline_264_input$$inline_271_values$$inline_267$$.form != $form$$1$$ || $el$$inline_264_input$$inline_271_values$$inline_267$$.disabled || "fieldset" == $el$$inline_264_input$$inline_271_values$$inline_267$$.tagName.toLowerCase())) {
      var $name$$inline_266$$ = $el$$inline_264_input$$inline_271_values$$inline_267$$.name;
      switch($el$$inline_264_input$$inline_271_values$$inline_267$$.type.toLowerCase()) {
        case "file":
        ;
        case "submit":
        ;
        case "reset":
        ;
        case "button":
          break;
        case "select-multiple":
          $el$$inline_264_input$$inline_271_values$$inline_267$$ = $goog$dom$forms$getValue$$($el$$inline_264_input$$inline_271_values$$inline_267$$);
          if($el$$inline_264_input$$inline_271_values$$inline_267$$ != $JSCompiler_alias_NULL$$) {
            for(var $value$$inline_268$$, $j$$inline_269$$ = 0;$value$$inline_268$$ = $el$$inline_264_input$$inline_271_values$$inline_267$$[$j$$inline_269$$];$j$$inline_269$$++) {
              $fnAppend$$inline_262$$($sb$$2$$, $name$$inline_266$$, $value$$inline_268$$)
            }
          }
          break;
        default:
          $value$$inline_268$$ = $goog$dom$forms$getValue$$($el$$inline_264_input$$inline_271_values$$inline_267$$), $value$$inline_268$$ != $JSCompiler_alias_NULL$$ && $fnAppend$$inline_262$$($sb$$2$$, $name$$inline_266$$, $value$$inline_268$$)
      }
    }
  }
  $els$$inline_263_inputs$$inline_270$$ = $form$$1$$.getElementsByTagName("input");
  for($i$$inline_265$$ = 0;$el$$inline_264_input$$inline_271_values$$inline_267$$ = $els$$inline_263_inputs$$inline_270$$[$i$$inline_265$$];$i$$inline_265$$++) {
    $el$$inline_264_input$$inline_271_values$$inline_267$$.form == $form$$1$$ && "image" == $el$$inline_264_input$$inline_271_values$$inline_267$$.type.toLowerCase() && ($name$$inline_266$$ = $el$$inline_264_input$$inline_271_values$$inline_267$$.name, $fnAppend$$inline_262$$($sb$$2$$, $name$$inline_266$$, $el$$inline_264_input$$inline_271_values$$inline_267$$.value), $fnAppend$$inline_262$$($sb$$2$$, $name$$inline_266$$ + ".x", "0"), $fnAppend$$inline_262$$($sb$$2$$, $name$$inline_266$$ + ".y", 
    "0"))
  }
  return $sb$$2$$.join("&")
}
function $goog$dom$forms$addFormDataToStringBuffer_$$($sb$$3$$, $name$$70$$, $value$$112$$) {
  $sb$$3$$.push(encodeURIComponent($name$$70$$) + "=" + encodeURIComponent($value$$112$$))
}
function $goog$dom$forms$getValue$$($el$$37$$) {
  var $selectedIndex$$inline_274_type$$92_values$$inline_277$$ = $el$$37$$.type;
  if(!$goog$isDef$$($selectedIndex$$inline_274_type$$92_values$$inline_277$$)) {
    return $JSCompiler_alias_NULL$$
  }
  switch($selectedIndex$$inline_274_type$$92_values$$inline_277$$.toLowerCase()) {
    case "checkbox":
    ;
    case "radio":
      return $el$$37$$.checked ? $el$$37$$.value : $JSCompiler_alias_NULL$$;
    case "select-one":
      return $selectedIndex$$inline_274_type$$92_values$$inline_277$$ = $el$$37$$.selectedIndex, 0 <= $selectedIndex$$inline_274_type$$92_values$$inline_277$$ ? $el$$37$$.options[$selectedIndex$$inline_274_type$$92_values$$inline_277$$].value : $JSCompiler_alias_NULL$$;
    case "select-multiple":
      for(var $selectedIndex$$inline_274_type$$92_values$$inline_277$$ = [], $option$$inline_278$$, $i$$inline_279$$ = 0;$option$$inline_278$$ = $el$$37$$.options[$i$$inline_279$$];$i$$inline_279$$++) {
        $option$$inline_278$$.selected && $selectedIndex$$inline_274_type$$92_values$$inline_277$$.push($option$$inline_278$$.value)
      }
      return $selectedIndex$$inline_274_type$$92_values$$inline_277$$.length ? $selectedIndex$$inline_274_type$$92_values$$inline_277$$ : $JSCompiler_alias_NULL$$;
    default:
      return $goog$isDef$$($el$$37$$.value) ? $el$$37$$.value : $JSCompiler_alias_NULL$$
  }
}
function $goog$dom$forms$setValue$$($el$$41$$, $opt_value$$6$$) {
  var $opt_value$$inline_290_option$$inline_286_type$$93$$ = $el$$41$$.type;
  if($goog$isDef$$($opt_value$$inline_290_option$$inline_286_type$$93$$)) {
    switch($opt_value$$inline_290_option$$inline_286_type$$93$$.toLowerCase()) {
      case "checkbox":
      ;
      case "radio":
        $el$$41$$.checked = $opt_value$$6$$ ? "checked" : $JSCompiler_alias_NULL$$;
        break;
      case "select-one":
        $el$$41$$.selectedIndex = -1;
        if($goog$isString$$($opt_value$$6$$)) {
          for(var $i$$inline_287_option$$inline_291$$ = 0;$opt_value$$inline_290_option$$inline_286_type$$93$$ = $el$$41$$.options[$i$$inline_287_option$$inline_291$$];$i$$inline_287_option$$inline_291$$++) {
            if($opt_value$$inline_290_option$$inline_286_type$$93$$.value == $opt_value$$6$$) {
              $opt_value$$inline_290_option$$inline_286_type$$93$$.selected = $JSCompiler_alias_TRUE$$;
              break
            }
          }
        }
        break;
      case "select-multiple":
        $opt_value$$inline_290_option$$inline_286_type$$93$$ = $opt_value$$6$$;
        $goog$isString$$($opt_value$$inline_290_option$$inline_286_type$$93$$) && ($opt_value$$inline_290_option$$inline_286_type$$93$$ = [$opt_value$$inline_290_option$$inline_286_type$$93$$]);
        for(var $i$$inline_292$$ = 0;$i$$inline_287_option$$inline_291$$ = $el$$41$$.options[$i$$inline_292$$];$i$$inline_292$$++) {
          if($i$$inline_287_option$$inline_291$$.selected = $JSCompiler_alias_FALSE$$, $opt_value$$inline_290_option$$inline_286_type$$93$$) {
            for(var $value$$inline_293$$, $j$$inline_294$$ = 0;$value$$inline_293$$ = $opt_value$$inline_290_option$$inline_286_type$$93$$[$j$$inline_294$$];$j$$inline_294$$++) {
              $i$$inline_287_option$$inline_291$$.value == $value$$inline_293$$ && ($i$$inline_287_option$$inline_291$$.selected = $JSCompiler_alias_TRUE$$)
            }
          }
        }
        break;
      default:
        $el$$41$$.value = $opt_value$$6$$ != $JSCompiler_alias_NULL$$ ? $opt_value$$6$$ : ""
    }
  }
}
;
// Input 64
function $bitex$ui$DataGrid$$($options$$6$$, $opt_domHelper$$4$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$4$$);
  this.$model_$ = {title:$options$$6$$.title, $columns$:$options$$6$$.columns, $rowIDFn$:$options$$6$$.rowIDFn || $goog$nullFunction$$, $rowClassFn$:$options$$6$$.rowClassFn || $goog$nullFunction$$, $currentPage$:$options$$6$$.currentPage || 0, $limit$:$options$$6$$.limit || 100, $blinkDelay$:$options$$6$$.blinkDelay || 700, $wrapperHeight$:$options$$6$$.wrapperHeight, $showSearch$:$options$$6$$.showSearch, $searchPlaceholder$:$options$$6$$.searchPlaceholder, $buttonFilters$:$options$$6$$.buttonFilters};
  this.$sort_column_$ = "";
  this.$sort_direction_$ = "up";
  this.$select_filter_$ = this.$filter_$ = $JSCompiler_alias_NULL$$;
  this.$loading_data_$ = $goog$dom$createDom$$("div", ["progress", "progress-striped", "active"], $goog$dom$createDom$$("div", "bar"));
  $goog$style$setWidth$$(this.$loading_data_$, "50%");
  $goog$style$setStyle$$(this.$loading_data_$, "margin", "auto");
  $goog$style$setWidth$$($goog$dom$getFirstElementChild$$(this.$loading_data_$), "100%")
}
$goog$inherits$$($bitex$ui$DataGrid$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$DataGrid$$.prototype;
$JSCompiler_prototypeAlias$$.$getBaseCssClass$ = $JSCompiler_returnArg$$("datagrid");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $el$$45$$ = $goog$soy$renderAsElement$$($bitex$ui$DataGrid$templates$DataGrid$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "grid"), title:this.$model_$.title, $wrapper_height$:this.$model_$.$wrapperHeight$, $base_class$:this.$getBaseCssClass$(), $show_search$:this.$model_$.$showSearch$, $search_placeholder$:this.$model_$.$searchPlaceholder$, $button_filters$:this.$model_$.$buttonFilters$});
  this.$decorateInternal$($el$$45$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$81_filter_div_selected_filter_option_el$$) {
  this.$element_$ = $element$$81_filter_div_selected_filter_option_el$$;
  var $data_value_search_div_table_header_element$$ = $goog$dom$getFirstElementChild$$($element$$81_filter_div_selected_filter_option_el$$);
  $goog$dom$classes$add$$($data_value_search_div_table_header_element$$, this.$getBaseCssClass$());
  var $thead_element$$ = $goog$dom$getFirstElementChild$$($data_value_search_div_table_header_element$$);
  $goog$dom$getFirstElementChild$$($goog$dom$getFirstElementChild$$($thead_element$$)).setAttribute("colspan", this.$model_$.$columns$.length);
  var $column_header_el$$ = $goog$dom$getNextElementSibling$$($goog$dom$getFirstElementChild$$($thead_element$$));
  $column_header_el$$ != $JSCompiler_alias_NULL$$ && $goog$dom$removeNode$$($column_header_el$$);
  this.$th_sizing_el_$ = $goog$dom$createDom$$("tr");
  this.$tr_columns_el_$ = $goog$dom$createDom$$("tr");
  $goog$array$forEach$$(this.$model_$.$columns$, function($child$$inline_303_column$$) {
    var $th_column_properties$$ = {"data-property":$child$$inline_303_column$$.property};
    $child$$inline_303_column$$.sortable && ($th_column_properties$$["class"] = "sortable");
    var $child$$inline_300$$ = $goog$dom$createDom$$("th", $th_column_properties$$, $child$$inline_303_column$$.label);
    this.$tr_columns_el_$.appendChild($child$$inline_300$$);
    $child$$inline_303_column$$ = $goog$dom$createDom$$("th", $th_column_properties$$, $child$$inline_303_column$$.label);
    this.$th_sizing_el_$.appendChild($child$$inline_303_column$$)
  }, this);
  $thead_element$$.appendChild(this.$tr_columns_el_$);
  this.$table_data_body_el_$ = $goog$dom$getFirstElementChild$$($goog$dom$getFirstElementChild$$($goog$dom$getNextElementSibling$$($data_value_search_div_table_header_element$$)));
  this.$element_start_counter_$ = $goog$dom$getElementByClass$$("grid-start", $element$$81_filter_div_selected_filter_option_el$$);
  this.$element_end_counter_$ = $goog$dom$getElementByClass$$("grid-end", $element$$81_filter_div_selected_filter_option_el$$);
  this.$element_refresh_$ = $goog$dom$getElementByClass$$("grid-refresh", $element$$81_filter_div_selected_filter_option_el$$);
  this.$element_prev_button_$ = $goog$dom$getElementByClass$$("grid-prevpage", $element$$81_filter_div_selected_filter_option_el$$);
  this.$element_next_button_$ = $goog$dom$getElementByClass$$("grid-nextpage", $element$$81_filter_div_selected_filter_option_el$$);
  $data_value_search_div_table_header_element$$ = $goog$dom$getElementByClass$$("datagrid-search", $element$$81_filter_div_selected_filter_option_el$$);
  this.$search_input_$ = $goog$dom$getFirstElementChild$$($data_value_search_div_table_header_element$$);
  this.$search_btn_$ = $goog$dom$getNextElementSibling$$(this.$search_input_$);
  $element$$81_filter_div_selected_filter_option_el$$ = $goog$dom$getElementByClass$$("datagrid-filter", $element$$81_filter_div_selected_filter_option_el$$);
  $element$$81_filter_div_selected_filter_option_el$$ != $JSCompiler_alias_NULL$$ && ($element$$81_filter_div_selected_filter_option_el$$ = $goog$dom$getFirstElementChild$$($goog$dom$getNextElementSibling$$($goog$dom$getFirstElementChild$$($element$$81_filter_div_selected_filter_option_el$$))), $element$$81_filter_div_selected_filter_option_el$$ != $JSCompiler_alias_NULL$$ && ($data_value_search_div_table_header_element$$ = this.$select_filter_$ = $JSCompiler_alias_NULL$$, "LI" === $element$$81_filter_div_selected_filter_option_el$$.tagName && 
  ($data_value_search_div_table_header_element$$ = $element$$81_filter_div_selected_filter_option_el$$.getAttribute("data-value")), $data_value_search_div_table_header_element$$ != $JSCompiler_alias_NULL$$ && "all" !== $data_value_search_div_table_header_element$$ && (this.$select_filter_$ = $data_value_search_div_table_header_element$$)))
};
$JSCompiler_prototypeAlias$$.$handleRefreshPage_$ = function $$JSCompiler_prototypeAlias$$$$handleRefreshPage_$$() {
  $JSCompiler_StaticMethods_render_data_$$(this)
};
$JSCompiler_prototypeAlias$$.$handlePreviousPage_$ = function $$JSCompiler_prototypeAlias$$$$handlePreviousPage_$$() {
  0 >= this.$model_$.$currentPage$ || (this.$model_$.$currentPage$ -= 1, $JSCompiler_StaticMethods_render_data_$$(this))
};
$JSCompiler_prototypeAlias$$.$handleNextPage_$ = function $$JSCompiler_prototypeAlias$$$$handleNextPage_$$() {
  this.$model_$.$currentPage$ += 1;
  $JSCompiler_StaticMethods_render_data_$$(this)
};
$JSCompiler_prototypeAlias$$.$handleColumnClick_$ = function $$JSCompiler_prototypeAlias$$$$handleColumnClick_$$($e$$39_other_sorted_column_elements_sort_indicator_element$$) {
  var $classToRemove_element$$82$$ = $e$$39_other_sorted_column_elements_sort_indicator_element$$.target;
  if($goog$dom$classes$has$$($classToRemove_element$$82$$, "sortable")) {
    this.$sort_column_$ = $classToRemove_element$$82$$.getAttribute("data-property");
    if($goog$dom$classes$has$$($classToRemove_element$$82$$, "sorted")) {
      $e$$39_other_sorted_column_elements_sort_indicator_element$$ = $goog$dom$getElementByClass$$("datagrid-sort", $classToRemove_element$$82$$);
      var $classToAdd$$;
      $goog$dom$classes$has$$($e$$39_other_sorted_column_elements_sort_indicator_element$$, "icon-chevron-up") ? ($classToRemove_element$$82$$ = "icon-chevron-up", $classToAdd$$ = "icon-chevron-down", this.$sort_direction_$ = "ASC") : ($classToRemove_element$$82$$ = "icon-chevron-down", $classToAdd$$ = "icon-chevron-up", this.$sort_direction_$ = "DESC");
      $goog$dom$classes$addRemove$$($e$$39_other_sorted_column_elements_sort_indicator_element$$, $classToRemove_element$$82$$, $classToAdd$$)
    }else {
      $e$$39_other_sorted_column_elements_sort_indicator_element$$ = $goog$dom$getElementsByClass$$("sorted", this.$tr_columns_el_$), $goog$array$forEach$$($e$$39_other_sorted_column_elements_sort_indicator_element$$, function($other_sort_indicator_element_other_sorted_column_element$$) {
        $goog$dom$classes$remove$$($other_sort_indicator_element_other_sorted_column_element$$, "sorted");
        $other_sort_indicator_element_other_sorted_column_element$$ = $goog$dom$getElementByClass$$("datagrid-sort", $other_sort_indicator_element_other_sorted_column_element$$);
        $other_sort_indicator_element_other_sorted_column_element$$ != $JSCompiler_alias_NULL$$ && $goog$dom$removeNode$$($other_sort_indicator_element_other_sorted_column_element$$)
      }, this), $e$$39_other_sorted_column_elements_sort_indicator_element$$ = $goog$dom$createDom$$("i", ["icon-chevron-up", "datagrid-sort"]), $classToRemove_element$$82$$.appendChild($e$$39_other_sorted_column_elements_sort_indicator_element$$), this.$sort_direction_$ = "DESC", $goog$dom$classes$add$$($classToRemove_element$$82$$, "sorted")
    }
    $JSCompiler_StaticMethods_render_data_$$(this)
  }
};
function $JSCompiler_StaticMethods_render_data_$$($JSCompiler_StaticMethods_render_data_$self$$) {
  $goog$dom$setTextContent$$($JSCompiler_StaticMethods_render_data_$self$$.$element_start_counter_$, $JSCompiler_StaticMethods_render_data_$self$$.$model_$.$currentPage$ * $JSCompiler_StaticMethods_render_data_$self$$.$model_$.$limit$ + 1);
  $goog$dom$setTextContent$$($JSCompiler_StaticMethods_render_data_$self$$.$element_end_counter_$, $JSCompiler_StaticMethods_render_data_$self$$.$model_$.$currentPage$ * $JSCompiler_StaticMethods_render_data_$self$$.$model_$.$limit$ + $JSCompiler_StaticMethods_render_data_$self$$.$model_$.$limit$);
  var $options$$7$$ = {Page:$JSCompiler_StaticMethods_render_data_$self$$.$model_$.$currentPage$, Limit:$JSCompiler_StaticMethods_render_data_$self$$.$model_$.$limit$}, $cols$$ = [];
  $goog$array$forEach$$($JSCompiler_StaticMethods_render_data_$self$$.$model_$.$columns$, function($column$$1_property$$6$$) {
    $column$$1_property$$6$$ = $column$$1_property$$6$$.property;
    $column$$1_property$$6$$ != $JSCompiler_alias_NULL$$ && $cols$$.push($column$$1_property$$6$$)
  }, $JSCompiler_StaticMethods_render_data_$self$$);
  $options$$7$$.Columns = $cols$$;
  if(!$goog$string$isEmpty$$($JSCompiler_StaticMethods_render_data_$self$$.$sort_column_$ == $JSCompiler_alias_NULL$$ ? "" : String($JSCompiler_StaticMethods_render_data_$self$$.$sort_column_$))) {
    $options$$7$$.Sort = $JSCompiler_StaticMethods_render_data_$self$$.$sort_column_$, $options$$7$$.SortOrder = $JSCompiler_StaticMethods_render_data_$self$$.$sort_direction_$
  }
  var $filter$$3$$ = $JSCompiler_StaticMethods_getFilter$$($JSCompiler_StaticMethods_render_data_$self$$);
  $filter$$3$$ != $JSCompiler_alias_NULL$$ && 0 < $filter$$3$$.length && ($options$$7$$.Filter = $filter$$3$$);
  $JSCompiler_StaticMethods_render_data_$self$$.dispatchEvent(new $bitex$ui$DataGridEvent$$("request_data", $options$$7$$));
  $goog$dom$removeChildren$$($JSCompiler_StaticMethods_render_data_$self$$.$table_data_body_el_$);
  $JSCompiler_StaticMethods_render_data_$self$$.$table_data_body_el_$.appendChild($JSCompiler_StaticMethods_render_data_$self$$.$loading_data_$)
}
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$DataGrid$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$43$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$43$$, this.$element_refresh_$, "click", this.$handleRefreshPage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$43$$, this.$element_prev_button_$, "click", this.$handlePreviousPage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$43$$, this.$element_next_button_$, "click", this.$handleNextPage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$43$$, this.$tr_columns_el_$, "click", this.$handleColumnClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$43$$, this.$search_btn_$, "click", this.$handleSearchBtnClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$43$$, this.$getElement$(), "click", this.$handleDataGridClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$43$$, new $goog$events$InputHandler$$(this.$search_input_$), $goog$events$InputHandler$EventType$INPUT$$, this.$onChangeFilter_$);
  $JSCompiler_StaticMethods_render_data_$$(this)
};
$JSCompiler_prototypeAlias$$.$handleDataGridClick_$ = function $$JSCompiler_prototypeAlias$$$$handleDataGridClick_$$($e$$40_element$$83$$) {
  $e$$40_element$$83$$ = $e$$40_element$$83$$.target;
  var $is_filter_click$$ = $JSCompiler_alias_FALSE$$, $data_value$$1$$ = $JSCompiler_alias_NULL$$;
  "A" === $e$$40_element$$83$$.tagName && ($e$$40_element$$83$$ = $goog$dom$getParentElement$$($e$$40_element$$83$$));
  "LI" === $e$$40_element$$83$$.tagName && ($data_value$$1$$ = $e$$40_element$$83$$.getAttribute("data-value"));
  $data_value$$1$$ != $JSCompiler_alias_NULL$$ && ($goog$dom$getAncestorByTagNameAndClass$$($e$$40_element$$83$$, $JSCompiler_alias_NULL$$, "filter") != $JSCompiler_alias_NULL$$ && ($is_filter_click$$ = $JSCompiler_alias_TRUE$$), $is_filter_click$$ && ("all" === $data_value$$1$$ ? this.$select_filter_$ != $JSCompiler_alias_NULL$$ && (this.$select_filter_$ = $JSCompiler_alias_NULL$$, this.$model_$.$currentPage$ = 0, $JSCompiler_StaticMethods_render_data_$$(this)) : this.$select_filter_$ !== $data_value$$1$$ && 
  (this.$select_filter_$ = $data_value$$1$$, this.$model_$.$currentPage$ = 0, $JSCompiler_StaticMethods_render_data_$$(this))))
};
function $JSCompiler_StaticMethods_getFilter$$($JSCompiler_StaticMethods_getFilter$self$$) {
  var $res$$9$$ = [];
  $JSCompiler_StaticMethods_getFilter$self$$.$filter_$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($JSCompiler_StaticMethods_getFilter$self$$.$filter_$) && $res$$9$$.push($JSCompiler_StaticMethods_getFilter$self$$.$filter_$);
  $JSCompiler_StaticMethods_getFilter$self$$.$select_filter_$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($JSCompiler_StaticMethods_getFilter$self$$.$filter_$) && $res$$9$$.push($JSCompiler_StaticMethods_getFilter$self$$.$select_filter_$);
  return $res$$9$$
}
$JSCompiler_prototypeAlias$$.$onChangeFilter_$ = function $$JSCompiler_prototypeAlias$$$$onChangeFilter_$$() {
  var $filter$$4$$ = $goog$dom$forms$getValue$$(this.$search_input_$);
  $goog$string$isEmpty$$($filter$$4$$) && this.$filter_$ === $JSCompiler_alias_NULL$$ ? $goog$dom$classes$addRemove$$($goog$dom$getFirstElementChild$$(this.$search_btn_$), "icon-remove", "icon-search") : $filter$$4$$ === this.$filter_$ && this.$filter_$ != $JSCompiler_alias_NULL$$ ? $goog$dom$classes$addRemove$$($goog$dom$getFirstElementChild$$(this.$search_btn_$), "icon-search", "icon-remove") : $goog$dom$classes$addRemove$$($goog$dom$getFirstElementChild$$(this.$search_btn_$), "icon-remove", "icon-search")
};
$JSCompiler_prototypeAlias$$.$handleSearchBtnClick_$ = function $$JSCompiler_prototypeAlias$$$$handleSearchBtnClick_$$() {
  var $filter$$5$$ = $goog$dom$forms$getValue$$(this.$search_input_$);
  if(!$goog$string$isEmpty$$($filter$$5$$) || this.$filter_$ !== $JSCompiler_alias_NULL$$) {
    $filter$$5$$ === this.$filter_$ && this.$filter_$ != $JSCompiler_alias_NULL$$ ? (this.$filter_$ = $JSCompiler_alias_NULL$$, $goog$dom$forms$setValue$$(this.$search_input_$, ""), $goog$dom$classes$addRemove$$($goog$dom$getFirstElementChild$$(this.$search_btn_$), "icon-remove", "icon-search")) : (this.$filter_$ = $filter$$5$$, $goog$dom$classes$addRemove$$($goog$dom$getFirstElementChild$$(this.$search_btn_$), "icon-search", "icon-remove")), this.$model_$.$currentPage$ = 0, $JSCompiler_StaticMethods_render_data_$$(this)
  }
};
$JSCompiler_prototypeAlias$$.reload = function $$JSCompiler_prototypeAlias$$$reload$() {
  $JSCompiler_StaticMethods_render_data_$$(this)
};
function $JSCompiler_StaticMethods_setColumnFormatter$$($JSCompiler_StaticMethods_setColumnFormatter$self$$, $column$$3_index$$64$$, $formatter$$4$$, $opt_handler$$15$$) {
  var $result_set_col_index$$1$$ = {};
  $goog$array$forEach$$($JSCompiler_StaticMethods_setColumnFormatter$self$$.$model_$.$columns$, function($this_col$$1$$, $index_row_set$$1$$) {
    $result_set_col_index$$1$$[$this_col$$1$$.property] = $index_row_set$$1$$
  });
  $column$$3_index$$64$$ = $result_set_col_index$$1$$[$column$$3_index$$64$$];
  $column$$3_index$$64$$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_setColumnFormatter$self$$.$model_$.$columns$[$column$$3_index$$64$$].formatter = $opt_handler$$15$$ != $JSCompiler_alias_NULL$$ ? $goog$bind$$($formatter$$4$$, $opt_handler$$15$$) : $formatter$$4$$)
}
function $JSCompiler_StaticMethods_insertOrUpdateRecord$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$, $record$$) {
  var $result_set_col_index$$2$$ = {}, $columns$$3$$ = $goog$object$getKeys$$($record$$), $first_row_row_set$$ = $goog$object$getValues$$($record$$);
  $goog$array$forEach$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$model_$.$columns$, function($this_col$$2$$, $index_row_set$$2$$) {
    var $index$$65$$ = $goog$array$findIndex$$($columns$$3$$, function($col$$11$$) {
      return $col$$11$$ == $this_col$$2$$.property
    });
    $result_set_col_index$$2$$[$index$$65$$] = $index_row_set$$2$$
  });
  var $row_id$$ = $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$model_$.$rowIDFn$.call($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$, $record$$), $tr$$ = $JSCompiler_alias_NULL$$, $is_new_record$$ = $JSCompiler_alias_FALSE$$;
  $row_id$$ != $JSCompiler_alias_NULL$$ && ($tr$$ = $goog$dom$getElement$$($row_id$$));
  var $rowClassFn$$ = $goog$bind$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$model_$.$rowClassFn$, $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$);
  $tr$$ != $JSCompiler_alias_NULL$$ ? $tr$$.className = $rowClassFn$$($record$$) : ($tr$$ = $goog$dom$createDom$$("tr", $rowClassFn$$($record$$)), $tr$$.id = $row_id$$, $is_new_record$$ = $JSCompiler_alias_TRUE$$);
  var $td_elements$$ = {};
  $goog$array$forEach$$($first_row_row_set$$, function($value$$117$$, $result_set_index$$) {
    var $index$$66$$ = $result_set_col_index$$2$$[$result_set_index$$];
    if($index$$66$$ != $JSCompiler_alias_NULL$$) {
      var $formatter$$5_td$$ = this.$model_$.$columns$[$index$$66$$].formatter || function() {
        return"" + $value$$117$$
      }, $formatter$$5_td$$ = $goog$dom$createDom$$("td", (this.$model_$.$columns$[$index$$66$$].classes || $goog$nullFunction$$)($value$$117$$), $formatter$$5_td$$($value$$117$$, $record$$));
      $td_elements$$[this.$model_$.$columns$[$index$$66$$].property] = $formatter$$5_td$$
    }
  }, $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$);
  $is_new_record$$ || $goog$dom$removeChildren$$($tr$$);
  $goog$array$forEach$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$model_$.$columns$, function($col$$12_td$$1$$) {
    $col$$12_td$$1$$ = $td_elements$$[$col$$12_td$$1$$.property];
    $col$$12_td$$1$$ != $JSCompiler_alias_NULL$$ || ($col$$12_td$$1$$ = $goog$dom$createDom$$("td", $JSCompiler_alias_VOID$$, ""));
    $tr$$.appendChild($col$$12_td$$1$$)
  });
  $is_new_record$$ && ($goog$isNumber$$(0) ? $goog$dom$insertChildAt$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$table_data_body_el_$, $tr$$, 0) : $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$table_data_body_el_$.appendChild($tr$$));
  $first_row_row_set$$ = $goog$dom$getFirstElementChild$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$table_data_body_el_$);
  $first_row_row_set$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_adjustSizes_$$($JSCompiler_StaticMethods_insertOrUpdateRecord$self$$, $first_row_row_set$$);
  $goog$dom$classes$add$$($tr$$, "warning");
  $goog$Timer$callOnce$$(function() {
    $goog$dom$classes$remove$$($tr$$, "warning")
  }, $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$.$model_$.$blinkDelay$, $JSCompiler_StaticMethods_insertOrUpdateRecord$self$$)
}
function $JSCompiler_StaticMethods_resultSetToElements$$($JSCompiler_StaticMethods_resultSetToElements$self$$, $resultSet$$, $columns$$4$$) {
  var $elements$$1$$ = [], $result_set_col_index$$3$$ = {};
  $goog$array$forEach$$($JSCompiler_StaticMethods_resultSetToElements$self$$.$model_$.$columns$, function($this_col$$3$$, $index_row_set$$3$$) {
    var $index$$67$$ = $goog$array$findIndex$$($columns$$4$$, function($col$$13$$) {
      return $col$$13$$ == $this_col$$3$$.property
    });
    $result_set_col_index$$3$$[$index$$67$$] = $index_row_set$$3$$
  });
  $goog$array$forEach$$($resultSet$$, function($row_set$$1$$) {
    $goog$array$forEach$$($row_set$$1$$, $JSCompiler_emptyFn$$(), this);
    var $rowSetObj$$ = {}, $rowClassFn$$1_row_id$$1_x$$63$$;
    for($rowClassFn$$1_row_id$$1_x$$63$$ in $columns$$4$$) {
      $rowSetObj$$[$columns$$4$$[$rowClassFn$$1_row_id$$1_x$$63$$]] = $row_set$$1$$[$rowClassFn$$1_row_id$$1_x$$63$$]
    }
    $rowClassFn$$1_row_id$$1_x$$63$$ = $goog$bind$$(this.$model_$.$rowClassFn$, this);
    var $tr$$1$$ = $goog$dom$createDom$$("tr", $rowClassFn$$1_row_id$$1_x$$63$$($rowSetObj$$));
    $rowClassFn$$1_row_id$$1_x$$63$$ = this.$model_$.$rowIDFn$.call(this, $rowSetObj$$);
    $rowClassFn$$1_row_id$$1_x$$63$$ != $JSCompiler_alias_NULL$$ && ($tr$$1$$.id = $rowClassFn$$1_row_id$$1_x$$63$$);
    var $td_elements$$1$$ = {};
    $goog$array$forEach$$($row_set$$1$$, function($value$$119$$, $result_set_index$$2$$) {
      var $index$$69$$ = $result_set_col_index$$3$$[$result_set_index$$2$$];
      if($index$$69$$ != $JSCompiler_alias_NULL$$) {
        var $formatter$$6_td$$2$$ = this.$model_$.$columns$[$index$$69$$].formatter || function() {
          return"" + $value$$119$$
        }, $formatter$$6_td$$2$$ = $goog$dom$createDom$$("td", (this.$model_$.$columns$[$index$$69$$].classes || $goog$nullFunction$$)($value$$119$$), $formatter$$6_td$$2$$($value$$119$$, $rowSetObj$$));
        $td_elements$$1$$[this.$model_$.$columns$[$index$$69$$].property] = $formatter$$6_td$$2$$
      }
    }, this);
    $goog$array$forEach$$(this.$model_$.$columns$, function($col$$14_td$$3$$) {
      $col$$14_td$$3$$ = $td_elements$$1$$[$col$$14_td$$3$$.property];
      $col$$14_td$$3$$ != $JSCompiler_alias_NULL$$ || ($col$$14_td$$3$$ = $goog$dom$createDom$$("td", $JSCompiler_alias_VOID$$, ""));
      $tr$$1$$.appendChild($col$$14_td$$3$$)
    });
    $elements$$1$$.push($tr$$1$$)
  }, $JSCompiler_StaticMethods_resultSetToElements$self$$);
  return $elements$$1$$
}
function $JSCompiler_StaticMethods_setResultSet$$($JSCompiler_StaticMethods_setResultSet$self$$, $elements$$2_resultSet$$1$$, $columns$$5_first_row$$1$$) {
  $goog$dom$removeChildren$$($JSCompiler_StaticMethods_setResultSet$self$$.$table_data_body_el_$);
  $elements$$2_resultSet$$1$$ = $JSCompiler_StaticMethods_resultSetToElements$$($JSCompiler_StaticMethods_setResultSet$self$$, $elements$$2_resultSet$$1$$, $columns$$5_first_row$$1$$);
  $columns$$5_first_row$$1$$ = $elements$$2_resultSet$$1$$[0];
  $goog$array$forEach$$($elements$$2_resultSet$$1$$, function($tr$$2$$) {
    this.$table_data_body_el_$.appendChild($tr$$2$$)
  }, $JSCompiler_StaticMethods_setResultSet$self$$);
  $columns$$5_first_row$$1$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_adjustSizes_$$($JSCompiler_StaticMethods_setResultSet$self$$, $columns$$5_first_row$$1$$)
}
function $JSCompiler_StaticMethods_adjustSizes_$$($JSCompiler_StaticMethods_adjustSizes_$self$$, $first_row$$2$$) {
  $goog$dom$insertSiblingBefore$$($JSCompiler_StaticMethods_adjustSizes_$self$$.$th_sizing_el_$, $first_row$$2$$);
  var $el_size$$inline_332_sizing_row$$inline_328$$ = $JSCompiler_StaticMethods_adjustSizes_$self$$.$th_sizing_el_$, $work_col_1$$inline_329$$ = $goog$dom$getFirstElementChild$$($JSCompiler_StaticMethods_adjustSizes_$self$$.$tr_columns_el_$), $work_col_2$$inline_330$$ = $goog$dom$getFirstElementChild$$($first_row$$2$$), $sizing_col$$inline_331$$ = $goog$dom$getFirstElementChild$$($el_size$$inline_332_sizing_row$$inline_328$$);
  for($goog$dom$getChildren$$($el_size$$inline_332_sizing_row$$inline_328$$);$sizing_col$$inline_331$$ != $JSCompiler_alias_NULL$$;) {
    $el_size$$inline_332_sizing_row$$inline_328$$ = $goog$style$getSize$$($sizing_col$$inline_331$$), $goog$style$setWidth$$($work_col_1$$inline_329$$, $el_size$$inline_332_sizing_row$$inline_328$$.width), $goog$style$setWidth$$($work_col_2$$inline_330$$, $el_size$$inline_332_sizing_row$$inline_328$$.width), $work_col_1$$inline_329$$ = $goog$dom$getNextElementSibling$$($work_col_1$$inline_329$$), $work_col_2$$inline_330$$ = $goog$dom$getNextElementSibling$$($work_col_2$$inline_330$$), $sizing_col$$inline_331$$ = 
    $goog$dom$getNextElementSibling$$($sizing_col$$inline_331$$)
  }
  $goog$dom$removeNode$$($JSCompiler_StaticMethods_adjustSizes_$self$$.$th_sizing_el_$)
}
function $bitex$ui$DataGridEvent$$($type$$94$$, $options$$8$$) {
  $goog$events$Event$$.call(this, $type$$94$$);
  this.options = $options$$8$$
}
$goog$inherits$$($bitex$ui$DataGridEvent$$, $goog$events$Event$$);
// Input 65
function $bitex$ui$AccountActivity$$($opt_domHelper$$5$$) {
  $bitex$ui$DataGrid$$.call(this, {rowClassFn:this.$getRowClass$, columns:[{property:"OrderID", label:"Identificaci\u00f3n", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-order-id"
  }}, {property:"Side", label:"Lado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$20$$) {
    switch($s$$20$$) {
      case "1":
        return"C";
      case "2":
        return"V"
    }
    return""
  }, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-side"
  }}, {property:"OrderDate", label:"Fecha/tiempo", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-order-date"
  }}, {property:"Price", label:"Precio", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-price"
  }}, {property:"CumQty", label:"Cantidad", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-cum-qty"
  }}, {property:"AvgPx", label:"Precio promedio", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-avg-price"
  }}, {property:"Volume", label:"Total", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$AccountActivity$CSS_CLASS$$ + "-vol"
  }}]}, $opt_domHelper$$5$$)
}
$goog$inherits$$($bitex$ui$AccountActivity$$, $bitex$ui$DataGrid$$);
var $bitex$ui$AccountActivity$CSS_CLASS$$ = "account-activity";
$bitex$ui$AccountActivity$$.prototype.$getCssClass$ = function $$bitex$ui$AccountActivity$$$$$getCssClass$$() {
  return $bitex$ui$AccountActivity$CSS_CLASS$$
};
$bitex$ui$AccountActivity$$.prototype.$getRowClass$ = function $$bitex$ui$AccountActivity$$$$$getRowClass$$($row_set$$2$$) {
  var $class_status$$;
  switch($row_set$$2$$.Side) {
    case "1":
      $class_status$$ = $bitex$ui$AccountActivity$CSS_CLASS$$ + "-buy";
      break;
    case "2":
      $class_status$$ = $bitex$ui$AccountActivity$CSS_CLASS$$ + "-sell"
  }
  return $class_status$$
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$AccountActivity$CSS_CLASS$$, function() {
  return new $bitex$ui$AccountActivity$$
});
// Input 66
function $goog$async$Delay$$($listener$$61$$, $opt_interval$$1$$, $opt_handler$$16$$) {
  $goog$Disposable$$.call(this);
  this.$listener_$ = $listener$$61$$;
  this.$interval_$ = $opt_interval$$1$$ || 0;
  this.$handler_$ = $opt_handler$$16$$;
  this.$callback_$ = $goog$bind$$(this.$doAction_$, this)
}
$goog$inherits$$($goog$async$Delay$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$async$Delay$$.prototype;
$JSCompiler_prototypeAlias$$.$id_$ = 0;
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$async$Delay$$.$superClass_$.$disposeInternal$.call(this);
  this.stop();
  delete this.$listener_$;
  delete this.$handler_$
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$($opt_interval$$2$$) {
  this.stop();
  this.$id_$ = $goog$Timer$callOnce$$(this.$callback_$, $goog$isDef$$($opt_interval$$2$$) ? $opt_interval$$2$$ : this.$interval_$)
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  this.$isActive$() && $goog$Timer$defaultTimerObject$$.clearTimeout(this.$id_$);
  this.$id_$ = 0
};
$JSCompiler_prototypeAlias$$.$isActive$ = function $$JSCompiler_prototypeAlias$$$$isActive$$() {
  return 0 != this.$id_$
};
$JSCompiler_prototypeAlias$$.$doAction_$ = function $$JSCompiler_prototypeAlias$$$$doAction_$$() {
  this.$id_$ = 0;
  this.$listener_$ && this.$listener_$.call(this.$handler_$)
};
// Input 67
// Input 68
// Input 69
var $goog$fx$anim$activeAnimations_$$ = {}, $goog$fx$anim$animationDelay_$$ = $JSCompiler_alias_NULL$$;
function $goog$fx$anim$unregisterAnimation$$($animation$$1_uid$$2$$) {
  $animation$$1_uid$$2$$ = $goog$getUid$$($animation$$1_uid$$2$$);
  delete $goog$fx$anim$activeAnimations_$$[$animation$$1_uid$$2$$];
  $goog$object$isEmpty$$() && $goog$fx$anim$animationDelay_$$ && $goog$fx$anim$animationDelay_$$.stop()
}
function $goog$fx$anim$requestAnimationFrame_$$() {
  $goog$fx$anim$animationDelay_$$ || ($goog$fx$anim$animationDelay_$$ = new $goog$async$Delay$$(function() {
    $goog$fx$anim$cycleAnimations_$$()
  }, 20));
  var $delay$$3$$ = $goog$fx$anim$animationDelay_$$;
  $delay$$3$$.$isActive$() || $delay$$3$$.start()
}
function $goog$fx$anim$cycleAnimations_$$() {
  var $now$$1$$ = $goog$now$$();
  $goog$object$forEach$$($goog$fx$anim$activeAnimations_$$, function($anim$$) {
    $JSCompiler_StaticMethods_cycle$$($anim$$, $now$$1$$)
  });
  $goog$object$isEmpty$$() || $goog$fx$anim$requestAnimationFrame_$$()
}
;
// Input 70
// Input 71
function $goog$fx$TransitionBase$$() {
  $goog$Disposable$$.call(this);
  this.$state_$ = $goog$fx$TransitionBase$State$STOPPED$$;
  this.$endTime$ = this.startTime = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($goog$fx$TransitionBase$$, $goog$events$EventTarget$$);
var $goog$fx$TransitionBase$State$STOPPED$$ = 0;
$goog$fx$TransitionBase$$.prototype.$onBegin$ = function $$goog$fx$TransitionBase$$$$$onBegin$$() {
  this.$dispatchAnimationEvent$("begin")
};
$goog$fx$TransitionBase$$.prototype.$onEnd$ = function $$goog$fx$TransitionBase$$$$$onEnd$$() {
  this.$dispatchAnimationEvent$("end")
};
$goog$fx$TransitionBase$$.prototype.$dispatchAnimationEvent$ = function $$goog$fx$TransitionBase$$$$$dispatchAnimationEvent$$($type$$95$$) {
  this.dispatchEvent($type$$95$$)
};
// Input 72
function $goog$fx$Animation$$($start$$10$$, $end$$5$$, $duration$$10$$, $opt_acc$$) {
  $goog$fx$TransitionBase$$.call(this);
  (!$goog$isArray$$($start$$10$$) || !$goog$isArray$$($end$$5$$)) && $JSCompiler_alias_THROW$$(Error("Start and end parameters must be arrays"));
  $start$$10$$.length != $end$$5$$.length && $JSCompiler_alias_THROW$$(Error("Start and end points must be the same length"));
  this.$startPoint$ = $start$$10$$;
  this.$endPoint$ = $end$$5$$;
  this.duration = $duration$$10$$;
  this.$accel_$ = $opt_acc$$;
  this.coords = [];
  this.$useRightPositioningForRtl_$ = $JSCompiler_alias_FALSE$$
}
$goog$inherits$$($goog$fx$Animation$$, $goog$fx$TransitionBase$$);
$JSCompiler_prototypeAlias$$ = $goog$fx$Animation$$.prototype;
$JSCompiler_prototypeAlias$$.$fps_$ = 0;
$JSCompiler_prototypeAlias$$.progress = 0;
$JSCompiler_prototypeAlias$$.$lastFrame$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.play = function $$JSCompiler_prototypeAlias$$$play$($now$$2_opt_restart$$) {
  if($now$$2_opt_restart$$ || this.$state_$ == $goog$fx$TransitionBase$State$STOPPED$$) {
    this.progress = 0, this.coords = this.$startPoint$
  }else {
    if(1 == this.$state_$) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  $goog$fx$anim$unregisterAnimation$$(this);
  this.startTime = $now$$2_opt_restart$$ = $goog$now$$();
  -1 == this.$state_$ && (this.startTime -= this.duration * this.progress);
  this.$endTime$ = this.startTime + this.duration;
  this.$lastFrame$ = this.startTime;
  this.progress || this.$onBegin$();
  this.$dispatchAnimationEvent$("play");
  -1 == this.$state_$ && this.$dispatchAnimationEvent$("resume");
  this.$state_$ = 1;
  var $uid$$inline_346$$ = $goog$getUid$$(this);
  $uid$$inline_346$$ in $goog$fx$anim$activeAnimations_$$ || ($goog$fx$anim$activeAnimations_$$[$uid$$inline_346$$] = this);
  $goog$fx$anim$requestAnimationFrame_$$();
  $JSCompiler_StaticMethods_cycle$$(this, $now$$2_opt_restart$$);
  return $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$($opt_gotoEnd$$) {
  $goog$fx$anim$unregisterAnimation$$(this);
  this.$state_$ = $goog$fx$TransitionBase$State$STOPPED$$;
  $opt_gotoEnd$$ && (this.progress = 1);
  $JSCompiler_StaticMethods_updateCoords_$$(this, this.progress);
  this.$dispatchAnimationEvent$("stop");
  this.$onEnd$()
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$state_$ == $goog$fx$TransitionBase$State$STOPPED$$ || this.stop($JSCompiler_alias_FALSE$$);
  this.$dispatchAnimationEvent$("destroy");
  $goog$fx$Animation$$.$superClass_$.$disposeInternal$.call(this)
};
function $JSCompiler_StaticMethods_cycle$$($JSCompiler_StaticMethods_cycle$self$$, $now$$5$$) {
  $JSCompiler_StaticMethods_cycle$self$$.progress = ($now$$5$$ - $JSCompiler_StaticMethods_cycle$self$$.startTime) / ($JSCompiler_StaticMethods_cycle$self$$.$endTime$ - $JSCompiler_StaticMethods_cycle$self$$.startTime);
  1 <= $JSCompiler_StaticMethods_cycle$self$$.progress && ($JSCompiler_StaticMethods_cycle$self$$.progress = 1);
  $JSCompiler_StaticMethods_cycle$self$$.$fps_$ = 1E3 / ($now$$5$$ - $JSCompiler_StaticMethods_cycle$self$$.$lastFrame$);
  $JSCompiler_StaticMethods_cycle$self$$.$lastFrame$ = $now$$5$$;
  $JSCompiler_StaticMethods_updateCoords_$$($JSCompiler_StaticMethods_cycle$self$$, $JSCompiler_StaticMethods_cycle$self$$.progress);
  1 == $JSCompiler_StaticMethods_cycle$self$$.progress ? ($JSCompiler_StaticMethods_cycle$self$$.$state_$ = $goog$fx$TransitionBase$State$STOPPED$$, $goog$fx$anim$unregisterAnimation$$($JSCompiler_StaticMethods_cycle$self$$), $JSCompiler_StaticMethods_cycle$self$$.$dispatchAnimationEvent$("finish"), $JSCompiler_StaticMethods_cycle$self$$.$onEnd$()) : 1 == $JSCompiler_StaticMethods_cycle$self$$.$state_$ && $JSCompiler_StaticMethods_cycle$self$$.$onAnimate$()
}
function $JSCompiler_StaticMethods_updateCoords_$$($JSCompiler_StaticMethods_updateCoords_$self$$, $t$$) {
  $goog$isFunction$$($JSCompiler_StaticMethods_updateCoords_$self$$.$accel_$) && ($t$$ = $JSCompiler_StaticMethods_updateCoords_$self$$.$accel_$($t$$));
  $JSCompiler_StaticMethods_updateCoords_$self$$.coords = Array($JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$.length);
  for(var $i$$129$$ = 0;$i$$129$$ < $JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$.length;$i$$129$$++) {
    $JSCompiler_StaticMethods_updateCoords_$self$$.coords[$i$$129$$] = ($JSCompiler_StaticMethods_updateCoords_$self$$.$endPoint$[$i$$129$$] - $JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$[$i$$129$$]) * $t$$ + $JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$[$i$$129$$]
  }
}
$JSCompiler_prototypeAlias$$.$onAnimate$ = function $$JSCompiler_prototypeAlias$$$$onAnimate$$() {
  this.$dispatchAnimationEvent$("animate")
};
$JSCompiler_prototypeAlias$$.$dispatchAnimationEvent$ = function $$JSCompiler_prototypeAlias$$$$dispatchAnimationEvent$$($type$$96$$) {
  this.dispatchEvent(new $goog$fx$AnimationEvent$$($type$$96$$, this))
};
function $goog$fx$AnimationEvent$$($type$$97$$, $anim$$1$$) {
  $goog$events$Event$$.call(this, $type$$97$$);
  this.coords = $anim$$1$$.coords;
  this.x = $anim$$1$$.coords[0];
  this.y = $anim$$1$$.coords[1];
  this.$z$ = $anim$$1$$.coords[2];
  this.duration = $anim$$1$$.duration;
  this.progress = $anim$$1$$.progress;
  this.$fps$ = $anim$$1$$.$fps_$;
  this.state = $anim$$1$$.$state_$;
  this.$anim$ = $anim$$1$$
}
$goog$inherits$$($goog$fx$AnimationEvent$$, $goog$events$Event$$);
// Input 73
// Input 74
// Input 75
// Input 76
function $goog$fx$dom$PredefinedEffect$$($element$$87$$, $start$$11$$, $end$$6$$, $time$$, $opt_acc$$1$$) {
  $goog$fx$Animation$$.call(this, $start$$11$$, $end$$6$$, $time$$, $opt_acc$$1$$);
  this.element = $element$$87$$
}
$goog$inherits$$($goog$fx$dom$PredefinedEffect$$, $goog$fx$Animation$$);
$JSCompiler_prototypeAlias$$ = $goog$fx$dom$PredefinedEffect$$.prototype;
$JSCompiler_prototypeAlias$$.$updateStyle$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$isRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$isRightToLeft$$() {
  $goog$isDef$$(this.$rightToLeft_$) || (this.$rightToLeft_$ = $goog$style$isRightToLeft$$(this.element));
  return this.$rightToLeft_$
};
$JSCompiler_prototypeAlias$$.$onAnimate$ = function $$JSCompiler_prototypeAlias$$$$onAnimate$$() {
  this.$updateStyle$();
  $goog$fx$dom$PredefinedEffect$$.$superClass_$.$onAnimate$.call(this)
};
$JSCompiler_prototypeAlias$$.$onEnd$ = function $$JSCompiler_prototypeAlias$$$$onEnd$$() {
  this.$updateStyle$();
  $goog$fx$dom$PredefinedEffect$$.$superClass_$.$onEnd$.call(this)
};
$JSCompiler_prototypeAlias$$.$onBegin$ = function $$JSCompiler_prototypeAlias$$$$onBegin$$() {
  this.$updateStyle$();
  $goog$fx$dom$PredefinedEffect$$.$superClass_$.$onBegin$.call(this)
};
function $goog$fx$dom$Fade$$($element$$95$$, $start$$19$$, $end$$14$$, $time$$8$$, $opt_acc$$9$$) {
  $goog$isNumber$$($start$$19$$) && ($start$$19$$ = [$start$$19$$]);
  $goog$isNumber$$($end$$14$$) && ($end$$14$$ = [$end$$14$$]);
  $goog$fx$dom$PredefinedEffect$$.call(this, $element$$95$$, $start$$19$$, $end$$14$$, $time$$8$$, $opt_acc$$9$$);
  (1 != $start$$19$$.length || 1 != $end$$14$$.length) && $JSCompiler_alias_THROW$$(Error("Start and end points must be 1D"))
}
$goog$inherits$$($goog$fx$dom$Fade$$, $goog$fx$dom$PredefinedEffect$$);
$goog$fx$dom$Fade$$.prototype.$updateStyle$ = function $$goog$fx$dom$Fade$$$$$updateStyle$$() {
  $goog$style$setOpacity$$(this.element, this.coords[0])
};
$goog$fx$dom$Fade$$.prototype.show = function $$goog$fx$dom$Fade$$$$show$() {
  this.element.style.display = ""
};
$goog$fx$dom$Fade$$.prototype.hide = function $$goog$fx$dom$Fade$$$$hide$() {
  this.element.style.display = "none"
};
function $goog$fx$dom$FadeOutAndHide$$($element$$98$$, $time$$11$$, $opt_acc$$12$$) {
  $goog$fx$dom$Fade$$.call(this, $element$$98$$, 1, 0, $time$$11$$, $opt_acc$$12$$)
}
$goog$inherits$$($goog$fx$dom$FadeOutAndHide$$, $goog$fx$dom$Fade$$);
$goog$fx$dom$FadeOutAndHide$$.prototype.$onBegin$ = function $$goog$fx$dom$FadeOutAndHide$$$$$onBegin$$() {
  this.show();
  $goog$fx$dom$FadeOutAndHide$$.$superClass_$.$onBegin$.call(this)
};
$goog$fx$dom$FadeOutAndHide$$.prototype.$onEnd$ = function $$goog$fx$dom$FadeOutAndHide$$$$$onEnd$$() {
  this.hide();
  $goog$fx$dom$FadeOutAndHide$$.$superClass_$.$onEnd$.call(this)
};
// Input 77
function $bitex$model$Model$$($element$$103$$, $opt_map$$1$$, $var_args$$84$$) {
  this.$element_$ = $element$$103$$;
  this.$map_$ = new $goog$structs$Map$$($opt_map$$1$$, $var_args$$84$$)
}
$goog$inherits$$($bitex$model$Model$$, $goog$events$EventTarget$$);
$bitex$model$Model$$.prototype.get = function $$bitex$model$Model$$$$get$($key$$74$$, $opt_val$$2$$) {
  return this.$map_$.get($key$$74$$, $opt_val$$2$$)
};
function $JSCompiler_StaticMethods_updateDom$$() {
  var $JSCompiler_StaticMethods_updateDom$self$$ = app.$model_$, $elements$$3$$ = $goog$dom$getElementsByClass$$("bitex-model", $JSCompiler_StaticMethods_updateDom$self$$.$element_$);
  $goog$array$forEach$$($elements$$3$$, function($el$$46$$) {
    var $model_key_value$$121$$ = $el$$46$$.getAttribute("data-model-key");
    if($model_key_value$$121$$ != $JSCompiler_alias_NULL$$) {
      var $current_value$$ = $goog$dom$getTextContent$$($el$$46$$), $model_key_value$$121$$ = this.get($model_key_value$$121$$);
      $current_value$$ !== $model_key_value$$121$$ && $goog$dom$setTextContent$$($el$$46$$, $model_key_value$$121$$)
    }
  }, $JSCompiler_StaticMethods_updateDom$self$$)
}
$bitex$model$Model$$.prototype.set = function $$bitex$model$Model$$$$set$($key$$75$$, $value$$122$$) {
  this.$map_$.set($key$$75$$, $value$$122$$);
  var $elements$$4$$ = $goog$dom$getElementsByClass$$("bitex-model", this.$element_$);
  $goog$array$forEach$$($elements$$4$$, function($el$$47$$) {
    if($el$$47$$.getAttribute("data-model-key") === $key$$75$$ && $goog$dom$getTextContent$$($el$$47$$) !== $value$$122$$) {
      $goog$dom$setTextContent$$($el$$47$$, $value$$122$$);
      var $blink_class$$1$$ = $el$$47$$.getAttribute("data-blink-class");
      if($blink_class$$1$$ != $JSCompiler_alias_NULL$$) {
        var $blink_delay$$ = $el$$47$$.getAttribute("data-blink-delay") || 700, $blink_delay$$ = parseInt($blink_delay$$, 10);
        $goog$dom$classes$add$$($el$$47$$, $blink_class$$1$$);
        $goog$Timer$callOnce$$(function() {
          $goog$dom$classes$remove$$($el$$47$$, $blink_class$$1$$)
        }, $blink_delay$$, this)
      }
    }
  });
  this.dispatchEvent(new $bitex$model$ModelEvent$$("model_set" + $key$$75$$, $key$$75$$, $value$$122$$));
  this.dispatchEvent(new $bitex$model$ModelEvent$$("model_set", $key$$75$$, $value$$122$$))
};
function $bitex$model$ModelEvent$$($type$$98$$, $key$$76$$, $data$$33$$) {
  $goog$events$Event$$.call(this, $type$$98$$);
  this.key = $key$$76$$;
  this.data = $data$$33$$
}
$goog$inherits$$($bitex$model$ModelEvent$$, $goog$events$Event$$);
// Input 78
// Input 79
// Input 80
function $goog$structs$Set$$($opt_values$$1$$) {
  this.$map_$ = new $goog$structs$Map$$;
  $opt_values$$1$$ && this.$addAll$($opt_values$$1$$)
}
function $goog$structs$Set$getKey_$$($val$$38$$) {
  var $type$$99$$ = typeof $val$$38$$;
  return"object" == $type$$99$$ && $val$$38$$ || "function" == $type$$99$$ ? "o" + $goog$getUid$$($val$$38$$) : $type$$99$$.substr(0, 1) + $val$$38$$
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Set$$.prototype;
$JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
  return this.$map_$.$getCount$()
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($element$$104$$) {
  this.$map_$.set($goog$structs$Set$getKey_$$($element$$104$$), $element$$104$$)
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($col$$15_values$$14$$) {
  $col$$15_values$$14$$ = $goog$structs$getValues$$($col$$15_values$$14$$);
  for(var $l$$22$$ = $col$$15_values$$14$$.length, $i$$133$$ = 0;$i$$133$$ < $l$$22$$;$i$$133$$++) {
    this.add($col$$15_values$$14$$[$i$$133$$])
  }
};
$JSCompiler_prototypeAlias$$.$removeAll$ = function $$JSCompiler_prototypeAlias$$$$removeAll$$($col$$16_values$$15$$) {
  $col$$16_values$$15$$ = $goog$structs$getValues$$($col$$16_values$$15$$);
  for(var $l$$23$$ = $col$$16_values$$15$$.length, $i$$134$$ = 0;$i$$134$$ < $l$$23$$;$i$$134$$++) {
    this.remove($col$$16_values$$15$$[$i$$134$$])
  }
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($element$$105$$) {
  return this.$map_$.remove($goog$structs$Set$getKey_$$($element$$105$$))
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$.clear()
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($element$$106_key$$inline_359$$) {
  $element$$106_key$$inline_359$$ = $goog$structs$Set$getKey_$$($element$$106_key$$inline_359$$);
  return $goog$structs$Map$hasKey_$$(this.$map_$.$map_$, $element$$106_key$$inline_359$$)
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  return this.$map_$.$getValues$()
};
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$structs$Set$$(this)
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($col$$20$$) {
  return this.$getCount$() == $goog$structs$getCount$$($col$$20$$) && $JSCompiler_StaticMethods_isSubsetOf$$(this, $col$$20$$)
};
function $JSCompiler_StaticMethods_isSubsetOf$$($JSCompiler_StaticMethods_isSubsetOf$self$$, $col$$21$$) {
  var $colCount$$ = $goog$structs$getCount$$($col$$21$$);
  if($JSCompiler_StaticMethods_isSubsetOf$self$$.$getCount$() > $colCount$$) {
    return $JSCompiler_alias_FALSE$$
  }
  !($col$$21$$ instanceof $goog$structs$Set$$) && 5 < $colCount$$ && ($col$$21$$ = new $goog$structs$Set$$($col$$21$$));
  return $goog$structs$every$$($JSCompiler_StaticMethods_isSubsetOf$self$$, function($JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$) {
    if("function" == typeof $col$$21$$.contains) {
      $JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$ = $col$$21$$.contains($JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$)
    }else {
      if("function" == typeof $col$$21$$.$containsValue$) {
        $JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$ = $col$$21$$.$containsValue$($JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$)
      }else {
        if($goog$isArrayLike$$($col$$21$$) || $goog$isString$$($col$$21$$)) {
          $JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$ = $goog$array$contains$$($col$$21$$, $JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$)
        }else {
          a: {
            for(var $key$$inline_1161$$ in $col$$21$$) {
              if($col$$21$$[$key$$inline_1161$$] == $JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$) {
                $JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$ = $JSCompiler_alias_TRUE$$;
                break a
              }
            }
            $JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$ = $JSCompiler_alias_FALSE$$
          }
        }
      }
    }
    return $JSCompiler_temp$$1138_JSCompiler_temp$$1139_JSCompiler_temp$$1140_value$$124$$
  })
}
;
// Input 81
function $goog$debug$getStacktrace$$($opt_fn$$8$$) {
  return $goog$debug$getStacktraceHelper_$$($opt_fn$$8$$ || arguments.callee.caller, [])
}
function $goog$debug$getStacktraceHelper_$$($fn$$8$$, $visited$$) {
  var $sb$$5$$ = [];
  if($goog$array$contains$$($visited$$, $fn$$8$$)) {
    $sb$$5$$.push("[...circular reference...]")
  }else {
    if($fn$$8$$ && 50 > $visited$$.length) {
      $sb$$5$$.push($goog$debug$getFunctionName$$($fn$$8$$) + "(");
      for(var $args$$12$$ = $fn$$8$$.arguments, $i$$137$$ = 0;$i$$137$$ < $args$$12$$.length;$i$$137$$++) {
        0 < $i$$137$$ && $sb$$5$$.push(", ");
        var $arg$$6_argDesc$$;
        $arg$$6_argDesc$$ = $args$$12$$[$i$$137$$];
        switch(typeof $arg$$6_argDesc$$) {
          case "object":
            $arg$$6_argDesc$$ = $arg$$6_argDesc$$ ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            $arg$$6_argDesc$$ = String($arg$$6_argDesc$$);
            break;
          case "boolean":
            $arg$$6_argDesc$$ = $arg$$6_argDesc$$ ? "true" : "false";
            break;
          case "function":
            $arg$$6_argDesc$$ = ($arg$$6_argDesc$$ = $goog$debug$getFunctionName$$($arg$$6_argDesc$$)) ? $arg$$6_argDesc$$ : "[fn]";
            break;
          default:
            $arg$$6_argDesc$$ = typeof $arg$$6_argDesc$$
        }
        40 < $arg$$6_argDesc$$.length && ($arg$$6_argDesc$$ = $arg$$6_argDesc$$.substr(0, 40) + "...");
        $sb$$5$$.push($arg$$6_argDesc$$)
      }
      $visited$$.push($fn$$8$$);
      $sb$$5$$.push(")\n");
      try {
        $sb$$5$$.push($goog$debug$getStacktraceHelper_$$($fn$$8$$.caller, $visited$$))
      }catch($e$$49$$) {
        $sb$$5$$.push("[exception trying to get caller]\n")
      }
    }else {
      $fn$$8$$ ? $sb$$5$$.push("[...long stack...]") : $sb$$5$$.push("[end]")
    }
  }
  return $sb$$5$$.join("")
}
function $goog$debug$getFunctionName$$($fn$$9_functionSource$$) {
  if($goog$debug$fnNameCache_$$[$fn$$9_functionSource$$]) {
    return $goog$debug$fnNameCache_$$[$fn$$9_functionSource$$]
  }
  $fn$$9_functionSource$$ = String($fn$$9_functionSource$$);
  if(!$goog$debug$fnNameCache_$$[$fn$$9_functionSource$$]) {
    var $matches$$1$$ = /function ([^\(]+)/.exec($fn$$9_functionSource$$);
    $goog$debug$fnNameCache_$$[$fn$$9_functionSource$$] = $matches$$1$$ ? $matches$$1$$[1] : "[Anonymous]"
  }
  return $goog$debug$fnNameCache_$$[$fn$$9_functionSource$$]
}
var $goog$debug$fnNameCache_$$ = {};
// Input 82
function $goog$debug$LogRecord$$($level$$7$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$) {
  this.reset($level$$7$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$)
}
$goog$debug$LogRecord$$.prototype.$sequenceNumber_$ = 0;
$goog$debug$LogRecord$$.prototype.$exception_$ = $JSCompiler_alias_NULL$$;
$goog$debug$LogRecord$$.prototype.$exceptionText_$ = $JSCompiler_alias_NULL$$;
var $goog$debug$LogRecord$nextSequenceNumber_$$ = 0;
$goog$debug$LogRecord$$.prototype.reset = function $$goog$debug$LogRecord$$$$reset$($level$$8$$, $msg$$1$$, $loggerName$$1$$, $opt_time$$1$$, $opt_sequenceNumber$$1$$) {
  this.$sequenceNumber_$ = "number" == typeof $opt_sequenceNumber$$1$$ ? $opt_sequenceNumber$$1$$ : $goog$debug$LogRecord$nextSequenceNumber_$$++;
  this.$time_$ = $opt_time$$1$$ || $goog$now$$();
  this.$level_$ = $level$$8$$;
  this.$msg_$ = $msg$$1$$;
  this.$loggerName_$ = $loggerName$$1$$;
  delete this.$exception_$;
  delete this.$exceptionText_$
};
$goog$debug$LogRecord$$.prototype.$setLevel$ = $JSCompiler_set$$("$level_$");
// Input 83
// Input 84
function $goog$debug$Logger$$($name$$74$$) {
  this.$name_$ = $name$$74$$
}
$goog$debug$Logger$$.prototype.$parent_$ = $JSCompiler_alias_NULL$$;
$goog$debug$Logger$$.prototype.$level_$ = $JSCompiler_alias_NULL$$;
$goog$debug$Logger$$.prototype.$children_$ = $JSCompiler_alias_NULL$$;
$goog$debug$Logger$$.prototype.$handlers_$ = $JSCompiler_alias_NULL$$;
function $goog$debug$Logger$Level$$($name$$75$$, $value$$125$$) {
  this.name = $name$$75$$;
  this.value = $value$$125$$
}
$goog$debug$Logger$Level$$.prototype.toString = $JSCompiler_get$$("name");
var $goog$debug$Logger$Level$SEVERE$$ = new $goog$debug$Logger$Level$$("SEVERE", 1E3), $goog$debug$Logger$Level$INFO$$ = new $goog$debug$Logger$Level$$("INFO", 800), $goog$debug$Logger$Level$CONFIG$$ = new $goog$debug$Logger$Level$$("CONFIG", 700);
$JSCompiler_prototypeAlias$$ = $goog$debug$Logger$$.prototype;
$JSCompiler_prototypeAlias$$.getName = $JSCompiler_get$$("$name_$");
$JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$parent_$");
$JSCompiler_prototypeAlias$$.$getChildren$ = function $$JSCompiler_prototypeAlias$$$$getChildren$$() {
  this.$children_$ || (this.$children_$ = {});
  return this.$children_$
};
$JSCompiler_prototypeAlias$$.$setLevel$ = $JSCompiler_set$$("$level_$");
function $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$) {
  return $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$level_$ ? $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$level_$ : $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$parent_$ ? $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$parent_$) : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.log = function $$JSCompiler_prototypeAlias$$$log$($level$$15_logRecord$$inline_362$$, $msg$$5_msg$$inline_1163_target$$inline_363$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_1165_opt_exception$$) {
  if($level$$15_logRecord$$inline_362$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value) {
    $level$$15_logRecord$$inline_362$$ = this.$getLogRecord$($level$$15_logRecord$$inline_362$$, $msg$$5_msg$$inline_1163_target$$inline_363$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_1165_opt_exception$$);
    $msg$$5_msg$$inline_1163_target$$inline_363$$ = "log:" + $level$$15_logRecord$$inline_362$$.$msg_$;
    $goog$global$$.console && ($goog$global$$.console.timeStamp ? $goog$global$$.console.timeStamp($msg$$5_msg$$inline_1163_target$$inline_363$$) : $goog$global$$.console.markTimeline && $goog$global$$.console.markTimeline($msg$$5_msg$$inline_1163_target$$inline_363$$));
    $goog$global$$.msWriteProfilerMark && $goog$global$$.msWriteProfilerMark($msg$$5_msg$$inline_1163_target$$inline_363$$);
    for($msg$$5_msg$$inline_1163_target$$inline_363$$ = this;$msg$$5_msg$$inline_1163_target$$inline_363$$;) {
      $JSCompiler_StaticMethods_callPublish_$self$$inline_1165_opt_exception$$ = $msg$$5_msg$$inline_1163_target$$inline_363$$;
      var $logRecord$$inline_1166$$ = $level$$15_logRecord$$inline_362$$;
      if($JSCompiler_StaticMethods_callPublish_$self$$inline_1165_opt_exception$$.$handlers_$) {
        for(var $i$$inline_1167$$ = 0, $handler$$inline_1168$$ = $JSCompiler_alias_VOID$$;$handler$$inline_1168$$ = $JSCompiler_StaticMethods_callPublish_$self$$inline_1165_opt_exception$$.$handlers_$[$i$$inline_1167$$];$i$$inline_1167$$++) {
          $handler$$inline_1168$$($logRecord$$inline_1166$$)
        }
      }
      $msg$$5_msg$$inline_1163_target$$inline_363$$ = $msg$$5_msg$$inline_1163_target$$inline_363$$.getParent()
    }
  }
};
$JSCompiler_prototypeAlias$$.$getLogRecord$ = function $$JSCompiler_prototypeAlias$$$$getLogRecord$$($level$$16$$, $msg$$6$$, $opt_exception$$1$$) {
  var $logRecord$$ = new $goog$debug$LogRecord$$($level$$16$$, String($msg$$6$$), this.$name_$);
  if($opt_exception$$1$$) {
    $logRecord$$.$exception_$ = $opt_exception$$1$$;
    var $JSCompiler_inline_result$$52$$;
    var $opt_fn$$inline_377$$ = arguments.callee.caller;
    try {
      var $e$$inline_378$$;
      var $href$$inline_1171$$ = $goog$getObjectByName$$("window.location.href");
      if($goog$isString$$($opt_exception$$1$$)) {
        $e$$inline_378$$ = {message:$opt_exception$$1$$, name:"Unknown error", lineNumber:"Not available", fileName:$href$$inline_1171$$, stack:"Not available"}
      }else {
        var $lineNumber$$inline_1172$$, $fileName$$inline_1173$$, $threwError$$inline_1174$$ = $JSCompiler_alias_FALSE$$;
        try {
          $lineNumber$$inline_1172$$ = $opt_exception$$1$$.lineNumber || $opt_exception$$1$$.$line$ || "Not available"
        }catch($e$$inline_1175$$) {
          $lineNumber$$inline_1172$$ = "Not available", $threwError$$inline_1174$$ = $JSCompiler_alias_TRUE$$
        }
        try {
          $fileName$$inline_1173$$ = $opt_exception$$1$$.fileName || $opt_exception$$1$$.filename || $opt_exception$$1$$.sourceURL || $goog$global$$.$googDebugFname || $href$$inline_1171$$
        }catch($e$$inline_1176$$) {
          $fileName$$inline_1173$$ = "Not available", $threwError$$inline_1174$$ = $JSCompiler_alias_TRUE$$
        }
        $e$$inline_378$$ = $threwError$$inline_1174$$ || !$opt_exception$$1$$.lineNumber || !$opt_exception$$1$$.fileName || !$opt_exception$$1$$.stack ? {message:$opt_exception$$1$$.message, name:$opt_exception$$1$$.name, lineNumber:$lineNumber$$inline_1172$$, fileName:$fileName$$inline_1173$$, stack:$opt_exception$$1$$.stack || "Not available"} : $opt_exception$$1$$
      }
      $JSCompiler_inline_result$$52$$ = "Message: " + $goog$string$htmlEscape$$($e$$inline_378$$.message) + '\nUrl: <a href="view-source:' + $e$$inline_378$$.fileName + '" target="_new">' + $e$$inline_378$$.fileName + "</a>\nLine: " + $e$$inline_378$$.lineNumber + "\n\nBrowser stack:\n" + $goog$string$htmlEscape$$($e$$inline_378$$.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + $goog$string$htmlEscape$$($goog$debug$getStacktrace$$($opt_fn$$inline_377$$) + "-> ")
    }catch($e2$$inline_379$$) {
      $JSCompiler_inline_result$$52$$ = "Exception trying to expose exception! You win, we lose. " + $e2$$inline_379$$
    }
    $logRecord$$.$exceptionText_$ = $JSCompiler_inline_result$$52$$
  }
  return $logRecord$$
};
$JSCompiler_prototypeAlias$$.info = function $$JSCompiler_prototypeAlias$$$info$($msg$$10$$, $opt_exception$$5$$) {
  this.log($goog$debug$Logger$Level$INFO$$, $msg$$10$$, $opt_exception$$5$$)
};
var $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = $JSCompiler_alias_NULL$$;
function $goog$debug$LogManager$getLogger$$($name$$79$$) {
  $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$setLevel$($goog$debug$Logger$Level$CONFIG$$));
  var $JSCompiler_temp$$43_logger$$inline_386$$;
  if(!($JSCompiler_temp$$43_logger$$inline_386$$ = $goog$debug$LogManager$loggers_$$[$name$$79$$])) {
    $JSCompiler_temp$$43_logger$$inline_386$$ = new $goog$debug$Logger$$($name$$79$$);
    var $lastDotIndex$$inline_387_parentLogger$$inline_389$$ = $name$$79$$.lastIndexOf("."), $leafName$$inline_388$$ = $name$$79$$.substr($lastDotIndex$$inline_387_parentLogger$$inline_389$$ + 1), $lastDotIndex$$inline_387_parentLogger$$inline_389$$ = $goog$debug$LogManager$getLogger$$($name$$79$$.substr(0, $lastDotIndex$$inline_387_parentLogger$$inline_389$$));
    $lastDotIndex$$inline_387_parentLogger$$inline_389$$.$getChildren$()[$leafName$$inline_388$$] = $JSCompiler_temp$$43_logger$$inline_386$$;
    $JSCompiler_temp$$43_logger$$inline_386$$.$parent_$ = $lastDotIndex$$inline_387_parentLogger$$inline_389$$;
    $goog$debug$LogManager$loggers_$$[$name$$79$$] = $JSCompiler_temp$$43_logger$$inline_386$$
  }
  return $JSCompiler_temp$$43_logger$$inline_386$$
}
;
// Input 85
function $bitex$view$View$$($app$$1$$, $opt_domHelper$$6$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$6$$);
  this.$is_active_$ = $JSCompiler_alias_FALSE$$;
  this.$app_$ = $app$$1$$
}
$goog$inherits$$($bitex$view$View$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$View$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("bitex-view");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  return this.$getDomHelper$().$createDom$("div", this.$getCssClass$())
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$107$$) {
  $bitex$view$View$$.$superClass_$.$decorateInternal$.call(this, $element$$107$$);
  this.$getDomHelper$();
  return $element$$107$$
};
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  this.$is_active_$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  this.$is_active_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$() {
  return $goog$dom$getElementByClass$$("bitex-view-content", this.$getElement$()) || this.$getElement$()
};
$JSCompiler_prototypeAlias$$.$logger_$ = $goog$debug$LogManager$getLogger$$("bitex.view.View");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$View$$.$superClass_$.$enterDocument$.call(this);
  this.$getHandler$()
};
$goog$ui$registry$setDecoratorByClassName$$("bitex-view", function() {
  return new $bitex$view$View$$
});
// Input 86
function $bitex$templates$DepositReceiptDialogContent$$($opt_data$$7_receipt_urlList18$$) {
  var $output$$6$$ = "";
  $opt_data$$7_receipt_urlList18$$ = $opt_data$$7_receipt_urlList18$$.$depositReceiptList$;
  for(var $receipt_urlListLen18$$ = $opt_data$$7_receipt_urlList18$$.length, $receipt_urlIndex18$$ = 0;$receipt_urlIndex18$$ < $receipt_urlListLen18$$;$receipt_urlIndex18$$++) {
    var $receipt_urlData18$$ = $opt_data$$7_receipt_urlList18$$[$receipt_urlIndex18$$], $output$$6$$ = $output$$6$$ + ('<img width="100%" src="' + $soy$$0$0escapeHtml$$($receipt_urlData18$$) + '"/><a href="' + $soy$$0$0escapeHtml$$($receipt_urlData18$$) + '" target="_blank">Descraga</a>')
  }
  return $output$$6$$
}
function $bitex$templates$BrokerConfirmDepositContent$$($opt_data$$8_output$$7$$) {
  return $opt_data$$8_output$$7$$ = "" + ('<form class="form-horizontal broker-confirm-deposit"><div class="control-group"><label class="control-label">Numero de control</label><div class="controls"><label class="control-label" style="text-align: left;">' + $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.$controlNumber$) + '</label></div></div><div class="control-group"><label class="control-label">Monto pagado</label><div class="controls"><div class="input-prepend"><span class="add-on">' + $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.$currencySign$) + 
  '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.$id_value$) + '" type="text" class="input-small" size="16" name="PaidValue" value="' + $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.value) + '"></div></div></div><div class="control-group"><label class="control-label">Comisiones:</label><div class="controls"><div class="row-fluid"><div class="span4"><div class="input-append"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.$percentFeeID$) + '" type="text" class="input-mini" size="16" name="Fee" value="' + 
  $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.$percentFee$) + '"><span class="add-on">%</span></div></div><div class="span4"><div class="input-prepend"><span class="add-on">' + $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.$currencySign$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.$fixedFeeID$) + '" type="text" class="input-mini" size="16" name="Fee" value="' + $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.$fixedFee$) + '"></div></div><div class="span4"><label id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.$totalFeesID$) + '" class="control-label broker-confirm-deposit-fee" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label">Monto neto</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($opt_data$$8_output$$7$$.$netValueID$) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label></div></div></form>')
}
function $bitex$templates$BrokerView$$($opt_data$$9$$) {
  var $output$$8$$ = "";
  $opt_data$$9$$.$show_title$ && ($output$$8$$ += '<div class="section-title"><h3>Mi corredor</h3></div>');
  $output$$8$$ += '<div class="content">';
  if(-1 != $opt_data$$9$$.$msg_broker$.BrokerID) {
    $output$$8$$ += "<address><strong>" + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.BusinessName) + "</strong><br/>" + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.Address) + "<br/>" + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.City) + ", " + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.State) + " " + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.ZipCode) + " - " + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.Country) + "<br/>";
    $opt_data$$9$$.$msg_broker$.PhoneNumber1 && ($output$$8$$ += '<abbr title="Telefono">P:</abbr>' + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.PhoneNumber1) + " " + ($opt_data$$9$$.$msg_broker$.PhoneNumber2 ? ", " + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.PhoneNumber2) : "") + "<br/>");
    $output$$8$$ += ($opt_data$$9$$.$msg_broker$.Skype ? "Skype: " + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.Skype) + "<br/>" : "") + '<a href="mailto:' + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.Email) + '" target="_blank">' + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.Email) + "</a></address>";
    if(0 < $opt_data$$9$$.$msg_broker$.BrokerID) {
      var $output$$8$$ = $output$$8$$ + '<div class="row-fluid"><div class="span3"><h4>Mercados</h4>', $allowed_marketListLen120_crypto_currenciesListLen196_feeListLen165_map$$inline_394$$ = $opt_data$$9$$.$msg_broker$.AllowedMarkets, $crypto_currenciesList196_feeList165_mapKeys$$inline_395$$ = [], $allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$;
      for($allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$ in $allowed_marketListLen120_crypto_currenciesListLen196_feeListLen165_map$$inline_394$$) {
        $crypto_currenciesList196_feeList165_mapKeys$$inline_395$$.push($allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$)
      }
      $allowed_marketListLen120_crypto_currenciesListLen196_feeListLen165_map$$inline_394$$ = $crypto_currenciesList196_feeList165_mapKeys$$inline_395$$.length;
      for($allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$ = 0;$allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$ < $allowed_marketListLen120_crypto_currenciesListLen196_feeListLen165_map$$inline_394$$;$allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$++) {
        $output$$8$$ += '<div class="row-fluid"><div class="span12">' + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.AllowedMarkets[$crypto_currenciesList196_feeList165_mapKeys$$inline_395$$[$allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$]].description) + "</div></div>"
      }
      $output$$8$$ += "</div></div>"
    }
    if(0 <= $opt_data$$9$$.$msg_broker$.BrokerID && 0 < $opt_data$$9$$.$msg_broker$.FeeStructure.length) {
      $output$$8$$ += '<h4>Comisiones</h4><table class="table table-bordered"><thead><tr><th>Operacion</th><th>Comision</th><th>Terminos</th></tr></thead><tbody>';
      $opt_data$$9$$.$msg_broker$.IsBrokerHub || ($output$$8$$ = $opt_data$$9$$.$msg_broker$.FormattedTransactionFeeBuy == $opt_data$$9$$.$msg_broker$.FormattedTransactionFeeSell ? $output$$8$$ + ("<tr><td>Comision</td><td>" + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.FormattedTransactionFeeBuy) + "</td><td></td></tr>") : $output$$8$$ + ("<tr><td>Comision \u2013 Lado del comprador</td><td>" + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.FormattedTransactionFeeBuy) + "</td><td></td></tr><tr><td>Comision \u2013 Lado del vendedor</td><td>" + 
      $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.FormattedTransactionFeeSell) + " %</td><td></td></tr>"));
      $crypto_currenciesList196_feeList165_mapKeys$$inline_395$$ = $opt_data$$9$$.$msg_broker$.FeeStructure;
      $allowed_marketListLen120_crypto_currenciesListLen196_feeListLen165_map$$inline_394$$ = $crypto_currenciesList196_feeList165_mapKeys$$inline_395$$.length;
      for($allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$ = 0;$allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$ < $allowed_marketListLen120_crypto_currenciesListLen196_feeListLen165_map$$inline_394$$;$allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$++) {
        var $crypto_currenciesData196_feeData165$$ = $crypto_currenciesList196_feeList165_mapKeys$$inline_395$$[$allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$], $output$$8$$ = $output$$8$$ + ("<tr><td>" + $soy$$0$0escapeHtml$$($crypto_currenciesData196_feeData165$$.Operation) + "</td><td>" + $soy$$0$0escapeHtml$$($crypto_currenciesData196_feeData165$$.Fee) + "</td><td>" + $soy$$0$0escapeHtml$$($crypto_currenciesData196_feeData165$$.Terms) + "</td></tr>")
      }
      $output$$8$$ += "</tbody></table>"
    }
    if(!$opt_data$$9$$.$msg_broker$.IsBrokerHub) {
      $output$$8$$ += '<h4>Cartera</h4><table class="table table-bordered"><thead><tr><th>Moneda</th><th>Tipo</th><th>Direcci\u00f3n</th><th>Multi signature</th><th>Operado por</th></tr></thead><tbody>';
      $crypto_currenciesList196_feeList165_mapKeys$$inline_395$$ = $opt_data$$9$$.$msg_broker$.CryptoCurrencies;
      $allowed_marketListLen120_crypto_currenciesListLen196_feeListLen165_map$$inline_394$$ = $crypto_currenciesList196_feeList165_mapKeys$$inline_395$$.length;
      for($allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$ = 0;$allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$ < $allowed_marketListLen120_crypto_currenciesListLen196_feeListLen165_map$$inline_394$$;$allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$++) {
        for(var $crypto_currenciesData196_feeData165$$ = $crypto_currenciesList196_feeList165_mapKeys$$inline_395$$[$allowed_marketIndex120_crypto_currenciesIndex196_feeIndex165_key$$inline_396$$], $walletsList197$$ = $crypto_currenciesData196_feeData165$$.Wallets, $walletsListLen197$$ = $walletsList197$$.length, $walletsIndex197$$ = 0;$walletsIndex197$$ < $walletsListLen197$$;$walletsIndex197$$++) {
          var $walletsData197$$ = $walletsList197$$[$walletsIndex197$$], $output$$8$$ = $output$$8$$ + ("<tr><td>" + $soy$$0$0escapeHtml$$($crypto_currenciesData196_feeData165$$.CurrencyDescription) + "</td><td>" + $soy$$0$0escapeHtml$$($walletsData197$$.type) + "</td><td>" + ("BTC" == $crypto_currenciesData196_feeData165$$.CurrencyCode ? '<a href="https://blockchain.info/address/' + $soy$$0$0escapeHtml$$($walletsData197$$.address) + '/" target="_blank">' + $soy$$0$0escapeHtml$$($walletsData197$$.address) + 
          "</a>" : $soy$$0$0escapeHtml$$($walletsData197$$.address)) + "</td><td>"), $output$$8$$ = $walletsData197$$.multisig ? $output$$8$$ + "Si" : $output$$8$$ + "No", $output$$8$$ = $output$$8$$ + ("</td><td>" + $soy$$0$0escapeHtml$$($walletsData197$$.managed_by) + "</td></tr>")
        }
      }
      $output$$8$$ += "</tbody></table>"
    }
    $output$$8$$ += '<h4>Terminos del servicio</h4><iframe style="width:100%;height:400px;" src="' + $soy$$0$0escapeHtml$$($opt_data$$9$$.$msg_broker$.TosUrl) + '"></iframe>'
  }
  return $output$$8$$ + "</div>"
}
function $bitex$templates$CancelDepositDialogContent$$() {
  var $output$$9$$;
  return $output$$9$$ = "" + ('<p>Ingrese el motivo por el que cancela el deposito</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + $soy$$0$0escapeHtml$$("id_select_reason") + '" >Motivo:</label><div class="controls"><select id="' + $soy$$0$0escapeHtml$$("id_select_reason") + '"><option value=0 selected>Otro</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + $soy$$0$0escapeHtml$$("id_custom_reason_text") + 
  '" rows="2" style=""></textarea></div></div></fieldset></form>')
}
function $bitex$templates$CancelWithdrawDialogContent$$() {
  var $output$$10$$;
  return $output$$10$$ = "" + ('<p>Ingrese el motivo por el que cancela el retiro</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + $soy$$0$0escapeHtml$$("id_select_reason") + '" >Motivo:</label><div class="controls"><select id="' + $soy$$0$0escapeHtml$$("id_select_reason") + '"><option value=0>Otro</option><option value=-1 selected>Fondos insuficientes</option><option value=-2>Cuenta sin verificar</option><option value=-3>Sospecha de fraude</option><option value=-4>Retiro a una cuenta diferente a la suya</option><option value=-5>Cartera invalida</option><option value=-6>Cuenta Bancaria invalida</option><option value=-7>El monto excede su limite de retiro</option><option value=-8>User has deposits that are not yet confirmed</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + 
  $soy$$0$0escapeHtml$$("id_custom_reason_text") + '" rows="2" style="display:none;"></textarea></div></div></fieldset></form>')
}
function $bitex$templates$GoogleAuthenticationCodeDialogContent$$($opt_data$$12_output$$11$$) {
  return $opt_data$$12_output$$11$$ = "" + ('<div class="ctrlHolder">Codigo verificado de Google:<input id="' + $soy$$0$0escapeHtml$$($opt_data$$12_output$$11$$.id) + '" placeholder="eg. 555555" size="10"></div>')
}
function $bitex$templates$WithdrawConfirmationDialogContent$$() {
  var $output$$12$$;
  return $output$$12$$ = "" + ('<form class="form-horizontal" data-deposit-status="prepare"><fieldset><p>Acabamos de enviar el codigo de confirmacion a su correo electronico\n    </p><div class="ctrlHolder"><label>Confirmation Code</label><input id="' + $soy$$0$0escapeHtml$$("id_withdraw_confirmation") + '" uniform-validators="required" placeholder="Codigo de confirmacion e" class="input-block-level"></div><p><i>Esta es una medida de seguridad para mejorar la seguridad de su cuenta\n    </i></p></fieldset></form>')
}
function $bitex$templates$UserFeesDialogContent$$($opt_data$$14_output$$13$$) {
  return $opt_data$$14_output$$13$$ = "" + ('<form class="form-horizontal"><div class="control-group"><label class="control-label" for="' + $soy$$0$0escapeHtml$$($opt_data$$14_output$$13$$.id) + '_buy_fee">Buy fee </label><div class="controls"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$14_output$$13$$.id) + '_buy_fee"  style="text-align: right;" value="' + $soy$$0$0escapeHtml$$($opt_data$$14_output$$13$$.$buy_fee$) + '"/><div class="checkbox"><label><input type="checkbox" id="' + $soy$$0$0escapeHtml$$($opt_data$$14_output$$13$$.id) + 
  '_broker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + $soy$$0$0escapeHtml$$($opt_data$$14_output$$13$$.id) + '_sell_fee">Sell fee</label><div class="controls"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$14_output$$13$$.id) + '_sell_fee"  style="text-align: right;" value="' + $soy$$0$0escapeHtml$$($opt_data$$14_output$$13$$.$sell_fee$) + '"/><div class="checkbox"><label><input type="checkbox" id="' + $soy$$0$0escapeHtml$$($opt_data$$14_output$$13$$.id) + 
  '_broker_sell_fee"> Use Broker Fee</label></div></div></div></form>')
}
function $bitex$templates$YourAccountSummary$$($opt_data$$15$$) {
  var $output$$14$$;
  $output$$14$$ = "<h6>Su cuenta</h6>";
  for(var $accountList343$$ = $opt_data$$15$$.$accounts$, $accountListLen343$$ = $accountList343$$.length, $accountIndex343$$ = 0;$accountIndex343$$ < $accountListLen343$$;$accountIndex343$$++) {
    var $accountData343$$ = $accountList343$$[$accountIndex343$$];
    $output$$14$$ += '<table class="table table-bordered account-summary-table" ><tbody><tr id="id_account_summary_' + $soy$$0$0escapeHtml$$($accountData343$$.brokerID) + '" class=\'account-summary-broker model-action-set\' data-key="SelectedBrokerID" data-value="' + $soy$$0$0escapeHtml$$($accountData343$$.brokerID) + '"' + (1 >= $opt_data$$15$$.$accounts$.length || 0 == $accountData343$$.currencies.length ? 'style="display:none;"' : "") + '><td colspan="3"><strong>' + $soy$$0$0escapeHtml$$($accountData343$$.brokerName) + 
    "</strong></td></tr>";
    for(var $currency_infoList355$$ = $accountData343$$.currencies, $currency_infoListLen355$$ = $currency_infoList355$$.length, $currency_infoIndex355$$ = 0;$currency_infoIndex355$$ < $currency_infoListLen355$$;$currency_infoIndex355$$++) {
      var $currency_infoData355$$ = $currency_infoList355$$[$currency_infoIndex355$$];
      $output$$14$$ += '<tr><td style="padding: 4px;' + (0 != $currency_infoIndex355$$ ? "border-top: 0;" : "") + '"><strong>' + $soy$$0$0escapeHtml$$($currency_infoData355$$.currency) + '</strong></td><td style="padding: 4px;' + (0 != $currency_infoIndex355$$ ? "border-top: 0;" : "") + '"><span class="bitex-model" data-model-key="formatted_balance_' + $soy$$0$0escapeHtml$$($accountData343$$.brokerID) + ":" + $soy$$0$0escapeHtml$$($accountData343$$.clientID) + "_" + $soy$$0$0escapeHtml$$($currency_infoData355$$.currency) + 
      '" data-blink-class="balance-info-blink">' + $soy$$0$0escapeHtml$$($currency_infoData355$$.formattedBalance) + '</span><abbr title="Unconfirmed deposits from your confirmed addresses"><em><span class="bitex-model" data-model-key="formatted_position_' + $soy$$0$0escapeHtml$$($accountData343$$.brokerID) + ":" + $soy$$0$0escapeHtml$$($accountData343$$.clientID) + "_" + $soy$$0$0escapeHtml$$($currency_infoData355$$.currency) + '" data-blink-class="balance-info-blink"></span></em></abbr></td><td style="padding: 4px;border-left:0;' + 
      (0 != $currency_infoIndex355$$ ? "border-top: 0;" : "") + '">' + ($currency_infoData355$$.showDeposit && $currency_infoData355$$.showWithdraw ? '<div class="btn-group">' : "") + ($currency_infoData355$$.showDeposit ? '<button class="btn btn-mini" data-action="deposit" data-currency="' + $soy$$0$0escapeHtml$$($currency_infoData355$$.currency) + '"><i data-action="deposit" data-currency="' + $soy$$0$0escapeHtml$$($currency_infoData355$$.currency) + '" class="icon-download-alt"></i></button>' : 
      "") + ($currency_infoData355$$.showWithdraw ? '<button class="btn btn-mini" data-action="withdraw" data-currency="' + $soy$$0$0escapeHtml$$($currency_infoData355$$.currency) + '"><i data-action="withdraw" data-currency="' + $soy$$0$0escapeHtml$$($currency_infoData355$$.currency) + '" class="icon-upload-alt"></i></button>' : "") + ($currency_infoData355$$.showDeposit && $currency_infoData355$$.showWithdraw ? "</div>" : "") + "</td></tr>"
    }
    $output$$14$$ += "</tbody></table>"
  }
  return $output$$14$$
}
function $bitex$templates$WaitingForDepositResponseDialogContent$$() {
  return'<div class="row-fluid" data-deposit-status="processing"><h5 class="text-center">Procesando su solicitud de retiro...</h5></div><div class="row-fluid"><div class="span6 offset3"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>'
}
function $bitex$templates$DepositCryptoCurrencyContentDialog$$($opt_data$$18$$) {
  return'<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + $soy$$0$0escapeHtml$$($opt_data$$18$$.$deposit_message$.Data.InputAddress) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + $soy$$0$0escapeHtml$$($opt_data$$18$$.$deposit_message$.Data.InputAddress) + '"/></div></div>'
}
function $bitex$templates$CryptoCurrencyQRContentDialog$$($opt_data$$19$$) {
  return'<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + $soy$$0$0escapeHtml$$($opt_data$$19$$.data.Wallet) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + $soy$$0$0escapeHtml$$($opt_data$$19$$.data.Wallet) + '"/></div></div>'
}
function $bitex$templates$ConfirmTrustedAddressContentDialog$$($opt_data$$20_output$$17$$) {
  return $opt_data$$20_output$$17$$ = "" + ('<div class="row-fluid"><h3 class="text-center"> Do you want to enable instant deposits for this address?</h3><h5 class="text-center">' + $soy$$0$0escapeHtml$$($opt_data$$20_output$$17$$.data.Address) + '</h5><div class="text-center"><input type="text" class="confirm-trusted-address-label" size="30" placeholder="Enter a label for this address."></input></div><h4 class="text-center">Only enable it if you have the private key for this address.</h4><div class="alert alert-block"><h4>Always remember what happened at MtGox</h4>Never ever under any circumstances leave your Bitcoins deposited at any Exchange, no matter how secure they claim to be. Bitcoins are meant to be with the people and not in the hands of the Exchange operator. We don\'t want to create a "pot of gold" that will attract hackers. The "Instant deposits" technology will allow you to send your bitcoins instantly to trade them in the exchange, thus eliminating the need for you to leave Bitcoins at the exchange in order to negotiate them quickly.</div></div>')
}
function $bitex$templates$ConfirmDepositCryptoCurrencyContentDialog$$($MSG_UNNAMED_1508_opt_data$$21$$) {
  var $output$$18$$ = "";
  $MSG_UNNAMED_1508_opt_data$$21$$ = "Le sera generado una direcci\u00f3n " + ($soy$$0$0escapeHtml$$($MSG_UNNAMED_1508_opt_data$$21$$.$currencydescription$) + " unica que sera valida\n        solo para esta trasaccion.\n    ");
  return $output$$18$$ + ('<div class="row-fluid" data-deposit-status="confirm"><h3 class="text-center">IMPORTANTE!</h3><h4 class="text-center">' + $MSG_UNNAMED_1508_opt_data$$21$$ + '</h4><h3 class="text-center">Entendio?</h3><br/><br/></div>')
}
function $bitex$templates$DepositSlipContentDialog$$($opt_data$$22_output$$19$$) {
  return $opt_data$$22_output$$19$$ = "" + ('<div class="row-fluid" data-deposit-status="done"><iframe allowtransparency="true" src="/get_deposit?deposit_id=' + $soy$$0$0escapeHtml$$($opt_data$$22_output$$19$$.$deposit_id$) + '" frameborder="0" style="width: 500px; height: 500px; border: none;" scrolling="yes"></iframe></div><div class="row-fluid"><div class="span12 text-center"><a  target="_blank" href="/get_deposit?deposit_id=' + $soy$$0$0escapeHtml$$($opt_data$$22_output$$19$$.$deposit_id$) + 
  '" class="btn btn-primary">Imprimir</a></div></div>')
}
function $bitex$templates$FeesFormControls$$($opt_data$$23_output$$20$$) {
  return $opt_data$$23_output$$20$$ = "" + ('<div class="control-group"><label class="control-label">Comisiones:</label><div class="controls"><div class="row-fluid"><div class="span3"><div class="input-append"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$23_output$$20$$.$percentFeeID$) + '" type="text" class="input-mini" size="16"  style="width: 40px;" name="PercentFee" value="' + $soy$$0$0escapeHtml$$($opt_data$$23_output$$20$$.$percentFee$) + '"><span class="add-on">%</span></div><span style="font-style: italic;">Comision porcentual</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">+</span></div><div class="span3"><div class="input-prepend"><span class="add-on">' + 
  $soy$$0$0escapeHtml$$($opt_data$$23_output$$20$$.$currencySign$) + '</span><input id="' + $soy$$0$0escapeHtml$$($opt_data$$23_output$$20$$.$fixedFeeID$) + '" type="text" class="input-mini" size="16" style="width: 40px;" name="FixedFee" value="' + $soy$$0$0escapeHtml$$($opt_data$$23_output$$20$$.$fixedFee$) + '"></div><span style="font-style: italic;">Comision fija</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">=</span></div><div class="span4"><label id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$23_output$$20$$.$totalFeesID$) + '" class="control-label" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label">Monto neto</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($opt_data$$23_output$$20$$.$netValueID$) + '" class="control-label" style="text-align: left;"></label></div></div>')
}
function $bitex$templates$FeesForm$$($opt_data$$24_output$$21$$) {
  return $opt_data$$24_output$$21$$ = "" + ('<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="Currency" value="' + $soy$$0$0escapeHtml$$($opt_data$$24_output$$21$$.$currency$) + '"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$24_output$$21$$.$amountID$) + '" type="hidden" name="Amount" value="' + $soy$$0$0escapeHtml$$($opt_data$$24_output$$21$$.$amount$ / 1E8) + '"><div class="control-group"><label class="control-label">Monto solicitado</label><div class="controls"><label class="control-label" style="text-align: left;">' + 
  $soy$$0$0escapeHtml$$($opt_data$$24_output$$21$$.$formattedAmount$) + "</label></div></div>" + $bitex$templates$FeesFormControls$$($opt_data$$24_output$$21$$) + "</form>")
}
function $bitex$templates$DepositWithdrawDialogContent$$($opt_data$$25$$) {
  var $output$$22$$ = '<form class="form-horizontal" data-deposit-status="prepare"><fieldset><input type="hidden" name="Currency" value="' + $soy$$0$0escapeHtml$$($opt_data$$25$$.$currency$) + '">' + ("broker" == $opt_data$$25$$.$side$ ? '<input id="' + $soy$$0$0escapeHtml$$($opt_data$$25$$.$amountID$) + '" type="hidden" name="Amount" value="' + $soy$$0$0escapeHtml$$($opt_data$$25$$.$amount$ / 1E8) + '">' : "") + '<div class="error"></div>';
  if(!$opt_data$$25$$.$force_method$) {
    if(1 < $opt_data$$25$$.$methods$.length) {
      for(var $output$$22$$ = $output$$22$$ + ('<div class="control-group"><label class="control-label">Method</label><div class="controls"><select id="' + $soy$$0$0escapeHtml$$($opt_data$$25$$.$methodID$) + '" name="Method" class="withdraw-method-selector">'), $methodList577_methodList602_methodList628$$ = $opt_data$$25$$.$methods$, $methodListLen577_methodListLen602_methodListLen628$$ = $methodList577_methodList602_methodList628$$.length, $methodIndex577_methodIndex602_methodIndex628$$ = 0;$methodIndex577_methodIndex602_methodIndex628$$ < 
      $methodListLen577_methodListLen602_methodListLen628$$;$methodIndex577_methodIndex602_methodIndex628$$++) {
        var $fieldList838_methodData577_methodData602_methodData628$$ = $methodList577_methodList602_methodList628$$[$methodIndex577_methodIndex602_methodIndex628$$], $output$$22$$ = $output$$22$$ + ("<option " + (0 == $methodIndex577_methodIndex602_methodIndex628$$ ? "selected" : "") + ' value="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + '" data-net-value="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + 
        "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$netValueID$) + '" data-percent-fee="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$percentFeeID$) + '" data-fixed-fee="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$fixedFeeID$) + '">' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.description) + 
        "</option>")
      }
      $output$$22$$ += "</select></div></div>"
    }else {
      $methodList577_methodList602_methodList628$$ = $opt_data$$25$$.$methods$;
      $methodListLen577_methodListLen602_methodListLen628$$ = $methodList577_methodList602_methodList628$$.length;
      for($methodIndex577_methodIndex602_methodIndex628$$ = 0;$methodIndex577_methodIndex602_methodIndex628$$ < $methodListLen577_methodListLen602_methodListLen628$$;$methodIndex577_methodIndex602_methodIndex628$$++) {
        $fieldList838_methodData577_methodData602_methodData628$$ = $methodList577_methodList602_methodList628$$[$methodIndex577_methodIndex602_methodIndex628$$], $output$$22$$ += '<input  id="' + $soy$$0$0escapeHtml$$($opt_data$$25$$.$methodID$) + '" type="hidden" name="Method"  value="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + '" data-net-value="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + 
        $soy$$0$0escapeHtml$$($opt_data$$25$$.$netValueID$) + '" data-percent-fee="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$percentFeeID$) + '" data-fixed-fee="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$fixedFeeID$) + '">'
      }
    }
  }
  $output$$22$$ += '<div class="withdraw-methods">';
  0 == $opt_data$$25$$.$methods$.length && ($output$$22$$ += '<div class="alert alert-danger text-center">We are not accepting deposits at this moment. We sorry for the inconvenience.</div>');
  $methodList577_methodList602_methodList628$$ = $opt_data$$25$$.$methods$;
  $methodListLen577_methodListLen602_methodListLen628$$ = $methodList577_methodList602_methodList628$$.length;
  for($methodIndex577_methodIndex602_methodIndex628$$ = 0;$methodIndex577_methodIndex602_methodIndex628$$ < $methodListLen577_methodListLen602_methodListLen628$$;$methodIndex577_methodIndex602_methodIndex628$$++) {
    if($fieldList838_methodData577_methodData602_methodData628$$ = $methodList577_methodList602_methodList628$$[$methodIndex577_methodIndex602_methodIndex628$$], $opt_data$$25$$.$force_method$) {
      if($fieldList838_methodData577_methodData602_methodData628$$.method == $opt_data$$25$$.$force_method$) {
        if("client" == $opt_data$$25$$.$side$) {
          $output$$22$$ += '<div class="control-group ctrlHolder"><label class="control-label">Amount</label><div class="controls"><div class="input-prepend"><span class="add-on">' + $soy$$0$0escapeHtml$$($opt_data$$25$$.$currencySign$) + '</span><input id="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$amountID$) + '" uniform-validators="required; validateNumber ' + ($fieldList838_methodData577_methodData602_methodData628$$.limits.enabled ? 
          " " + ($fieldList838_methodData577_methodData602_methodData628$$.limits.min ? "; validateMin " + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.limits.min) : "") + ($fieldList838_methodData577_methodData602_methodData628$$.limits.max ? "; validateMax " + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.limits.max) + " " : "") + " " : "") + '" type="text" class="withdraw-field input-small" size="16" name="Amount"></div>';
          if($fieldList838_methodData577_methodData602_methodData628$$.limits.enabled) {
            $output$$22$$ += "<div><em><small>";
            if($fieldList838_methodData577_methodData602_methodData628$$.limits.min) {
              var $MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$ = " Maximum: " + ($soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.limits.formatted_max) + " per day.  "), $output$$22$$ = $output$$22$$ + ($MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$ + "<br>")
            }
            $fieldList838_methodData577_methodData602_methodData628$$.limits.max && ($MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$ = " Minimum: " + ($soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.limits.formatted_min) + " per transaction.  "), $output$$22$$ += $MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$);
            $output$$22$$ += "</small></em></div>"
          }
          $output$$22$$ += "</div></div>"
        }
        for(var $MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$ = $fieldList838_methodData577_methodData602_methodData628$$.fields, $fieldIndex838_fieldListLen679$$ = $MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$.length, $fieldData838_fieldIndex679$$ = 0;$fieldData838_fieldIndex679$$ < $fieldIndex838_fieldListLen679$$;$fieldData838_fieldIndex679$$++) {
          var $fieldData679$$ = $MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$[$fieldData838_fieldIndex679$$], $output$$22$$ = $output$$22$$ + ($fieldData679$$.side == $opt_data$$25$$.$side$ ? '<div class="control-group"><label class="control-label">' + $soy$$0$0escapeHtml$$($fieldData679$$.label) + '</label><div class="controls"><input class="withdraw-field" uniform-validators="' + $soy$$0$0escapeHtml$$($fieldData679$$.validator) + '" type="' + 
          $soy$$0$0escapeHtml$$($fieldData679$$.type) + '" name="' + $soy$$0$0escapeHtml$$($fieldData679$$.name) + '" placeholder="' + $soy$$0$0escapeHtml$$($fieldData679$$.placeholder) + '" value="' + $soy$$0$0escapeHtml$$($fieldData679$$.value) + '"/></div></div>' : "")
        }
        $output$$22$$ = "client" == $opt_data$$25$$.$side$ ? $output$$22$$ + ('<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.disclaimer) + '</label><input id="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$percentFeeID$) + '" type="hidden" value="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.percent_fee) + 
        '"><input id="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$fixedFeeID$) + '" type="hidden" value="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.fixed_fee) + '"></div></div><div class="control-group"><label class="control-label">Comisiones:</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + 
        "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$totalFeesID$) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ($opt_data$$25$$.$hideNetAmount$ ? ' style="display:none;" ' : "") + ' ><label class="control-label">Monto neto</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$netValueID$) + '" class="control-label" style="text-align: left;"></label></div></div>') : 
        $output$$22$$ + ("broker" == $opt_data$$25$$.$side$ ? '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.disclaimer) + "</label></div></div>" + ($opt_data$$25$$.$showFeeDataEntry$ ? $bitex$templates$FeesFormControls$$({$currencySign$:$opt_data$$25$$.$currencySign$, $percentFeeID$:$fieldList838_methodData577_methodData602_methodData628$$.method + "_" + $opt_data$$25$$.$percentFeeID$, 
        $percentFee$:$fieldList838_methodData577_methodData602_methodData628$$.percent_fee, $fixedFeeID$:$fieldList838_methodData577_methodData602_methodData628$$.method + "_" + $opt_data$$25$$.$fixedFeeID$, $fixedFee$:$fieldList838_methodData577_methodData602_methodData628$$.fixed_fee, $totalFeesID$:$fieldList838_methodData577_methodData602_methodData628$$.method + "_" + $opt_data$$25$$.$totalFeesID$, $netValueID$:$fieldList838_methodData577_methodData602_methodData628$$.method + "_" + $opt_data$$25$$.$netValueID$}) : 
        "") : "")
      }
    }else {
      $output$$22$$ += '<div class="withdraw-method" data-withdraw-method="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + '" style="' + (0 != $methodIndex577_methodIndex602_methodIndex628$$ ? "display:none;" : "") + '" >';
      "client" == $opt_data$$25$$.$side$ && ($output$$22$$ += '<div class="control-group ctrlHolder"><label class="control-label">Amount</label><div class="controls"><div class="input-prepend"><span class="add-on">' + $soy$$0$0escapeHtml$$($opt_data$$25$$.$currencySign$) + '</span><input id="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$amountID$) + '" uniform-validators="required; validateNumber ' + ($fieldList838_methodData577_methodData602_methodData628$$.limits.enabled ? 
      " " + ($fieldList838_methodData577_methodData602_methodData628$$.limits.min ? "; validateMin " + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.limits.min) : "") + ($fieldList838_methodData577_methodData602_methodData628$$.limits.max ? "; validateMax " + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.limits.max) + " " : "") + " " : "") + '" type="text" class="withdraw-field input-small" size="16" name="Amount" ' + (0 != $methodIndex577_methodIndex602_methodIndex628$$ ? 
      "disabled" : "") + "></div>", $fieldList838_methodData577_methodData602_methodData628$$.limits.enabled && ($output$$22$$ += "<div><em><small>", $fieldList838_methodData577_methodData602_methodData628$$.limits.min && ($MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$ = " Maximum: " + ($soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.limits.formatted_max) + " per day.  "), $output$$22$$ += $MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$ + 
      "<br>"), $fieldList838_methodData577_methodData602_methodData628$$.limits.max && ($MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$ = " Minimum: " + ($soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.limits.formatted_min) + " per transaction.  "), $output$$22$$ += $MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$), $output$$22$$ += "</small></em></div>"), $output$$22$$ += 
      "</div></div>");
      $output$$22$$ += '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.disclaimer) + '</label><input id="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$percentFeeID$) + '" type="hidden" value="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.percent_fee) + 
      '"><input id="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$fixedFeeID$) + '" type="hidden" value="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.fixed_fee) + '"></div></div><div class="control-group"><label class="control-label">Comisiones:</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + 
      "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$totalFeesID$) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ($opt_data$$25$$.$hideNetAmount$ ? ' style="display:none;" ' : "") + '><label class="control-label">Monto neto</label><div class="controls"><label id="' + $soy$$0$0escapeHtml$$($fieldList838_methodData577_methodData602_methodData628$$.method) + "_" + $soy$$0$0escapeHtml$$($opt_data$$25$$.$netValueID$) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label></div></div>';
      $fieldList838_methodData577_methodData602_methodData628$$ = $fieldList838_methodData577_methodData602_methodData628$$.fields;
      $MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$ = $fieldList838_methodData577_methodData602_methodData628$$.length;
      for($fieldIndex838_fieldListLen679$$ = 0;$fieldIndex838_fieldListLen679$$ < $MSG_UNNAMED_1530_MSG_UNNAMED_1532_MSG_UNNAMED_1540_MSG_UNNAMED_1542_fieldList679_fieldListLen838$$;$fieldIndex838_fieldListLen679$$++) {
        $fieldData838_fieldIndex679$$ = $fieldList838_methodData577_methodData602_methodData628$$[$fieldIndex838_fieldListLen679$$], $output$$22$$ += $fieldData838_fieldIndex679$$.side == $opt_data$$25$$.$side$ ? '<div class="control-group"><div class="ctrlHolder"><label class="control-label">' + $soy$$0$0escapeHtml$$($fieldData838_fieldIndex679$$.label) + '</label><div class="controls"><input class="withdraw-field" uniform-validators="' + $soy$$0$0escapeHtml$$($fieldData838_fieldIndex679$$.validator) + 
        '" type="' + $soy$$0$0escapeHtml$$($fieldData838_fieldIndex679$$.type) + '" name="' + $soy$$0$0escapeHtml$$($fieldData838_fieldIndex679$$.name) + '" placeholder="' + $soy$$0$0escapeHtml$$($fieldData838_fieldIndex679$$.placeholder) + '" value="' + $soy$$0$0escapeHtml$$($fieldData838_fieldIndex679$$.value) + '" ' + (0 != $methodIndex577_methodIndex602_methodIndex628$$ ? "disabled" : "") + " /></div></div></div>" : ""
      }
      $output$$22$$ += "</div>"
    }
  }
  return $output$$22$$ + '</div><div class="control-group dlg-response-group"><label class="control-label dlg-response-group-label"></label><div class="controls" class="dlg-response-group-value" ></div></div></fieldset></form>'
}
function $bitex$templates$YourFeesBalances$$($opt_data$$26_output$$23$$) {
  return $opt_data$$26_output$$23$$ = "" + ('<table class="table table-striped"><tbody><tr><td><strong>Buy Fee</strong></td><td><span class="bitex-model">' + $soy$$0$0escapeHtml$$($opt_data$$26_output$$23$$.$buy_fee$) + '</span></td></tr><tr><td><strong>Sell Fee</strong></td><td><span class="bitex-model">' + $soy$$0$0escapeHtml$$($opt_data$$26_output$$23$$.$sell_fee$) + "</span></td></tr></tbody></table>")
}
function $bitex$templates$YourAccountBalances$$($currencyList876_opt_data$$27$$) {
  var $output$$24$$ = '<table class="table table-striped" style="width: 350px"><tbody>';
  $currencyList876_opt_data$$27$$ = $currencyList876_opt_data$$27$$.$currencies$;
  for(var $currencyListLen876$$ = $currencyList876_opt_data$$27$$.length, $currencyIndex876$$ = 0;$currencyIndex876$$ < $currencyListLen876$$;$currencyIndex876$$++) {
    var $currencyData876$$ = $currencyList876_opt_data$$27$$[$currencyIndex876$$], $MSG_UNNAMED_1552$$ = "Disponible " + $soy$$0$0escapeHtml$$($currencyData876$$.code), $output$$24$$ = $output$$24$$ + ("<tr><td><strong>" + $MSG_UNNAMED_1552$$ + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + $soy$$0$0escapeHtml$$($currencyData876$$.$model_key$) + '" data-blink-class="balance-info-blink">' + ($currencyData876$$.$balance$ ? $soy$$0$0escapeHtml$$($currencyData876$$.$balance$) : 
    "-") + "</span></td></tr>")
  }
  return $output$$24$$ + "</tbody></table>"
}
function $bitex$templates$AccountOverviewHeaderVerifiedData$$($opt_data$$28$$) {
  var $output$$25$$ = "";
  return $output$$25$$ = 2 == $opt_data$$28$$.$msg_customer_detail$.Verified ? $output$$25$$ + ('<span class="label label-success">Si</span>' + $soy$$0$0escapeHtml$$($opt_data$$28$$.$msg_customer_detail$.VerificationData)) : 1 == $opt_data$$28$$.$msg_customer_detail$.Verified ? $output$$25$$ + ('<span class="label label-important">Pendiente</span><a href="#" class="btn btn-primary btn-mini" data-action="SET_VERIFIED" data-row="' + $soy$$0$0escapeHtml$$($opt_data$$28$$.$msg_customer_detail$.ID) + 
  '">Ajustar como verificado<i class="icon-white icon-ok"></i></a><a href="#" class="btn btn-danger btn-mini" data-action="SET_NOT_VERIFIED" data-row="' + $soy$$0$0escapeHtml$$($opt_data$$28$$.$msg_customer_detail$.ID) + '">Set as NOT verified<i class="icon-white icon-remove"></i></a>' + $soy$$0$0escapeHtml$$($opt_data$$28$$.$msg_customer_detail$.VerificationData)) : $output$$25$$ + ('<span class="label label-important">No</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_VERIFIED" data-row="' + 
  $soy$$0$0escapeHtml$$($opt_data$$28$$.$msg_customer_detail$.ID) + '">Ajustar como verificado<i class="icon-white icon-ok"></i></a>')
}
function $bitex$templates$AccountOverviewHeaderWithDrawEmailData$$($opt_data$$29$$) {
  var $output$$26$$ = "";
  return $output$$26$$ = $opt_data$$29$$.$msg_customer_detail$.NeedWithdrawEmail ? $output$$26$$ + ('<span class="label label-success">Activado</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + $soy$$0$0escapeHtml$$($opt_data$$29$$.$msg_customer_detail$.ID) + '">Desactivar</a>') : $output$$26$$ + ('<span class="label label-important">Desactivado</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + $soy$$0$0escapeHtml$$($opt_data$$29$$.$msg_customer_detail$.ID) + 
  '">Activado</a>')
}
function $bitex$templates$AccountOverviewHeaderTwoFactors$$($opt_data$$30$$) {
  var $output$$27$$ = "";
  return $output$$27$$ = $opt_data$$30$$.$msg_customer_detail$.TwoFactorEnabled ? $output$$27$$ + ('<span class="label label-success">Activado</span><a href="#" class="btn btn-primary btn-mini" data-action="SET_TWO_FACTOR" data-row="' + $soy$$0$0escapeHtml$$($opt_data$$30$$.$msg_customer_detail$.ID) + '">Desactivar</a>') : $output$$27$$ + '<span class="label label-important">Desactivado</span>'
}
function $bitex$templates$AccountOverviewHeader$$($opt_data$$31_output$$28$$) {
  return $opt_data$$31_output$$28$$ = "" + ('<table class="table table-striped account-overview-table" style="width: 350px"><tbody><tr><td><strong>ID</strong></td><td>' + $soy$$0$0escapeHtml$$($opt_data$$31_output$$28$$.$msg_customer_detail$.ID) + "</td></tr><tr><td><strong>Nombre de usuario</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$31_output$$28$$.$msg_customer_detail$.Username) + "</td></tr><tr><td><strong>Correo electronico</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$31_output$$28$$.$msg_customer_detail$.Email) + 
  "</td></tr><tr><td><strong>Estado</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$31_output$$28$$.$msg_customer_detail$.State) + "</td></tr><tr><td><strong>Pais</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$31_output$$28$$.$msg_customer_detail$.CountryCode) + "</td></tr><tr><td><strong>Ultimo inicio de sesion</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$31_output$$28$$.$msg_customer_detail$.LastLogin) + '</td></tr><tr><td><strong>Esta verificado</strong></td><td class="account-overview-val account-overview-verified">' + 
  $bitex$templates$AccountOverviewHeaderVerifiedData$$($opt_data$$31_output$$28$$) + '</td></tr><tr><td><strong>Tiene verificacion de dos pasos</strong></td><td class="account-overview-val account-overview-two-factors" >' + $bitex$templates$AccountOverviewHeaderTwoFactors$$($opt_data$$31_output$$28$$) + "</td></tr><tr><td><strong>Fecha de registro</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$31_output$$28$$.$msg_customer_detail$.Created) + '</td></tr><tr><td><strong>Necesita una confirmacion por correo por retiro</strong></td><td class="account-overview-val account-overview-withdraw-email">' + 
  $bitex$templates$AccountOverviewHeaderWithDrawEmailData$$($opt_data$$31_output$$28$$) + "</td></tr></tbody></table>")
}
function $bitex$templates$AccountOverviewUser$$($opt_data$$32$$) {
  var $output$$29$$;
  $output$$29$$ = "" + ('<table class="table table-striped account-overview-table" style="width: 350px"><tbody><tr><td><strong>ID</strong></td><td>' + $soy$$0$0escapeHtml$$($opt_data$$32$$.$msg_customer_detail$.ID) + "</td></tr><tr><td><strong>Nombre de usuario</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$32$$.$msg_customer_detail$.Username) + "</td></tr><tr><td><strong>Correo electronico</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$32$$.$msg_customer_detail$.Email) + "</td></tr><tr><td><strong>Estado</strong></td><td>" + 
  $soy$$0$0escapeHtml$$($opt_data$$32$$.$msg_customer_detail$.State) + "</td></tr><tr><td><strong>Pais</strong></td><td>" + $soy$$0$0escapeHtml$$($opt_data$$32$$.$msg_customer_detail$.CountryCode) + '</td></tr><tr><td><strong>Esta verificado</strong></td><td class="account-overview-val account-overview-verified">');
  $output$$29$$ = 2 == $opt_data$$32$$.$msg_customer_detail$.Verified ? $output$$29$$ + '<span class="label label-success">Si</span>' : 1 == $opt_data$$32$$.$msg_customer_detail$.Verified ? $output$$29$$ + '<span class="label label-important">Pendiente</span>' : $output$$29$$ + '<span class="label label-important">No</span>';
  return $output$$29$$ + "</td></tr></tbody></table>"
}
function $bitex$templates$EnterVerificationDataDialogContent$$($opt_data$$33_output$$30$$) {
  return $opt_data$$33_output$$30$$ = "" + ('<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="ClientID" value="' + $soy$$0$0escapeHtml$$($opt_data$$33_output$$30$$.$clientID$) + '"><div class="control-group"><label class="control-label"> Datos de verificacion </label><div class="controls"><input type="text" class="input-xlarge" size="16" name="VerificationData"></div></div></form>')
}
function $bitex$templates$OrderEntry$$($opt_data$$34$$) {
  var $output$$31$$;
  $output$$31$$ = "" + ('<div id="' + $soy$$0$0escapeHtml$$($opt_data$$34$$.id) + '" class="well span6 order-entry"><input type="hidden" name="symbol" class="order-entry-symbol" value="' + $soy$$0$0escapeHtml$$($opt_data$$34$$.$symbol$) + '"><input type="hidden" name="side" class="order-entry-side" value="' + $soy$$0$0escapeHtml$$($opt_data$$34$$.$side$) + '"><input type="hidden" name="type" class="order-entry-type" value="' + $soy$$0$0escapeHtml$$($opt_data$$34$$.type) + '"><input type="hidden" name="broker_id" class="order-entry-broker-id" value="' + 
  $soy$$0$0escapeHtml$$($opt_data$$34$$.$broker_id$) + '"><div class="row-fluid"><div class="span5 order-entry-label"> <span>Monto:</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-amount-sign">\u0e3f</span><input class="input-block-level order-entry-amount" type="text" value="" required/></div></div></div><div class="row-fluid"><div class="span5 order-entry-label"> <span>Precio por:<span class="order-entry-amount-sign">\u0e3f</span>:</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-price-sign">$</span><input class="input-block-level order-entry-price" type="text" required/></div></div></div><div class="row-fluid"><div class="span5 order-entry-label"><span>Total:</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-price-sign">$</span><input class="input-block-level order-entry-total" type="text" required/></div></div></div><div class="row-fluid" ' + 
  ($opt_data$$34$$.$hide_fee$ ? 'style="display: none;"' : "") + ' ><div class="span5 order-entry-label"> <span>Comision (optional):</span></div><div class="span6"><div class="input-prepend input-block-level order-entry-data"><span class="add-on order-entry-amount-sign">\u0e3f</span><input class="input-block-level order-entry-fee" type="text" value="0" /></div></div></div><div class="row-fluid"><div class="span5"><input class="input-block-level order-entry-client-id" placeholder="Identificaci\u00f3n del cliente" ' + 
  ($opt_data$$34$$.$hide_client_id$ ? 'style="display:none"' : "") + ' /></div><div class="span5"><button class="btn ' + (1 == $opt_data$$34$$.$side$ ? "btn-success" : "btn-danger") + ' btn-execution order-entry-action">');
  $output$$31$$ = 1 == $opt_data$$34$$.$side$ ? $output$$31$$ + "COMPRA" : $output$$31$$ + "VENTA";
  return $output$$31$$ + "</button></div></div></div>"
}
;
// Input 87
function $bitex$view$SignupView$$($app$$2$$, $opt_domHelper$$7$$) {
  $bitex$view$View$$.call(this, $app$$2$$, $opt_domHelper$$7$$)
}
$goog$inherits$$($bitex$view$SignupView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$SignupView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$SignupView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$49$$ = this.$getHandler$(), $model$$1$$ = this.$app_$.$model_$, $signup_country_el$$ = $goog$dom$getElement$$("id_signup_country"), $signup_state_el$$ = $goog$dom$getElement$$("id_signup_state"), $broker_el$$ = $goog$dom$getElement$$("id_signup_broker");
  $goog$object$forEach$$($bitex$util$getCountries$$(), function($country_info$$, $country_code$$) {
    var $country_el$$48$$ = $country_info$$;
    $goog$isArrayLike$$($country_el$$48$$) && ($country_el$$48$$ = $country_el$$48$$[0]);
    $country_el$$48$$ = $goog$dom$createDom$$("option", {value:$country_code$$}, $country_el$$48$$);
    $signup_country_el$$.appendChild($country_el$$48$$)
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, $signup_country_el$$, "change", this.$onChangeCountry_$);
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, $signup_state_el$$, "change", this.$onChangeState_$);
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, $broker_el$$, "change", this.$onChangeBroker_$);
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, this.$app_$.$model_$, "model_setBrokerList", this.$onBrokerList_$);
  var $button_signup$$ = new $goog$ui$Button$$;
  $button_signup$$.$decorate$($goog$dom$getElement$$("id_btn_signup"));
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, $goog$dom$getElement$$("user_agreed_tos"), "click", function($e$$50$$) {
    $button_signup$$.$setEnabled$($e$$50$$.target.checked)
  });
  $goog$isDefAndNotNull$$($model$$1$$.get("DefaultCountry")) && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_country"), $model$$1$$.get("DefaultCountry")), $JSCompiler_StaticMethods_onSelectCountry_$$(this, $model$$1$$.get("DefaultCountry")));
  $goog$isDefAndNotNull$$($model$$1$$.get("DefaultState")) && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_state"), $model$$1$$.get("DefaultState")), $JSCompiler_StaticMethods_onSelectState_$$(this, $model$$1$$.get("DefaultState")));
  $JSCompiler_StaticMethods_listen$$($handler$$49$$, $button_signup$$, "action", this.$onSignupButtonClick_$)
};
$JSCompiler_prototypeAlias$$.$getUsername$ = function $$JSCompiler_prototypeAlias$$$$getUsername$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_username"))
};
$JSCompiler_prototypeAlias$$.$getEmail$ = function $$JSCompiler_prototypeAlias$$$$getEmail$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_email"))
};
$JSCompiler_prototypeAlias$$.$getPassword$ = function $$JSCompiler_prototypeAlias$$$$getPassword$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_password"))
};
$JSCompiler_prototypeAlias$$.$getState$ = function $$JSCompiler_prototypeAlias$$$$getState$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_state"))
};
$JSCompiler_prototypeAlias$$.$onSignupButtonClick_$ = function $$JSCompiler_prototypeAlias$$$$onSignupButtonClick_$$($e$$51_username$$1$$) {
  $e$$51_username$$1$$.stopPropagation();
  $e$$51_username$$1$$.preventDefault();
  $e$$51_username$$1$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_username"));
  var $email$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_email")), $password$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_password")), $password2$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_password2"));
  $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_state"));
  $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country"));
  $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_broker"));
  $goog$string$isEmpty$$($e$$51_username$$1$$) || /[^a-zA-Z0-9]/.test($e$$51_username$$1$$) ? this.$app_$.$showDialog$("Nombre de usuario invalido") : $email$$.match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) ? $goog$string$isEmpty$$($password$$) || 8 > $password$$.length ? this.$app_$.$showDialog$("La contrasena debe tener al menos 8 caracteres") : $password$$ !== $password2$$ ? this.$app_$.$showDialog$("La contrasena no coincide") : this.dispatchEvent("signup_click") : 
  this.$app_$.$showDialog$("Correo electronico invalido")
};
$JSCompiler_prototypeAlias$$.$onBrokerList_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerList_$$() {
  var $model$$2$$ = this.$app_$.$model_$, $broker_list$$ = $model$$2$$.get("BrokerList");
  if($broker_list$$ != $JSCompiler_alias_NULL$$) {
    $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_broker"));
    if($goog$isDefAndNotNull$$($model$$2$$.get("DefaultBrokerID"))) {
      var $broker_info_el$$49$$ = $goog$array$find$$($broker_list$$, function($broker_info$$1$$) {
        if($broker_info$$1$$.BrokerID === $model$$2$$.get("DefaultBrokerID")) {
          return $JSCompiler_alias_TRUE$$
        }
      }), $broker_info_el$$49$$ = $goog$dom$createDom$$("option", {value:$broker_info_el$$49$$.BrokerID}, $broker_info_el$$49$$.SignupLabel);
      $goog$dom$getElement$$("id_signup_broker").appendChild($broker_info_el$$49$$)
    }
    $goog$object$forEach$$(this.$app_$.$getBrokersByCountry$(""), function($broker_info$$2_el$$50$$) {
      $model$$2$$.get("DefaultBrokerID") != $broker_info$$2_el$$50$$.BrokerID && ($broker_info$$2_el$$50$$ = $goog$dom$createDom$$("option", {value:$broker_info$$2_el$$50$$.BrokerID}, $broker_info$$2_el$$50$$.SignupLabel), $goog$dom$getElement$$("id_signup_broker").appendChild($broker_info$$2_el$$50$$))
    }, this);
    $goog$isDefAndNotNull$$($model$$2$$.get("DefaultBrokerID")) && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $model$$2$$.get("DefaultBrokerID")), this.$onChangeBroker_$());
    var $last_country_code$$ = "", $number_of_countries$$ = 0, $brokers_by_country$$ = {};
    $goog$array$forEach$$($broker_list$$, function($broker_info$$3$$) {
      $broker_info$$3$$.IsBrokerHub || ($broker_info$$3$$.CountryCode in $brokers_by_country$$ ? $brokers_by_country$$[$broker_info$$3$$.CountryCode].push($broker_info$$3$$) : ($brokers_by_country$$[$broker_info$$3$$.CountryCode] = [$broker_info$$3$$], 0 < $broker_info$$3$$.CountryCode.length && ($last_country_code$$ = $broker_info$$3$$.CountryCode, ++$number_of_countries$$)))
    }, this);
    $goog$isDefAndNotNull$$($model$$2$$.get("DefaultCountry")) ? ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_country"), $model$$2$$.get("DefaultCountry")), $JSCompiler_StaticMethods_onSelectCountry_$$(this, $model$$2$$.get("DefaultCountry"))) : 1 === $number_of_countries$$ ? ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_country"), $last_country_code$$), $JSCompiler_StaticMethods_onSelectCountry_$$(this, $last_country_code$$)) : this.$onChangeBroker_$()
  }
};
$JSCompiler_prototypeAlias$$.$onChangeCountry_$ = function $$JSCompiler_prototypeAlias$$$$onChangeCountry_$$() {
  var $selected_country$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country"));
  $JSCompiler_StaticMethods_onSelectCountry_$$(this, $selected_country$$)
};
$JSCompiler_prototypeAlias$$.$onChangeState_$ = function $$JSCompiler_prototypeAlias$$$$onChangeState_$$() {
  var $selected_country$$1$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country")), $selected_state$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_state"));
  $JSCompiler_StaticMethods_onSelectState_$$(this, $selected_country$$1$$, $selected_state$$)
};
$JSCompiler_prototypeAlias$$.$onChangeBroker_$ = function $$JSCompiler_prototypeAlias$$$$onChangeBroker_$$() {
  var $broker_list$$1_model$$3$$ = this.$app_$.$model_$, $selected_broker$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_broker")), $broker_list$$1_model$$3$$ = $broker_list$$1_model$$3$$.get("BrokerList");
  if($broker_list$$1_model$$3$$ != $JSCompiler_alias_NULL$$) {
    var $broker$$1$$ = $goog$array$find$$($broker_list$$1_model$$3$$, function($broker$$2$$) {
      if($broker$$2$$.BrokerID == $selected_broker$$) {
        return $JSCompiler_alias_TRUE$$
      }
    });
    if($broker$$1$$ != $JSCompiler_alias_NULL$$) {
      var $fmt$$ = new $goog$i18n$NumberFormat$$(3);
      $JSCompiler_StaticMethods_setMaximumFractionDigits$$($fmt$$);
      $JSCompiler_StaticMethods_setMinimumFractionDigits$$($fmt$$);
      $broker$$1$$.FormattedTransactionFeeBuy = $fmt$$.$format$($broker$$1$$.TransactionFeeBuy / 1E4);
      $broker$$1$$.FormattedTransactionFeeSell = $fmt$$.$format$($broker$$1$$.TransactionFeeSell / 1E4);
      $goog$soy$renderElement$$($goog$dom$getElement$$("signup_broker_details"), $bitex$templates$BrokerView$$, {$show_title$:$JSCompiler_alias_FALSE$$, $msg_broker$:$broker$$1$$, $broker_list$:$broker_list$$1_model$$3$$})
    }
  }
};
function $JSCompiler_StaticMethods_onSelectCountry_$$($JSCompiler_StaticMethods_onSelectCountry_$self$$, $selected_country$$2$$) {
  var $model$$4$$ = $JSCompiler_StaticMethods_onSelectCountry_$self$$.$app_$.$model_$, $countries$$1_country_info$$1$$ = $bitex$util$getCountries$$();
  $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_state"));
  $countries$$1_country_info$$1$$ = $countries$$1_country_info$$1$$[$selected_country$$2$$];
  $goog$style$showElement$$($goog$dom$getElement$$("id_signup_state_group"), $goog$isArrayLike$$($countries$$1_country_info$$1$$));
  $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_broker"));
  if($goog$isArrayLike$$($countries$$1_country_info$$1$$)) {
    var $states_name_array$$ = $countries$$1_country_info$$1$$[2].split("|"), $number_of_states_with_brokers$$ = 0, $last_state_with_broker$$ = "";
    $goog$array$forEach$$($countries$$1_country_info$$1$$[1].split("|"), function($state_code$$, $index$$70$$) {
      var $el$$51$$ = $goog$dom$createDom$$("option", {value:$state_code$$}, $states_name_array$$[$index$$70$$]);
      $goog$dom$getElement$$("id_signup_state").appendChild($el$$51$$);
      0 <= $goog$array$findIndex$$(this.$app_$.$getBrokersByCountry$($selected_country$$2$$), function($broker_info$$4$$) {
        if($broker_info$$4$$.IsBrokerHub) {
          return $JSCompiler_alias_FALSE$$
        }
        if($broker_info$$4$$.State === $state_code$$) {
          return $JSCompiler_alias_TRUE$$
        }
      }) && (++$number_of_states_with_brokers$$, $last_state_with_broker$$ = $state_code$$)
    }, $JSCompiler_StaticMethods_onSelectCountry_$self$$);
    if(1 == $number_of_states_with_brokers$$) {
      $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_state"), $last_state_with_broker$$);
      $JSCompiler_StaticMethods_onSelectState_$$($JSCompiler_StaticMethods_onSelectCountry_$self$$, $selected_country$$2$$, $last_state_with_broker$$);
      return
    }
    $goog$isDefAndNotNull$$($model$$4$$.get("DefaultState")) && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_state"), $model$$4$$.get("DefaultState")), $JSCompiler_StaticMethods_onSelectState_$$($JSCompiler_StaticMethods_onSelectCountry_$self$$, $selected_country$$2$$, $model$$4$$.get("DefaultState")))
  }
  var $number_of_available_brokers$$ = 0, $number_of_brokers_in_same_country$$ = 0, $last_available_broker$$ = "";
  $goog$object$forEach$$($JSCompiler_StaticMethods_onSelectCountry_$self$$.$app_$.$getBrokersByCountry$($selected_country$$2$$), function($broker_info$$5$$) {
    var $el$$52$$ = $goog$dom$createDom$$("option", {value:$broker_info$$5$$.BrokerID}, $broker_info$$5$$.SignupLabel);
    $goog$dom$getElement$$("id_signup_broker").appendChild($el$$52$$);
    $broker_info$$5$$.IsBrokerHub || (++$number_of_available_brokers$$, $broker_info$$5$$.CountryCode === $selected_country$$2$$ && (++$number_of_brokers_in_same_country$$, $last_available_broker$$ = $broker_info$$5$$.BrokerID))
  }, $JSCompiler_StaticMethods_onSelectCountry_$self$$);
  $goog$isDefAndNotNull$$($model$$4$$.get("DefaultBrokerID")) ? $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $model$$4$$.get("DefaultBrokerID")) : 1 == $number_of_brokers_in_same_country$$ && $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $last_available_broker$$);
  $JSCompiler_StaticMethods_onSelectCountry_$self$$.$onChangeBroker_$()
}
function $JSCompiler_StaticMethods_onSelectState_$$($JSCompiler_StaticMethods_onSelectState_$self$$, $selected_country$$3$$, $selected_state$$1$$) {
  $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_broker"));
  var $model$$5$$ = $JSCompiler_StaticMethods_onSelectState_$self$$.$app_$.$model_$, $number_of_available_brokers$$1$$ = 0, $number_of_brokers_in_same_country_state$$ = 0, $last_available_broker$$1$$ = "";
  $goog$array$forEach$$($JSCompiler_StaticMethods_onSelectState_$self$$.$app_$.$getBrokersByCountry$($selected_country$$3$$, $selected_state$$1$$), function($broker_info$$6_el$$53$$) {
    $broker_info$$6_el$$53$$.IsBrokerHub || (++$number_of_available_brokers$$1$$, $broker_info$$6_el$$53$$.CountryCode === $selected_country$$3$$ && $broker_info$$6_el$$53$$.State === $selected_state$$1$$ && (++$number_of_brokers_in_same_country_state$$, $last_available_broker$$1$$ = $broker_info$$6_el$$53$$.BrokerID));
    $broker_info$$6_el$$53$$ = $goog$dom$createDom$$("option", {value:$broker_info$$6_el$$53$$.BrokerID}, $broker_info$$6_el$$53$$.SignupLabel);
    $goog$dom$getElement$$("id_signup_broker").appendChild($broker_info$$6_el$$53$$)
  }, $JSCompiler_StaticMethods_onSelectState_$self$$);
  $goog$isDefAndNotNull$$($model$$5$$.get("DefaultBrokerID")) ? $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $model$$5$$.get("DefaultBrokerID")) : 1 == $number_of_brokers_in_same_country_state$$ && $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $last_available_broker$$1$$);
  $JSCompiler_StaticMethods_onSelectState_$self$$.$onChangeBroker_$()
}
;
// Input 88
function $bitex$view$LoginView$$($app$$3$$, $opt_domHelper$$8$$) {
  $bitex$view$View$$.call(this, $app$$3$$, $opt_domHelper$$8$$);
  this.$password_el_$ = this.$username_el_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$LoginView$$, $bitex$view$View$$);
$bitex$view$LoginView$$.prototype.$enterDocument$ = function $$bitex$view$LoginView$$$$$enterDocument$$() {
  $bitex$view$LoginView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$50$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$50$$, $goog$dom$getElement$$("id_landing_signin"), "click", function($e$$56$$) {
    $e$$56$$.stopPropagation();
    $e$$56$$.preventDefault();
    $JSCompiler_StaticMethods_onLoginClick_$$(this, $goog$dom$getElement$$("id_landing_username"), $goog$dom$getElement$$("id_landing_password"))
  });
  $JSCompiler_StaticMethods_listen$$($handler$$50$$, $goog$dom$getElement$$("id_btn_login"), "click", function($e$$57$$) {
    $e$$57$$.stopPropagation();
    $e$$57$$.preventDefault();
    $JSCompiler_StaticMethods_onLoginClick_$$(this, $goog$dom$getElement$$("id_username"), $goog$dom$getElement$$("id_password"))
  })
};
$bitex$view$LoginView$$.prototype.$getUsername$ = function $$bitex$view$LoginView$$$$$getUsername$$() {
  return $goog$dom$forms$getValue$$(this.$username_el_$)
};
$bitex$view$LoginView$$.prototype.$getPassword$ = function $$bitex$view$LoginView$$$$$getPassword$$() {
  return $goog$dom$forms$getValue$$(this.$password_el_$)
};
function $JSCompiler_StaticMethods_onLoginClick_$$($JSCompiler_StaticMethods_onLoginClick_$self$$, $username$$2_username_el$$, $password$$1_password_el$$) {
  $JSCompiler_StaticMethods_onLoginClick_$self$$.$username_el_$ = $username$$2_username_el$$;
  $JSCompiler_StaticMethods_onLoginClick_$self$$.$password_el_$ = $password$$1_password_el$$;
  $username$$2_username_el$$ = $JSCompiler_StaticMethods_onLoginClick_$self$$.$getUsername$();
  $password$$1_password_el$$ = $JSCompiler_StaticMethods_onLoginClick_$self$$.$getPassword$();
  $goog$string$isEmpty$$($username$$2_username_el$$) ? ($JSCompiler_StaticMethods_onLoginClick_$self$$.$app_$.$showDialog$("Nombre de usuario invalido"), $JSCompiler_StaticMethods_onLoginClick_$self$$.$username_el_$.focus()) : $goog$string$isEmpty$$($password$$1_password_el$$) || 8 > $password$$1_password_el$$.length ? ($JSCompiler_StaticMethods_onLoginClick_$self$$.$app_$.$showDialog$("La contrasena debe tener al menos 8 caracteres"), $JSCompiler_StaticMethods_onLoginClick_$self$$.$password_el_$.focus()) : 
  $JSCompiler_StaticMethods_onLoginClick_$self$$.dispatchEvent("login_click")
}
$bitex$view$LoginView$$.prototype.clear = function $$bitex$view$LoginView$$$$clear$() {
  this.$username_el_$ != $JSCompiler_alias_NULL$$ && $goog$dom$forms$setValue$$(this.$username_el_$, "");
  this.$password_el_$ != $JSCompiler_alias_NULL$$ && $goog$dom$forms$setValue$$(this.$password_el_$, "")
};
// Input 89
function $bitex$ui$WithdrawList$$($methodDescriptionObj$$, $opt_broker_mode_show_customers$$, $grid_columns$$1_opt_show_customers$$, $opt_domHelper$$9$$) {
  var $broker_mode$$ = $JSCompiler_alias_FALSE$$;
  $opt_broker_mode_show_customers$$ === $JSCompiler_alias_TRUE$$ && ($broker_mode$$ = $opt_broker_mode_show_customers$$);
  $opt_broker_mode_show_customers$$ = $JSCompiler_alias_FALSE$$;
  $grid_columns$$1_opt_show_customers$$ === $JSCompiler_alias_TRUE$$ && ($opt_broker_mode_show_customers$$ = $grid_columns$$1_opt_show_customers$$);
  $grid_columns$$1_opt_show_customers$$ = [{property:"Created", label:"Fecha/Hora", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-created"
  }}, {property:"Status", label:"Estado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$27$$, $rowSet$$) {
    var $label_class_text_reason_el$$ = function($s$$28$$) {
      switch($s$$28$$) {
        case "0":
          return["", "Sin confirmar"];
        case "1":
          return["warning", "Pendiente"];
        case "2":
          return["info", "En progreso..."];
        case "4":
          return["success", "Completado"];
        case "8":
          return["important", "Cancelado"]
      }
      return["", ""]
    }($s$$27$$), $reason_id$$ = $rowSet$$.ReasonID, $reason$$ = $rowSet$$.Reason;
    if($reason_id$$ != $JSCompiler_alias_NULL$$) {
      var $status_el$$ = $goog$dom$createDom$$("span", ["label", "label-" + $label_class_text_reason_el$$[0]]);
      switch($reason_id$$) {
        case 0:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:$reason$$}, $label_class_text_reason_el$$[1]);
          break;
        case -1:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Fondos insufiecientes"}, $label_class_text_reason_el$$[1]);
          break;
        case -2:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Cuenta sin verificar"}, $label_class_text_reason_el$$[1]);
          break;
        case -3:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Sospecha de fraude"}, $label_class_text_reason_el$$[1]);
          break;
        case -4:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Retiro a auna cuenta distinta a la suya"}, $label_class_text_reason_el$$[1]);
          break;
        case -5:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Cartera invalida"}, $label_class_text_reason_el$$[1]);
          break;
        case -6:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"Cuenta Bancaria invalida"}, $label_class_text_reason_el$$[1]);
          break;
        case -7:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"El monto exceed su limite de retiro diario"}, $label_class_text_reason_el$$[1]);
          break;
        case -8:
          $label_class_text_reason_el$$ = $goog$dom$createDom$$("abbr", {title:"User has deposits that are not yet confirmed"}, $label_class_text_reason_el$$[1]);
          break;
        default:
          return $goog$dom$createDom$$("span", ["label", "label-" + $label_class_text_reason_el$$[0]], $label_class_text_reason_el$$[1])
      }
      $status_el$$.appendChild($label_class_text_reason_el$$);
      return $status_el$$
    }
    return $goog$dom$createDom$$("span", ["label", "label-" + $label_class_text_reason_el$$[0]], $label_class_text_reason_el$$[1])
  }, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-status"
  }}, {property:"Amount", label:"Monto", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-amount"
  }}, {property:"Data", label:"Detalles", sortable:$JSCompiler_alias_FALSE$$, formatter:function($data$$34$$, $rowSet$$1$$) {
    var $element$$109$$ = $goog$dom$createDom$$("table"), $method$$4$$ = $methodDescriptionObj$$[$rowSet$$1$$.Currency][$rowSet$$1$$.Method];
    $goog$dom$appendChild$$($element$$109$$, $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", "Metodo"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $method$$4$$)));
    $data$$34$$.Link != $JSCompiler_alias_NULL$$ && ($goog$string$isEmpty$$($data$$34$$.Link) || $goog$dom$appendChild$$($element$$109$$, $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", "Broker receipt"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-primary", target:"_blank", href:$data$$34$$.Link}, 
    "ver", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-eye-open"]))))));
    $goog$object$forEach$$($data$$34$$, function($value$$127$$, $key$$77$$) {
      if("Link" != $key$$77$$ && "Currency" != $key$$77$$ && $value$$127$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($value$$127$$)) {
        if("Wallet" == $key$$77$$) {
          var $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-info btn-withdraw-list-qr", href:"#", "data-action":"SHOW_QR", "data-row":$goog$json$serialize$$($rowSet$$1$$)}, "qr", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-qrcode"])), $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + 
          "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", "Cartera"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$))
        }else {
          if("TransactionID" == $key$$77$$ && "BTC" == $data$$34$$.Currency) {
            $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-info btn-btc-blockchain", href:"https://blockchain.info/tx/" + $value$$127$$, target:"_blank"}, "cadena de bloques", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-share-alt"])), $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + 
            "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", "Identificador de transaccion"), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$))
          }else {
            $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = $key$$77$$;
            switch($key$$77$$) {
              case "AccountNumber":
                $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = "Numero de cuenta";
                break;
              case "BankName":
                $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = "Nombre del Banco";
                break;
              case "BankNumber":
                $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = "Numero de banco";
                break;
              case "CPF_CNPJ":
                $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = "CPF or CNPJ";
                break;
              case "AccountBranch":
                $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = "Cuenta de sucursal";
                break;
              case "AccountName":
                $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = "Nombre del titular de la cuenta";
                break;
              case "RoutingNumber":
                $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = "Numero de ruta";
                break;
              case "BankSwift":
                $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = "SWIFT del banco";
                break;
              case "Email":
                $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = "Correo electronico";
                break;
              case "TransactionID":
                $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = "Identificador de transaccion"
            }
            $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$ = $goog$dom$createDom$$("tr", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-tr", $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-key", $btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$), $goog$dom$createDom$$("td", $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details-td-value", $value$$127$$))
          }
        }
        $element$$109$$.appendChild($btn_blockchain_btn_qr_child$$inline_420_child$$inline_423_child$$inline_426_key_description$$)
      }
    }, this);
    return $element$$109$$
  }, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-details"
  }}];
  $opt_broker_mode_show_customers$$ && $grid_columns$$1_opt_show_customers$$.push({property:"Username", label:"Nombre de usuario", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-username"
  }});
  $broker_mode$$ && $grid_columns$$1_opt_show_customers$$.push({property:"WithdrawID", label:"Actions", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$WithdrawList$CSS_CLASS$$ + "-actions"
  }, formatter:function($s$$29$$, $row_set_obj$$1$$) {
    var $btn_complete_data_row$$1$$ = $goog$json$serialize$$($row_set_obj$$1$$), $btn_cancel$$ = $goog$dom$createDom$$("button", {"class":"btn btn-mini btn-danger btn-withdraw-cancel", "data-row":$btn_complete_data_row$$1$$}, "Cancelar"), $btn_progress$$ = $goog$dom$createDom$$("button", {"class":"btn btn-mini btn-primary btn-withdraw-progress", "data-row":$btn_complete_data_row$$1$$}, "Ajuste en progreso"), $btn_complete_data_row$$1$$ = $goog$dom$createDom$$("button", {"class":"btn btn-mini btn-success btn-withdraw-complete", 
    "data-row":$btn_complete_data_row$$1$$}, "Ajuste completo");
    switch($row_set_obj$$1$$.Status) {
      case "0":
        return $btn_cancel$$;
      case "1":
        return $goog$dom$createDom$$("div", "btn-group", [$btn_cancel$$, $btn_progress$$]);
      case "2":
        return $goog$dom$createDom$$("div", "btn-group", [$btn_cancel$$, $btn_complete_data_row$$1$$]);
      case "4":
        return"";
      case "8":
        return""
    }
  }});
  this.$selected_withdraw_$ = $JSCompiler_alias_NULL$$;
  $bitex$ui$DataGrid$$.call(this, {rowIDFn:this.$getRowId$, rowClassFn:this.$getRowClass$, columns:$grid_columns$$1_opt_show_customers$$, title:"Retiro", showSearch:$JSCompiler_alias_TRUE$$, searchPlaceholder:"Busqueda..."}, $opt_domHelper$$9$$)
}
$goog$inherits$$($bitex$ui$WithdrawList$$, $bitex$ui$DataGrid$$);
var $bitex$ui$WithdrawList$CSS_CLASS$$ = "withdraw-list";
$JSCompiler_prototypeAlias$$ = $bitex$ui$WithdrawList$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = function $$JSCompiler_prototypeAlias$$$$getCssClass$$() {
  return $bitex$ui$WithdrawList$CSS_CLASS$$
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$WithdrawList$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "click", this.$handleClick_$)
};
$JSCompiler_prototypeAlias$$.$getWithdrawData$ = $JSCompiler_get$$("$selected_withdraw_$");
$JSCompiler_prototypeAlias$$.$handleClick_$ = function $$JSCompiler_prototypeAlias$$$$handleClick_$$($e$$58$$) {
  this.$selected_withdraw_$ = $goog$json$parse$$($e$$58$$.target.getAttribute("data-row"));
  this.$selected_withdraw_$ != $JSCompiler_alias_NULL$$ && ($goog$dom$classes$has$$($e$$58$$.target, "btn-withdraw-complete") ? this.dispatchEvent("withdraw_complete") : $goog$dom$classes$has$$($e$$58$$.target, "btn-withdraw-progress") ? this.dispatchEvent("withdraw_progress") : $goog$dom$classes$has$$($e$$58$$.target, "btn-withdraw-cancel") && this.dispatchEvent("withdraw_cancel"), this.$selected_withdraw_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$getRowId$ = function $$JSCompiler_prototypeAlias$$$$getRowId$$($row_set$$3$$) {
  return $JSCompiler_StaticMethods_makeId$$(this, $row_set$$3$$.WithdrawID)
};
$JSCompiler_prototypeAlias$$.$getRowClass$ = function $$JSCompiler_prototypeAlias$$$$getRowClass$$($row_set$$4$$) {
  var $class_status$$1$$;
  switch($row_set$$4$$.Status) {
    case "0":
      $class_status$$1$$ = $bitex$ui$WithdrawList$CSS_CLASS$$ + "-unconfirmed";
      break;
    case "1":
      $class_status$$1$$ = $bitex$ui$WithdrawList$CSS_CLASS$$ + "-pending";
      break;
    case "2":
      $class_status$$1$$ = $bitex$ui$WithdrawList$CSS_CLASS$$ + "-processing";
      break;
    case "4":
      $class_status$$1$$ = $bitex$ui$WithdrawList$CSS_CLASS$$ + "-complete";
      break;
    case "8":
      $class_status$$1$$ = $bitex$ui$WithdrawList$CSS_CLASS$$ + "-cancelled"
  }
  return $class_status$$1$$
};
// Input 90
function $goog$fx$Dragger$$($target$$55$$, $opt_handle$$, $opt_limits$$) {
  $goog$Disposable$$.call(this);
  this.target = $target$$55$$;
  this.handle = $opt_handle$$ || $target$$55$$;
  this.$limits$ = $opt_limits$$ || new $goog$math$Rect$$(NaN, NaN, NaN, NaN);
  this.$document_$ = $goog$dom$getOwnerDocument$$($target$$55$$);
  this.$eventHandler_$ = new $goog$events$EventHandler$$(this);
  $goog$events$listen$$(this.handle, ["touchstart", "mousedown"], this.$startDrag$, $JSCompiler_alias_FALSE$$, this)
}
$goog$inherits$$($goog$fx$Dragger$$, $goog$events$EventTarget$$);
var $goog$fx$Dragger$HAS_SET_CAPTURE_$$ = $goog$userAgent$IE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.3");
$JSCompiler_prototypeAlias$$ = $goog$fx$Dragger$$.prototype;
$JSCompiler_prototypeAlias$$.clientX = 0;
$JSCompiler_prototypeAlias$$.clientY = 0;
$JSCompiler_prototypeAlias$$.screenX = 0;
$JSCompiler_prototypeAlias$$.screenY = 0;
$JSCompiler_prototypeAlias$$.$startX$ = 0;
$JSCompiler_prototypeAlias$$.$startY$ = 0;
$JSCompiler_prototypeAlias$$.$deltaX$ = 0;
$JSCompiler_prototypeAlias$$.$deltaY$ = 0;
$JSCompiler_prototypeAlias$$.$enabled_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$dragging_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$hysteresisDistanceSquared_$ = 0;
$JSCompiler_prototypeAlias$$.$mouseDownTime_$ = 0;
$JSCompiler_prototypeAlias$$.$ieDragStartCancellingOn_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$useRightPositioningForRtl_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$getHandler$ = $JSCompiler_get$$("$eventHandler_$");
$JSCompiler_prototypeAlias$$.$setEnabled$ = $JSCompiler_set$$("$enabled_$");
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$fx$Dragger$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$unlisten$$(this.handle, ["touchstart", "mousedown"], this.$startDrag$, $JSCompiler_alias_FALSE$$, this);
  this.$eventHandler_$.$removeAll$();
  $goog$fx$Dragger$HAS_SET_CAPTURE_$$ && this.$document_$.releaseCapture();
  this.$eventHandler_$ = this.handle = this.target = $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_isRightToLeft_$$($JSCompiler_StaticMethods_isRightToLeft_$self$$) {
  $goog$isDef$$($JSCompiler_StaticMethods_isRightToLeft_$self$$.$rightToLeft_$) || ($JSCompiler_StaticMethods_isRightToLeft_$self$$.$rightToLeft_$ = $goog$style$isRightToLeft$$($JSCompiler_StaticMethods_isRightToLeft_$self$$.target));
  return $JSCompiler_StaticMethods_isRightToLeft_$self$$.$rightToLeft_$
}
$JSCompiler_prototypeAlias$$.$startDrag$ = function $$JSCompiler_prototypeAlias$$$$startDrag$$($JSCompiler_temp$$18_e$$59_element$$inline_436$$) {
  var $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$ = "mousedown" == $JSCompiler_temp$$18_e$$59_element$$inline_436$$.type;
  if(this.$enabled_$ && !this.$dragging_$ && (!$doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$ || $JSCompiler_StaticMethods_isMouseActionButton$$($JSCompiler_temp$$18_e$$59_element$$inline_436$$))) {
    $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$($JSCompiler_temp$$18_e$$59_element$$inline_436$$);
    if(0 == this.$hysteresisDistanceSquared_$) {
      if(this.dispatchEvent(new $goog$fx$DragEvent$$("start", this, $JSCompiler_temp$$18_e$$59_element$$inline_436$$.clientX, $JSCompiler_temp$$18_e$$59_element$$inline_436$$.clientY, $JSCompiler_temp$$18_e$$59_element$$inline_436$$))) {
        this.$dragging_$ = $JSCompiler_alias_TRUE$$, $JSCompiler_temp$$18_e$$59_element$$inline_436$$.preventDefault()
      }else {
        return
      }
    }else {
      $JSCompiler_temp$$18_e$$59_element$$inline_436$$.preventDefault()
    }
    var $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$ = this.$document_$, $bestParent$$inline_438_docEl$$inline_433$$ = $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$.documentElement, $borderWidths$$inline_439_useCapture$$inline_434$$ = !$goog$fx$Dragger$HAS_SET_CAPTURE_$$;
    $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$, ["touchmove", "mousemove"], this.$handleMove_$, $borderWidths$$inline_439_useCapture$$inline_434$$);
    $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$, ["touchend", "mouseup"], this.$endDrag$, $borderWidths$$inline_439_useCapture$$inline_434$$);
    $goog$fx$Dragger$HAS_SET_CAPTURE_$$ ? ($bestParent$$inline_438_docEl$$inline_433$$.setCapture($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, $bestParent$$inline_438_docEl$$inline_433$$, "losecapture", this.$endDrag$)) : $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$ ? $goog$dom$getWindow_$$($doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$) : window, "blur", this.$endDrag$);
    $goog$userAgent$IE$$ && this.$ieDragStartCancellingOn_$ && $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$, "dragstart", $goog$events$Event$preventDefault$$);
    this.$scrollTarget_$ && $JSCompiler_StaticMethods_listen$$(this.$eventHandler_$, this.$scrollTarget_$, "scroll", this.$onScroll_$, $borderWidths$$inline_439_useCapture$$inline_434$$);
    this.clientX = this.$startX$ = $JSCompiler_temp$$18_e$$59_element$$inline_436$$.clientX;
    this.clientY = this.$startY$ = $JSCompiler_temp$$18_e$$59_element$$inline_436$$.clientY;
    this.screenX = $JSCompiler_temp$$18_e$$59_element$$inline_436$$.screenX;
    this.screenY = $JSCompiler_temp$$18_e$$59_element$$inline_436$$.screenY;
    this.$useRightPositioningForRtl_$ ? ($JSCompiler_temp$$18_e$$59_element$$inline_436$$ = this.target, $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$ = $JSCompiler_temp$$18_e$$59_element$$inline_436$$.offsetLeft, $bestParent$$inline_438_docEl$$inline_433$$ = $JSCompiler_temp$$18_e$$59_element$$inline_436$$.offsetParent, !$bestParent$$inline_438_docEl$$inline_433$$ && "fixed" == $goog$style$getStyle_$$($JSCompiler_temp$$18_e$$59_element$$inline_436$$, "position") && ($bestParent$$inline_438_docEl$$inline_433$$ = 
    $goog$dom$getOwnerDocument$$($JSCompiler_temp$$18_e$$59_element$$inline_436$$).documentElement), $bestParent$$inline_438_docEl$$inline_433$$ ? ($goog$userAgent$GECKO$$ ? ($borderWidths$$inline_439_useCapture$$inline_434$$ = $goog$style$getBorderBox$$($bestParent$$inline_438_docEl$$inline_433$$), $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$ += $borderWidths$$inline_439_useCapture$$inline_434$$.left) : $goog$userAgent$IE$$ && 8 <= $goog$userAgent$DOCUMENT_MODE$$ && ($borderWidths$$inline_439_useCapture$$inline_434$$ = 
    $goog$style$getBorderBox$$($bestParent$$inline_438_docEl$$inline_433$$), $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$ -= $borderWidths$$inline_439_useCapture$$inline_434$$.left), $JSCompiler_temp$$18_e$$59_element$$inline_436$$ = $goog$style$isRightToLeft$$($bestParent$$inline_438_docEl$$inline_433$$) ? $bestParent$$inline_438_docEl$$inline_433$$.clientWidth - ($doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$ + $JSCompiler_temp$$18_e$$59_element$$inline_436$$.offsetWidth) : 
    $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$) : $JSCompiler_temp$$18_e$$59_element$$inline_436$$ = $doc$$inline_432_isMouseDown_offsetLeftForReal$$inline_437$$) : $JSCompiler_temp$$18_e$$59_element$$inline_436$$ = this.target.offsetLeft;
    this.$deltaX$ = $JSCompiler_temp$$18_e$$59_element$$inline_436$$;
    this.$deltaY$ = this.target.offsetTop;
    this.$pageScroll$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$(this.$document_$));
    this.$mouseDownTime_$ = $goog$now$$()
  }else {
    this.dispatchEvent("earlycancel")
  }
};
$JSCompiler_prototypeAlias$$.$endDrag$ = function $$JSCompiler_prototypeAlias$$$$endDrag$$($e$$61$$, $opt_dragCanceled$$) {
  this.$eventHandler_$.$removeAll$();
  $goog$fx$Dragger$HAS_SET_CAPTURE_$$ && this.$document_$.releaseCapture();
  if(this.$dragging_$) {
    $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$($e$$61$$);
    this.$dragging_$ = $JSCompiler_alias_FALSE$$;
    var $x$$69$$ = $JSCompiler_StaticMethods_limitX$$(this, this.$deltaX$), $y$$41$$ = $JSCompiler_StaticMethods_limitY$$(this, this.$deltaY$);
    this.dispatchEvent(new $goog$fx$DragEvent$$("end", this, $e$$61$$.clientX, $e$$61$$.clientY, $e$$61$$, $x$$69$$, $y$$41$$, $opt_dragCanceled$$ || "touchcancel" == $e$$61$$.type))
  }else {
    this.dispatchEvent("earlycancel")
  }
  ("touchend" == $e$$61$$.type || "touchcancel" == $e$$61$$.type) && $e$$61$$.preventDefault()
};
function $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$($e$$63$$) {
  var $type$$100$$ = $e$$63$$.type;
  "touchstart" == $type$$100$$ || "touchmove" == $type$$100$$ ? $e$$63$$.init($e$$63$$.$event_$.targetTouches[0], $e$$63$$.currentTarget) : ("touchend" == $type$$100$$ || "touchcancel" == $type$$100$$) && $e$$63$$.init($e$$63$$.$event_$.changedTouches[0], $e$$63$$.currentTarget)
}
$JSCompiler_prototypeAlias$$.$handleMove_$ = function $$JSCompiler_prototypeAlias$$$$handleMove_$$($e$$64$$) {
  if(this.$enabled_$) {
    $JSCompiler_StaticMethods_maybeReinitTouchEvent_$$($e$$64$$);
    var $dx$$7_x$$70$$ = (this.$useRightPositioningForRtl_$ && $JSCompiler_StaticMethods_isRightToLeft_$$(this) ? -1 : 1) * ($e$$64$$.clientX - this.clientX), $dy$$7_pos$$12_y$$42$$ = $e$$64$$.clientY - this.clientY;
    this.clientX = $e$$64$$.clientX;
    this.clientY = $e$$64$$.clientY;
    this.screenX = $e$$64$$.screenX;
    this.screenY = $e$$64$$.screenY;
    if(!this.$dragging_$) {
      var $diffX$$ = this.$startX$ - this.clientX, $diffY$$ = this.$startY$ - this.clientY;
      if($diffX$$ * $diffX$$ + $diffY$$ * $diffY$$ > this.$hysteresisDistanceSquared_$) {
        if(this.dispatchEvent(new $goog$fx$DragEvent$$("start", this, $e$$64$$.clientX, $e$$64$$.clientY, $e$$64$$))) {
          this.$dragging_$ = $JSCompiler_alias_TRUE$$
        }else {
          this.$disposed_$ || this.$endDrag$($e$$64$$);
          return
        }
      }
    }
    $dy$$7_pos$$12_y$$42$$ = $JSCompiler_StaticMethods_calculatePosition_$$(this, $dx$$7_x$$70$$, $dy$$7_pos$$12_y$$42$$);
    $dx$$7_x$$70$$ = $dy$$7_pos$$12_y$$42$$.x;
    $dy$$7_pos$$12_y$$42$$ = $dy$$7_pos$$12_y$$42$$.y;
    this.$dragging_$ && this.dispatchEvent(new $goog$fx$DragEvent$$("beforedrag", this, $e$$64$$.clientX, $e$$64$$.clientY, $e$$64$$, $dx$$7_x$$70$$, $dy$$7_pos$$12_y$$42$$)) && ($JSCompiler_StaticMethods_doDrag$$(this, $e$$64$$, $dx$$7_x$$70$$, $dy$$7_pos$$12_y$$42$$), $e$$64$$.preventDefault())
  }
};
function $JSCompiler_StaticMethods_calculatePosition_$$($JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$, $dx$$8_x$$71$$, $dy$$8$$) {
  var $pageScroll$$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$($JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$document_$));
  $dx$$8_x$$71$$ += $pageScroll$$.x - $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$pageScroll$.x;
  $dy$$8$$ += $pageScroll$$.y - $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$pageScroll$.y;
  $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$pageScroll$ = $pageScroll$$;
  $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$deltaX$ += $dx$$8_x$$71$$;
  $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$deltaY$ += $dy$$8$$;
  $dx$$8_x$$71$$ = $JSCompiler_StaticMethods_limitX$$($JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$, $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$deltaX$);
  $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$ = $JSCompiler_StaticMethods_limitY$$($JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$, $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$.$deltaY$);
  return new $goog$math$Coordinate$$($dx$$8_x$$71$$, $JSCompiler_StaticMethods_calculatePosition_$self_y$$43$$)
}
$JSCompiler_prototypeAlias$$.$onScroll_$ = function $$JSCompiler_prototypeAlias$$$$onScroll_$$($e$$65$$) {
  var $pos$$13$$ = $JSCompiler_StaticMethods_calculatePosition_$$(this, 0, 0);
  $e$$65$$.clientX = this.clientX;
  $e$$65$$.clientY = this.clientY;
  $JSCompiler_StaticMethods_doDrag$$(this, $e$$65$$, $pos$$13$$.x, $pos$$13$$.y)
};
function $JSCompiler_StaticMethods_doDrag$$($JSCompiler_StaticMethods_doDrag$self$$, $e$$66$$, $x$$72$$, $y$$44$$) {
  $JSCompiler_StaticMethods_doDrag$self$$.$useRightPositioningForRtl_$ && $JSCompiler_StaticMethods_isRightToLeft_$$($JSCompiler_StaticMethods_doDrag$self$$) ? $JSCompiler_StaticMethods_doDrag$self$$.target.style.right = $x$$72$$ + "px" : $JSCompiler_StaticMethods_doDrag$self$$.target.style.left = $x$$72$$ + "px";
  $JSCompiler_StaticMethods_doDrag$self$$.target.style.top = $y$$44$$ + "px";
  $JSCompiler_StaticMethods_doDrag$self$$.dispatchEvent(new $goog$fx$DragEvent$$("drag", $JSCompiler_StaticMethods_doDrag$self$$, $e$$66$$.clientX, $e$$66$$.clientY, $e$$66$$, $x$$72$$, $y$$44$$))
}
function $JSCompiler_StaticMethods_limitX$$($JSCompiler_StaticMethods_limitX$self$$, $x$$73$$) {
  var $rect$$6_width$$17$$ = $JSCompiler_StaticMethods_limitX$self$$.$limits$, $left$$10$$ = !isNaN($rect$$6_width$$17$$.left) ? $rect$$6_width$$17$$.left : $JSCompiler_alias_NULL$$, $rect$$6_width$$17$$ = !isNaN($rect$$6_width$$17$$.width) ? $rect$$6_width$$17$$.width : 0;
  return Math.min($left$$10$$ != $JSCompiler_alias_NULL$$ ? $left$$10$$ + $rect$$6_width$$17$$ : Infinity, Math.max($left$$10$$ != $JSCompiler_alias_NULL$$ ? $left$$10$$ : -Infinity, $x$$73$$))
}
function $JSCompiler_StaticMethods_limitY$$($JSCompiler_StaticMethods_limitY$self$$, $y$$45$$) {
  var $height$$16_rect$$7$$ = $JSCompiler_StaticMethods_limitY$self$$.$limits$, $top$$8$$ = !isNaN($height$$16_rect$$7$$.top) ? $height$$16_rect$$7$$.top : $JSCompiler_alias_NULL$$, $height$$16_rect$$7$$ = !isNaN($height$$16_rect$$7$$.height) ? $height$$16_rect$$7$$.height : 0;
  return Math.min($top$$8$$ != $JSCompiler_alias_NULL$$ ? $top$$8$$ + $height$$16_rect$$7$$ : Infinity, Math.max($top$$8$$ != $JSCompiler_alias_NULL$$ ? $top$$8$$ : -Infinity, $y$$45$$))
}
function $goog$fx$DragEvent$$($type$$101$$, $dragobj$$, $clientX$$2$$, $clientY$$2$$, $browserEvent$$, $opt_actX$$, $opt_actY$$, $opt_dragCanceled$$1$$) {
  $goog$events$Event$$.call(this, $type$$101$$);
  this.clientX = $clientX$$2$$;
  this.clientY = $clientY$$2$$;
  this.$browserEvent$ = $browserEvent$$;
  this.left = $goog$isDef$$($opt_actX$$) ? $opt_actX$$ : $dragobj$$.$deltaX$;
  this.top = $goog$isDef$$($opt_actY$$) ? $opt_actY$$ : $dragobj$$.$deltaY$;
  this.$dragger$ = $dragobj$$;
  this.$dragCanceled$ = !!$opt_dragCanceled$$1$$
}
$goog$inherits$$($goog$fx$DragEvent$$, $goog$events$Event$$);
// Input 91
// Input 92
function $goog$events$FocusHandler$$($element$$111_typeOut$$) {
  $goog$Disposable$$.call(this);
  this.$element_$ = $element$$111_typeOut$$;
  $element$$111_typeOut$$ = $goog$userAgent$IE$$ ? "focusout" : "blur";
  this.$listenKeyIn_$ = $goog$events$listen$$(this.$element_$, $goog$userAgent$IE$$ ? "focusin" : "focus", this, !$goog$userAgent$IE$$);
  this.$listenKeyOut_$ = $goog$events$listen$$(this.$element_$, $element$$111_typeOut$$, this, !$goog$userAgent$IE$$)
}
$goog$inherits$$($goog$events$FocusHandler$$, $goog$events$EventTarget$$);
$goog$events$FocusHandler$$.prototype.handleEvent = function $$goog$events$FocusHandler$$$$handleEvent$($e$$72$$) {
  var $event$$3$$ = new $goog$events$BrowserEvent$$($e$$72$$.$event_$);
  $event$$3$$.type = "focusin" == $e$$72$$.type || "focus" == $e$$72$$.type ? "focusin" : "focusout";
  this.dispatchEvent($event$$3$$)
};
$goog$events$FocusHandler$$.prototype.$disposeInternal$ = function $$goog$events$FocusHandler$$$$$disposeInternal$$() {
  $goog$events$FocusHandler$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$unlistenByKey$$(this.$listenKeyIn_$);
  $goog$events$unlistenByKey$$(this.$listenKeyOut_$);
  delete this.$element_$
};
// Input 93
// Input 94
function $goog$ui$ModalPopup$$($opt_useIframeMask$$, $opt_domHelper$$10$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$10$$);
  this.$useIframeMask_$ = !!$opt_useIframeMask$$
}
$goog$inherits$$($goog$ui$ModalPopup$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$ModalPopup$$.prototype;
$JSCompiler_prototypeAlias$$.$focusHandler_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$visible_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$bgEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$bgIframeEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$tabCatcherElement_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$backwardTabWrapInProgress_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-modalpopup");
$JSCompiler_prototypeAlias$$.$getBackgroundElement$ = $JSCompiler_get$$("$bgEl_$");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  $goog$ui$ModalPopup$$.$superClass_$.$createDom$.call(this);
  var $element$$112$$ = this.$getElement$();
  $goog$dom$classes$add$$($element$$112$$, this.$getCssClass$());
  $goog$dom$setFocusableTabIndex$$($element$$112$$, $JSCompiler_alias_TRUE$$);
  $goog$style$showElement$$($element$$112$$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_manageBackgroundDom_$$(this);
  $JSCompiler_StaticMethods_createTabCatcher_$$(this)
};
function $JSCompiler_StaticMethods_manageBackgroundDom_$$($JSCompiler_StaticMethods_manageBackgroundDom_$self$$) {
  if($JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$useIframeMask_$ && !$JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgIframeEl_$) {
    var $JSCompiler_inline_result$$54$$;
    $JSCompiler_inline_result$$54$$ = $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$getDomHelper$().$createDom$("iframe", {frameborder:0, style:"border:0;vertical-align:bottom;", src:'javascript:""'});
    $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgIframeEl_$ = $JSCompiler_inline_result$$54$$;
    $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgIframeEl_$.className = $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$getCssClass$() + "-bg";
    $goog$style$showElement$$($JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgIframeEl_$, $JSCompiler_alias_FALSE$$);
    $goog$style$setOpacity$$($JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgIframeEl_$, 0)
  }
  $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgEl_$ || ($JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgEl_$ = $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$getDomHelper$().$createDom$("div", $JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$getCssClass$() + "-bg"), $goog$style$showElement$$($JSCompiler_StaticMethods_manageBackgroundDom_$self$$.$bgEl_$, $JSCompiler_alias_FALSE$$))
}
function $JSCompiler_StaticMethods_createTabCatcher_$$($JSCompiler_StaticMethods_createTabCatcher_$self$$) {
  $JSCompiler_StaticMethods_createTabCatcher_$self$$.$tabCatcherElement_$ || ($JSCompiler_StaticMethods_createTabCatcher_$self$$.$tabCatcherElement_$ = $JSCompiler_StaticMethods_createTabCatcher_$self$$.$getDomHelper$().createElement("span"), $goog$style$showElement$$($JSCompiler_StaticMethods_createTabCatcher_$self$$.$tabCatcherElement_$, $JSCompiler_alias_FALSE$$), $goog$dom$setFocusableTabIndex$$($JSCompiler_StaticMethods_createTabCatcher_$self$$.$tabCatcherElement_$, $JSCompiler_alias_TRUE$$), 
  $JSCompiler_StaticMethods_createTabCatcher_$self$$.$tabCatcherElement_$.style.position = "absolute")
}
$JSCompiler_prototypeAlias$$.$resetBackwardTabWrap_$ = function $$JSCompiler_prototypeAlias$$$$resetBackwardTabWrap_$$() {
  this.$backwardTabWrapInProgress_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = function $$JSCompiler_prototypeAlias$$$$canDecorate$$($element$$113$$) {
  return!!$element$$113$$ && "DIV" == $element$$113$$.tagName
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$114$$) {
  $goog$ui$ModalPopup$$.$superClass_$.$decorateInternal$.call(this, $element$$114$$);
  $goog$dom$classes$add$$(this.$getElement$(), this.$getCssClass$());
  $JSCompiler_StaticMethods_manageBackgroundDom_$$(this);
  $JSCompiler_StaticMethods_createTabCatcher_$$(this);
  $goog$style$showElement$$(this.$getElement$(), $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  this.$bgIframeEl_$ && $goog$dom$insertSiblingBefore$$(this.$bgIframeEl_$, this.$getElement$());
  $goog$dom$insertSiblingBefore$$(this.$bgEl_$, this.$getElement$());
  $goog$ui$ModalPopup$$.$superClass_$.$enterDocument$.call(this);
  var $refNode$$inline_454$$ = this.$getElement$();
  $refNode$$inline_454$$.parentNode && $refNode$$inline_454$$.parentNode.insertBefore(this.$tabCatcherElement_$, $refNode$$inline_454$$.nextSibling);
  this.$focusHandler_$ = new $goog$events$FocusHandler$$($JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()));
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$focusHandler_$, "focusin", this.$onFocus_$)
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  this.$visible_$ && this.$setVisible$($JSCompiler_alias_FALSE$$);
  $goog$dispose$$(this.$focusHandler_$);
  $goog$ui$ModalPopup$$.$superClass_$.$exitDocument$.call(this);
  $goog$dom$removeNode$$(this.$bgIframeEl_$);
  $goog$dom$removeNode$$(this.$bgEl_$);
  $goog$dom$removeNode$$(this.$tabCatcherElement_$)
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$) {
  if($JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$ != this.$visible_$) {
    if(this.$popupShowTransition_$ && this.$popupShowTransition_$.stop(), this.$bgShowTransition_$ && this.$bgShowTransition_$.stop(), this.$popupHideTransition_$ && this.$popupHideTransition_$.stop(), this.$bgHideTransition_$ && this.$bgHideTransition_$.stop(), $JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$) {
      if(this.dispatchEvent("beforeshow")) {
        this.$resizeBackground_$();
        var $viewSize$$inline_1192_win$$inline_1187$$ = (($JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$ = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$())) ? $goog$dom$getWindow_$$($JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$) : window) || window;
        if("fixed" == $goog$style$getStyle_$$(this.$getElement$(), "position")) {
          var $JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$ = $JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$ = 0
        }else {
          $JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$ = $JSCompiler_StaticMethods_getDocumentScroll$$(this.$getDomHelper$()), $JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$ = $JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$.x, $JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$ = 
          $JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$.y
        }
        var $popupSize$$inline_1191$$ = $goog$style$getSize$$(this.$getElement$()), $viewSize$$inline_1192_win$$inline_1187$$ = $goog$dom$getViewportSize_$$($viewSize$$inline_1192_win$$inline_1187$$ || window);
        $JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$ = Math.max($JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$ + $viewSize$$inline_1192_win$$inline_1187$$.width / 2 - $popupSize$$inline_1191$$.width / 2, 0);
        $JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$ = Math.max($JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$ + $viewSize$$inline_1192_win$$inline_1187$$.height / 2 - $popupSize$$inline_1191$$.height / 2, 0);
        $goog$style$setPosition$$(this.$getElement$(), $JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$, $JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$);
        $goog$style$setPosition$$(this.$tabCatcherElement_$, $JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$, $JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$);
        $JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$ = this.$getHandler$();
        $JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$ = this.$getDomHelper$();
        $JSCompiler_StaticMethods_listen$$($JSCompiler_temp_const$$1131_doc$$inline_1186_left$$inline_1193_visible$$1_x$$inline_1188$$, $goog$dom$getWindow_$$($JSCompiler_StaticMethods_getWindow$self$$inline_1196_scroll$$inline_1190_top$$inline_1194_y$$inline_1189$$.$document_$), "resize", this.$resizeBackground_$);
        $JSCompiler_StaticMethods_showPopupElement_$$(this, $JSCompiler_alias_TRUE$$);
        this.focus();
        this.$visible_$ = $JSCompiler_alias_TRUE$$;
        this.$popupShowTransition_$ && this.$bgShowTransition_$ ? ($goog$events$listenOnce$$(this.$popupShowTransition_$, "end", this.$onShow$, $JSCompiler_alias_FALSE$$, this), this.$bgShowTransition_$.play(), this.$popupShowTransition_$.play()) : this.$onShow$()
      }
    }else {
      this.$hide_$()
    }
  }
};
$JSCompiler_prototypeAlias$$.$hide_$ = function $$JSCompiler_prototypeAlias$$$$hide_$$() {
  if(this.dispatchEvent("beforehide")) {
    var $JSCompiler_temp_const$$1134$$ = $JSCompiler_StaticMethods_unlisten$$, $JSCompiler_temp_const$$1133$$ = this.$getHandler$(), $JSCompiler_StaticMethods_getWindow$self$$inline_1198$$ = this.$getDomHelper$();
    $JSCompiler_temp_const$$1134$$($JSCompiler_temp_const$$1133$$, $goog$dom$getWindow_$$($JSCompiler_StaticMethods_getWindow$self$$inline_1198$$.$document_$), "resize", this.$resizeBackground_$);
    this.$visible_$ = $JSCompiler_alias_FALSE$$;
    this.$popupHideTransition_$ && this.$bgHideTransition_$ ? ($goog$events$listenOnce$$(this.$popupHideTransition_$, "end", this.$onHide$, $JSCompiler_alias_FALSE$$, this), this.$bgHideTransition_$.play(), this.$popupHideTransition_$.play()) : this.$onHide$()
  }
};
function $JSCompiler_StaticMethods_showPopupElement_$$($JSCompiler_StaticMethods_showPopupElement_$self$$, $visible$$2$$) {
  $JSCompiler_StaticMethods_showPopupElement_$self$$.$bgIframeEl_$ && $goog$style$showElement$$($JSCompiler_StaticMethods_showPopupElement_$self$$.$bgIframeEl_$, $visible$$2$$);
  $JSCompiler_StaticMethods_showPopupElement_$self$$.$bgEl_$ && $goog$style$showElement$$($JSCompiler_StaticMethods_showPopupElement_$self$$.$bgEl_$, $visible$$2$$);
  $goog$style$showElement$$($JSCompiler_StaticMethods_showPopupElement_$self$$.$getElement$(), $visible$$2$$);
  $goog$style$showElement$$($JSCompiler_StaticMethods_showPopupElement_$self$$.$tabCatcherElement_$, $visible$$2$$)
}
$JSCompiler_prototypeAlias$$.$onShow$ = function $$JSCompiler_prototypeAlias$$$$onShow$$() {
  this.dispatchEvent("show")
};
$JSCompiler_prototypeAlias$$.$onHide$ = function $$JSCompiler_prototypeAlias$$$$onHide$$() {
  $JSCompiler_StaticMethods_showPopupElement_$$(this, $JSCompiler_alias_FALSE$$);
  this.dispatchEvent("hide")
};
$JSCompiler_prototypeAlias$$.focus = function $$JSCompiler_prototypeAlias$$$focus$() {
  this.$focusElement_$()
};
$JSCompiler_prototypeAlias$$.$resizeBackground_$ = function $$JSCompiler_prototypeAlias$$$$resizeBackground_$$() {
  this.$bgIframeEl_$ && $goog$style$showElement$$(this.$bgIframeEl_$, $JSCompiler_alias_FALSE$$);
  this.$bgEl_$ && $goog$style$showElement$$(this.$bgEl_$, $JSCompiler_alias_FALSE$$);
  var $doc$$38_h$$13$$ = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), $viewSize$$ = $goog$dom$getViewportSize_$$(($doc$$38_h$$13$$ ? $goog$dom$getWindow_$$($doc$$38_h$$13$$) : window) || window || window), $w$$9$$ = Math.max($viewSize$$.width, Math.max($doc$$38_h$$13$$.body.scrollWidth, $doc$$38_h$$13$$.documentElement.scrollWidth)), $doc$$38_h$$13$$ = Math.max($viewSize$$.height, Math.max($doc$$38_h$$13$$.body.scrollHeight, $doc$$38_h$$13$$.documentElement.scrollHeight));
  this.$bgIframeEl_$ && ($goog$style$showElement$$(this.$bgIframeEl_$, $JSCompiler_alias_TRUE$$), $goog$style$setSize$$(this.$bgIframeEl_$, $w$$9$$, $doc$$38_h$$13$$));
  this.$bgEl_$ && ($goog$style$showElement$$(this.$bgEl_$, $JSCompiler_alias_TRUE$$), $goog$style$setSize$$(this.$bgEl_$, $w$$9$$, $doc$$38_h$$13$$))
};
$JSCompiler_prototypeAlias$$.$onFocus_$ = function $$JSCompiler_prototypeAlias$$$$onFocus_$$($e$$74$$) {
  this.$backwardTabWrapInProgress_$ ? this.$resetBackwardTabWrap_$() : $e$$74$$.target == this.$tabCatcherElement_$ && $goog$Timer$callOnce$$(this.$focusElement_$, 0, this)
};
$JSCompiler_prototypeAlias$$.$focusElement_$ = function $$JSCompiler_prototypeAlias$$$$focusElement_$$() {
  try {
    $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()).body.focus(), this.$getElement$().focus()
  }catch($e$$75$$) {
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$dispose$$(this.$popupShowTransition_$);
  this.$popupShowTransition_$ = $JSCompiler_alias_NULL$$;
  $goog$dispose$$(this.$popupHideTransition_$);
  this.$popupHideTransition_$ = $JSCompiler_alias_NULL$$;
  $goog$dispose$$(this.$bgShowTransition_$);
  this.$bgShowTransition_$ = $JSCompiler_alias_NULL$$;
  $goog$dispose$$(this.$bgHideTransition_$);
  this.$bgHideTransition_$ = $JSCompiler_alias_NULL$$;
  $goog$ui$ModalPopup$$.$superClass_$.$disposeInternal$.call(this)
};
// Input 95
// Input 96
// Input 97
function $goog$a11y$aria$setState$$($element$$117$$, $state$$2$$, $value$$128$$) {
  $element$$117$$.setAttribute("aria-" + $state$$2$$, $value$$128$$)
}
;
// Input 98
function $goog$ui$Dialog$$($opt_class$$4$$, $opt_useIframeMask$$1$$, $opt_domHelper$$11$$) {
  $goog$ui$ModalPopup$$.call(this, $opt_useIframeMask$$1$$, $opt_domHelper$$11$$);
  this.$class_$ = $opt_class$$4$$ || "modal-dialog";
  this.$buttons_$ = $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)
}
$goog$inherits$$($goog$ui$Dialog$$, $goog$ui$ModalPopup$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Dialog$$.prototype;
$JSCompiler_prototypeAlias$$.$escapeToCancel_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$hasTitleCloseButton_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$modal_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$draggable_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$backgroundElementOpacity_$ = 0.5;
$JSCompiler_prototypeAlias$$.$title_$ = "";
$JSCompiler_prototypeAlias$$.$content_$ = "";
$JSCompiler_prototypeAlias$$.$dragger_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$disposeOnHide_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$titleEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$titleTextEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$titleId_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$titleCloseEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$contentEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$buttonEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$preferredAriaRole_$ = "dialog";
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_get$$("$class_$");
function $JSCompiler_StaticMethods_setTitle$$($JSCompiler_StaticMethods_setTitle$self$$, $title$$7$$) {
  $JSCompiler_StaticMethods_setTitle$self$$.$title_$ = $title$$7$$;
  $JSCompiler_StaticMethods_setTitle$self$$.$titleTextEl_$ && $goog$dom$setTextContent$$($JSCompiler_StaticMethods_setTitle$self$$.$titleTextEl_$, $title$$7$$)
}
$JSCompiler_prototypeAlias$$.$setContent$ = function $$JSCompiler_prototypeAlias$$$$setContent$$($html$$2$$) {
  this.$content_$ = $html$$2$$;
  this.$contentEl_$ && (this.$contentEl_$.innerHTML = $html$$2$$)
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$() {
  this.$getElement$() || this.render();
  return this.$contentEl_$
};
$JSCompiler_prototypeAlias$$.$getBackgroundElement$ = function $$JSCompiler_prototypeAlias$$$$getBackgroundElement$$() {
  this.$getElement$() || this.render();
  return $goog$ui$Dialog$$.$superClass_$.$getBackgroundElement$.call(this)
};
$JSCompiler_prototypeAlias$$.$setBackgroundElementOpacity$ = function $$JSCompiler_prototypeAlias$$$$setBackgroundElementOpacity$$($bgEl_opacity$$1$$) {
  this.$backgroundElementOpacity_$ = $bgEl_opacity$$1$$;
  this.$getElement$() && ($bgEl_opacity$$1$$ = this.$getBackgroundElement$()) && $goog$style$setOpacity$$($bgEl_opacity$$1$$, this.$backgroundElementOpacity_$)
};
function $JSCompiler_StaticMethods_setDraggingEnabled_$$($JSCompiler_StaticMethods_setDraggingEnabled_$self$$, $enabled$$3$$) {
  if($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$getElement$()) {
    var $element$$inline_462$$ = $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$titleEl_$, $className$$inline_463$$ = $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$class_$ + "-title-draggable";
    $enabled$$3$$ ? $goog$dom$classes$add$$($element$$inline_462$$, $className$$inline_463$$) : $goog$dom$classes$remove$$($element$$inline_462$$, $className$$inline_463$$)
  }
  $enabled$$3$$ && !$JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$ ? ($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$ = new $goog$fx$Dragger$$($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$getElement$(), $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$titleEl_$), $goog$dom$classes$add$$($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$titleEl_$, $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$class_$ + "-title-draggable"), $goog$events$listen$$($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$, 
  "start", $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$setDraggerLimits_$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_setDraggingEnabled_$self$$)) : !$enabled$$3$$ && $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$ && ($JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$.$dispose$(), $JSCompiler_StaticMethods_setDraggingEnabled_$self$$.$dragger_$ = $JSCompiler_alias_NULL$$)
}
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  $goog$ui$Dialog$$.$superClass_$.$createDom$.call(this);
  var $JSCompiler_StaticMethods_attachToElement$self$$inline_466_element$$123$$ = this.$getElement$(), $dom$$7$$ = this.$getDomHelper$();
  this.$titleEl_$ = $dom$$7$$.$createDom$("div", {className:this.$class_$ + "-title", id:$JSCompiler_StaticMethods_getId$$(this)}, this.$titleTextEl_$ = $dom$$7$$.$createDom$("span", this.$class_$ + "-title-text", this.$title_$), this.$titleCloseEl_$ = $dom$$7$$.$createDom$("span", this.$class_$ + "-title-close"));
  $goog$dom$append$$($JSCompiler_StaticMethods_attachToElement$self$$inline_466_element$$123$$, this.$titleEl_$, this.$contentEl_$ = $dom$$7$$.$createDom$("div", this.$class_$ + "-content"), this.$buttonEl_$ = $dom$$7$$.$createDom$("div", this.$class_$ + "-buttons"));
  this.$titleId_$ = this.$titleEl_$.id;
  $JSCompiler_StaticMethods_attachToElement$self$$inline_466_element$$123$$.setAttribute("role", this.$preferredAriaRole_$);
  $goog$a11y$aria$setState$$($JSCompiler_StaticMethods_attachToElement$self$$inline_466_element$$123$$, "labelledby", this.$titleId_$ || "");
  this.$content_$ && (this.$contentEl_$.innerHTML = this.$content_$);
  $goog$style$showElement$$(this.$titleCloseEl_$, this.$hasTitleCloseButton_$);
  this.$buttons_$ && ($JSCompiler_StaticMethods_attachToElement$self$$inline_466_element$$123$$ = this.$buttons_$, $JSCompiler_StaticMethods_attachToElement$self$$inline_466_element$$123$$.$element_$ = this.$buttonEl_$, $JSCompiler_StaticMethods_attachToElement$self$$inline_466_element$$123$$.render());
  $goog$style$showElement$$(this.$buttonEl_$, !!this.$buttons_$);
  this.$setBackgroundElementOpacity$(this.$backgroundElementOpacity_$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$) {
  $goog$ui$Dialog$$.$superClass_$.$decorateInternal$.call(this, $JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$);
  $JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$ = this.$getElement$();
  var $buttonsClass_contentClass_titleClass$$ = this.$class_$ + "-content";
  (this.$contentEl_$ = $goog$dom$getElementsByTagNameAndClass$$($JSCompiler_alias_NULL$$, $buttonsClass_contentClass_titleClass$$, $JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$)[0]) ? this.$content_$ = this.$contentEl_$.innerHTML : (this.$contentEl_$ = this.$getDomHelper$().$createDom$("div", $buttonsClass_contentClass_titleClass$$), this.$content_$ && (this.$contentEl_$.innerHTML = this.$content_$), $JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$.appendChild(this.$contentEl_$));
  var $buttonsClass_contentClass_titleClass$$ = this.$class_$ + "-title", $titleTextClass$$ = this.$class_$ + "-title-text", $titleCloseClass$$ = this.$class_$ + "-title-close";
  (this.$titleEl_$ = $goog$dom$getElementsByTagNameAndClass$$($JSCompiler_alias_NULL$$, $buttonsClass_contentClass_titleClass$$, $JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$)[0]) ? (this.$titleTextEl_$ = $goog$dom$getElementsByTagNameAndClass$$($JSCompiler_alias_NULL$$, $titleTextClass$$, this.$titleEl_$)[0], this.$titleCloseEl_$ = $goog$dom$getElementsByTagNameAndClass$$($JSCompiler_alias_NULL$$, $titleCloseClass$$, this.$titleEl_$)[0], this.$titleEl_$.id || 
  (this.$titleEl_$.id = $JSCompiler_StaticMethods_getId$$(this))) : (this.$titleEl_$ = this.$getDomHelper$().$createDom$("div", {className:$buttonsClass_contentClass_titleClass$$, id:$JSCompiler_StaticMethods_getId$$(this)}), $JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$.insertBefore(this.$titleEl_$, this.$contentEl_$));
  this.$titleId_$ = this.$titleEl_$.id;
  this.$titleTextEl_$ ? this.$title_$ = $goog$dom$getTextContent$$(this.$titleTextEl_$) : (this.$titleTextEl_$ = this.$getDomHelper$().$createDom$("span", $titleTextClass$$, this.$title_$), this.$titleEl_$.appendChild(this.$titleTextEl_$));
  $goog$a11y$aria$setState$$($JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$, "labelledby", this.$titleId_$ || "");
  this.$titleCloseEl_$ || (this.$titleCloseEl_$ = this.$getDomHelper$().$createDom$("span", $titleCloseClass$$), this.$titleEl_$.appendChild(this.$titleCloseEl_$));
  $goog$style$showElement$$(this.$titleCloseEl_$, this.$hasTitleCloseButton_$);
  $buttonsClass_contentClass_titleClass$$ = this.$class_$ + "-buttons";
  (this.$buttonEl_$ = $goog$dom$getElementsByTagNameAndClass$$($JSCompiler_alias_NULL$$, $buttonsClass_contentClass_titleClass$$, $JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$)[0]) ? (this.$buttons_$ = new $goog$ui$Dialog$ButtonSet$$(this.$getDomHelper$()), this.$buttons_$.$decorate$(this.$buttonEl_$)) : (this.$buttonEl_$ = this.$getDomHelper$().$createDom$("div", $buttonsClass_contentClass_titleClass$$), $JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$.appendChild(this.$buttonEl_$), 
  this.$buttons_$ && ($JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$ = this.$buttons_$, $JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$.$element_$ = this.$buttonEl_$, $JSCompiler_StaticMethods_attachToElement$self$$inline_469_dialogElement_element$$124$$.render()), $goog$style$showElement$$(this.$buttonEl_$, !!this.$buttons_$));
  this.$setBackgroundElementOpacity$(this.$backgroundElementOpacity_$)
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$Dialog$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "keydown", this.$onKey_$), this.$getElement$(), "keypress", this.$onKey_$);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$buttonEl_$, "click", this.$onButtonClick_$);
  $JSCompiler_StaticMethods_setDraggingEnabled_$$(this, this.$draggable_$);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$titleCloseEl_$, "click", this.$onTitleCloseClick_$);
  var $dom$$inline_474_element$$125$$ = this.$getElement$();
  $dom$$inline_474_element$$125$$.setAttribute("role", this.$preferredAriaRole_$);
  "" !== this.$titleTextEl_$.id && $goog$a11y$aria$setState$$($dom$$inline_474_element$$125$$, "labelledby", this.$titleTextEl_$.id);
  if(!this.$modal_$ && (this.$modal_$ = $JSCompiler_alias_FALSE$$, this.$inDocument_$)) {
    var $dom$$inline_474_element$$125$$ = this.$getDomHelper$(), $bg$$inline_475$$ = this.$getBackgroundElement$();
    $dom$$inline_474_element$$125$$.removeNode(this.$bgIframeEl_$);
    $dom$$inline_474_element$$125$$.removeNode($bg$$inline_475$$)
  }
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  this.$visible_$ && this.$setVisible$($JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_setDraggingEnabled_$$(this, $JSCompiler_alias_FALSE$$);
  $goog$ui$Dialog$$.$superClass_$.$exitDocument$.call(this)
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($visible$$3$$) {
  $visible$$3$$ != this.$visible_$ && (this.$inDocument_$ || this.render(), $goog$ui$Dialog$$.$superClass_$.$setVisible$.call(this, $visible$$3$$))
};
$JSCompiler_prototypeAlias$$.$onShow$ = function $$JSCompiler_prototypeAlias$$$$onShow$$() {
  $goog$ui$Dialog$$.$superClass_$.$onShow$.call(this);
  this.dispatchEvent($goog$ui$Dialog$EventType$AFTER_SHOW$$)
};
$JSCompiler_prototypeAlias$$.$onHide$ = function $$JSCompiler_prototypeAlias$$$$onHide$$() {
  $goog$ui$Dialog$$.$superClass_$.$onHide$.call(this);
  this.dispatchEvent($goog$ui$Dialog$EventType$AFTER_HIDE$$);
  this.$disposeOnHide_$ && this.$dispose$()
};
$JSCompiler_prototypeAlias$$.focus = function $$JSCompiler_prototypeAlias$$$focus$() {
  $goog$ui$Dialog$$.$superClass_$.focus.call(this);
  if(this.$buttons_$) {
    var $defaultButton$$ = this.$buttons_$.$defaultButton_$;
    if($defaultButton$$) {
      for(var $doc$$40$$ = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), $buttons$$ = this.$buttonEl_$.getElementsByTagName("button"), $i$$143$$ = 0, $button$$1$$;$button$$1$$ = $buttons$$[$i$$143$$];$i$$143$$++) {
        if($button$$1$$.name == $defaultButton$$ && !$button$$1$$.disabled) {
          try {
            if($goog$userAgent$WEBKIT$$ || $goog$userAgent$OPERA$$) {
              var $temp$$1$$ = $doc$$40$$.createElement("input");
              $temp$$1$$.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;";
              this.$getElement$().appendChild($temp$$1$$);
              $temp$$1$$.focus();
              this.$getElement$().removeChild($temp$$1$$)
            }
            $button$$1$$.focus()
          }catch($e$$76$$) {
          }
          break
        }
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$setDraggerLimits_$ = function $$JSCompiler_prototypeAlias$$$$setDraggerLimits_$$() {
  var $doc$$41_h$$14$$ = $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), $limits$$inline_479_viewSize$$2$$ = $goog$dom$getViewportSize_$$(($doc$$41_h$$14$$ ? $goog$dom$getWindow_$$($doc$$41_h$$14$$) : window) || window || window), $w$$10$$ = Math.max($doc$$41_h$$14$$.body.scrollWidth, $limits$$inline_479_viewSize$$2$$.width), $doc$$41_h$$14$$ = Math.max($doc$$41_h$$14$$.body.scrollHeight, $limits$$inline_479_viewSize$$2$$.height), $dialogSize$$ = $goog$style$getSize$$(this.$getElement$());
  "fixed" == $goog$style$getStyle_$$(this.$getElement$(), "position") ? ($limits$$inline_479_viewSize$$2$$ = new $goog$math$Rect$$(0, 0, Math.max(0, $limits$$inline_479_viewSize$$2$$.width - $dialogSize$$.width), Math.max(0, $limits$$inline_479_viewSize$$2$$.height - $dialogSize$$.height)), this.$dragger_$.$limits$ = $limits$$inline_479_viewSize$$2$$ || new $goog$math$Rect$$(NaN, NaN, NaN, NaN)) : this.$dragger_$.$limits$ = new $goog$math$Rect$$(0, 0, $w$$10$$ - $dialogSize$$.width, $doc$$41_h$$14$$ - 
  $dialogSize$$.height) || new $goog$math$Rect$$(NaN, NaN, NaN, NaN)
};
$JSCompiler_prototypeAlias$$.$onTitleCloseClick_$ = function $$JSCompiler_prototypeAlias$$$$onTitleCloseClick_$$() {
  if(this.$hasTitleCloseButton_$) {
    var $bs_caption$$ = this.$buttons_$, $key$$78$$ = $bs_caption$$ && $bs_caption$$.$cancelButton_$;
    $key$$78$$ ? ($bs_caption$$ = $bs_caption$$.get($key$$78$$), this.dispatchEvent(new $goog$ui$Dialog$Event$$($key$$78$$, $bs_caption$$)) && this.$setVisible$($JSCompiler_alias_FALSE$$)) : this.$setVisible$($JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$buttonEl_$ = this.$titleCloseEl_$ = $JSCompiler_alias_NULL$$;
  $goog$ui$Dialog$$.$superClass_$.$disposeInternal$.call(this)
};
function $JSCompiler_StaticMethods_setButtonSet$$($JSCompiler_StaticMethods_setButtonSet$self$$, $buttons$$1$$) {
  $JSCompiler_StaticMethods_setButtonSet$self$$.$buttons_$ = $buttons$$1$$;
  if($JSCompiler_StaticMethods_setButtonSet$self$$.$buttonEl_$) {
    if($JSCompiler_StaticMethods_setButtonSet$self$$.$buttons_$) {
      var $JSCompiler_StaticMethods_attachToElement$self$$inline_484$$ = $JSCompiler_StaticMethods_setButtonSet$self$$.$buttons_$;
      $JSCompiler_StaticMethods_attachToElement$self$$inline_484$$.$element_$ = $JSCompiler_StaticMethods_setButtonSet$self$$.$buttonEl_$;
      $JSCompiler_StaticMethods_attachToElement$self$$inline_484$$.render()
    }else {
      $JSCompiler_StaticMethods_setButtonSet$self$$.$buttonEl_$.innerHTML = ""
    }
    $goog$style$showElement$$($JSCompiler_StaticMethods_setButtonSet$self$$.$buttonEl_$, !!$JSCompiler_StaticMethods_setButtonSet$self$$.$buttons_$)
  }
}
$JSCompiler_prototypeAlias$$.$onButtonClick_$ = function $$JSCompiler_prototypeAlias$$$$onButtonClick_$$($button$$2_e$$79_el$$inline_489_key$$79$$) {
  a: {
    for($button$$2_e$$79_el$$inline_489_key$$79$$ = $button$$2_e$$79_el$$inline_489_key$$79$$.target;$button$$2_e$$79_el$$inline_489_key$$79$$ != $JSCompiler_alias_NULL$$ && $button$$2_e$$79_el$$inline_489_key$$79$$ != this.$buttonEl_$;) {
      if("BUTTON" == $button$$2_e$$79_el$$inline_489_key$$79$$.tagName) {
        break a
      }
      $button$$2_e$$79_el$$inline_489_key$$79$$ = $button$$2_e$$79_el$$inline_489_key$$79$$.parentNode
    }
    $button$$2_e$$79_el$$inline_489_key$$79$$ = $JSCompiler_alias_NULL$$
  }
  if($button$$2_e$$79_el$$inline_489_key$$79$$ && !$button$$2_e$$79_el$$inline_489_key$$79$$.disabled) {
    $button$$2_e$$79_el$$inline_489_key$$79$$ = $button$$2_e$$79_el$$inline_489_key$$79$$.name;
    var $caption$$1$$ = this.$buttons_$.get($button$$2_e$$79_el$$inline_489_key$$79$$);
    this.dispatchEvent(new $goog$ui$Dialog$Event$$($button$$2_e$$79_el$$inline_489_key$$79$$, $caption$$1$$)) && this.$setVisible$($JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$onKey_$ = function $$JSCompiler_prototypeAlias$$$$onKey_$$($e$$80$$) {
  var $caption$$2_close$$ = $JSCompiler_alias_FALSE$$, $hasHandler$$ = $JSCompiler_alias_FALSE$$, $buttonSet$$ = this.$buttons_$, $isSpecialFormElement_target$$57$$ = $e$$80$$.target;
  if("keydown" == $e$$80$$.type) {
    if(this.$escapeToCancel_$ && 27 == $e$$80$$.keyCode) {
      var $cancel_key$$80$$ = $buttonSet$$ && $buttonSet$$.$cancelButton_$, $isSpecialFormElement_target$$57$$ = "SELECT" == $isSpecialFormElement_target$$57$$.tagName && !$isSpecialFormElement_target$$57$$.disabled;
      $cancel_key$$80$$ && !$isSpecialFormElement_target$$57$$ ? ($hasHandler$$ = $JSCompiler_alias_TRUE$$, $caption$$2_close$$ = $buttonSet$$.get($cancel_key$$80$$), $caption$$2_close$$ = this.dispatchEvent(new $goog$ui$Dialog$Event$$($cancel_key$$80$$, $caption$$2_close$$))) : $isSpecialFormElement_target$$57$$ || ($caption$$2_close$$ = $JSCompiler_alias_TRUE$$)
    }else {
      if($e$$80$$.keyCode == $goog$events$KeyCodes$TAB$$ && $e$$80$$.shiftKey && $isSpecialFormElement_target$$57$$ == this.$getElement$()) {
        this.$backwardTabWrapInProgress_$ = $JSCompiler_alias_TRUE$$;
        try {
          this.$tabCatcherElement_$.focus()
        }catch($e$$inline_492$$) {
        }
        $goog$Timer$callOnce$$(this.$resetBackwardTabWrap_$, 0, this)
      }
    }
  }else {
    if(13 == $e$$80$$.keyCode) {
      if("BUTTON" == $isSpecialFormElement_target$$57$$.tagName) {
        $cancel_key$$80$$ = $isSpecialFormElement_target$$57$$.name
      }else {
        if($buttonSet$$) {
          var $defaultKey$$ = $buttonSet$$.$defaultButton_$, $JSCompiler_temp$$26_buttons$$inline_496_defaultButton$$1$$;
          if($JSCompiler_temp$$26_buttons$$inline_496_defaultButton$$1$$ = $defaultKey$$) {
            a: {
              $JSCompiler_temp$$26_buttons$$inline_496_defaultButton$$1$$ = $buttonSet$$.$element_$.getElementsByTagName("BUTTON");
              for(var $i$$inline_497$$ = 0, $nextButton$$inline_498$$;$nextButton$$inline_498$$ = $JSCompiler_temp$$26_buttons$$inline_496_defaultButton$$1$$[$i$$inline_497$$];$i$$inline_497$$++) {
                if($nextButton$$inline_498$$.name == $defaultKey$$ || $nextButton$$inline_498$$.id == $defaultKey$$) {
                  $JSCompiler_temp$$26_buttons$$inline_496_defaultButton$$1$$ = $nextButton$$inline_498$$;
                  break a
                }
              }
              $JSCompiler_temp$$26_buttons$$inline_496_defaultButton$$1$$ = $JSCompiler_alias_NULL$$
            }
          }
          $isSpecialFormElement_target$$57$$ = ("TEXTAREA" == $isSpecialFormElement_target$$57$$.tagName || "SELECT" == $isSpecialFormElement_target$$57$$.tagName || "A" == $isSpecialFormElement_target$$57$$.tagName) && !$isSpecialFormElement_target$$57$$.disabled;
          $JSCompiler_temp$$26_buttons$$inline_496_defaultButton$$1$$ && (!$JSCompiler_temp$$26_buttons$$inline_496_defaultButton$$1$$.disabled && !$isSpecialFormElement_target$$57$$) && ($cancel_key$$80$$ = $defaultKey$$)
        }
      }
      $cancel_key$$80$$ && $buttonSet$$ && ($hasHandler$$ = $JSCompiler_alias_TRUE$$, $caption$$2_close$$ = this.dispatchEvent(new $goog$ui$Dialog$Event$$($cancel_key$$80$$, String($buttonSet$$.get($cancel_key$$80$$)))))
    }
  }
  if($caption$$2_close$$ || $hasHandler$$) {
    $e$$80$$.stopPropagation(), $e$$80$$.preventDefault()
  }
  $caption$$2_close$$ && this.$setVisible$($JSCompiler_alias_FALSE$$)
};
function $goog$ui$Dialog$Event$$($key$$81$$, $caption$$3$$) {
  this.type = $goog$ui$Dialog$EventType$SELECT$$;
  this.key = $key$$81$$;
  this.caption = $caption$$3$$
}
$goog$inherits$$($goog$ui$Dialog$Event$$, $goog$events$Event$$);
var $goog$ui$Dialog$EventType$SELECT$$ = "dialogselect", $goog$ui$Dialog$EventType$AFTER_HIDE$$ = "afterhide", $goog$ui$Dialog$EventType$AFTER_SHOW$$ = "aftershow";
function $goog$ui$Dialog$ButtonSet$$($opt_domHelper$$12$$) {
  this.$dom_$ = $opt_domHelper$$12$$ || $goog$dom$getDomHelper$$();
  $goog$structs$Map$$.call(this)
}
$goog$inherits$$($goog$ui$Dialog$ButtonSet$$, $goog$structs$Map$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Dialog$ButtonSet$$.prototype;
$JSCompiler_prototypeAlias$$.$class_$ = "goog-buttonset";
$JSCompiler_prototypeAlias$$.$defaultButton_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$cancelButton_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$82$$, $caption$$4$$, $opt_isDefault$$, $opt_isCancel$$) {
  $goog$structs$Map$$.prototype.set.call(this, $key$$82$$, $caption$$4$$);
  $opt_isDefault$$ && (this.$defaultButton_$ = $key$$82$$);
  $opt_isCancel$$ && (this.$cancelButton_$ = $key$$82$$);
  return this
};
function $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$self$$, $button$$3$$, $opt_isDefault$$1$$, $opt_isCancel$$1$$) {
  return $JSCompiler_StaticMethods_addButton$self$$.set($button$$3$$.key, $button$$3$$.caption, $opt_isDefault$$1$$, $opt_isCancel$$1$$)
}
$JSCompiler_prototypeAlias$$.render = function $$JSCompiler_prototypeAlias$$$render$() {
  if(this.$element_$) {
    this.$element_$.innerHTML = "";
    var $domHelper$$2$$ = $goog$dom$getDomHelper$$(this.$element_$);
    $goog$structs$forEach$$(this, function($caption$$5$$, $key$$83$$) {
      var $button$$4$$ = $domHelper$$2$$.$createDom$("button", {name:$key$$83$$}, $caption$$5$$);
      $key$$83$$ == this.$defaultButton_$ && ($button$$4$$.className = this.$class_$ + "-default");
      this.$element_$.appendChild($button$$4$$)
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($buttons$$2_element$$127$$) {
  if($buttons$$2_element$$127$$ && 1 == $buttons$$2_element$$127$$.nodeType) {
    this.$element_$ = $buttons$$2_element$$127$$;
    $buttons$$2_element$$127$$ = this.$element_$.getElementsByTagName("button");
    for(var $i$$144$$ = 0, $button$$5$$, $key$$84$$, $caption$$6$$;$button$$5$$ = $buttons$$2_element$$127$$[$i$$144$$];$i$$144$$++) {
      if($key$$84$$ = $button$$5$$.name || $button$$5$$.id, $caption$$6$$ = $goog$dom$getTextContent$$($button$$5$$) || $button$$5$$.value, $key$$84$$) {
        var $isDefault$$ = 0 == $i$$144$$;
        this.set($key$$84$$, $caption$$6$$, $isDefault$$, $button$$5$$.name == $goog$ui$Dialog$DefaultButtonKeys$CANCEL$$);
        $isDefault$$ && $goog$dom$classes$add$$($button$$5$$, this.$class_$ + "-default")
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
var $goog$ui$Dialog$DefaultButtonKeys$CANCEL$$ = "cancel", $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$ = {key:"ok", caption:"OK"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$ = {key:$goog$ui$Dialog$DefaultButtonKeys$CANCEL$$, caption:"Cancelar"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$ = {key:"yes", caption:"S\u00ed"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$ = {key:"no", caption:"No"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$SAVE$$ = {key:"save", caption:"Guardar"}, $goog$ui$Dialog$ButtonSet$DefaultButtons$CONTINUE$$ = 
{key:"continue", caption:"Continuar"};
"undefined" != typeof document && ($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, 
$goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, 
$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $goog$ui$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$CONTINUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$SAVE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$));
// Input 99
function $bootstrap$Dialog$$() {
  $goog$ui$Dialog$$.call(this, "modal")
}
$goog$inherits$$($bootstrap$Dialog$$, $goog$ui$Dialog$$);
$bootstrap$Dialog$$.prototype.$createDom$ = function $$bootstrap$Dialog$$$$$createDom$$() {
  $goog$ui$ModalPopup$$.prototype.$createDom$.call(this);
  var $JSCompiler_StaticMethods_attachToElement$self$$inline_501_buttons$$4_element$$128$$ = this.$getElement$(), $dom$$8_i$$147$$ = this.$getDomHelper$();
  this.$titleEl_$ = $dom$$8_i$$147$$.$createDom$("div", {className:"modal-header", id:$JSCompiler_StaticMethods_getId$$(this)}, this.$titleCloseEl_$ = $dom$$8_i$$147$$.$createDom$("a", {className:"close", href:"javascript:;"}, "\u00d7"), this.$titleTextEl_$ = $dom$$8_i$$147$$.$createDom$("h3", $JSCompiler_alias_VOID$$, this.$title_$));
  $goog$dom$append$$($JSCompiler_StaticMethods_attachToElement$self$$inline_501_buttons$$4_element$$128$$, this.$titleEl_$, this.$contentEl_$ = $dom$$8_i$$147$$.$createDom$("div", "modal-body"), this.$buttonEl_$ = $dom$$8_i$$147$$.$createDom$("div", "modal-footer"));
  this.$titleId_$ = this.$titleEl_$.id;
  $JSCompiler_StaticMethods_attachToElement$self$$inline_501_buttons$$4_element$$128$$.setAttribute("role", "dialog");
  $goog$a11y$aria$setState$$($JSCompiler_StaticMethods_attachToElement$self$$inline_501_buttons$$4_element$$128$$, "labelledby", this.$titleId_$ || "");
  this.$content_$ && (this.$contentEl_$.innerHTML = this.$content_$);
  $goog$style$showElement$$(this.$titleCloseEl_$, this.$hasTitleCloseButton_$);
  if(this.$buttons_$) {
    $JSCompiler_StaticMethods_attachToElement$self$$inline_501_buttons$$4_element$$128$$ = this.$buttons_$;
    $JSCompiler_StaticMethods_attachToElement$self$$inline_501_buttons$$4_element$$128$$.$element_$ = this.$buttonEl_$;
    $JSCompiler_StaticMethods_attachToElement$self$$inline_501_buttons$$4_element$$128$$.render();
    $JSCompiler_StaticMethods_attachToElement$self$$inline_501_buttons$$4_element$$128$$ = this.$buttons_$.$element_$.getElementsByTagName("BUTTON");
    for($dom$$8_i$$147$$ = 0;$dom$$8_i$$147$$ < $JSCompiler_StaticMethods_attachToElement$self$$inline_501_buttons$$4_element$$128$$.length;$dom$$8_i$$147$$++) {
      $goog$dom$classes$add$$($JSCompiler_StaticMethods_attachToElement$self$$inline_501_buttons$$4_element$$128$$[$dom$$8_i$$147$$], "btn")
    }
  }
  $goog$style$showElement$$(this.$buttonEl_$, !!this.$buttons_$);
  this.$setBackgroundElementOpacity$(this.$backgroundElementOpacity_$)
};
$bootstrap$Dialog$$.prototype.$setBackgroundElementOpacity$ = function $$bootstrap$Dialog$$$$$setBackgroundElementOpacity$$($bgEl$$1_opacity$$2$$) {
  this.$backgroundElementOpacity_$ = $bgEl$$1_opacity$$2$$;
  this.$getElement$() && ($bgEl$$1_opacity$$2$$ = this.$getBackgroundElement$(), $goog$dom$classes$add$$($bgEl$$1_opacity$$2$$, "modal-dialog-bg"), $bgEl$$1_opacity$$2$$ && $goog$style$setOpacity$$($bgEl$$1_opacity$$2$$, this.$backgroundElementOpacity_$))
};
function $bootstrap$Dialog$ButtonSet$$($opt_domHelper$$13$$) {
  $goog$ui$Dialog$ButtonSet$$.call(this, $opt_domHelper$$13$$)
}
$goog$inherits$$($bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$$);
$bootstrap$Dialog$ButtonSet$$.prototype.render = function $$bootstrap$Dialog$ButtonSet$$$$render$() {
  if(this.$element_$) {
    this.$element_$.innerHTML = "";
    var $domHelper$$3$$ = $goog$dom$getDomHelper$$(this.$element_$);
    $goog$structs$forEach$$(this, function($caption$$7$$, $key$$89$$) {
      var $button$$8$$ = $domHelper$$3$$.$createDom$("button", {name:$key$$89$$}, $caption$$7$$);
      $button$$8$$.className = $key$$89$$ == this.$defaultButton_$ ? "btn btn-primary" : "btn";
      this.$element_$.appendChild($button$$8$$)
    }, this)
  }
};
function $bootstrap$Dialog$ButtonSet$createOkCancel$$() {
  return $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)
}
function $bootstrap$Dialog$ButtonSet$createYesNoCancel$$() {
  return $JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$($JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$YES$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$NO$$, $JSCompiler_alias_TRUE$$), $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)
}
;
// Input 100
function $bootstrap$Dropdown$closeAll$$() {
  var $dropdown_elements$$ = $goog$dom$getElementsByClass$$("dropdown-toggle", document.body);
  $goog$array$forEach$$($dropdown_elements$$, function($dropdown_element$$) {
    $goog$dom$classes$remove$$($goog$dom$getParentElement$$($dropdown_element$$), "open")
  })
}
function $bootstrap$Dropdown$install$$() {
  $goog$events$listen$$(document.body, "click", function($dropdown_element_parent$$1_e$$81$$) {
    var $element$$129$$ = $dropdown_element_parent$$1_e$$81$$.target, $is_dropdown_toogle$$ = $JSCompiler_alias_FALSE$$;
    $goog$dom$classes$has$$($element$$129$$, "dropdown-toggle") ? $is_dropdown_toogle$$ = $JSCompiler_alias_TRUE$$ : ($element$$129$$ = $goog$dom$getAncestorByTagNameAndClass$$($element$$129$$, $JSCompiler_alias_NULL$$, "dropdown-toggle"), $element$$129$$ != $JSCompiler_alias_NULL$$ && ($is_dropdown_toogle$$ = $JSCompiler_alias_TRUE$$));
    $is_dropdown_toogle$$ ? ($dropdown_element_parent$$1_e$$81$$.preventDefault(), $dropdown_element_parent$$1_e$$81$$.stopPropagation(), $dropdown_element_parent$$1_e$$81$$ = $goog$dom$getParentElement$$($element$$129$$), $goog$dom$classes$has$$($dropdown_element_parent$$1_e$$81$$, "open") ? $bootstrap$Dropdown$closeAll$$() : ($bootstrap$Dropdown$closeAll$$(), $goog$dom$classes$add$$($dropdown_element_parent$$1_e$$81$$, "open"))) : $bootstrap$Dropdown$closeAll$$()
  });
  $goog$events$listen$$(document.body, "click", function($e$$82_label_element$$) {
    var $element$$130$$ = $e$$82_label_element$$.target, $data_value$$2$$ = $JSCompiler_alias_NULL$$, $data_caption$$ = $JSCompiler_alias_NULL$$;
    "A" === $element$$130$$.tagName && ($data_caption$$ = $goog$dom$getTextContent$$($element$$130$$), $element$$130$$ = $goog$dom$getParentElement$$($element$$130$$));
    "LI" === $element$$130$$.tagName && ($data_value$$2$$ = $element$$130$$.getAttribute("data-value"), $data_caption$$ = $goog$dom$getTextContent$$($goog$dom$getFirstElementChild$$($element$$130$$)));
    $data_value$$2$$ != $JSCompiler_alias_NULL$$ && ($element$$130$$ = $goog$dom$getParentElement$$($element$$130$$), "UL" === $element$$130$$.tagName && $goog$dom$classes$has$$($element$$130$$, "dropdown-menu") && ($e$$82_label_element$$.preventDefault(), $e$$82_label_element$$.stopPropagation(), console.log("click on:  " + $data_caption$$ + " [" + $data_value$$2$$ + "]"), $e$$82_label_element$$ = $goog$dom$getElementByClass$$("dropdown-label", $goog$dom$getParentElement$$($element$$130$$)), $e$$82_label_element$$ != 
    $JSCompiler_alias_NULL$$ && $goog$dom$setTextContent$$($e$$82_label_element$$, $data_caption$$), $bootstrap$Dropdown$closeAll$$()))
  })
}
;
// Input 101
function $bitex$view$ToolBarView$$($app$$4$$, $opt_domHelper$$14$$) {
  $bitex$view$View$$.call(this, $app$$4$$, $opt_domHelper$$14$$)
}
$goog$inherits$$($bitex$view$ToolBarView$$, $bitex$view$View$$);
$bitex$view$ToolBarView$$.prototype.$enterDocument$ = function $$bitex$view$ToolBarView$$$$$enterDocument$$() {
  $bitex$view$ToolBarView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$52$$ = this.$getHandler$(), $model$$6$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, $model$$6$$, "model_setBrokerCurrencies", function() {
    $model$$6$$.get("IsBroker") || $model$$6$$.get("BrokerCurrencies")
  });
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, $model$$6$$, "model_setBroker", function() {
    var $support_link_elements$$ = $goog$dom$getElementsByClass$$("bitex-support-link");
    $goog$array$forEach$$($support_link_elements$$, function($el$$56$$) {
      $el$$56$$.href = $model$$6$$.get("Broker").SupportURL
    })
  });
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, $model$$6$$, "model_setSecurityList", function() {
    $model$$6$$.get("SecurityList")
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, $model$$6$$, "model_setAllowedMarkets", function() {
    $model$$6$$.get("AllowedMarkets")
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, $goog$dom$getElement$$("id_button_connect_ws"), "click", function() {
    this.dispatchEvent("connect_bitex")
  })
};
// Input 102
function $bitex$ui$OrderEntryX$$($opt_blinkDelay$$1$$, $opt_domHelper$$15$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$15$$);
  this.$lastChangedField_$ = "amount"
}
$goog$inherits$$($bitex$ui$OrderEntryX$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$OrderEntryX$$.prototype;
$JSCompiler_prototypeAlias$$.$getBaseCssClass$ = $JSCompiler_returnArg$$("order-entry");
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($dom$$9_element$$131$$) {
  this.$element_$ = $dom$$9_element$$131$$;
  $dom$$9_element$$131$$ = this.$getDomHelper$();
  this.$symbolEl_$ = $dom$$9_element$$131$$.$getElementByClass$(this.$getBaseCssClass$() + "-symbol", this.$getElement$());
  this.$sideEl_$ = $dom$$9_element$$131$$.$getElementByClass$(this.$getBaseCssClass$() + "-side", this.$getElement$());
  this.$typeEl_$ = $dom$$9_element$$131$$.$getElementByClass$(this.$getBaseCssClass$() + "-type", this.$getElement$());
  this.$actionButtonEl_$ = $dom$$9_element$$131$$.$getElementByClass$(this.$getBaseCssClass$() + "-action", this.$getElement$());
  this.$amountEl_$ = $dom$$9_element$$131$$.$getElementByClass$(this.$getBaseCssClass$() + "-amount", this.$getElement$());
  this.$priceEl_$ = $dom$$9_element$$131$$.$getElementByClass$(this.$getBaseCssClass$() + "-price", this.$getElement$());
  this.$totalEl_$ = $dom$$9_element$$131$$.$getElementByClass$(this.$getBaseCssClass$() + "-total", this.$getElement$());
  this.$feeEl_$ = $dom$$9_element$$131$$.$getElementByClass$(this.$getBaseCssClass$() + "-fee", this.$getElement$());
  this.$clientIdEl_$ = $dom$$9_element$$131$$.$getElementByClass$(this.$getBaseCssClass$() + "-client-id", this.$getElement$());
  this.$brokerIdEl_$ = $dom$$9_element$$131$$.$getElementByClass$(this.$getBaseCssClass$() + "-broker-id", this.$getElement$())
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$OrderEntryX$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$53$$ = this.$getHandler$();
  this.$getDomHelper$();
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$KeyHandler$$(this.$amountEl_$), $goog$events$KeyHandler$EventType$KEY$$, this.$onBlockNonNumberKeys_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$KeyHandler$$(this.$priceEl_$), $goog$events$KeyHandler$EventType$KEY$$, this.$onBlockNonNumberKeys_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$KeyHandler$$(this.$totalEl_$), $goog$events$KeyHandler$EventType$KEY$$, this.$onBlockNonNumberKeys_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$KeyHandler$$(this.$feeEl_$), $goog$events$KeyHandler$EventType$KEY$$, this.$onBlockNonNumberKeys_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$InputHandler$$(this.$amountEl_$), $goog$events$InputHandler$EventType$INPUT$$, this.$onChangeAmount_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$InputHandler$$(this.$priceEl_$), $goog$events$InputHandler$EventType$INPUT$$, this.$onChangePrice_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, new $goog$events$InputHandler$$(this.$totalEl_$), $goog$events$InputHandler$EventType$INPUT$$, this.$onChangeTotal_$);
  $JSCompiler_StaticMethods_listen$$($handler$$53$$, this.$actionButtonEl_$, "click", this.$onAction_$)
};
$JSCompiler_prototypeAlias$$.$onBlockNonNumberKeys_$ = function $$JSCompiler_prototypeAlias$$$$onBlockNonNumberKeys_$$($e$$88$$) {
  var $inputEl$$1$$ = $e$$88$$.target, $inputValue$$3$$ = $goog$dom$forms$getValue$$($inputEl$$1$$);
  if(!$goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$88$$) && ($e$$88$$.keyCode == $goog$events$KeyCodes$UP$$ || $e$$88$$.keyCode == $goog$events$KeyCodes$DOWN$$)) {
    var $new_value$$2_value_to_change$$1$$, $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$ = $inputEl$$1$$.selectionStart, $endPos$$2_originalStartPos$$1$$ = $inputEl$$1$$.selectionEnd;
    $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$ === $endPos$$2_originalStartPos$$1$$ && 0 === $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$ ? ($new_value$$2_value_to_change$$1$$ = $inputValue$$3$$, $endPos$$2_originalStartPos$$1$$ = $inputValue$$3$$.length) : ("." === $inputValue$$3$$.substr($number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$ - 1, 1) && --$endPos$$2_originalStartPos$$1$$, $new_value$$2_value_to_change$$1$$ = $inputValue$$3$$.substr(0, $endPos$$2_originalStartPos$$1$$));
    var $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$ = $bitex$util$decimalPlaces$$($new_value$$2_value_to_change$$1$$), $value_to_add$$1$$ = 1 / Math.pow(10, $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$);
    $new_value$$2_value_to_change$$1$$ = $goog$string$toNumber$$($new_value$$2_value_to_change$$1$$);
    if(isNaN($new_value$$2_value_to_change$$1$$)) {
      return
    }
    $new_value$$2_value_to_change$$1$$ = $e$$88$$.keyCode == $goog$events$KeyCodes$UP$$ ? $new_value$$2_value_to_change$$1$$ + $value_to_add$$1$$ : $new_value$$2_value_to_change$$1$$ - $value_to_add$$1$$;
    $new_value$$2_value_to_change$$1$$ = (Math.round($new_value$$2_value_to_change$$1$$ * Math.pow(10, $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$)) / Math.pow(10, $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$)).toFixed($number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$);
    $new_value$$2_value_to_change$$1$$ = "" + $new_value$$2_value_to_change$$1$$ + $inputValue$$3$$.substr($endPos$$2_originalStartPos$$1$$);
    0 > $goog$string$toNumber$$($new_value$$2_value_to_change$$1$$) && ($new_value$$2_value_to_change$$1$$ = (0).toFixed($number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$));
    $endPos$$2_originalStartPos$$1$$ = $inputEl$$1$$.selectionStart;
    $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$ = $inputEl$$1$$.selectionEnd;
    $goog$dom$forms$setValue$$($inputEl$$1$$, $new_value$$2_value_to_change$$1$$);
    $inputValue$$3$$.length == $new_value$$2_value_to_change$$1$$.length ? ($inputEl$$1$$.selectionStart = $endPos$$2_originalStartPos$$1$$, $inputEl$$1$$.selectionEnd = $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$) : $inputValue$$3$$.length > $new_value$$2_value_to_change$$1$$.length ? ($inputEl$$1$$.selectionStart = $endPos$$2_originalStartPos$$1$$ - 1, $inputEl$$1$$.selectionEnd = $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$ - 1) : ($inputEl$$1$$.selectionStart = 
    $endPos$$2_originalStartPos$$1$$ + 1, $inputEl$$1$$.selectionEnd = $number_of_decimal_places$$1_originalEndPos$$1_startPos$$1$$ + 1);
    switch($e$$88$$.target) {
      case this.$amountEl_$:
        this.$onChangeAmount_$();
        break;
      case this.$priceEl_$:
        this.$onChangePrice_$();
        break;
      case this.$totalEl_$:
        this.$onChangeTotal_$($e$$88$$)
    }
    $e$$88$$.preventDefault()
  }
  if(!$e$$88$$.ctrlKey && ($e$$88$$.shiftKey || !($e$$88$$.keyCode >= $goog$events$KeyCodes$ZERO$$ && $e$$88$$.keyCode <= $goog$events$KeyCodes$NINE$$ || $e$$88$$.keyCode >= $goog$events$KeyCodes$NUM_ZERO$$ && $e$$88$$.keyCode <= $goog$events$KeyCodes$NUM_NINE$$)) && $goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$88$$)) {
    switch($e$$88$$.keyCode) {
      case $goog$events$KeyCodes$DELETE$$:
      ;
      case $goog$events$KeyCodes$BACKSPACE$$:
      ;
      case $goog$events$KeyCodes$TAB$$:
        return;
      case $goog$events$KeyCodes$NUM_PERIOD$$:
      ;
      case $goog$events$KeyCodes$PERIOD$$:
        if($inputEl$$1$$ = $e$$88$$.target, $inputValue$$3$$ = $goog$dom$forms$getValue$$($inputEl$$1$$), 0 > $inputValue$$3$$.indexOf(".")) {
          return
        }
    }
    $e$$88$$.preventDefault()
  }
};
$JSCompiler_prototypeAlias$$.$getSymbol$ = function $$JSCompiler_prototypeAlias$$$$getSymbol$$() {
  return $goog$dom$forms$getValue$$(this.$symbolEl_$)
};
$JSCompiler_prototypeAlias$$.$getSide$ = function $$JSCompiler_prototypeAlias$$$$getSide$$() {
  return $goog$dom$forms$getValue$$(this.$sideEl_$)
};
$JSCompiler_prototypeAlias$$.$setSymbol$ = function $$JSCompiler_prototypeAlias$$$$setSymbol$$($value$$129$$) {
  $goog$dom$forms$setValue$$(this.$symbolEl_$, $value$$129$$)
};
function $JSCompiler_StaticMethods_setAmountCurrencySign$$($JSCompiler_StaticMethods_setAmountCurrencySign$self$$, $value$$130$$) {
  var $elements$$5$$ = $JSCompiler_StaticMethods_setAmountCurrencySign$self$$.$getDomHelper$().$getElementsByClass$($JSCompiler_StaticMethods_setAmountCurrencySign$self$$.$getBaseCssClass$() + "-amount-sign", $JSCompiler_StaticMethods_setAmountCurrencySign$self$$.$getElement$());
  $goog$array$forEach$$($elements$$5$$, function($el$$57$$) {
    $goog$dom$setTextContent$$($el$$57$$, $value$$130$$)
  })
}
function $JSCompiler_StaticMethods_setPriceCurrencySign$$($JSCompiler_StaticMethods_setPriceCurrencySign$self$$, $value$$131$$) {
  var $elements$$6$$ = $JSCompiler_StaticMethods_setPriceCurrencySign$self$$.$getDomHelper$().$getElementsByClass$($JSCompiler_StaticMethods_setPriceCurrencySign$self$$.$getBaseCssClass$() + "-price-sign", $JSCompiler_StaticMethods_setPriceCurrencySign$self$$.$getElement$());
  $goog$array$forEach$$($elements$$6$$, function($el$$58$$) {
    $goog$dom$setTextContent$$($el$$58$$, $value$$131$$)
  })
}
$JSCompiler_prototypeAlias$$.$getBrokerID$ = function $$JSCompiler_prototypeAlias$$$$getBrokerID$$() {
  return parseInt($goog$dom$forms$getValue$$(this.$brokerIdEl_$), 10)
};
$JSCompiler_prototypeAlias$$.$setBrokerID$ = function $$JSCompiler_prototypeAlias$$$$setBrokerID$$($value$$132$$) {
  $goog$dom$forms$setValue$$(this.$brokerIdEl_$, $value$$132$$)
};
$JSCompiler_prototypeAlias$$.$getClientID$ = function $$JSCompiler_prototypeAlias$$$$getClientID$$() {
  return $goog$dom$forms$getValue$$(this.$clientIdEl_$)
};
$JSCompiler_prototypeAlias$$.$getAmount$ = function $$JSCompiler_prototypeAlias$$$$getAmount$$() {
  var $inputValue$$4_res$$10$$ = $goog$dom$forms$getValue$$(this.$amountEl_$), $inputValue$$4_res$$10$$ = $goog$string$toNumber$$($inputValue$$4_res$$10$$);
  isNaN($inputValue$$4_res$$10$$) && ($inputValue$$4_res$$10$$ = 0);
  return parseInt(1E8 * $inputValue$$4_res$$10$$, 10)
};
$JSCompiler_prototypeAlias$$.$getPrice$ = function $$JSCompiler_prototypeAlias$$$$getPrice$$() {
  var $inputValue$$5_res$$11$$ = $goog$dom$forms$getValue$$(this.$priceEl_$), $inputValue$$5_res$$11$$ = $goog$string$toNumber$$($inputValue$$5_res$$11$$);
  isNaN($inputValue$$5_res$$11$$) && ($inputValue$$5_res$$11$$ = 0);
  return parseInt(1E8 * $inputValue$$5_res$$11$$, 10)
};
$JSCompiler_prototypeAlias$$.$getTotal$ = function $$JSCompiler_prototypeAlias$$$$getTotal$$() {
  var $inputValue$$6_res$$12$$ = $goog$dom$forms$getValue$$(this.$totalEl_$), $inputValue$$6_res$$12$$ = $goog$string$toNumber$$($inputValue$$6_res$$12$$);
  isNaN($inputValue$$6_res$$12$$) && ($inputValue$$6_res$$12$$ = 0);
  return parseInt(1E8 * $inputValue$$6_res$$12$$, 10)
};
$JSCompiler_prototypeAlias$$.$onChangeAmount_$ = function $$JSCompiler_prototypeAlias$$$$onChangeAmount_$$() {
  var $total$$3$$ = this.$getPrice$() * this.$getAmount$() / 1E8;
  $goog$isNumber$$($total$$3$$) && $goog$dom$forms$setValue$$(this.$totalEl_$, $total$$3$$ / 1E8);
  this.$lastChangedField_$ = "amount";
  this.$actionButtonEl_$.disabled = 0 >= this.$getTotal$()
};
$JSCompiler_prototypeAlias$$.$onChangePrice_$ = function $$JSCompiler_prototypeAlias$$$$onChangePrice_$$() {
  if("amount" === this.$lastChangedField_$) {
    var $amount$$1_total$$4$$ = this.$getPrice$() * this.$getAmount$() / 1E8;
    $goog$isNumber$$($amount$$1_total$$4$$) && $goog$dom$forms$setValue$$(this.$totalEl_$, $amount$$1_total$$4$$ / 1E8)
  }else {
    0 < this.$getPrice$() && ($amount$$1_total$$4$$ = 1E8 * (this.$getTotal$() / this.$getPrice$()), $goog$isNumber$$($amount$$1_total$$4$$) && $goog$dom$forms$setValue$$(this.$amountEl_$, $amount$$1_total$$4$$ / 1E8))
  }
  this.$actionButtonEl_$.disabled = 0 >= this.$getTotal$()
};
$JSCompiler_prototypeAlias$$.$onChangeTotal_$ = function $$JSCompiler_prototypeAlias$$$$onChangeTotal_$$() {
  var $amount$$2$$ = 1E8 * (this.$getTotal$() / this.$getPrice$());
  $goog$isNumber$$($amount$$2$$) && $goog$dom$forms$setValue$$(this.$amountEl_$, $amount$$2$$ / 1E8);
  this.$lastChangedField_$ = "total";
  this.$actionButtonEl_$.disabled = 0 >= this.$getTotal$()
};
$JSCompiler_prototypeAlias$$.$onAction_$ = function $$JSCompiler_prototypeAlias$$$$onAction_$$() {
  0 < this.$getTotal$() && this.dispatchEvent("order_entry_submitted")
};
// Input 103
function $bitex$view$OfferBookView$$($app$$5$$, $opt_domHelper$$16$$) {
  $bitex$view$View$$.call(this, $app$$5$$, $opt_domHelper$$16$$);
  this.$client_order_id$ = this.$order_id_$ = this.$market_data_subscription_symbol_$ = this.$market_data_subscription_id_$ = this.$order_book_offer_$ = this.$order_book_bid_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$OfferBookView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$OfferBookView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$OfferBookView$$.$superClass_$.$enterView$.call(this);
  var $selected_symbol$$ = this.$app_$.$model_$.get("SelectedSymbol");
  $selected_symbol$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_recreateOrderBookComponents_$$(this, $selected_symbol$$)
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$OfferBookView$$.$superClass_$.$exitView$.call(this);
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$$(this)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($buy_order_entry_element$$132$$) {
  this.$element_$ = $buy_order_entry_element$$132$$;
  $buy_order_entry_element$$132$$ = new $bitex$ui$OrderEntryX$$;
  var $sell_order_entry$$ = new $bitex$ui$OrderEntryX$$;
  $JSCompiler_StaticMethods_addChild$$(this, $buy_order_entry_element$$132$$);
  $JSCompiler_StaticMethods_addChild$$(this, $sell_order_entry$$);
  $buy_order_entry_element$$132$$.$decorate$($goog$dom$getElement$$("id_order_entry_buy"));
  $sell_order_entry$$.$decorate$($goog$dom$getElement$$("id_order_entry_sell"))
};
function $JSCompiler_StaticMethods_destroyOrderBookComponents_$$($JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$) {
  var $handler$$54$$ = $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$getHandler$();
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_bid_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_bid_$, $bitex$ui$OrderBook$EventType$CANCEL$$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onCancelOrder_$), $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_bid_$.$dispose$());
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_offer_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_offer_$, $bitex$ui$OrderBook$EventType$CANCEL$$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onCancelOrder_$), $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_offer_$.$dispose$());
  if($JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$ != $JSCompiler_alias_NULL$$) {
    var $conn$$ = $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$app_$.$conn_$;
    $JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $conn$$, $bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ + "." + $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onOBClear_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $conn$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ + "." + $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onOBDeleteOrdersThru_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $conn$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ + "." + $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onOBDeleteOrder_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $conn$$, $bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ + "." + $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onOBUpdateOrder_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$54$$, $conn$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$onOBNewOrder_$);
    $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.dispatchEvent("md_unsubscribe");
    $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_id_$ = $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$market_data_subscription_symbol_$ = $JSCompiler_alias_NULL$$
  }
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_bid_$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$self$$.$order_book_offer_$ = $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods_recreateOrderBookComponents_$$($JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$, $selected_symbol$$1$$) {
  var $handler$$55$$ = $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$getHandler$(), $conn$$1_model$$8$$ = $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$app_$.$model_$;
  $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$market_data_subscription_symbol_$ !== $selected_symbol$$1$$.$symbol$ && ($JSCompiler_StaticMethods_destroyOrderBookComponents_$$($JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$), $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$order_book_bid_$ = new $bitex$ui$OrderBook$$($conn$$1_model$$8$$.get("Username"), $bitex$ui$OrderBook$Side$BUY$$, $selected_symbol$$1$$.$qty_currency$, $selected_symbol$$1$$.$price_currency$), 
  $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$order_book_offer_$ = new $bitex$ui$OrderBook$$($conn$$1_model$$8$$.get("Username"), $bitex$ui$OrderBook$Side$SELL$$, $selected_symbol$$1$$.$qty_currency$, $selected_symbol$$1$$.$price_currency$), $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$order_book_bid_$.render($goog$dom$getElement$$("id_order_book_bid_content")), $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$order_book_offer_$.render($goog$dom$getElement$$("id_order_book_ask_content")), 
  $JSCompiler_StaticMethods_listen$$($handler$$55$$, $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$order_book_bid_$, $bitex$ui$OrderBook$EventType$CANCEL$$, $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$onCancelOrder_$), $JSCompiler_StaticMethods_listen$$($handler$$55$$, $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$order_book_offer_$, $bitex$ui$OrderBook$EventType$CANCEL$$, $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$onCancelOrder_$), 
  $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$market_data_subscription_id_$ = parseInt(1E7 * Math.random(), 10), $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$market_data_subscription_symbol_$ = $selected_symbol$$1$$.$symbol$, $conn$$1_model$$8$$ = $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$app_$.$conn_$, $JSCompiler_StaticMethods_listen$$($handler$$55$$, $conn$$1_model$$8$$, $bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ + "." + $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$market_data_subscription_id_$, 
  $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$onOBClear_$), $JSCompiler_StaticMethods_listen$$($handler$$55$$, $conn$$1_model$$8$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ + "." + $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$onOBDeleteOrdersThru_$), $JSCompiler_StaticMethods_listen$$($handler$$55$$, $conn$$1_model$$8$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ + 
  "." + $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$onOBDeleteOrder_$), $JSCompiler_StaticMethods_listen$$($handler$$55$$, $conn$$1_model$$8$$, $bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ + "." + $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$onOBUpdateOrder_$), $JSCompiler_StaticMethods_listen$$($handler$$55$$, 
  $conn$$1_model$$8$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$market_data_subscription_id_$, $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.$onOBNewOrder_$), $JSCompiler_StaticMethods_recreateOrderBookComponents_$self$$.dispatchEvent("md_subscribe"))
}
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$OfferBookView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$56$$ = this.$getHandler$(), $model$$9$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$56$$, $model$$9$$, "model_setSelectedSymbol", function() {
    var $selected_symbol$$2$$ = $model$$9$$.get("SelectedSymbol"), $selected_broker_id_value$$inline_526$$ = $model$$9$$.get("SelectedBrokerID"), $selectedBroker_value$$inline_523$$ = $model$$9$$.get("UserBrokers")[$selected_broker_id_value$$inline_526$$], $symbol$$2$$ = $selected_symbol$$2$$.$symbol$, $buy_order_entry$$1$$ = $JSCompiler_StaticMethods_getChildAt$$(this, 0), $sell_order_entry$$1$$ = $JSCompiler_StaticMethods_getChildAt$$(this, 1);
    $buy_order_entry$$1$$.$setSymbol$($symbol$$2$$);
    $selected_symbol$$2$$.$qty_currency$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setAmountCurrencySign$$($buy_order_entry$$1$$, $selected_symbol$$2$$.$qty_currency$.$sign$);
    $selected_symbol$$2$$.$price_currency$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setPriceCurrencySign$$($buy_order_entry$$1$$, $selected_symbol$$2$$.$price_currency$.$sign$);
    $sell_order_entry$$1$$.$setSymbol$($symbol$$2$$);
    $selected_symbol$$2$$.$qty_currency$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setAmountCurrencySign$$($sell_order_entry$$1$$, $selected_symbol$$2$$.$qty_currency$.$sign$);
    $selected_symbol$$2$$.$price_currency$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setPriceCurrencySign$$($sell_order_entry$$1$$, $selected_symbol$$2$$.$price_currency$.$sign$);
    $buy_order_entry$$1$$.$setBrokerID$($selected_broker_id_value$$inline_526$$);
    $sell_order_entry$$1$$.$setBrokerID$($selected_broker_id_value$$inline_526$$);
    var $market$$;
    $selectedBroker_value$$inline_523$$ != $JSCompiler_alias_NULL$$ && ($market$$ = $selectedBroker_value$$inline_523$$.AllowedMarkets[$symbol$$2$$]);
    $goog$style$showElement$$($sell_order_entry$$1$$.$getElement$(), $market$$ != $JSCompiler_alias_NULL$$);
    $goog$style$showElement$$($buy_order_entry$$1$$.$getElement$(), $market$$ != $JSCompiler_alias_NULL$$);
    $model$$9$$.get("IsBroker") ? ($selectedBroker_value$$inline_523$$ = $selected_broker_id_value$$inline_526$$ == $model$$9$$.get("Profile").BrokerID, $goog$style$showElement$$($buy_order_entry$$1$$.$clientIdEl_$, $selectedBroker_value$$inline_523$$), $selected_broker_id_value$$inline_526$$ = $selected_broker_id_value$$inline_526$$ == $model$$9$$.get("Profile").BrokerID, $goog$style$showElement$$($sell_order_entry$$1$$.$clientIdEl_$, $selected_broker_id_value$$inline_526$$)) : ($goog$style$showElement$$($buy_order_entry$$1$$.$clientIdEl_$, 
    $JSCompiler_alias_FALSE$$), $goog$style$showElement$$($sell_order_entry$$1$$.$clientIdEl_$, $JSCompiler_alias_FALSE$$));
    $JSCompiler_StaticMethods_recreateOrderBookComponents_$$(this, $selected_symbol$$2$$)
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$56$$, $model$$9$$, "model_setSelectedBrokerID", function() {
    var $buy_order_entry$$2_value$$inline_538$$ = $JSCompiler_StaticMethods_getChildAt$$(this, 0), $sell_order_entry$$2$$ = $JSCompiler_StaticMethods_getChildAt$$(this, 1), $selected_broker_id$$1$$ = $model$$9$$.get("SelectedBrokerID"), $market$$1_selected_symbol$$3_value$$inline_535$$ = $selected_broker_id$$1$$ != $JSCompiler_alias_NULL$$ ? $selected_broker_id$$1$$.$symbol$ : $JSCompiler_alias_NULL$$, $selectedBroker$$1$$ = $model$$9$$.get("UserBrokers")[$selected_broker_id$$1$$];
    $buy_order_entry$$2_value$$inline_538$$.$setBrokerID$($selected_broker_id$$1$$);
    $sell_order_entry$$2$$.$setBrokerID$($selected_broker_id$$1$$);
    $market$$1_selected_symbol$$3_value$$inline_535$$ = $selectedBroker$$1$$.AllowedMarkets[$market$$1_selected_symbol$$3_value$$inline_535$$];
    $goog$style$showElement$$($sell_order_entry$$2$$.$getElement$(), $market$$1_selected_symbol$$3_value$$inline_535$$ != $JSCompiler_alias_NULL$$);
    $goog$style$showElement$$($buy_order_entry$$2_value$$inline_538$$.$getElement$(), $market$$1_selected_symbol$$3_value$$inline_535$$ != $JSCompiler_alias_NULL$$);
    $model$$9$$.get("IsBroker") ? ($market$$1_selected_symbol$$3_value$$inline_535$$ = $selected_broker_id$$1$$ == $model$$9$$.get("Profile").BrokerID, $goog$style$showElement$$($buy_order_entry$$2_value$$inline_538$$.$clientIdEl_$, $market$$1_selected_symbol$$3_value$$inline_535$$), $buy_order_entry$$2_value$$inline_538$$ = $selected_broker_id$$1$$ == $model$$9$$.get("Profile").BrokerID, $goog$style$showElement$$($sell_order_entry$$2$$.$clientIdEl_$, $buy_order_entry$$2_value$$inline_538$$)) : ($goog$style$showElement$$($buy_order_entry$$2_value$$inline_538$$.$clientIdEl_$, 
    $JSCompiler_alias_FALSE$$), $goog$style$showElement$$($sell_order_entry$$2$$.$clientIdEl_$, $JSCompiler_alias_FALSE$$))
  })
};
$JSCompiler_prototypeAlias$$.$onOBClear_$ = function $$JSCompiler_prototypeAlias$$$$onOBClear_$$() {
  this.$order_book_offer_$ != $JSCompiler_alias_NULL$$ && (this.$order_book_bid_$.clear(), this.$order_book_offer_$.clear())
};
$JSCompiler_prototypeAlias$$.$onOBDeleteOrdersThru_$ = function $$JSCompiler_prototypeAlias$$$$onOBDeleteOrdersThru_$$($e$$96_index$$71$$) {
  if(this.$order_book_offer_$ != $JSCompiler_alias_NULL$$) {
    var $msg$$16_side$$2$$ = $e$$96_index$$71$$.data;
    $e$$96_index$$71$$ = $msg$$16_side$$2$$.MDEntryPositionNo;
    $msg$$16_side$$2$$ = $msg$$16_side$$2$$.MDEntryType;
    "0" == $msg$$16_side$$2$$ ? $JSCompiler_StaticMethods_deleteOrderThru$$(this.$order_book_bid_$, $e$$96_index$$71$$) : "1" == $msg$$16_side$$2$$ && $JSCompiler_StaticMethods_deleteOrderThru$$(this.$order_book_offer_$, $e$$96_index$$71$$)
  }
};
$JSCompiler_prototypeAlias$$.$onOBDeleteOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBDeleteOrder_$$($e$$97_index$$72$$) {
  if(this.$order_book_offer_$ != $JSCompiler_alias_NULL$$) {
    var $msg$$17_side$$3$$ = $e$$97_index$$72$$.data;
    $e$$97_index$$72$$ = $msg$$17_side$$3$$.MDEntryPositionNo - 1;
    $msg$$17_side$$3$$ = $msg$$17_side$$3$$.MDEntryType;
    "0" == $msg$$17_side$$3$$ ? $JSCompiler_StaticMethods_deleteOrder$$(this.$order_book_bid_$, $e$$97_index$$72$$) : "1" == $msg$$17_side$$3$$ && $JSCompiler_StaticMethods_deleteOrder$$(this.$order_book_offer_$, $e$$97_index$$72$$)
  }
};
$JSCompiler_prototypeAlias$$.$onOBUpdateOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBUpdateOrder_$$($e$$98_index$$73$$) {
  if(this.$order_book_offer_$ != $JSCompiler_alias_NULL$$) {
    var $msg$$18_side$$4$$ = $e$$98_index$$73$$.data;
    $e$$98_index$$73$$ = $msg$$18_side$$4$$.MDEntryPositionNo - 1;
    var $qty$$ = $msg$$18_side$$4$$.MDEntrySize / 1E8, $msg$$18_side$$4$$ = $msg$$18_side$$4$$.MDEntryType;
    "0" == $msg$$18_side$$4$$ ? $JSCompiler_StaticMethods_updateOrder$$(this.$order_book_bid_$, $e$$98_index$$73$$, $qty$$) : "1" == $msg$$18_side$$4$$ && $JSCompiler_StaticMethods_updateOrder$$(this.$order_book_offer_$, $e$$98_index$$73$$, $qty$$)
  }
};
$JSCompiler_prototypeAlias$$.$onOBNewOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBNewOrder_$$($e$$99_index$$74$$) {
  if(this.$order_book_offer_$ != $JSCompiler_alias_NULL$$) {
    var $msg$$19_side$$5$$ = $e$$99_index$$74$$.data;
    $e$$99_index$$74$$ = $msg$$19_side$$5$$.MDEntryPositionNo - 1;
    var $price$$1$$ = $msg$$19_side$$5$$.MDEntryPx / 1E8, $qty$$1$$ = $msg$$19_side$$5$$.MDEntrySize / 1E8, $username$$3$$ = $msg$$19_side$$5$$.Username, $broker$$3$$ = $msg$$19_side$$5$$.Broker, $orderId$$ = $msg$$19_side$$5$$.OrderID, $msg$$19_side$$5$$ = $msg$$19_side$$5$$.MDEntryType;
    "0" == $msg$$19_side$$5$$ ? $JSCompiler_StaticMethods_insertOrder$$(this.$order_book_bid_$, $e$$99_index$$74$$, $orderId$$, $price$$1$$, $qty$$1$$, $username$$3$$, $broker$$3$$) : "1" == $msg$$19_side$$5$$ && $JSCompiler_StaticMethods_insertOrder$$(this.$order_book_offer_$, $e$$99_index$$74$$, $orderId$$, $price$$1$$, $qty$$1$$, $username$$3$$, $broker$$3$$)
  }
};
$JSCompiler_prototypeAlias$$.$getMDInstruments$ = function $$JSCompiler_prototypeAlias$$$$getMDInstruments$$() {
  return[this.$market_data_subscription_symbol_$]
};
$JSCompiler_prototypeAlias$$.$getMDMarketDepth$ = $JSCompiler_returnArg$$(0);
$JSCompiler_prototypeAlias$$.$getMDEntries$ = function $$JSCompiler_prototypeAlias$$$$getMDEntries$$() {
  return["0", "1"]
};
$JSCompiler_prototypeAlias$$.$onCancelOrder_$ = function $$JSCompiler_prototypeAlias$$$$onCancelOrder_$$($e$$100$$) {
  this.$order_id_$ = $e$$100$$.$order_id$;
  this.$client_order_id_$ = $e$$100$$.$client_order_id$;
  this.dispatchEvent("cancel_order")
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $bitex$view$OfferBookView$$.$superClass_$.$exitDocument$.call(this);
  $JSCompiler_StaticMethods_destroyOrderBookComponents_$$(this)
};
// Input 104
function $bitex$ui$OrderManager$$($grid_columns_simple_opt_mode$$, $opt_blinkDelay$$2_options$$10$$, $opt_domHelper$$17$$) {
  this.$mode_$ = $grid_columns_simple_opt_mode$$ || "advanced";
  this.$blink_delay_$ = $opt_blinkDelay$$2_options$$10$$ || 700;
  $grid_columns_simple_opt_mode$$ = [{property:"OrderID", label:"Identificaci\u00f3n", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$30$$, $rowSet$$2$$) {
    return $rowSet$$2$$.ClOrdID
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-order-id"
  }}, {property:"Side", label:"Descripcion", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$31$$) {
    return $bitex$ui$OrderManager$Status$$[$s$$31$$]
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-description"
  }}, {property:"OrdStatus", label:"Estado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$32$$) {
    return $bitex$ui$OrderManager$Status$$[$s$$32$$]
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-status"
  }}, {property:"AvgPx", label:"Precio", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-avg-price"
  }}, {property:"Volume", label:"Total", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-volume"
  }}, {property:"ClOrdID", label:"Acciones", sortable:$JSCompiler_alias_FALSE$$, formatter:function($id$$8$$, $row_set_obj$$2$$) {
    var $attributes$$1$$ = {"class":"btn btn-mini btn-danger", "data-action":"cancel", "data-client-order-id":$id$$8$$};
    return $row_set_obj$$2$$ != $JSCompiler_alias_NULL$$ && ($attributes$$1$$["data-order-id"] = $row_set_obj$$2$$.OrderID, 0 == $row_set_obj$$2$$.LeavesQty) ? "" : $goog$dom$createDom$$("a", $attributes$$1$$, "cancelar")
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-actions"
  }}];
  $opt_blinkDelay$$2_options$$10$$ = {rowIDFn:this.$getRowID$, rowClassFn:this.$getRowClass$, columns:[{property:"OrderID", label:"Identificaci\u00f3n", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-order-id"
  }}, {property:"OrdStatus", label:"Estado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$33$$) {
    return $bitex$ui$OrderManager$Status$$[$s$$33$$]
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-status"
  }}, {property:"Side", label:"Lado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$34$$) {
    switch($s$$34$$) {
      case "1":
        return"Comprar";
      case "2":
        return"Vender"
    }
    return""
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-side"
  }}, {property:"OrderQty", label:"Cantidad", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$35$$) {
    return($s$$35$$ / 1E8).toFixed(8)
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-order-qty"
  }}, {property:"Price", label:"Precio", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$36$$) {
    return($s$$36$$ / 1E8).toFixed(5)
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-price"
  }}, {property:"LeavesQty", label:"Dejar cantidad", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$37$$) {
    return($s$$37$$ / 1E8).toFixed(8)
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-leaves_qty"
  }}, {property:"CumQty", label:"Cantidad acumulada", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$38$$) {
    return($s$$38$$ / 1E8).toFixed(8)
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-cum-qty"
  }}, {property:"AvgPx", label:"Precio promedio", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$39$$) {
    return($s$$39$$ / 1E8).toFixed(5)
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-avg-price"
  }}, {property:"ClOrdID", label:"Acciones", sortable:$JSCompiler_alias_FALSE$$, formatter:function($id$$9$$, $row_set_obj$$3$$) {
    var $attributes$$2$$ = {"class":"btn btn-mini btn-danger", "data-action":"cancel", "data-client-order-id":$id$$9$$};
    return $row_set_obj$$3$$ != $JSCompiler_alias_NULL$$ && ($attributes$$2$$["data-order-id"] = $row_set_obj$$3$$.OrderID, 0 == $row_set_obj$$3$$.LeavesQty) ? "" : $goog$dom$createDom$$("a", $attributes$$2$$, "cancelar")
  }, classes:function() {
    return $bitex$ui$OrderManager$CSS_CLASS$$ + "-actions"
  }}], title:"Mis ordenes", showSearch:$JSCompiler_alias_FALSE$$};
  "simple" == this.$mode_$ && ($opt_blinkDelay$$2_options$$10$$.columns = $grid_columns_simple_opt_mode$$);
  $bitex$ui$DataGrid$$.call(this, $opt_blinkDelay$$2_options$$10$$, $opt_domHelper$$17$$)
}
$goog$inherits$$($bitex$ui$OrderManager$$, $bitex$ui$DataGrid$$);
var $bitex$ui$OrderManager$Status$$ = {"-":"Pendiente", 0:"Nuevo", 1:"Parcialmente completado", 2:"Completado", 4:"Cancelado"}, $bitex$ui$OrderManager$CSS_CLASS$$ = "order-manager";
$bitex$ui$OrderManager$$.prototype.$getCssClass$ = function $$bitex$ui$OrderManager$$$$$getCssClass$$() {
  return $bitex$ui$OrderManager$CSS_CLASS$$
};
$bitex$ui$OrderManager$$.prototype.$getRowID$ = function $$bitex$ui$OrderManager$$$$$getRowID$$($row_set$$5$$) {
  return $JSCompiler_StaticMethods_getId$$(this) + "_" + $row_set$$5$$.ClOrdID
};
$bitex$ui$OrderManager$$.prototype.$getRowClass$ = function $$bitex$ui$OrderManager$$$$$getRowClass$$($row_set$$6$$) {
  var $class_status$$2$$;
  switch($row_set$$6$$.OrdStatus) {
    case "-":
      $class_status$$2$$ = $bitex$ui$OrderManager$CSS_CLASS$$ + "-pending";
      break;
    case "0":
      $class_status$$2$$ = $bitex$ui$OrderManager$CSS_CLASS$$ + "-new";
      break;
    case "1":
      $class_status$$2$$ = $bitex$ui$OrderManager$CSS_CLASS$$ + "-partial";
      break;
    case "2":
      $class_status$$2$$ = $bitex$ui$OrderManager$CSS_CLASS$$ + "-fill";
      break;
    case "4":
      $class_status$$2$$ = $bitex$ui$OrderManager$CSS_CLASS$$ + "-cancel"
  }
  return $class_status$$2$$
};
$bitex$ui$OrderManager$$.prototype.$enterDocument$ = function $$bitex$ui$OrderManager$$$$$enterDocument$$() {
  $bitex$ui$OrderManager$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "click", function($client_order_id$$1_e$$101$$) {
    var $order_id$$ = $client_order_id$$1_e$$101$$.target.getAttribute("data-order-id");
    $order_id$$ != $JSCompiler_alias_NULL$$ ? this.dispatchEvent(new $bitex$ui$OrderManagerEvent$$("cancel", $order_id$$)) : ($client_order_id$$1_e$$101$$ = $client_order_id$$1_e$$101$$.target.getAttribute("data-client-order-id"), this.dispatchEvent(new $bitex$ui$OrderManagerEvent$$("cancel", $JSCompiler_alias_VOID$$, $client_order_id$$1_e$$101$$)))
  })
};
function $bitex$ui$OrderManagerEvent$$($type$$103$$, $opt_order_id$$, $opt_client_order_id$$) {
  $goog$events$Event$$.call(this, $type$$103$$);
  this.$order_id$ = $opt_order_id$$;
  this.$client_order_id$ = $opt_client_order_id$$
}
$goog$inherits$$($bitex$ui$OrderManagerEvent$$, $goog$events$Event$$);
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$OrderManager$CSS_CLASS$$, function() {
  return new $bitex$ui$OrderManager$$
});
// Input 105
function $goog$ui$ControlRenderer$$() {
}
var $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$;
$goog$addSingletonGetter$$($goog$ui$ControlRenderer$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$ControlRenderer$$.prototype;
$JSCompiler_prototypeAlias$$.$getAriaRole$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($control$$) {
  var $element$$133$$ = $control$$.$getDomHelper$().$createDom$("div", $JSCompiler_StaticMethods_getClassNames$$(this, $control$$).join(" "), $control$$.$content_$);
  $JSCompiler_StaticMethods_setAriaStates$$(this, $control$$, $element$$133$$);
  return $element$$133$$
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$($element$$134$$) {
  return $element$$134$$
};
$JSCompiler_prototypeAlias$$.$enableClassName$ = function $$JSCompiler_prototypeAlias$$$$enableClassName$$($control$$1_element$$135$$, $className$$19$$, $enable$$2$$) {
  if($control$$1_element$$135$$ = $control$$1_element$$135$$.$getElement$ ? $control$$1_element$$135$$.$getElement$() : $control$$1_element$$135$$) {
    if($goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7")) {
      var $combinedClasses$$ = $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($goog$dom$classes$get$$($control$$1_element$$135$$), $className$$19$$);
      $combinedClasses$$.push($className$$19$$);
      $goog$partial$$($enable$$2$$ ? $goog$dom$classes$add$$ : $goog$dom$classes$remove$$, $control$$1_element$$135$$).apply($JSCompiler_alias_NULL$$, $combinedClasses$$)
    }else {
      $enable$$2$$ ? $goog$dom$classes$add$$($control$$1_element$$135$$, $className$$19$$) : $goog$dom$classes$remove$$($control$$1_element$$135$$, $className$$19$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($control$$3$$, $element$$137$$) {
  $element$$137$$.id && $JSCompiler_StaticMethods_setId$$($control$$3$$, $element$$137$$.id);
  var $contentElem_hasCombinedClassName$$ = this.$getContentElement$($element$$137$$);
  $contentElem_hasCombinedClassName$$ && $contentElem_hasCombinedClassName$$.firstChild ? $control$$3$$.$setContentInternal$($contentElem_hasCombinedClassName$$.firstChild.nextSibling ? $goog$array$toArray$$($contentElem_hasCombinedClassName$$.childNodes) : $contentElem_hasCombinedClassName$$.firstChild) : $control$$3$$.$setContentInternal$($JSCompiler_alias_NULL$$);
  var $state$$3$$ = 0, $rendererClassName$$ = this.$getCssClass$(), $structuralClassName$$ = this.$getCssClass$(), $hasRendererClassName$$ = $JSCompiler_alias_FALSE$$, $hasStructuralClassName$$ = $JSCompiler_alias_FALSE$$, $contentElem_hasCombinedClassName$$ = $JSCompiler_alias_FALSE$$, $classNames$$2$$ = $goog$dom$classes$get$$($element$$137$$);
  $goog$array$forEach$$($classNames$$2$$, function($className$$21_state$$inline_552$$) {
    if(!$hasRendererClassName$$ && $className$$21_state$$inline_552$$ == $rendererClassName$$) {
      $hasRendererClassName$$ = $JSCompiler_alias_TRUE$$, $structuralClassName$$ == $rendererClassName$$ && ($hasStructuralClassName$$ = $JSCompiler_alias_TRUE$$)
    }else {
      if(!$hasStructuralClassName$$ && $className$$21_state$$inline_552$$ == $structuralClassName$$) {
        $hasStructuralClassName$$ = $JSCompiler_alias_TRUE$$
      }else {
        var $JSCompiler_temp_const$$58$$ = $state$$3$$;
        if(!this.$stateByClass_$) {
          this.$classByState_$ || $JSCompiler_StaticMethods_createClassByStateMap_$$(this);
          var $obj$$inline_1258$$ = this.$classByState_$, $transposed$$inline_1259$$ = {}, $key$$inline_1260$$;
          for($key$$inline_1260$$ in $obj$$inline_1258$$) {
            $transposed$$inline_1259$$[$obj$$inline_1258$$[$key$$inline_1260$$]] = $key$$inline_1260$$
          }
          this.$stateByClass_$ = $transposed$$inline_1259$$
        }
        $className$$21_state$$inline_552$$ = parseInt(this.$stateByClass_$[$className$$21_state$$inline_552$$], 10);
        $state$$3$$ = $JSCompiler_temp_const$$58$$ | (isNaN($className$$21_state$$inline_552$$) ? 0 : $className$$21_state$$inline_552$$)
      }
    }
  }, this);
  $control$$3$$.$state_$ = $state$$3$$;
  $hasRendererClassName$$ || ($classNames$$2$$.push($rendererClassName$$), $structuralClassName$$ == $rendererClassName$$ && ($hasStructuralClassName$$ = $JSCompiler_alias_TRUE$$));
  $hasStructuralClassName$$ || $classNames$$2$$.push($structuralClassName$$);
  var $extraClassNames$$ = $control$$3$$.$extraClassNames_$;
  $extraClassNames$$ && $classNames$$2$$.push.apply($classNames$$2$$, $extraClassNames$$);
  if($goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7")) {
    var $combinedClasses$$1$$ = $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($classNames$$2$$);
    0 < $combinedClasses$$1$$.length && ($classNames$$2$$.push.apply($classNames$$2$$, $combinedClasses$$1$$), $contentElem_hasCombinedClassName$$ = $JSCompiler_alias_TRUE$$)
  }
  if(!$hasRendererClassName$$ || !$hasStructuralClassName$$ || $extraClassNames$$ || $contentElem_hasCombinedClassName$$) {
    $element$$137$$.className = $classNames$$2$$.join(" ")
  }
  $JSCompiler_StaticMethods_setAriaStates$$(this, $control$$3$$, $element$$137$$);
  return $element$$137$$
};
$JSCompiler_prototypeAlias$$.$initializeDom$ = function $$JSCompiler_prototypeAlias$$$$initializeDom$$($control$$4$$) {
  $control$$4$$.$isRightToLeft$() && this.$setRightToLeft$($control$$4$$.$getElement$(), $JSCompiler_alias_TRUE$$);
  $control$$4$$.isEnabled() && this.$setFocusable$($control$$4$$, $control$$4$$.$visible_$)
};
function $JSCompiler_StaticMethods_setAriaStates$$($JSCompiler_StaticMethods_setAriaStates$self$$, $control$$5$$, $element$$139$$) {
  $control$$5$$.$visible_$ || $goog$a11y$aria$setState$$($element$$139$$, "hidden", !$control$$5$$.$visible_$);
  $control$$5$$.isEnabled() || $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$139$$, 1, !$control$$5$$.isEnabled());
  $control$$5$$.$supportedStates_$ & 8 && $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$139$$, 8, !!($control$$5$$.$state_$ & 8));
  $control$$5$$.$supportedStates_$ & 16 && $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$139$$, 16, !!($control$$5$$.$state_$ & 16));
  $control$$5$$.$supportedStates_$ & 64 && $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$139$$, 64, $control$$5$$.$isOpen$())
}
$JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = function $$JSCompiler_prototypeAlias$$$$setAllowTextSelection$$($element$$140$$, $allow$$) {
  var $unselectable$$inline_561_value$$inline_564$$ = !$allow$$, $descendants$$inline_563$$ = $goog$userAgent$IE$$ || $goog$userAgent$OPERA$$ ? $element$$140$$.getElementsByTagName("*") : $JSCompiler_alias_NULL$$;
  if($goog$style$unselectableStyle_$$) {
    if($unselectable$$inline_561_value$$inline_564$$ = $unselectable$$inline_561_value$$inline_564$$ ? "none" : "", $element$$140$$.style[$goog$style$unselectableStyle_$$] = $unselectable$$inline_561_value$$inline_564$$, $descendants$$inline_563$$) {
      for(var $i$$inline_565$$ = 0, $descendant$$inline_566$$;$descendant$$inline_566$$ = $descendants$$inline_563$$[$i$$inline_565$$];$i$$inline_565$$++) {
        $descendant$$inline_566$$.style[$goog$style$unselectableStyle_$$] = $unselectable$$inline_561_value$$inline_564$$
      }
    }
  }else {
    if($goog$userAgent$IE$$ || $goog$userAgent$OPERA$$) {
      if($unselectable$$inline_561_value$$inline_564$$ = $unselectable$$inline_561_value$$inline_564$$ ? "on" : "", $element$$140$$.setAttribute("unselectable", $unselectable$$inline_561_value$$inline_564$$), $descendants$$inline_563$$) {
        for($i$$inline_565$$ = 0;$descendant$$inline_566$$ = $descendants$$inline_563$$[$i$$inline_565$$];$i$$inline_565$$++) {
          $descendant$$inline_566$$.setAttribute("unselectable", $unselectable$$inline_561_value$$inline_564$$)
        }
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$setRightToLeft$$($element$$141$$, $rightToLeft$$2$$) {
  this.$enableClassName$($element$$141$$, this.$getCssClass$() + "-rtl", $rightToLeft$$2$$)
};
$JSCompiler_prototypeAlias$$.$isFocusable$ = function $$JSCompiler_prototypeAlias$$$$isFocusable$$($control$$6$$) {
  var $keyTarget$$;
  return $control$$6$$.$supportedStates_$ & 32 && ($keyTarget$$ = $control$$6$$.$getKeyEventTarget$()) ? $goog$dom$isFocusableTabIndex$$($keyTarget$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$setFocusable$ = function $$JSCompiler_prototypeAlias$$$$setFocusable$$($control$$7$$, $focusable$$) {
  var $keyTarget$$1$$;
  if($control$$7$$.$supportedStates_$ & 32 && ($keyTarget$$1$$ = $control$$7$$.$getKeyEventTarget$())) {
    if(!$focusable$$ && $control$$7$$.$state_$ & 32) {
      try {
        $keyTarget$$1$$.blur()
      }catch($e$$102$$) {
      }
      $control$$7$$.$state_$ & 32 && $control$$7$$.$handleBlur$()
    }
    $goog$dom$isFocusableTabIndex$$($keyTarget$$1$$) != $focusable$$ && $goog$dom$setFocusableTabIndex$$($keyTarget$$1$$, $focusable$$)
  }
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($element$$142$$, $visible$$4$$) {
  $goog$style$showElement$$($element$$142$$, $visible$$4$$);
  $element$$142$$ && $goog$a11y$aria$setState$$($element$$142$$, "hidden", !$visible$$4$$)
};
$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($control$$8$$, $state$$4$$, $enable$$4$$) {
  var $element$$143$$ = $control$$8$$.$getElement$();
  if($element$$143$$) {
    var $className$$22$$ = $JSCompiler_StaticMethods_getClassForState$$(this, $state$$4$$);
    $className$$22$$ && this.$enableClassName$($control$$8$$, $className$$22$$, $enable$$4$$);
    this.$updateAriaState$($element$$143$$, $state$$4$$, $enable$$4$$)
  }
};
$JSCompiler_prototypeAlias$$.$updateAriaState$ = function $$JSCompiler_prototypeAlias$$$$updateAriaState$$($element$$144$$, $ariaState_state$$5$$, $enable$$5$$) {
  $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$ || ($goog$ui$ControlRenderer$ARIA_STATE_MAP_$$ = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  ($ariaState_state$$5$$ = $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$[$ariaState_state$$5$$]) && $goog$a11y$aria$setState$$($element$$144$$, $ariaState_state$$5$$, $enable$$5$$)
};
$JSCompiler_prototypeAlias$$.$setContent$ = function $$JSCompiler_prototypeAlias$$$$setContent$$($element$$145$$, $content$$12$$) {
  var $contentElem$$1$$ = this.$getContentElement$($element$$145$$);
  if($contentElem$$1$$ && ($goog$dom$removeChildren$$($contentElem$$1$$), $content$$12$$)) {
    if($goog$isString$$($content$$12$$)) {
      $goog$dom$setTextContent$$($contentElem$$1$$, $content$$12$$)
    }else {
      var $childHandler$$1$$ = function $$childHandler$$1$$$($child$$16$$) {
        if($child$$16$$) {
          var $doc$$42$$ = $goog$dom$getOwnerDocument$$($contentElem$$1$$);
          $contentElem$$1$$.appendChild($goog$isString$$($child$$16$$) ? $doc$$42$$.createTextNode($child$$16$$) : $child$$16$$)
        }
      };
      $goog$isArray$$($content$$12$$) ? $goog$array$forEach$$($content$$12$$, $childHandler$$1$$) : $goog$isArrayLike$$($content$$12$$) && !("nodeType" in $content$$12$$) ? $goog$array$forEach$$($goog$array$toArray$$($content$$12$$), $childHandler$$1$$) : $childHandler$$1$$($content$$12$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$getKeyEventTarget$ = function $$JSCompiler_prototypeAlias$$$$getKeyEventTarget$$($control$$9$$) {
  return $control$$9$$.$getElement$()
};
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-control");
function $JSCompiler_StaticMethods_getClassNames$$($JSCompiler_StaticMethods_getClassNames$self$$, $control$$10$$) {
  var $cssClass_extraClassNames$$1_state$$inline_569$$ = $JSCompiler_StaticMethods_getClassNames$self$$.$getCssClass$(), $classNames$$3$$ = [$cssClass_extraClassNames$$1_state$$inline_569$$], $classNames$$inline_570_structuralCssClass$$ = $JSCompiler_StaticMethods_getClassNames$self$$.$getCssClass$();
  $classNames$$inline_570_structuralCssClass$$ != $cssClass_extraClassNames$$1_state$$inline_569$$ && $classNames$$3$$.push($classNames$$inline_570_structuralCssClass$$);
  $cssClass_extraClassNames$$1_state$$inline_569$$ = $control$$10$$.$getState$();
  for($classNames$$inline_570_structuralCssClass$$ = [];$cssClass_extraClassNames$$1_state$$inline_569$$;) {
    var $mask$$inline_571$$ = $cssClass_extraClassNames$$1_state$$inline_569$$ & -$cssClass_extraClassNames$$1_state$$inline_569$$;
    $classNames$$inline_570_structuralCssClass$$.push($JSCompiler_StaticMethods_getClassForState$$($JSCompiler_StaticMethods_getClassNames$self$$, $mask$$inline_571$$));
    $cssClass_extraClassNames$$1_state$$inline_569$$ &= ~$mask$$inline_571$$
  }
  $classNames$$3$$.push.apply($classNames$$3$$, $classNames$$inline_570_structuralCssClass$$);
  ($cssClass_extraClassNames$$1_state$$inline_569$$ = $control$$10$$.$extraClassNames_$) && $classNames$$3$$.push.apply($classNames$$3$$, $cssClass_extraClassNames$$1_state$$inline_569$$);
  $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7") && $classNames$$3$$.push.apply($classNames$$3$$, $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($classNames$$3$$));
  return $classNames$$3$$
}
function $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($classes$$9$$, $opt_includedClass$$) {
  var $toAdd$$ = [];
  $opt_includedClass$$ && ($classes$$9$$ = $classes$$9$$.concat([$opt_includedClass$$]));
  $goog$array$forEach$$([], function($combo$$) {
    $goog$array$every$$($combo$$, $goog$partial$$($goog$array$contains$$, $classes$$9$$)) && (!$opt_includedClass$$ || $goog$array$contains$$($combo$$, $opt_includedClass$$)) && $toAdd$$.push($combo$$.join("_"))
  });
  return $toAdd$$
}
function $JSCompiler_StaticMethods_getClassForState$$($JSCompiler_StaticMethods_getClassForState$self$$, $state$$7$$) {
  $JSCompiler_StaticMethods_getClassForState$self$$.$classByState_$ || $JSCompiler_StaticMethods_createClassByStateMap_$$($JSCompiler_StaticMethods_getClassForState$self$$);
  return $JSCompiler_StaticMethods_getClassForState$self$$.$classByState_$[$state$$7$$]
}
function $JSCompiler_StaticMethods_createClassByStateMap_$$($JSCompiler_StaticMethods_createClassByStateMap_$self$$) {
  var $baseClass$$ = $JSCompiler_StaticMethods_createClassByStateMap_$self$$.$getCssClass$();
  $JSCompiler_StaticMethods_createClassByStateMap_$self$$.$classByState_$ = {1:$baseClass$$ + "-disabled", 2:$baseClass$$ + "-hover", 4:$baseClass$$ + "-active", 8:$baseClass$$ + "-selected", 16:$baseClass$$ + "-checked", 32:$baseClass$$ + "-focused", 64:$baseClass$$ + "-open"}
}
;
// Input 106
// Input 107
// Input 108
function $goog$events$KeyHandler$$($opt_element$$12$$, $opt_capture$$8$$) {
  $goog$Disposable$$.call(this);
  $opt_element$$12$$ && $JSCompiler_StaticMethods_attach$$(this, $opt_element$$12$$, $opt_capture$$8$$)
}
$goog$inherits$$($goog$events$KeyHandler$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$events$KeyHandler$$.prototype;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$keyPressKey_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$keyDownKey_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$keyUpKey_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$lastKey_$ = -1;
$JSCompiler_prototypeAlias$$.$keyCode_$ = -1;
$JSCompiler_prototypeAlias$$.$altKey_$ = $JSCompiler_alias_FALSE$$;
var $goog$events$KeyHandler$EventType$KEY$$ = "key", $goog$events$KeyHandler$safariKey_$$ = {3:13, 12:144, 63232:$goog$events$KeyCodes$UP$$, 63233:$goog$events$KeyCodes$DOWN$$, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:$goog$events$KeyCodes$DELETE$$, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, $goog$events$KeyHandler$keyIdentifier_$$ = {Up:$goog$events$KeyCodes$UP$$, 
Down:$goog$events$KeyCodes$DOWN$$, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":$goog$events$KeyCodes$DELETE$$, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, $goog$events$KeyHandler$USES_KEYDOWN_$$ = $goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("525"), $goog$events$KeyHandler$SAVE_ALT_FOR_KEYPRESS_$$ = $goog$userAgent$detectedMac_$$ && $goog$userAgent$GECKO$$;
$JSCompiler_prototypeAlias$$ = $goog$events$KeyHandler$$.prototype;
$JSCompiler_prototypeAlias$$.$handleKeyDown_$ = function $$JSCompiler_prototypeAlias$$$$handleKeyDown_$$($e$$103$$) {
  if($goog$userAgent$WEBKIT$$ && (17 == this.$lastKey_$ && !$e$$103$$.ctrlKey || 18 == this.$lastKey_$ && !$e$$103$$.altKey || $goog$userAgent$detectedMac_$$ && 91 == this.$lastKey_$ && !$e$$103$$.metaKey)) {
    this.$keyCode_$ = this.$lastKey_$ = -1
  }
  -1 == this.$lastKey_$ && ($e$$103$$.ctrlKey && 17 != $e$$103$$.keyCode ? this.$lastKey_$ = 17 : $e$$103$$.altKey && 18 != $e$$103$$.keyCode ? this.$lastKey_$ = 18 : $e$$103$$.metaKey && 91 != $e$$103$$.keyCode && (this.$lastKey_$ = 91));
  $goog$events$KeyHandler$USES_KEYDOWN_$$ && !$goog$events$KeyCodes$firesKeyPressEvent$$($e$$103$$.keyCode, this.$lastKey_$, $e$$103$$.shiftKey, $e$$103$$.ctrlKey, $e$$103$$.altKey) ? this.handleEvent($e$$103$$) : (this.$keyCode_$ = $goog$userAgent$GECKO$$ ? $goog$events$KeyCodes$normalizeGeckoKeyCode$$($e$$103$$.keyCode) : $e$$103$$.keyCode, $goog$events$KeyHandler$SAVE_ALT_FOR_KEYPRESS_$$ && (this.$altKey_$ = $e$$103$$.altKey))
};
$JSCompiler_prototypeAlias$$.$handleKeyup_$ = function $$JSCompiler_prototypeAlias$$$$handleKeyup_$$($e$$104$$) {
  this.$keyCode_$ = this.$lastKey_$ = -1;
  this.$altKey_$ = $e$$104$$.altKey
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$($e$$105_repeat$$) {
  var $be$$4_event$$4$$ = $e$$105_repeat$$.$event_$, $keyCode$$3$$, $charCode$$4$$, $altKey$$2$$ = $be$$4_event$$4$$.altKey;
  $goog$userAgent$IE$$ && "keypress" == $e$$105_repeat$$.type ? ($keyCode$$3$$ = this.$keyCode_$, $charCode$$4$$ = 13 != $keyCode$$3$$ && 27 != $keyCode$$3$$ ? $be$$4_event$$4$$.keyCode : 0) : $goog$userAgent$WEBKIT$$ && "keypress" == $e$$105_repeat$$.type ? ($keyCode$$3$$ = this.$keyCode_$, $charCode$$4$$ = 0 <= $be$$4_event$$4$$.charCode && 63232 > $be$$4_event$$4$$.charCode && $goog$events$KeyCodes$isCharacterKey$$($keyCode$$3$$) ? $be$$4_event$$4$$.charCode : 0) : $goog$userAgent$OPERA$$ ? ($keyCode$$3$$ = 
  this.$keyCode_$, $charCode$$4$$ = $goog$events$KeyCodes$isCharacterKey$$($keyCode$$3$$) ? $be$$4_event$$4$$.keyCode : 0) : ($keyCode$$3$$ = $be$$4_event$$4$$.keyCode || this.$keyCode_$, $charCode$$4$$ = $be$$4_event$$4$$.charCode || 0, $goog$events$KeyHandler$SAVE_ALT_FOR_KEYPRESS_$$ && ($altKey$$2$$ = this.$altKey_$), $goog$userAgent$detectedMac_$$ && (63 == $charCode$$4$$ && 224 == $keyCode$$3$$) && ($keyCode$$3$$ = 191));
  var $key$$90$$ = $keyCode$$3$$, $keyIdentifier$$ = $be$$4_event$$4$$.keyIdentifier;
  $keyCode$$3$$ ? 63232 <= $keyCode$$3$$ && $keyCode$$3$$ in $goog$events$KeyHandler$safariKey_$$ ? $key$$90$$ = $goog$events$KeyHandler$safariKey_$$[$keyCode$$3$$] : 25 == $keyCode$$3$$ && $e$$105_repeat$$.shiftKey && ($key$$90$$ = 9) : $keyIdentifier$$ && $keyIdentifier$$ in $goog$events$KeyHandler$keyIdentifier_$$ && ($key$$90$$ = $goog$events$KeyHandler$keyIdentifier_$$[$keyIdentifier$$]);
  $e$$105_repeat$$ = $key$$90$$ == this.$lastKey_$;
  this.$lastKey_$ = $key$$90$$;
  $be$$4_event$$4$$ = new $goog$events$KeyEvent$$($key$$90$$, $charCode$$4$$, $e$$105_repeat$$, $be$$4_event$$4$$);
  $be$$4_event$$4$$.altKey = $altKey$$2$$;
  this.dispatchEvent($be$$4_event$$4$$)
};
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
function $JSCompiler_StaticMethods_attach$$($JSCompiler_StaticMethods_attach$self$$, $element$$147$$, $opt_capture$$9$$) {
  $JSCompiler_StaticMethods_attach$self$$.$keyUpKey_$ && $JSCompiler_StaticMethods_attach$self$$.detach();
  $JSCompiler_StaticMethods_attach$self$$.$element_$ = $element$$147$$;
  $JSCompiler_StaticMethods_attach$self$$.$keyPressKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keypress", $JSCompiler_StaticMethods_attach$self$$, $opt_capture$$9$$);
  $JSCompiler_StaticMethods_attach$self$$.$keyDownKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keydown", $JSCompiler_StaticMethods_attach$self$$.$handleKeyDown_$, $opt_capture$$9$$, $JSCompiler_StaticMethods_attach$self$$);
  $JSCompiler_StaticMethods_attach$self$$.$keyUpKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keyup", $JSCompiler_StaticMethods_attach$self$$.$handleKeyup_$, $opt_capture$$9$$, $JSCompiler_StaticMethods_attach$self$$)
}
$JSCompiler_prototypeAlias$$.detach = function $$JSCompiler_prototypeAlias$$$detach$() {
  this.$keyPressKey_$ && ($goog$events$unlistenByKey$$(this.$keyPressKey_$), $goog$events$unlistenByKey$$(this.$keyDownKey_$), $goog$events$unlistenByKey$$(this.$keyUpKey_$), this.$keyUpKey_$ = this.$keyDownKey_$ = this.$keyPressKey_$ = $JSCompiler_alias_NULL$$);
  this.$element_$ = $JSCompiler_alias_NULL$$;
  this.$keyCode_$ = this.$lastKey_$ = -1
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$KeyHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.detach()
};
function $goog$events$KeyEvent$$($keyCode$$4$$, $charCode$$5$$, $repeat$$1$$, $browserEvent$$1$$) {
  $browserEvent$$1$$ && this.init($browserEvent$$1$$, $JSCompiler_alias_VOID$$);
  this.type = $goog$events$KeyHandler$EventType$KEY$$;
  this.keyCode = $keyCode$$4$$;
  this.charCode = $charCode$$5$$;
  this.repeat = $repeat$$1$$
}
$goog$inherits$$($goog$events$KeyEvent$$, $goog$events$BrowserEvent$$);
// Input 109
function $goog$ui$Control$$($content$$13$$, $JSCompiler_temp$$25_componentCtor$$inline_579_opt_renderer$$, $opt_domHelper$$18$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$18$$);
  if(!$JSCompiler_temp$$25_componentCtor$$inline_579_opt_renderer$$) {
    $JSCompiler_temp$$25_componentCtor$$inline_579_opt_renderer$$ = this.constructor;
    for(var $key$$inline_580_rendererCtor$$inline_581$$;$JSCompiler_temp$$25_componentCtor$$inline_579_opt_renderer$$;) {
      $key$$inline_580_rendererCtor$$inline_581$$ = $goog$getUid$$($JSCompiler_temp$$25_componentCtor$$inline_579_opt_renderer$$);
      if($key$$inline_580_rendererCtor$$inline_581$$ = $goog$ui$registry$defaultRenderers_$$[$key$$inline_580_rendererCtor$$inline_581$$]) {
        break
      }
      $JSCompiler_temp$$25_componentCtor$$inline_579_opt_renderer$$ = $JSCompiler_temp$$25_componentCtor$$inline_579_opt_renderer$$.$superClass_$ ? $JSCompiler_temp$$25_componentCtor$$inline_579_opt_renderer$$.$superClass_$.constructor : $JSCompiler_alias_NULL$$
    }
    $JSCompiler_temp$$25_componentCtor$$inline_579_opt_renderer$$ = $key$$inline_580_rendererCtor$$inline_581$$ ? $goog$isFunction$$($key$$inline_580_rendererCtor$$inline_581$$.$getInstance$) ? $key$$inline_580_rendererCtor$$inline_581$$.$getInstance$() : new $key$$inline_580_rendererCtor$$inline_581$$ : $JSCompiler_alias_NULL$$
  }
  this.$renderer_$ = $JSCompiler_temp$$25_componentCtor$$inline_579_opt_renderer$$;
  this.$setContentInternal$($content$$13$$)
}
$goog$inherits$$($goog$ui$Control$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Control$$.prototype;
$JSCompiler_prototypeAlias$$.$content_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$state_$ = 0;
$JSCompiler_prototypeAlias$$.$supportedStates_$ = 39;
$JSCompiler_prototypeAlias$$.$autoStates_$ = 255;
$JSCompiler_prototypeAlias$$.$statesWithTransitionEvents_$ = 0;
$JSCompiler_prototypeAlias$$.$visible_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$extraClassNames_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$handleMouseEvents_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$allowTextSelection_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$preferredAriaRole_$ = $JSCompiler_alias_NULL$$;
function $JSCompiler_StaticMethods_setHandleMouseEvents$$($JSCompiler_StaticMethods_setHandleMouseEvents$self$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$inDocument_$ && $JSCompiler_alias_FALSE$$ != $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$handleMouseEvents_$ && $JSCompiler_StaticMethods_enableMouseEventHandling_$$($JSCompiler_StaticMethods_setHandleMouseEvents$self$$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$handleMouseEvents_$ = $JSCompiler_alias_FALSE$$
}
$JSCompiler_prototypeAlias$$.$getKeyEventTarget$ = function $$JSCompiler_prototypeAlias$$$$getKeyEventTarget$$() {
  return this.$renderer_$.$getKeyEventTarget$(this)
};
$JSCompiler_prototypeAlias$$.$enableClassName$ = function $$JSCompiler_prototypeAlias$$$$enableClassName$$($className$$26$$, $enable$$7$$) {
  $enable$$7$$ ? $className$$26$$ && (this.$extraClassNames_$ ? $goog$array$contains$$(this.$extraClassNames_$, $className$$26$$) || this.$extraClassNames_$.push($className$$26$$) : this.$extraClassNames_$ = [$className$$26$$], this.$renderer_$.$enableClassName$(this, $className$$26$$, $JSCompiler_alias_TRUE$$)) : $className$$26$$ && this.$extraClassNames_$ && ($goog$array$remove$$(this.$extraClassNames_$, $className$$26$$), 0 == this.$extraClassNames_$.length && (this.$extraClassNames_$ = $JSCompiler_alias_NULL$$), 
  this.$renderer_$.$enableClassName$(this, $className$$26$$, $JSCompiler_alias_FALSE$$))
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $element$$148$$ = this.$renderer_$.$createDom$(this);
  this.$element_$ = $element$$148$$;
  var $ariaRole$$inline_605$$ = this.$preferredAriaRole_$ || this.$renderer_$.$getAriaRole$();
  $ariaRole$$inline_605$$ && $element$$148$$.setAttribute("role", $ariaRole$$inline_605$$);
  this.$allowTextSelection_$ || this.$renderer_$.$setAllowTextSelection$($element$$148$$, $JSCompiler_alias_FALSE$$);
  this.$visible_$ || this.$renderer_$.$setVisible$($element$$148$$, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$() {
  return this.$renderer_$.$getContentElement$(this.$getElement$())
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = function $$JSCompiler_prototypeAlias$$$$canDecorate$$($element$$149$$) {
  return this.$renderer_$.$canDecorate$($element$$149$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$150$$) {
  this.$element_$ = $element$$150$$ = this.$renderer_$.$decorate$(this, $element$$150$$);
  var $ariaRole$$inline_613$$ = this.$preferredAriaRole_$ || this.$renderer_$.$getAriaRole$();
  $ariaRole$$inline_613$$ && $element$$150$$.setAttribute("role", $ariaRole$$inline_613$$);
  this.$allowTextSelection_$ || this.$renderer_$.$setAllowTextSelection$($element$$150$$, $JSCompiler_alias_FALSE$$);
  this.$visible_$ = "none" != $element$$150$$.style.display
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$Control$$.$superClass_$.$enterDocument$.call(this);
  this.$renderer_$.$initializeDom$(this);
  if(this.$supportedStates_$ & -2 && (this.$handleMouseEvents_$ && $JSCompiler_StaticMethods_enableMouseEventHandling_$$(this, $JSCompiler_alias_TRUE$$), this.$supportedStates_$ & 32)) {
    var $keyTarget$$2$$ = this.$getKeyEventTarget$();
    if($keyTarget$$2$$) {
      var $keyHandler$$ = this.$keyHandler_$ || (this.$keyHandler_$ = new $goog$events$KeyHandler$$);
      $JSCompiler_StaticMethods_attach$$($keyHandler$$, $keyTarget$$2$$);
      $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $keyHandler$$, $goog$events$KeyHandler$EventType$KEY$$, this.$handleKeyEvent$), $keyTarget$$2$$, "focus", this.$handleFocus$), $keyTarget$$2$$, "blur", this.$handleBlur$)
    }
  }
};
function $JSCompiler_StaticMethods_enableMouseEventHandling_$$($JSCompiler_StaticMethods_enableMouseEventHandling_$self$$, $enable$$8$$) {
  var $handler$$58$$ = $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$getHandler$(), $element$$151$$ = $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$getElement$();
  $enable$$8$$ ? ($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($handler$$58$$, $element$$151$$, "mouseover", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOver$), $element$$151$$, "mousedown", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseDown$), $element$$151$$, "mouseup", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseUp$), $element$$151$$, 
  "mouseout", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOut$), $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$ != $goog$nullFunction$$ && $JSCompiler_StaticMethods_listen$$($handler$$58$$, $element$$151$$, "contextmenu", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$), $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_listen$$($handler$$58$$, $element$$151$$, "dblclick", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleDblClick$)) : 
  ($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($handler$$58$$, $element$$151$$, "mouseover", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOver$), $element$$151$$, "mousedown", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseDown$), $element$$151$$, "mouseup", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseUp$), $element$$151$$, 
  "mouseout", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOut$), $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$ != $goog$nullFunction$$ && $JSCompiler_StaticMethods_unlisten$$($handler$$58$$, $element$$151$$, "contextmenu", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$), $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_unlisten$$($handler$$58$$, $element$$151$$, "dblclick", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleDblClick$))
}
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $goog$ui$Control$$.$superClass_$.$exitDocument$.call(this);
  this.$keyHandler_$ && this.$keyHandler_$.detach();
  this.$visible_$ && this.isEnabled() && this.$renderer_$.$setFocusable$(this, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$Control$$.$superClass_$.$disposeInternal$.call(this);
  this.$keyHandler_$ && (this.$keyHandler_$.$dispose$(), delete this.$keyHandler_$);
  delete this.$renderer_$;
  this.$extraClassNames_$ = this.$content_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$setContent$ = function $$JSCompiler_prototypeAlias$$$$setContent$$($content$$14$$) {
  this.$renderer_$.$setContent$(this.$getElement$(), $content$$14$$);
  this.$setContentInternal$($content$$14$$)
};
$JSCompiler_prototypeAlias$$.$setContentInternal$ = $JSCompiler_set$$("$content_$");
function $JSCompiler_StaticMethods_getCaption$$($JSCompiler_StaticMethods_getCaption$self_content$$16$$) {
  $JSCompiler_StaticMethods_getCaption$self_content$$16$$ = $JSCompiler_StaticMethods_getCaption$self_content$$16$$.$content_$;
  return!$JSCompiler_StaticMethods_getCaption$self_content$$16$$ ? "" : ($goog$isString$$($JSCompiler_StaticMethods_getCaption$self_content$$16$$) ? $JSCompiler_StaticMethods_getCaption$self_content$$16$$ : $goog$isArray$$($JSCompiler_StaticMethods_getCaption$self_content$$16$$) ? $goog$array$map$$($JSCompiler_StaticMethods_getCaption$self_content$$16$$, $goog$dom$getRawTextContent$$).join("") : $goog$dom$getTextContent$$($JSCompiler_StaticMethods_getCaption$self_content$$16$$)).replace(/[\t\r\n ]+/g, 
  " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$setRightToLeft$$($rightToLeft$$3$$) {
  $goog$ui$Control$$.$superClass_$.$setRightToLeft$.call(this, $rightToLeft$$3$$);
  var $element$$152$$ = this.$getElement$();
  $element$$152$$ && this.$renderer_$.$setRightToLeft$($element$$152$$, $rightToLeft$$3$$)
};
$JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = function $$JSCompiler_prototypeAlias$$$$setAllowTextSelection$$($allow$$1$$) {
  this.$allowTextSelection_$ = $allow$$1$$;
  var $element$$153$$ = this.$getElement$();
  $element$$153$$ && this.$renderer_$.$setAllowTextSelection$($element$$153$$, $allow$$1$$)
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($visible$$5$$, $opt_force$$) {
  if($opt_force$$ || this.$visible_$ != $visible$$5$$ && this.dispatchEvent($visible$$5$$ ? "show" : "hide")) {
    var $element$$154$$ = this.$getElement$();
    $element$$154$$ && this.$renderer_$.$setVisible$($element$$154$$, $visible$$5$$);
    this.isEnabled() && this.$renderer_$.$setFocusable$(this, $visible$$5$$);
    this.$visible_$ = $visible$$5$$;
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.isEnabled = function $$JSCompiler_prototypeAlias$$$isEnabled$() {
  return!(this.$state_$ & 1)
};
$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enable$$9$$) {
  var $parent$$inline_616$$ = this.getParent();
  if((!$parent$$inline_616$$ || "function" != typeof $parent$$inline_616$$.isEnabled || $parent$$inline_616$$.isEnabled()) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 1, !$enable$$9$$)) {
    $enable$$9$$ || (this.setActive($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_FALSE$$)), this.$visible_$ && this.$renderer_$.$setFocusable$(this, $enable$$9$$), this.$setState$(1, !$enable$$9$$)
  }
};
function $JSCompiler_StaticMethods_setHighlighted$$($JSCompiler_StaticMethods_setHighlighted$self$$, $highlight$$) {
  $JSCompiler_StaticMethods_isTransitionAllowed$$($JSCompiler_StaticMethods_setHighlighted$self$$, 2, $highlight$$) && $JSCompiler_StaticMethods_setHighlighted$self$$.$setState$(2, $highlight$$)
}
$JSCompiler_prototypeAlias$$.$isActive$ = function $$JSCompiler_prototypeAlias$$$$isActive$$() {
  return!!(this.$state_$ & 4)
};
$JSCompiler_prototypeAlias$$.setActive = function $$JSCompiler_prototypeAlias$$$setActive$($active$$) {
  $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 4, $active$$) && this.$setState$(4, $active$$)
};
$JSCompiler_prototypeAlias$$.$isOpen$ = function $$JSCompiler_prototypeAlias$$$$isOpen$$() {
  return!!(this.$state_$ & 64)
};
$JSCompiler_prototypeAlias$$.$getState$ = $JSCompiler_get$$("$state_$");
$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($state$$10$$, $enable$$10$$) {
  this.$supportedStates_$ & $state$$10$$ && $enable$$10$$ != !!(this.$state_$ & $state$$10$$) && (this.$renderer_$.$setState$(this, $state$$10$$, $enable$$10$$), this.$state_$ = $enable$$10$$ ? this.$state_$ | $state$$10$$ : this.$state_$ & ~$state$$10$$)
};
function $JSCompiler_StaticMethods_setSupportedState$$($JSCompiler_StaticMethods_setSupportedState$self$$) {
  $JSCompiler_StaticMethods_setSupportedState$self$$.$inDocument_$ && $JSCompiler_StaticMethods_setSupportedState$self$$.$state_$ & 32 && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  $JSCompiler_StaticMethods_setSupportedState$self$$.$state_$ & 32 && $JSCompiler_StaticMethods_setSupportedState$self$$.$setState$(32, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_setSupportedState$self$$.$supportedStates_$ &= -33
}
function $JSCompiler_StaticMethods_isAutoState$$($JSCompiler_StaticMethods_isAutoState$self$$, $state$$14$$) {
  return!!($JSCompiler_StaticMethods_isAutoState$self$$.$autoStates_$ & $state$$14$$) && !!($JSCompiler_StaticMethods_isAutoState$self$$.$supportedStates_$ & $state$$14$$)
}
function $JSCompiler_StaticMethods_isTransitionAllowed$$($JSCompiler_StaticMethods_isTransitionAllowed$self$$, $state$$16$$, $enable$$13$$) {
  return!!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$supportedStates_$ & $state$$16$$) && !!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$state_$ & $state$$16$$) != $enable$$13$$ && (!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$statesWithTransitionEvents_$ & $state$$16$$) || $JSCompiler_StaticMethods_isTransitionAllowed$self$$.dispatchEvent($goog$ui$Component$getStateTransitionEvent$$($state$$16$$, $enable$$13$$))) && !$JSCompiler_StaticMethods_isTransitionAllowed$self$$.$disposed_$
}
$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$($e$$106$$) {
  (!$e$$106$$.relatedTarget || !$goog$dom$contains$$(this.$getElement$(), $e$$106$$.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && $JSCompiler_StaticMethods_isAutoState$$(this, 2)) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$($e$$107$$) {
  if((!$e$$107$$.relatedTarget || !$goog$dom$contains$$(this.$getElement$(), $e$$107$$.relatedTarget)) && this.dispatchEvent("leave")) {
    $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$handleContextMenu$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$handleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleMouseDown$$($e$$109$$) {
  this.isEnabled() && ($JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_isMouseActionButton$$($e$$109$$) && ($JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_TRUE$$), this.$renderer_$.$isFocusable$(this) && this.$getKeyEventTarget$().focus()));
  !this.$allowTextSelection_$ && $JSCompiler_StaticMethods_isMouseActionButton$$($e$$109$$) && $e$$109$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($e$$110$$) {
  this.isEnabled() && ($JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$), this.$isActive$() && (this.$performActionInternal$($e$$110$$) && $JSCompiler_StaticMethods_isAutoState$$(this, 4)) && this.setActive($JSCompiler_alias_FALSE$$))
};
$JSCompiler_prototypeAlias$$.$handleDblClick$ = function $$JSCompiler_prototypeAlias$$$$handleDblClick$$($e$$111$$) {
  this.isEnabled() && this.$performActionInternal$($e$$111$$)
};
$JSCompiler_prototypeAlias$$.$performActionInternal$ = function $$JSCompiler_prototypeAlias$$$$performActionInternal$$($e$$112$$) {
  if($JSCompiler_StaticMethods_isAutoState$$(this, 16)) {
    var $actionEvent_check$$inline_619_open$$inline_625$$ = !(this.$state_$ & 16);
    $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 16, $actionEvent_check$$inline_619_open$$inline_625$$) && this.$setState$(16, $actionEvent_check$$inline_619_open$$inline_625$$)
  }
  $JSCompiler_StaticMethods_isAutoState$$(this, 8) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 8, $JSCompiler_alias_TRUE$$) && this.$setState$(8, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_isAutoState$$(this, 64) && ($actionEvent_check$$inline_619_open$$inline_625$$ = !this.$isOpen$(), $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 64, $actionEvent_check$$inline_619_open$$inline_625$$) && this.$setState$(64, $actionEvent_check$$inline_619_open$$inline_625$$));
  $actionEvent_check$$inline_619_open$$inline_625$$ = new $goog$events$Event$$("action", this);
  $e$$112$$ && ($actionEvent_check$$inline_619_open$$inline_625$$.altKey = $e$$112$$.altKey, $actionEvent_check$$inline_619_open$$inline_625$$.ctrlKey = $e$$112$$.ctrlKey, $actionEvent_check$$inline_619_open$$inline_625$$.metaKey = $e$$112$$.metaKey, $actionEvent_check$$inline_619_open$$inline_625$$.shiftKey = $e$$112$$.shiftKey, $actionEvent_check$$inline_619_open$$inline_625$$.$platformModifierKey$ = $e$$112$$.$platformModifierKey$);
  return this.dispatchEvent($actionEvent_check$$inline_619_open$$inline_625$$)
};
$JSCompiler_prototypeAlias$$.$handleFocus$ = function $$JSCompiler_prototypeAlias$$$$handleFocus$$() {
  $JSCompiler_StaticMethods_isAutoState$$(this, 32) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 32, $JSCompiler_alias_TRUE$$) && this.$setState$(32, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$handleBlur$ = function $$JSCompiler_prototypeAlias$$$$handleBlur$$() {
  $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_isAutoState$$(this, 32) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 32, $JSCompiler_alias_FALSE$$) && this.$setState$(32, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$handleKeyEvent$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEvent$$($e$$115$$) {
  return this.$visible_$ && this.isEnabled() && this.$handleKeyEventInternal$($e$$115$$) ? ($e$$115$$.preventDefault(), $e$$115$$.stopPropagation(), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$handleKeyEventInternal$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEventInternal$$($e$$116$$) {
  return 13 == $e$$116$$.keyCode && this.$performActionInternal$($e$$116$$)
};
$goog$isFunction$$($goog$ui$Control$$) || $JSCompiler_alias_THROW$$(Error("Invalid component class " + $goog$ui$Control$$));
$goog$isFunction$$($goog$ui$ControlRenderer$$) || $JSCompiler_alias_THROW$$(Error("Invalid renderer class " + $goog$ui$ControlRenderer$$));
var $key$$inline_635$$ = $goog$getUid$$($goog$ui$Control$$);
$goog$ui$registry$defaultRenderers_$$[$key$$inline_635$$] = $goog$ui$ControlRenderer$$;
$goog$ui$registry$setDecoratorByClassName$$("goog-control", function() {
  return new $goog$ui$Control$$($JSCompiler_alias_NULL$$)
});
// Input 110
// Input 111
function $goog$ui$ButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$ButtonRenderer$$, $goog$ui$ControlRenderer$$);
$goog$addSingletonGetter$$($goog$ui$ButtonRenderer$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$ButtonRenderer$$.prototype;
$JSCompiler_prototypeAlias$$.$getAriaRole$ = $JSCompiler_returnArg$$("button");
$JSCompiler_prototypeAlias$$.$updateAriaState$ = function $$JSCompiler_prototypeAlias$$$$updateAriaState$$($element$$155$$, $state$$17$$, $enable$$14$$) {
  16 == $state$$17$$ ? $goog$a11y$aria$setState$$($element$$155$$, "pressed", $enable$$14$$) : $goog$ui$ButtonRenderer$$.$superClass_$.$updateAriaState$.call(this, $element$$155$$, $state$$17$$, $enable$$14$$)
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($button$$9$$) {
  var $element$$156$$ = $goog$ui$ButtonRenderer$$.$superClass_$.$createDom$.call(this, $button$$9$$), $tooltip_value$$139$$ = $button$$9$$.$getTooltip$();
  $tooltip_value$$139$$ && this.$setTooltip$($element$$156$$, $tooltip_value$$139$$);
  ($tooltip_value$$139$$ = $button$$9$$.$getValue$()) && this.$setValue$($element$$156$$, $tooltip_value$$139$$);
  $button$$9$$.$supportedStates_$ & 16 && this.$updateAriaState$($element$$156$$, 16, !!($button$$9$$.$state_$ & 16));
  return $element$$156$$
};
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($button$$10$$, $element$$157$$) {
  $element$$157$$ = $goog$ui$ButtonRenderer$$.$superClass_$.$decorate$.call(this, $button$$10$$, $element$$157$$);
  var $value$$inline_638$$ = this.$getValue$($element$$157$$);
  $button$$10$$.$value_$ = $value$$inline_638$$;
  $button$$10$$.$tooltip_$ = this.$getTooltip$($element$$157$$);
  $button$$10$$.$supportedStates_$ & 16 && this.$updateAriaState$($element$$157$$, 16, !!($button$$10$$.$state_$ & 16));
  return $element$$157$$
};
$JSCompiler_prototypeAlias$$.$getValue$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$setValue$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($element$$158$$) {
  return $element$$158$$.title
};
$JSCompiler_prototypeAlias$$.$setTooltip$ = function $$JSCompiler_prototypeAlias$$$$setTooltip$$($element$$159$$, $tooltip$$1$$) {
  $element$$159$$ && ($element$$159$$.title = $tooltip$$1$$ || "")
};
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-button");
// Input 112
function $goog$ui$NativeButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$NativeButtonRenderer$$, $goog$ui$ButtonRenderer$$);
$goog$addSingletonGetter$$($goog$ui$NativeButtonRenderer$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$NativeButtonRenderer$$.prototype;
$JSCompiler_prototypeAlias$$.$getAriaRole$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($button$$12$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$$($button$$12$$);
  $button$$12$$.$autoStates_$ &= -256;
  $JSCompiler_StaticMethods_setSupportedState$$($button$$12$$);
  return $button$$12$$.$getDomHelper$().$createDom$("button", {"class":$JSCompiler_StaticMethods_getClassNames$$(this, $button$$12$$).join(" "), disabled:!$button$$12$$.isEnabled(), title:$button$$12$$.$getTooltip$() || "", value:$button$$12$$.$getValue$() || ""}, $JSCompiler_StaticMethods_getCaption$$($button$$12$$) || "")
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = function $$JSCompiler_prototypeAlias$$$$canDecorate$$($element$$160$$) {
  return"BUTTON" == $element$$160$$.tagName || "INPUT" == $element$$160$$.tagName && ("button" == $element$$160$$.type || "submit" == $element$$160$$.type || "reset" == $element$$160$$.type)
};
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($button$$13$$, $element$$161$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$$($button$$13$$);
  $button$$13$$.$autoStates_$ &= -256;
  $JSCompiler_StaticMethods_setSupportedState$$($button$$13$$);
  $element$$161$$.disabled && $goog$dom$classes$add$$($element$$161$$, $JSCompiler_StaticMethods_getClassForState$$(this, 1));
  return $goog$ui$NativeButtonRenderer$$.$superClass_$.$decorate$.call(this, $button$$13$$, $element$$161$$)
};
$JSCompiler_prototypeAlias$$.$initializeDom$ = function $$JSCompiler_prototypeAlias$$$$initializeDom$$($button$$14$$) {
  $JSCompiler_StaticMethods_listen$$($button$$14$$.$getHandler$(), $button$$14$$.$getElement$(), "click", $button$$14$$.$performActionInternal$)
};
$JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$isFocusable$ = function $$JSCompiler_prototypeAlias$$$$isFocusable$$($button$$15$$) {
  return $button$$15$$.isEnabled()
};
$JSCompiler_prototypeAlias$$.$setFocusable$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($button$$16_element$$162$$, $state$$18$$, $enable$$15$$) {
  $goog$ui$NativeButtonRenderer$$.$superClass_$.$setState$.call(this, $button$$16_element$$162$$, $state$$18$$, $enable$$15$$);
  if(($button$$16_element$$162$$ = $button$$16_element$$162$$.$getElement$()) && 1 == $state$$18$$) {
    $button$$16_element$$162$$.disabled = $enable$$15$$
  }
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$($element$$163$$) {
  return $element$$163$$.value
};
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($element$$164$$, $value$$140$$) {
  $element$$164$$ && ($element$$164$$.value = $value$$140$$)
};
$JSCompiler_prototypeAlias$$.$updateAriaState$ = $goog$nullFunction$$;
// Input 113
function $goog$ui$Button$$($content$$17$$, $opt_renderer$$1$$, $opt_domHelper$$19$$) {
  $goog$ui$Control$$.call(this, $content$$17$$, $opt_renderer$$1$$ || $goog$ui$NativeButtonRenderer$$.$getInstance$(), $opt_domHelper$$19$$)
}
$goog$inherits$$($goog$ui$Button$$, $goog$ui$Control$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Button$$.prototype;
$JSCompiler_prototypeAlias$$.$getValue$ = $JSCompiler_get$$("$value_$");
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($value$$141$$) {
  this.$value_$ = $value$$141$$;
  this.$renderer_$.$setValue$(this.$getElement$(), $value$$141$$)
};
$JSCompiler_prototypeAlias$$.$getTooltip$ = $JSCompiler_get$$("$tooltip_$");
$JSCompiler_prototypeAlias$$.$setTooltip$ = function $$JSCompiler_prototypeAlias$$$$setTooltip$$($tooltip$$2$$) {
  this.$tooltip_$ = $tooltip$$2$$;
  this.$renderer_$.$setTooltip$(this.$getElement$(), $tooltip$$2$$)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$Button$$.$superClass_$.$disposeInternal$.call(this);
  delete this.$value_$;
  delete this.$tooltip_$
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$Button$$.$superClass_$.$enterDocument$.call(this);
  if(this.$supportedStates_$ & 32) {
    var $keyTarget$$3$$ = this.$getKeyEventTarget$();
    $keyTarget$$3$$ && $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $keyTarget$$3$$, "keyup", this.$handleKeyEventInternal$)
  }
};
$JSCompiler_prototypeAlias$$.$handleKeyEventInternal$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEventInternal$$($e$$117$$) {
  return 13 == $e$$117$$.keyCode && $e$$117$$.type == $goog$events$KeyHandler$EventType$KEY$$ || 32 == $e$$117$$.keyCode && "keyup" == $e$$117$$.type ? this.$performActionInternal$($e$$117$$) : 32 == $e$$117$$.keyCode
};
$goog$ui$registry$setDecoratorByClassName$$("goog-button", function() {
  return new $goog$ui$Button$$($JSCompiler_alias_NULL$$)
});
// Input 114
function $bitex$ui$withdraw_methods$templates$WithdrawMethods$$($currList62_opt_data$$36$$) {
  var $output$$33$$;
  $output$$33$$ = "" + ('<div class="row-fluid"><div class="span12"><table id="' + $soy$$0$0escapeHtml$$($currList62_opt_data$$36$$.id) + '_table" class="table table-condensed table-hover"><thead><tr><th> Moneda</th><th> Nombre</th><th> Descargo de responsabilidad </th><th> Comisiones</th><th> Acciones </th></tr></thead><tbody>');
  for(var $currListLen62_methodList21$$ = $currList62_opt_data$$36$$.$methods$, $currIndex62_methodListLen21$$ = $currListLen62_methodList21$$.length, $currData62_methodIndex21$$ = 0;$currData62_methodIndex21$$ < $currIndex62_methodListLen21$$;$currData62_methodIndex21$$++) {
    var $methodData21$$ = $currListLen62_methodList21$$[$currData62_methodIndex21$$];
    $output$$33$$ += '<tr data-withdraw-currency="' + $soy$$0$0escapeHtml$$($methodData21$$.currency) + '"  data-withdraw-method="' + $soy$$0$0escapeHtml$$($methodData21$$.method) + '"><td>' + $soy$$0$0escapeHtml$$($methodData21$$.currency_description) + "</td><td>" + $soy$$0$0escapeHtml$$($methodData21$$.description) + "</td><td>" + $soy$$0$0escapeHtml$$($methodData21$$.disclaimer) + "</td>" + ($methodData21$$.has_fixed_fee ? "<td>" + $soy$$0$0escapeHtml$$($methodData21$$.percent_fee) + "% + " + 
    $soy$$0$0escapeHtml$$($methodData21$$.formatted_fixed_fee) + "</td>" : "<td>" + $soy$$0$0escapeHtml$$($methodData21$$.percent_fee) + "%</td>") + '<td><div class="btn-group"><button class="btn btn-mini btn-success withdraw-methods-action-edit withdraw-method-action">editar</button><button class="btn btn-mini btn-danger withdraw-methods-action-delete withdraw-method-action">Eliminar</button></div></td></tr>'
  }
  $output$$33$$ += '</tbody></table><div class="withdraw-methods-show-when-dirty-state pull-right" ><button  class="btn btn-large btn-success withdraw-methods-action-save">Save</button> <button class="btn btn-large btn-danger withdraw-methods-action-cancel">Cancel</button></div><div class="withdraw-methods-show-when-clean-state btn-group pull-right "><a class="btn btn-primary btn-small dropdown-toggle" data-toggle="dropdown" href="#"><i class="icon-white icon-plus"></i> Agregar metodo de retiro</a><ul class="dropdown-menu">';
  $currList62_opt_data$$36$$ = $currList62_opt_data$$36$$.$currencies$;
  $currListLen62_methodList21$$ = $currList62_opt_data$$36$$.length;
  for($currIndex62_methodListLen21$$ = 0;$currIndex62_methodListLen21$$ < $currListLen62_methodList21$$;$currIndex62_methodListLen21$$++) {
    $currData62_methodIndex21$$ = $currList62_opt_data$$36$$[$currIndex62_methodListLen21$$], $output$$33$$ += '<li><a href="" data-withdraw-currency="' + $soy$$0$0escapeHtml$$($currData62_methodIndex21$$.code) + '" class="withdraw-methods-action-add withdraw-method-action" >' + $soy$$0$0escapeHtml$$($currData62_methodIndex21$$.description) + "</a></li>"
  }
  return $output$$33$$ + '</ul></div><div class="withdraw-methods-show-when-saving-state span4 pull-right" ><div class="progress progress-success progress-striped active"><div class="bar" style="width: 100%">Saving...</div></div></div><div class="clearfix"></div></div></div>'
}
;
// Input 115
function $bitex$ui$WithdrawMethods$$($currencyFormatterFn$$, $currencyDescriptionFn$$, $opt_domHelper$$20$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$20$$);
  this.$currency_formatter_function_$ = $currencyFormatterFn$$;
  this.$currency_description_function_$ = $currencyDescriptionFn$$
}
$goog$inherits$$($bitex$ui$WithdrawMethods$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$WithdrawMethods$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("withdraw-methods");
function $JSCompiler_StaticMethods_getMethodsArray_$$($JSCompiler_StaticMethods_getMethodsArray_$self$$) {
  var $methods_array$$ = [];
  $goog$object$forEach$$($JSCompiler_StaticMethods_getMethodsArray_$self$$.$model_$.withdraw_methods, function($withdraw_methods$$, $currency$$) {
    $goog$array$forEach$$($withdraw_methods$$, function($fixed_fee_withdraw_method$$) {
      var $obj$$98$$ = {currency:$currency$$, currency_description:this.$currency_description_function_$($currency$$)};
      $goog$object$extend$$($obj$$98$$, $fixed_fee_withdraw_method$$);
      $fixed_fee_withdraw_method$$ = $obj$$98$$.fixed_fee;
      $obj$$98$$.has_fixed_fee = !(isNaN($fixed_fee_withdraw_method$$) || 0 >= $fixed_fee_withdraw_method$$);
      $obj$$98$$.formatted_fixed_fee = this.$currency_formatter_function_$($fixed_fee_withdraw_method$$ / 1E8, $currency$$, $JSCompiler_alias_TRUE$$);
      $methods_array$$.push($obj$$98$$)
    }, this)
  }, $JSCompiler_StaticMethods_getMethodsArray_$self$$);
  return $methods_array$$
}
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$withdraw_methods$templates$WithdrawMethods$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "form"), $methods$:$JSCompiler_StaticMethods_getMethodsArray_$$(this), $currencies$:this.$model_$.currencies});
  $JSCompiler_StaticMethods_setDirty$$(this, $JSCompiler_alias_FALSE$$)
};
function $JSCompiler_StaticMethods_setDirty$$($JSCompiler_StaticMethods_setDirty$self$$, $isDirty$$) {
  $JSCompiler_StaticMethods_setDirty$self$$.$model_$.$is_dirty$ = $isDirty$$;
  $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-dirty-state", $JSCompiler_StaticMethods_setDirty$self$$.$getElement$()), function($el$$60$$) {
    $goog$style$showElement$$($el$$60$$, $isDirty$$)
  });
  $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-clean-state", $JSCompiler_StaticMethods_setDirty$self$$.$getElement$()), function($el$$61$$) {
    $goog$style$showElement$$($el$$61$$, !$isDirty$$)
  });
  $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-saving-state", $JSCompiler_StaticMethods_setDirty$self$$.$getElement$()), function($el$$62$$) {
    $goog$style$showElement$$($el$$62$$, $JSCompiler_alias_FALSE$$)
  }, $JSCompiler_StaticMethods_setDirty$self$$)
}
function $JSCompiler_StaticMethods_setSavingStatus$$($JSCompiler_StaticMethods_setSavingStatus$self$$, $saving$$) {
  $saving$$ ? ($goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-dirty-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$63$$) {
    $goog$style$showElement$$($el$$63$$, $JSCompiler_alias_FALSE$$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$), $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-clean-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$64$$) {
    $goog$style$showElement$$($el$$64$$, $JSCompiler_alias_FALSE$$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$), $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-saving-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$65$$) {
    $goog$style$showElement$$($el$$65$$, $JSCompiler_alias_TRUE$$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$)) : ($goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-dirty-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$66$$) {
    $goog$style$showElement$$($el$$66$$, this.$model_$.$is_dirty$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$), $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-clean-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$67$$) {
    $goog$style$showElement$$($el$$67$$, !this.$model_$.$is_dirty$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$), $goog$array$forEach$$($goog$dom$getElementsByClass$$("withdraw-methods-show-when-saving-state", $JSCompiler_StaticMethods_setSavingStatus$self$$.$getElement$()), function($el$$68$$) {
    $goog$style$showElement$$($el$$68$$, $JSCompiler_alias_FALSE$$)
  }, $JSCompiler_StaticMethods_setSavingStatus$self$$))
}
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$WithdrawMethods$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$59$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$59$$, this.$getElement$(), "click", this.$onTableClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$59$$, this.$getElement$(), "click", this.$onAddField_$)
};
function $JSCompiler_StaticMethods_updateWindow$$($JSCompiler_StaticMethods_updateWindow$self$$) {
  $JSCompiler_StaticMethods_updateWindow$self$$.$getElement$().innerHTML = $bitex$ui$withdraw_methods$templates$WithdrawMethods$$({id:$JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_updateWindow$self$$, "form"), $methods$:$JSCompiler_StaticMethods_getMethodsArray_$$($JSCompiler_StaticMethods_updateWindow$self$$), $currencies$:$JSCompiler_StaticMethods_updateWindow$self$$.$model_$.currencies})
}
function $JSCompiler_StaticMethods_onActionDelete_$$($JSCompiler_StaticMethods_onActionDelete_$self$$) {
  var $idx$$ = $goog$array$findIndex$$($JSCompiler_StaticMethods_onActionDelete_$self$$.$model_$.withdraw_methods[$JSCompiler_StaticMethods_onActionDelete_$self$$.$selected_currency_$], function($wm$$) {
    if($wm$$.method == this.$selected_method_$) {
      return $JSCompiler_alias_TRUE$$
    }
  }, $JSCompiler_StaticMethods_onActionDelete_$self$$);
  $goog$array$ARRAY_PROTOTYPE_$$.splice.call($JSCompiler_StaticMethods_onActionDelete_$self$$.$model_$.withdraw_methods[$JSCompiler_StaticMethods_onActionDelete_$self$$.$selected_currency_$], $idx$$, 1);
  0 == $JSCompiler_StaticMethods_onActionDelete_$self$$.$model_$.withdraw_methods[$JSCompiler_StaticMethods_onActionDelete_$self$$.$selected_currency_$].length && $goog$object$remove$$($JSCompiler_StaticMethods_onActionDelete_$self$$.$model_$.withdraw_methods, $JSCompiler_StaticMethods_onActionDelete_$self$$.$selected_currency_$);
  $JSCompiler_StaticMethods_onActionDelete_$self$$.dispatchEvent("withdraw_structure_change")
}
function $JSCompiler_StaticMethods_onActionEdit_$$($JSCompiler_StaticMethods_onActionEdit_$self$$) {
  var $idx$$1$$ = $goog$array$findIndex$$($JSCompiler_StaticMethods_onActionEdit_$self$$.$model_$.withdraw_methods[$JSCompiler_StaticMethods_onActionEdit_$self$$.$selected_currency_$], function($wm$$1$$) {
    if($wm$$1$$.method == this.$selected_method_$) {
      return $JSCompiler_alias_TRUE$$
    }
  }, $JSCompiler_StaticMethods_onActionEdit_$self$$), $withdraw_method_editor$$ = new $bitex$ui$WithdrawMethodEditor$$, $buttonSet$$1_withdraw_method_editor_model$$ = $goog$object$unsafeClone$$($JSCompiler_StaticMethods_onActionEdit_$self$$.$model_$.withdraw_methods[$JSCompiler_StaticMethods_onActionEdit_$self$$.$selected_currency_$][$idx$$1$$]);
  $buttonSet$$1_withdraw_method_editor_model$$.fixed_fee /= 1E8;
  $withdraw_method_editor$$.$model_$ = $buttonSet$$1_withdraw_method_editor_model$$;
  var $buttonSet$$1_withdraw_method_editor_model$$ = $bootstrap$Dialog$ButtonSet$createOkCancel$$(), $dialog_$$ = new $bootstrap$Dialog$$;
  $JSCompiler_StaticMethods_setTitle$$($dialog_$$, "Editar metodo de retiro");
  $JSCompiler_StaticMethods_addChild$$($dialog_$$, $withdraw_method_editor$$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setButtonSet$$($dialog_$$, $buttonSet$$1_withdraw_method_editor_model$$);
  $dialog_$$.$setVisible$($JSCompiler_alias_TRUE$$);
  $goog$style$setWidth$$($dialog_$$.$getElement$(), 850);
  $JSCompiler_StaticMethods_listenOnce$$($JSCompiler_StaticMethods_onActionEdit_$self$$.$getHandler$(), $dialog_$$, $goog$ui$Dialog$EventType$SELECT$$, function() {
    this.$model_$.withdraw_methods[this.$selected_currency_$][$idx$$1$$] = $JSCompiler_StaticMethods_getWithdrawMethodJSON$$($withdraw_method_editor$$);
    $JSCompiler_StaticMethods_updateWindow$$(this);
    $JSCompiler_StaticMethods_setDirty$$(this, $JSCompiler_alias_TRUE$$);
    this.dispatchEvent("withdraw_structure_change")
  }, $JSCompiler_StaticMethods_onActionEdit_$self$$)
}
$JSCompiler_prototypeAlias$$.$onTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onTableClick_$$($e$$119$$) {
  var $tr_el$$;
  $goog$dom$classes$has$$($e$$119$$.target, this.$getCssClass$() + "-action-edit") ? ($tr_el$$ = $goog$dom$getAncestorByTagNameAndClass$$($e$$119$$.target, "TR"), $e$$119$$.preventDefault(), $e$$119$$.stopPropagation(), this.$selected_method_$ = $tr_el$$.getAttribute("data-withdraw-method"), this.$selected_currency_$ = $tr_el$$.getAttribute("data-withdraw-currency"), $JSCompiler_StaticMethods_onActionEdit_$$(this)) : $goog$dom$classes$has$$($e$$119$$.target, this.$getCssClass$() + "-action-delete") ? 
  ($tr_el$$ = $goog$dom$getAncestorByTagNameAndClass$$($e$$119$$.target, "TR"), $e$$119$$.preventDefault(), $e$$119$$.stopPropagation(), this.$selected_method_$ = $tr_el$$.getAttribute("data-withdraw-method"), this.$selected_currency_$ = $tr_el$$.getAttribute("data-withdraw-currency"), $goog$dom$removeNode$$($tr_el$$), $JSCompiler_StaticMethods_setDirty$$(this, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_onActionDelete_$$(this)) : $goog$dom$classes$has$$($e$$119$$.target, this.$getCssClass$() + 
  "-action-save") ? this.dispatchEvent("withdraw_structure_save") : $goog$dom$classes$has$$($e$$119$$.target, this.$getCssClass$() + "-action-cancel") && this.dispatchEvent("withdraw_structure_cancel")
};
$JSCompiler_prototypeAlias$$.$onAddField_$ = function $$JSCompiler_prototypeAlias$$$$onAddField_$$($buttonSet$$2_e$$120$$) {
  if($goog$dom$classes$has$$($buttonSet$$2_e$$120$$.target, this.$getCssClass$() + "-action-add")) {
    this.$selected_currency_$ = $buttonSet$$2_e$$120$$.target.getAttribute("data-withdraw-currency");
    $buttonSet$$2_e$$120$$.preventDefault();
    var $withdraw_method_editor$$1$$ = new $bitex$ui$WithdrawMethodEditor$$;
    $JSCompiler_StaticMethods_setModel$$($withdraw_method_editor$$1$$, {description:"", disclaimer:"", fields:[], fixed_fee:"", method:"", percent_fee:""});
    $buttonSet$$2_e$$120$$ = $bootstrap$Dialog$ButtonSet$createOkCancel$$();
    var $dialog_$$1$$ = new $bootstrap$Dialog$$;
    $JSCompiler_StaticMethods_setTitle$$($dialog_$$1$$, "Add withdraw method");
    $JSCompiler_StaticMethods_addChild$$($dialog_$$1$$, $withdraw_method_editor$$1$$, $JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_setButtonSet$$($dialog_$$1$$, $buttonSet$$2_e$$120$$);
    $dialog_$$1$$.$setVisible$($JSCompiler_alias_TRUE$$);
    $goog$style$setWidth$$($dialog_$$1$$.$getElement$(), 850);
    $JSCompiler_StaticMethods_listenOnce$$(this.$getHandler$(), $dialog_$$1$$, $goog$ui$Dialog$EventType$SELECT$$, function() {
      this.$model_$.withdraw_methods[this.$selected_currency_$] != $JSCompiler_alias_NULL$$ ? this.$model_$.withdraw_methods[this.$selected_currency_$].push($JSCompiler_StaticMethods_getWithdrawMethodJSON$$($withdraw_method_editor$$1$$)) : this.$model_$.withdraw_methods[this.$selected_currency_$] = [$JSCompiler_StaticMethods_getWithdrawMethodJSON$$($withdraw_method_editor$$1$$)];
      $JSCompiler_StaticMethods_updateWindow$$(this);
      $JSCompiler_StaticMethods_setDirty$$(this, $JSCompiler_alias_TRUE$$);
      this.dispatchEvent("withdraw_structure_change")
    }, this)
  }
};
// Input 116
function $bitex$ui$withdraw_method_editor$templates$WithdrawMethodFieldLineEditor$$($opt_data$$37_output$$34$$) {
  return $opt_data$$37_output$$34$$ = "" + ('<tr id="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.id) + "_field_" + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.$idx$) + '"><td><select id="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.id) + "_field_side_" + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.$idx$) + '" class="withdraw-method-editor-field-side"><option value="client" ' + ("client" == $opt_data$$37_output$$34$$.data.side ? "selected" : "") + '>Cliente</option><option value="broker" ' + 
  ("broker" == $opt_data$$37_output$$34$$.data.side ? "selected" : "") + '>Corredor</option></select></td><td><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.id) + "_field_name_" + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.$idx$) + '" type="text" class="input-block-level withdraw-method-editor-field-name" pattern="\\w+" placeholder="" required value="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.data.name) + '"></td><td><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.id) + 
  "_field_label_" + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.$idx$) + '" type="text" class="input-block-level withdraw-method-editor-field-label" pattern="\\w+ *" placeholder="" required value="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.data.label) + '"></td><td><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.id) + "_field_placeholder_" + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.$idx$) + '" type="text" class="input-block-level withdraw-method-editor-field-placeholder" placeholder="" value="' + 
  $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.data.placeholder) + '"></td><td><select id="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.id) + "_field_type_" + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.$idx$) + '" class="withdraw-method-editor-field-type"><option value="text" ' + ("text" == $opt_data$$37_output$$34$$.data.type ? "selected" : "") + '>Texto</option></select></td><td><select id="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.id) + "_field_validator_" + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.$idx$) + 
  '" class="withdraw-method-editor-field-validator"><option value="required" ' + ("required" == $opt_data$$37_output$$34$$.data.validator ? "selected" : "") + ' >Required</option><option value="validateEmail" ' + ("validateEmail" == $opt_data$$37_output$$34$$.data.validator ? "selected" : "") + ' >Email</option><option value="validateAddress" ' + ("validateAddress" == $opt_data$$37_output$$34$$.data.validator ? "selected" : "") + '  >BTC Address</option></select></td><td><input id="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.id) + 
  "_field_value_" + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.$idx$) + '" type="text" class="input-block-level withdraw-method-editor-field-value" placeholder="" value="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.data.value) + '"></td><td><button id="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.id) + "_field_delete_" + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.$idx$) + '" data-index="' + $soy$$0$0escapeHtml$$($opt_data$$37_output$$34$$.$idx$) + '" class="btn btn-mini btn-danger withdraw-method-editor-field-action-delete withdraw-method-editor-field-action">Eliminar</button></td></tr>')
}
function $bitex$ui$withdraw_method_editor$templates$WithdrawMethodEditor$$($opt_data$$38$$) {
  var $output$$35$$;
  $output$$35$$ = "" + ('<div class="row-fluid"><div class="span12"><form id="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.id) + '" class="form-horizontal span6"><fieldset><div class="control-group"><label class="control-label">Nombre del metodo</label><div class="controls"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.id) + '_name"  type="text" class="input-block-level" pattern="\\w+" placeholder="" required value="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.$model$.method) + '"></div></div><div class="control-group"><label class="control-label">Descripcion</label><div class="controls"><input id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$38$$.id) + '_description"  type="text" class="input-block-level" pattern="\\w+ \\w+ *" placeholder="" required value="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.$model$.description) + '"></div></div><div class="control-group"><label class="control-label">Descargo de responsabilidad</label><div class="controls"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.id) + '_placeholder"  type="text" class="input-block-level" placeholder="" value="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.$model$.disclaimer) + 
  '"></div></div><div class="control-group"><label class="control-label">Comisiones</label><div class="controls"><div class="row-fluid"><div class="span6"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.id) + '_percent_fee"  type="text" class="input-block-level" autocomplete="off" maxlength="4" pattern="\\d+" placeholder="Percent fee" required value="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.$model$.percent_fee) + '"></div><div class="span6"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.id) + 
  '_fixed_fee" type="text" class="input-block-level" autocomplete="off" maxlength="4" pattern="\\d+" placeholder="Fixed fee" required value="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.$model$.fixed_fee) + '"></div></div></div></div><table id="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.id) + '_table" class="table table-bordered table-hover"><thead><tr><td colspan="7" style="text-align: center">Campos personalizados</td></tr><tr><th> Lado</th><th> Nombre </th><th> Etiqueta </th><th> Marcador de posicion </th><th> Tipo </th><th> Validante </th><th> Valor </th><th> Acciones </th></tr></thead><tbody>');
  for(var $fieldList151$$ = $opt_data$$38$$.$model$.fields, $fieldListLen151$$ = $fieldList151$$.length, $fieldIndex151$$ = 0;$fieldIndex151$$ < $fieldListLen151$$;$fieldIndex151$$++) {
    $output$$35$$ += $bitex$ui$withdraw_method_editor$templates$WithdrawMethodFieldLineEditor$$({id:$opt_data$$38$$.id, $idx$:$fieldIndex151$$, data:$fieldList151$$[$fieldIndex151$$]})
  }
  return $output$$35$$ += '</tbody></table><button id="' + $soy$$0$0escapeHtml$$($opt_data$$38$$.id) + '_add" class="btn btn-primary"><i class="icon-white icon-plus"></i> Agregar campo</button></fieldset></form></div></div>'
}
;
// Input 117
function $bitex$ui$WithdrawMethodEditor$$($opt_domHelper$$21$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$21$$)
}
$goog$inherits$$($bitex$ui$WithdrawMethodEditor$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$WithdrawMethodEditor$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("withdraw-method-editor");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$getDomHelper$();
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$withdraw_method_editor$templates$WithdrawMethodEditor$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "form"), $model$:this.$model_$})
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$WithdrawMethodEditor$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$62$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$62$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_table")), "click", this.$onTableClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$62$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_add")), "click", this.$onAddField_$)
};
function $JSCompiler_StaticMethods_getWithdrawMethodJSON$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$) {
  var $result$$21$$ = {};
  $result$$21$$.method = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_name")));
  $result$$21$$.description = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_description")));
  $result$$21$$.disclaimer = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_placeholder")));
  $result$$21$$.percent_fee = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_percent_fee")));
  $result$$21$$.fixed_fee = $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_fixed_fee")));
  $goog$string$isEmpty$$($result$$21$$.percent_fee) && ($result$$21$$.percent_fee = 0);
  $goog$string$isEmpty$$($result$$21$$.fixed_fee) && ($result$$21$$.fixed_fee = 0);
  $result$$21$$.percent_fee = parseFloat($result$$21$$.percent_fee);
  $result$$21$$.fixed_fee = parseInt(1E8 * $result$$21$$.fixed_fee, 10);
  $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$ = $goog$dom$getNextElementSibling$$($goog$dom$getFirstElementChild$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$, "form_table"))));
  $result$$21$$.fields = [];
  $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$ = $goog$dom$getFirstElementChild$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$);
  for(var $row_number$$ = 0;$JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$ != $JSCompiler_alias_NULL$$;) {
    var $field_record$$ = {side:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-side", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), name:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-name", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), label:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-label", 
    $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), placeholder:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-placeholder", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), type:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-type", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), 
    validator:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-validator", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)), value:$goog$dom$forms$getValue$$($goog$dom$getElementByClass$$("withdraw-method-editor-field-value", $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$))};
    $result$$21$$.fields.push($field_record$$);
    $row_number$$++;
    $JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$ = $goog$dom$getNextElementSibling$$($JSCompiler_StaticMethods_getWithdrawMethodJSON$self_field_row_fields_table_tbody_element$$)
  }
  return $result$$21$$
}
$JSCompiler_prototypeAlias$$.$onTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onTableClick_$$($e$$122$$) {
  if($goog$dom$classes$has$$($e$$122$$.target, this.$getCssClass$() + "-field-action-delete")) {
    var $tr_el$$1$$ = $goog$dom$getAncestorByTagNameAndClass$$($e$$122$$.target, "TR");
    $goog$dom$removeNode$$($tr_el$$1$$);
    $e$$122$$.preventDefault();
    $e$$122$$.stopPropagation()
  }
};
$JSCompiler_prototypeAlias$$.$onAddField_$ = function $$JSCompiler_prototypeAlias$$$$onAddField_$$($e$$123_table_tbody_el$$) {
  $e$$123_table_tbody_el$$.preventDefault();
  $e$$123_table_tbody_el$$.stopPropagation();
  $e$$123_table_tbody_el$$ = $goog$dom$getElementsByTagNameAndClass$$("TBODY", $JSCompiler_alias_VOID$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_table")))[0];
  var $wrapper$$5$$ = this.$getDomHelper$().createElement("tbody");
  $wrapper$$5$$.innerHTML = $bitex$ui$withdraw_method_editor$templates$WithdrawMethodFieldLineEditor$$({id:$JSCompiler_StaticMethods_makeId$$(this, "form"), $idx$:"", data:{side:"client", name:"", validator:"", label:"", placeholder:"", type:"", value:""}});
  $e$$123_table_tbody_el$$.appendChild($wrapper$$5$$.firstChild)
};
// Input 118
function $bitex$ui$ChangePassword$templates$ChangePassword$$($opt_data$$39_output$$36$$) {
  return $opt_data$$39_output$$36$$ = "" + ('<div class="section-title"><h3 class="bitex-view-title">Cambie su contrasena </h3></div><div id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$36$$.id) + '"><div class="clearfix"><label for="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$36$$.id) + '_oldpassword">Contrasena actual</label><div class="input"><input autocapitalize="off" autocorrect="off" id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$36$$.id) + '_oldpassword" name="username" type="password" ></div></div><div class="clearfix"><label for="' + 
  $soy$$0$0escapeHtml$$($opt_data$$39_output$$36$$.id) + '_password">Nueva contrasena</label><div class="input"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$36$$.id) + '_password" placeholder="" name="password" type="password"></div></div><div class="clearfix"><label for="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$36$$.id) + '_repeat_password">Comfirme nueva contrasena</label><div class="input"><input id="' + $soy$$0$0escapeHtml$$($opt_data$$39_output$$36$$.id) + '_repeat_password" placeholder="" name="repeat_password" type="password"></div></div><div class="actions"><button id="' + 
  $soy$$0$0escapeHtml$$($opt_data$$39_output$$36$$.id) + '_change" class="btn btn-primary">Cambie contrasena</button></div></div>')
}
;
// Input 119
function $bitex$ui$ChangePassword$$($opt_domHelper$$22$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$22$$)
}
$goog$inherits$$($bitex$ui$ChangePassword$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$ChangePassword$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("change-password");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$ChangePassword$templates$ChangePassword$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "form")})
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$ChangePassword$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_change")), "click", this.$onChangePassword_$)
};
$JSCompiler_prototypeAlias$$.$onChangePassword_$ = function $$JSCompiler_prototypeAlias$$$$onChangePassword_$$($e$$124$$) {
  $e$$124$$.preventDefault();
  $e$$124$$.stopPropagation();
  this.dispatchEvent("control_change_password")
};
$JSCompiler_prototypeAlias$$.$getCurrentPassword$ = function $$JSCompiler_prototypeAlias$$$$getCurrentPassword$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_oldpassword")))
};
$JSCompiler_prototypeAlias$$.$getPassword$ = function $$JSCompiler_prototypeAlias$$$$getPassword$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_password")))
};
$JSCompiler_prototypeAlias$$.$getNewPassword$ = function $$JSCompiler_prototypeAlias$$$$getNewPassword$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_repeat_password")))
};
// Input 120
// Input 121
// Input 122
// Input 123
// Input 124
// Input 125
// Input 126
// Input 127
function $bitex$view$ProfileView$$($app$$6$$, $opt_domHelper$$23$$) {
  $bitex$view$View$$.call(this, $app$$6$$, $opt_domHelper$$23$$)
}
$goog$inherits$$($bitex$view$ProfileView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$ProfileView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$ProfileView$$.$superClass_$.$enterView$.call(this);
  var $model$$10_withdraw_methods_model$$ = this.$app_$.$model_$, $handler$$64$$ = this.$getHandler$();
  if($model$$10_withdraw_methods_model$$.get("IsBroker")) {
    var $customer_withdraw_methods$$1$$ = new $bitex$ui$WithdrawMethods$$($goog$bind$$(this.$app_$.$formatCurrency$, this.$app_$), $goog$bind$$(this.$app_$.$getCurrencyDescription$, this.$app_$)), $broker_currencies$$1$$ = [];
    $goog$array$forEach$$($model$$10_withdraw_methods_model$$.get("Profile").BrokerCurrencies, function($currency$$1$$) {
      $broker_currencies$$1$$.push({code:$currency$$1$$, description:this.$app_$.$getCurrencyDescription$($currency$$1$$)})
    }, this);
    $model$$10_withdraw_methods_model$$ = $goog$object$unsafeClone$$($model$$10_withdraw_methods_model$$.get("Profile").WithdrawStructure);
    $JSCompiler_StaticMethods_setModel$$($customer_withdraw_methods$$1$$, {withdraw_methods:$model$$10_withdraw_methods_model$$, currencies:$broker_currencies$$1$$});
    $JSCompiler_StaticMethods_addChild$$(this, $customer_withdraw_methods$$1$$, $JSCompiler_alias_TRUE$$);
    $customer_withdraw_methods$$1$$.$enterDocument$()
  }else {
    $customer_withdraw_methods$$1$$ = {};
    $customer_withdraw_methods$$1$$.ID = $model$$10_withdraw_methods_model$$.get("Profile").UserID;
    $customer_withdraw_methods$$1$$.Username = $model$$10_withdraw_methods_model$$.get("Profile").Username;
    $customer_withdraw_methods$$1$$.Email = $model$$10_withdraw_methods_model$$.get("Profile").Email;
    var $state$$19$$ = $model$$10_withdraw_methods_model$$.get("Profile").State;
    $state$$19$$ != $JSCompiler_alias_NULL$$ || ($state$$19$$ = $model$$10_withdraw_methods_model$$.get("Broker").State);
    $customer_withdraw_methods$$1$$.State = $state$$19$$;
    $customer_withdraw_methods$$1$$.CountryCode = $model$$10_withdraw_methods_model$$.get("Profile").Country;
    $customer_withdraw_methods$$1$$.Verified = $model$$10_withdraw_methods_model$$.get("Profile").Verified;
    $goog$soy$renderElement$$($goog$dom$getElement$$("account_overview_user_id"), $bitex$templates$AccountOverviewUser$$, {$msg_customer_detail$:$customer_withdraw_methods$$1$$})
  }
  this.$change_password_$ = new $bitex$ui$ChangePassword$$;
  $JSCompiler_StaticMethods_addChild$$(this, this.$change_password_$, $JSCompiler_alias_TRUE$$);
  this.$change_password_$.$enterDocument$();
  $JSCompiler_StaticMethods_listen$$($handler$$64$$, this, "control_change_password", this.$onChangePassword_$)
};
$JSCompiler_prototypeAlias$$.$onChangePassword_$ = function $$JSCompiler_prototypeAlias$$$$onChangePassword_$$($e$$125_password2$$1$$) {
  var $current_password$$ = $e$$125_password2$$1$$.target.$getCurrentPassword$(), $password$$2$$ = $e$$125_password2$$1$$.target.$getPassword$();
  $e$$125_password2$$1$$ = $e$$125_password2$$1$$.target.$getNewPassword$();
  $goog$string$isEmpty$$($current_password$$) ? this.$app_$.$showDialog$("La contrasena no puede estar vacia") : $goog$string$isEmpty$$($password$$2$$) || 8 > $password$$2$$.length ? this.$app_$.$showDialog$("La nueva contrasena debe tener al menos 8 caracteres") : $password$$2$$ !== $e$$125_password2$$1$$ ? this.$app_$.$showDialog$("La contrasena no coincide") : this.dispatchEvent("change_password")
};
$JSCompiler_prototypeAlias$$.$getCurrentPassword$ = function $$JSCompiler_prototypeAlias$$$$getCurrentPassword$$() {
  return this.$change_password_$.$getCurrentPassword$()
};
$JSCompiler_prototypeAlias$$.$getPassword$ = function $$JSCompiler_prototypeAlias$$$$getPassword$$() {
  return this.$change_password_$.$getPassword$()
};
$JSCompiler_prototypeAlias$$.$getNewPassword$ = function $$JSCompiler_prototypeAlias$$$$getNewPassword$$() {
  return this.$change_password_$.$getNewPassword$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$ProfileView$$.$superClass_$.$exitView$.call(this);
  this.$removeChildren$($JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$ProfileView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$65$$ = this.$getHandler$(), $model$$11$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, this, "withdraw_structure_change", this.$onChangeWithdrawStructure_$);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, this, "withdraw_structure_save", this.$onSaveWithdrawStructure_$);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, this, "withdraw_structure_cancel", this.$onCancelWithdrawStructure_$);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, this.$app_$.$model_$, "model_setTwoFactorSecret", function($e$$126_qr_code_secret$$) {
    $e$$126_qr_code_secret$$ = $e$$126_qr_code_secret$$.data;
    if($e$$126_qr_code_secret$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($e$$126_qr_code_secret$$)) {
      var $issuer$$ = "BlinkTrade - " + $model$$11$$.get("Broker").ShortName;
      $e$$126_qr_code_secret$$ = "https://chart.googleapis.com/chart?chs=200x200&chld=M%7C0&cht=qr&chl=" + encodeURIComponent("otpauth://totp/" + $model$$11$$.get("Username") + " " + $model$$11$$.get("Profile").Email + "?secret=") + $e$$126_qr_code_secret$$ + encodeURIComponent("&issuer=" + $issuer$$);
      $goog$dom$getElement$$("id_secret_qr").setAttribute("src", $e$$126_qr_code_secret$$)
    }
  });
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, this.$app_$.$model_$, "model_setTwoFactorEnabled", function($e$$127_enabled$$6$$) {
    $e$$127_enabled$$6$$ = $e$$127_enabled$$6$$.data;
    var $has_secret$$1_secret$$1$$ = this.$app_$.$model_$.get("TwoFactorSecret"), $has_secret$$1_secret$$1$$ = $has_secret$$1_secret$$1$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($has_secret$$1_secret$$1$$), $divEl$$ = $goog$dom$getElement$$("id_enable_two_factor_div"), $btnDisableEl$$ = $goog$dom$getElement$$("id_btn_disable_two_factor");
    $goog$style$showElement$$($goog$dom$getElement$$("id_btn_enable_two_factor"), !$e$$127_enabled$$6$$);
    $goog$style$showElement$$($btnDisableEl$$, $e$$127_enabled$$6$$);
    $goog$style$showElement$$($divEl$$, $has_secret$$1_secret$$1$$)
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, $goog$dom$getElement$$("id_btn_enable_two_factor"), "click", function() {
    this.dispatchEvent("two_factor_enable")
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$65$$, $goog$dom$getElement$$("id_btn_disable_two_factor"), "click", function() {
    this.dispatchEvent("two_factor_disable")
  }, this)
};
$JSCompiler_prototypeAlias$$.$onChangeWithdrawStructure_$ = function $$JSCompiler_prototypeAlias$$$$onChangeWithdrawStructure_$$($e$$130$$) {
  $goog$object$unsafeClone$$($e$$130$$.target.$model_$.withdraw_methods)
};
$JSCompiler_prototypeAlias$$.$onSaveWithdrawStructure_$ = function $$JSCompiler_prototypeAlias$$$$onSaveWithdrawStructure_$$($conn$$2_e$$131$$) {
  var $requestId_withdraw_structure$$1$$ = $goog$object$unsafeClone$$($conn$$2_e$$131$$.target.$model_$.withdraw_methods), $withdraw_method_component$$ = $conn$$2_e$$131$$.target;
  $JSCompiler_StaticMethods_setSavingStatus$$($withdraw_method_component$$, $JSCompiler_alias_TRUE$$);
  $conn$$2_e$$131$$ = this.$app_$.$conn_$;
  $requestId_withdraw_structure$$1$$ = $JSCompiler_StaticMethods_updateUserProfile$$($conn$$2_e$$131$$, {WithdrawStructure:$requestId_withdraw_structure$$1$$});
  $JSCompiler_StaticMethods_listenOnce$$(this.$getHandler$(), $conn$$2_e$$131$$, $bitex$api$BitEx$EventType$UPDATE_PROFILE_RESPONSE$$ + "." + $requestId_withdraw_structure$$1$$, function() {
    $JSCompiler_StaticMethods_setDirty$$($withdraw_method_component$$, $JSCompiler_alias_FALSE$$);
    $JSCompiler_StaticMethods_setSavingStatus$$($withdraw_method_component$$, $JSCompiler_alias_FALSE$$)
  })
};
$JSCompiler_prototypeAlias$$.$onCancelWithdrawStructure_$ = function $$JSCompiler_prototypeAlias$$$$onCancelWithdrawStructure_$$($e$$133$$) {
  var $model$$12_withdraw_methods_model$$1$$ = this.$app_$.$model_$, $broker_currencies$$2$$ = [];
  $goog$array$forEach$$($model$$12_withdraw_methods_model$$1$$.get("Profile").BrokerCurrencies, function($currency$$2$$) {
    $broker_currencies$$2$$.push({code:$currency$$2$$, description:this.$app_$.$getCurrencyDescription$($currency$$2$$)})
  }, this);
  $model$$12_withdraw_methods_model$$1$$ = $goog$object$unsafeClone$$($model$$12_withdraw_methods_model$$1$$.get("Profile").WithdrawStructure);
  $JSCompiler_StaticMethods_setModel$$($e$$133$$.target, {withdraw_methods:$model$$12_withdraw_methods_model$$1$$, currencies:$broker_currencies$$2$$});
  $JSCompiler_StaticMethods_updateWindow$$($e$$133$$.target);
  $JSCompiler_StaticMethods_setDirty$$($e$$133$$.target, $JSCompiler_alias_FALSE$$)
};
// Input 128
function $uniform$InputFilters$$() {
  this.$InputFilters_$ = new $goog$structs$Map$$;
  this.$InputFilters_$.set("number", [this.$filterNumber_$, 0]);
  this.$InputFilters_$.set("integer", [this.$filterInteger_$, 0]);
  this.$InputFilters_$.set("non_space", [this.$filterNonSpace_$, 0])
}
$goog$addSingletonGetter$$($uniform$InputFilters$$);
$JSCompiler_prototypeAlias$$ = $uniform$InputFilters$$.prototype;
$JSCompiler_prototypeAlias$$.$InputFilters_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.filter = function $$JSCompiler_prototypeAlias$$$filter$($e$$134$$) {
  for(var $InputFilterAttribute_elClassesArray$$ = $e$$134$$.target.getAttribute("uniform-filters"), $InputFilterAttribute_elClassesArray$$ = $InputFilterAttribute_elClassesArray$$ && "function" == typeof $InputFilterAttribute_elClassesArray$$.split ? $InputFilterAttribute_elClassesArray$$.split(/\s+/) : [], $i$$151$$ = 0;$i$$151$$ < $InputFilterAttribute_elClassesArray$$.length;++$i$$151$$) {
    var $InputFilterRecord_params$$4$$ = this.$InputFilters_$.get($InputFilterAttribute_elClassesArray$$[$i$$151$$], [$goog$nullFunction$$, 0]), $InputFilterFn$$1$$ = $InputFilterRecord_params$$4$$[0], $number_of_parameters$$ = 0;
    $InputFilterRecord_params$$4$$[1] != $JSCompiler_alias_NULL$$ && ($number_of_parameters$$ = $InputFilterRecord_params$$4$$[1]);
    $InputFilterRecord_params$$4$$ = [];
    if($number_of_parameters$$) {
      for(var $j$$12$$ = 1 + $i$$151$$, $k$$ = 0;$j$$12$$ <= $InputFilterAttribute_elClassesArray$$.length && $k$$ < $number_of_parameters$$;++$k$$, ++$j$$12$$, ++$i$$151$$) {
        $InputFilterRecord_params$$4$$.push($InputFilterAttribute_elClassesArray$$[$j$$12$$])
      }
      if($InputFilterRecord_params$$4$$.length < $number_of_parameters$$) {
        continue
      }
    }
    if($goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$134$$)) {
      switch($e$$134$$.keyCode) {
        case 12:
        ;
        case 3:
        ;
        case 13:
        ;
        case $goog$events$KeyCodes$$.$NUMPAD_ENTER$:
        ;
        case $goog$events$KeyCodes$DELETE$$:
        ;
        case $goog$events$KeyCodes$BACKSPACE$$:
        ;
        case $goog$events$KeyCodes$TAB$$:
          return;
        default:
          $InputFilterFn$$1$$($e$$134$$, $InputFilterRecord_params$$4$$)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$filterNumber_$ = function $$JSCompiler_prototypeAlias$$$$filterNumber_$$($e$$135$$) {
  !$e$$135$$.ctrlKey && !(!$e$$135$$.shiftKey && $e$$135$$.keyCode >= $goog$events$KeyCodes$ZERO$$ && $e$$135$$.keyCode <= $goog$events$KeyCodes$NINE$$ || $e$$135$$.keyCode >= $goog$events$KeyCodes$NUM_ZERO$$ && $e$$135$$.keyCode <= $goog$events$KeyCodes$NUM_NINE$$ || 109 == $e$$135$$.keyCode || $e$$135$$.keyCode == $goog$events$KeyCodes$NUM_PERIOD$$ || $e$$135$$.keyCode == $goog$events$KeyCodes$PERIOD$$ || 188 == $e$$135$$.keyCode || 69 == $e$$135$$.keyCode) && $e$$135$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$filterInteger_$ = function $$JSCompiler_prototypeAlias$$$$filterInteger_$$($e$$136$$) {
  !$e$$136$$.ctrlKey && !(!$e$$136$$.shiftKey && $e$$136$$.keyCode >= $goog$events$KeyCodes$ZERO$$ && $e$$136$$.keyCode <= $goog$events$KeyCodes$NINE$$ || $e$$136$$.keyCode >= $goog$events$KeyCodes$NUM_ZERO$$ && $e$$136$$.keyCode <= $goog$events$KeyCodes$NUM_NINE$$) && $e$$136$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$filterNonSpace_$ = function $$JSCompiler_prototypeAlias$$$$filterNonSpace_$$($e$$137$$) {
  32 == $e$$137$$.keyCode && $e$$137$$.preventDefault()
};
// Input 129
function $uniform$util$interpretToken$$($inputValue$$8_token$$5$$) {
  var $result$$23$$ = $inputValue$$8_token$$5$$ + " ";
  $goog$dom$getElement$$($inputValue$$8_token$$5$$) != $JSCompiler_alias_NULL$$ ? ($inputValue$$8_token$$5$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($inputValue$$8_token$$5$$)), $result$$23$$ = $inputValue$$8_token$$5$$ != $JSCompiler_alias_NULL$$ ? "'" + $inputValue$$8_token$$5$$ + "' " : "null ") : "and" == $inputValue$$8_token$$5$$ ? $result$$23$$ = " && " : "or" == $inputValue$$8_token$$5$$ && ($result$$23$$ = " || ");
  return $result$$23$$
}
function $uniform$util$compileMetaTags$$($metaInfo$$, $metaMap$$) {
  var $result$$24$$ = [];
  if($metaInfo$$ == $JSCompiler_alias_NULL$$) {
    return $result$$24$$
  }
  $goog$array$forEach$$($metaInfo$$.split(";"), function($cmdArray_commandLine$$) {
    $cmdArray_commandLine$$ = $goog$string$trim$$($cmdArray_commandLine$$).split(/\s+/);
    var $commandFunction$$ = $metaMap$$.get($cmdArray_commandLine$$[0], $goog$nullFunction$$);
    if($commandFunction$$ !== $goog$nullFunction$$) {
      for(var $parserState$$ = 0, $conditionStatement$$ = "", $parametersStatement$$ = "", $x$$76$$ = 1;$x$$76$$ < $cmdArray_commandLine$$.length;++$x$$76$$) {
        var $token$$6$$ = $cmdArray_commandLine$$[$x$$76$$];
        if(0 === $parserState$$) {
          if("If" === $token$$6$$) {
            $parserState$$ = 1;
            continue
          }else {
            $parserState$$ = 2
          }
        }
        1 === $parserState$$ && "then" === $token$$6$$ ? $parserState$$ = 2 : 1 === $parserState$$ ? $conditionStatement$$ += $uniform$util$interpretToken$$($token$$6$$) : $parametersStatement$$ += $uniform$util$interpretToken$$($token$$6$$)
      }
      $result$$24$$.push([$commandFunction$$, $conditionStatement$$, $parametersStatement$$])
    }
  });
  return $result$$24$$
}
function $uniform$util$executeElementMetaTags$$($el$$69$$, $metaInfo$$1_metaTag$$, $compiledMetaTags_metaMap$$1$$, $extraInfo$$) {
  $metaInfo$$1_metaTag$$ = $el$$69$$.getAttribute($metaInfo$$1_metaTag$$);
  $metaInfo$$1_metaTag$$ != $JSCompiler_alias_NULL$$ && ($compiledMetaTags_metaMap$$1$$ = $uniform$util$compileMetaTags$$($metaInfo$$1_metaTag$$, $compiledMetaTags_metaMap$$1$$), $goog$array$forEach$$($compiledMetaTags_metaMap$$1$$, function($compiledMetaTag$$) {
    $compiledMetaTag$$[0]($el$$69$$, $compiledMetaTag$$[1], $compiledMetaTag$$[2], $extraInfo$$)
  }))
}
function $uniform$util$executeFormMetaTags$$($formElement$$, $metaMap$$2$$) {
  for(var $els$$5$$ = $formElement$$.getElementsByTagName("*"), $el$$70$$, $i$$152$$ = 0;$el$$70$$ = $els$$5$$[$i$$152$$];$i$$152$$++) {
    $uniform$util$executeElementMetaTags$$($el$$70$$, "uniform-meta", $metaMap$$2$$, $JSCompiler_alias_VOID$$)
  }
}
;
// Input 130
function $uniform$Meta$$() {
  this.$metaMap_$ = new $goog$structs$Map$$;
  this.$metaMap_$.set("display", this.$display_$);
  this.$metaMap_$.set("hide", this.$hide_$);
  this.$metaMap_$.set("assign", this.$assign_$)
}
$goog$addSingletonGetter$$($uniform$Meta$$);
$uniform$Meta$$.prototype.$metaMap_$ = $JSCompiler_alias_NULL$$;
$uniform$Meta$$.prototype.$display_$ = function $$uniform$Meta$$$$$display_$$($el$$71$$, $condition$$2$$) {
  eval($condition$$2$$) ? $goog$style$showElement$$($el$$71$$, $JSCompiler_alias_TRUE$$) : $goog$style$showElement$$($el$$71$$, $JSCompiler_alias_FALSE$$)
};
$uniform$Meta$$.prototype.$hide_$ = function $$uniform$Meta$$$$$hide_$$($el$$72$$, $condition$$3$$) {
  eval($condition$$3$$) ? $goog$style$showElement$$($el$$72$$, $JSCompiler_alias_FALSE$$) : $goog$style$showElement$$($el$$72$$, $JSCompiler_alias_TRUE$$)
};
$uniform$Meta$$.prototype.$assign_$ = function $$uniform$Meta$$$$$assign_$$($el$$73$$, $condition$$4$$, $params$$5$$) {
  eval($condition$$4$$) && $goog$dom$forms$setValue$$($el$$73$$, eval($params$$5$$))
};
// Input 131
var $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ = "undefined" != typeof DOMTokenList, $goog$dom$classlist$get$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$167$$) {
  return $element$$167$$.classList
} : function($className$$29_element$$168$$) {
  $className$$29_element$$168$$ = $className$$29_element$$168$$.className;
  return $goog$isString$$($className$$29_element$$168$$) && $className$$29_element$$168$$.match(/\S+/g) || []
}, $goog$dom$classlist$contains$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$170$$, $className$$31$$) {
  return $element$$170$$.classList.contains($className$$31$$)
} : function($element$$171$$, $className$$32$$) {
  return $goog$array$contains$$($goog$dom$classlist$get$$($element$$171$$), $className$$32$$)
}, $goog$dom$classlist$add$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$172$$, $className$$33$$) {
  $element$$172$$.classList.add($className$$33$$)
} : function($element$$173$$, $className$$34$$) {
  $goog$dom$classlist$contains$$($element$$173$$, $className$$34$$) || ($element$$173$$.className += 0 < $element$$173$$.className.length ? " " + $className$$34$$ : $className$$34$$)
}, $goog$dom$classlist$remove$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$176$$, $className$$39$$) {
  $element$$176$$.classList.remove($className$$39$$)
} : function($element$$177$$, $className$$40$$) {
  $goog$dom$classlist$contains$$($element$$177$$, $className$$40$$) && ($element$$177$$.className = $goog$array$filter$$($goog$dom$classlist$get$$($element$$177$$), function($c$$7$$) {
    return $c$$7$$ != $className$$40$$
  }).join(" "))
};
// Input 132
function $goog$ui$LabelInput$$($opt_label$$, $opt_domHelper$$24$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$24$$);
  this.$label_$ = $opt_label$$ || ""
}
$goog$inherits$$($goog$ui$LabelInput$$, $goog$ui$Component$$);
$goog$ui$LabelInput$$.prototype.$ffKeyRestoreValue_$ = $JSCompiler_alias_NULL$$;
var $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ = "placeholder" in document.createElement("input");
$JSCompiler_prototypeAlias$$ = $goog$ui$LabelInput$$.prototype;
$JSCompiler_prototypeAlias$$.$hasFocus_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = this.$getDomHelper$().$createDom$("input", {type:"text"})
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$184$$) {
  $goog$ui$LabelInput$$.$superClass_$.$decorateInternal$.call(this, $element$$184$$);
  this.$label_$ || (this.$label_$ = $element$$184$$.getAttribute("label") || "");
  var $JSCompiler_inline_result$$49$$;
  a: {
    var $doc$$inline_680$$ = $goog$dom$getOwnerDocument$$($element$$184$$);
    try {
      $JSCompiler_inline_result$$49$$ = $doc$$inline_680$$ && $doc$$inline_680$$.activeElement;
      break a
    }catch($e$$inline_681$$) {
    }
    $JSCompiler_inline_result$$49$$ = $JSCompiler_alias_NULL$$
  }
  $JSCompiler_inline_result$$49$$ == $element$$184$$ && (this.$hasFocus_$ = $JSCompiler_alias_TRUE$$, $goog$dom$classlist$remove$$(this.$getElement$(), this.$LABEL_CLASS_NAME$));
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ ? this.$getElement$().placeholder = this.$label_$ : $goog$a11y$aria$setState$$(this.$getElement$(), "label", this.$label_$)
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$LabelInput$$.$superClass_$.$enterDocument$.call(this);
  var $eh$$inline_684$$ = new $goog$events$EventHandler$$(this);
  $JSCompiler_StaticMethods_listen$$($eh$$inline_684$$, this.$getElement$(), "focus", this.$handleFocus_$);
  $JSCompiler_StaticMethods_listen$$($eh$$inline_684$$, this.$getElement$(), "blur", this.$handleBlur_$);
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ ? this.$eventHandler_$ = $eh$$inline_684$$ : ($goog$userAgent$GECKO$$ && $JSCompiler_StaticMethods_listen$$($eh$$inline_684$$, this.$getElement$(), ["keypress", "keydown", "keyup"], this.$handleEscapeKeys_$), $JSCompiler_StaticMethods_listen$$($eh$$inline_684$$, $goog$dom$getOwnerDocument$$(this.$getElement$()) ? $goog$dom$getWindow_$$($goog$dom$getOwnerDocument$$(this.$getElement$())) : window, "load", this.$handleWindowLoad_$), this.$eventHandler_$ = 
  $eh$$inline_684$$, $JSCompiler_StaticMethods_attachEventsToForm_$$(this));
  $JSCompiler_StaticMethods_check_$$(this);
  this.$getElement$().$labelInput_$ = this
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $goog$ui$LabelInput$$.$superClass_$.$exitDocument$.call(this);
  this.$eventHandler_$ && (this.$eventHandler_$.$dispose$(), this.$eventHandler_$ = $JSCompiler_alias_NULL$$);
  this.$getElement$().$labelInput_$ = $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_attachEventsToForm_$$($JSCompiler_StaticMethods_attachEventsToForm_$self$$) {
  !$JSCompiler_StaticMethods_attachEventsToForm_$self$$.$formAttached_$ && ($JSCompiler_StaticMethods_attachEventsToForm_$self$$.$eventHandler_$ && $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$getElement$().form) && ($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_attachEventsToForm_$self$$.$eventHandler_$, $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$getElement$().form, "submit", $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$handleFormSubmit_$), $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$formAttached_$ = 
  $JSCompiler_alias_TRUE$$)
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$LabelInput$$.$superClass_$.$disposeInternal$.call(this);
  this.$eventHandler_$ && (this.$eventHandler_$.$dispose$(), this.$eventHandler_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$LABEL_CLASS_NAME$ = "label-input-label";
$JSCompiler_prototypeAlias$$.$handleFocus_$ = function $$JSCompiler_prototypeAlias$$$$handleFocus_$$() {
  this.$hasFocus_$ = $JSCompiler_alias_TRUE$$;
  $goog$dom$classlist$remove$$(this.$getElement$(), this.$LABEL_CLASS_NAME$);
  if(!$goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ && !$JSCompiler_StaticMethods_hasChanged$$(this) && !this.$inFocusAndSelect_$) {
    var $me$$1$$ = this, $clearValue$$ = function $$clearValue$$$() {
      $me$$1$$.$getElement$() && ($me$$1$$.$getElement$().value = "")
    };
    $goog$userAgent$IE$$ ? $goog$Timer$callOnce$$($clearValue$$, 10) : $clearValue$$()
  }
};
$JSCompiler_prototypeAlias$$.$handleBlur_$ = function $$JSCompiler_prototypeAlias$$$$handleBlur_$$() {
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ || ($JSCompiler_StaticMethods_unlisten$$(this.$eventHandler_$, this.$getElement$(), "click", this.$handleFocus_$), this.$ffKeyRestoreValue_$ = $JSCompiler_alias_NULL$$);
  this.$hasFocus_$ = $JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_check_$$(this)
};
$JSCompiler_prototypeAlias$$.$handleEscapeKeys_$ = function $$JSCompiler_prototypeAlias$$$$handleEscapeKeys_$$($e$$140$$) {
  27 == $e$$140$$.keyCode && ("keydown" == $e$$140$$.type ? this.$ffKeyRestoreValue_$ = this.$getElement$().value : "keypress" == $e$$140$$.type ? this.$getElement$().value = this.$ffKeyRestoreValue_$ : "keyup" == $e$$140$$.type && (this.$ffKeyRestoreValue_$ = $JSCompiler_alias_NULL$$), $e$$140$$.preventDefault())
};
$JSCompiler_prototypeAlias$$.$handleFormSubmit_$ = function $$JSCompiler_prototypeAlias$$$$handleFormSubmit_$$() {
  $JSCompiler_StaticMethods_hasChanged$$(this) || (this.$getElement$().value = "", $goog$Timer$callOnce$$(this.$handleAfterSubmit_$, 10, this))
};
$JSCompiler_prototypeAlias$$.$handleAfterSubmit_$ = function $$JSCompiler_prototypeAlias$$$$handleAfterSubmit_$$() {
  $JSCompiler_StaticMethods_hasChanged$$(this) || (this.$getElement$().value = this.$label_$)
};
$JSCompiler_prototypeAlias$$.$handleWindowLoad_$ = function $$JSCompiler_prototypeAlias$$$$handleWindowLoad_$$() {
  $JSCompiler_StaticMethods_check_$$(this)
};
function $JSCompiler_StaticMethods_hasChanged$$($JSCompiler_StaticMethods_hasChanged$self$$) {
  return!!$JSCompiler_StaticMethods_hasChanged$self$$.$getElement$() && "" != $JSCompiler_StaticMethods_hasChanged$self$$.$getElement$().value && $JSCompiler_StaticMethods_hasChanged$self$$.$getElement$().value != $JSCompiler_StaticMethods_hasChanged$self$$.$label_$
}
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$getElement$().value = "";
  this.$ffKeyRestoreValue_$ != $JSCompiler_alias_NULL$$ && (this.$ffKeyRestoreValue_$ = "")
};
$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  $JSCompiler_StaticMethods_hasChanged$$(this) && (this.clear(), $JSCompiler_StaticMethods_check_$$(this))
};
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($s$$40$$) {
  this.$ffKeyRestoreValue_$ != $JSCompiler_alias_NULL$$ && (this.$ffKeyRestoreValue_$ = $s$$40$$);
  this.$getElement$().value = $s$$40$$;
  $JSCompiler_StaticMethods_check_$$(this)
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$() {
  return this.$ffKeyRestoreValue_$ != $JSCompiler_alias_NULL$$ ? this.$ffKeyRestoreValue_$ : $JSCompiler_StaticMethods_hasChanged$$(this) ? this.$getElement$().value : ""
};
function $JSCompiler_StaticMethods_check_$$($JSCompiler_StaticMethods_check_$self$$) {
  var $el$$76_labelInputElement$$2$$ = $JSCompiler_StaticMethods_check_$self$$.$getElement$();
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ ? $JSCompiler_StaticMethods_check_$self$$.$getElement$().placeholder != $JSCompiler_StaticMethods_check_$self$$.$label_$ && ($JSCompiler_StaticMethods_check_$self$$.$getElement$().placeholder = $JSCompiler_StaticMethods_check_$self$$.$label_$) : ($JSCompiler_StaticMethods_attachEventsToForm_$$($JSCompiler_StaticMethods_check_$self$$), $goog$a11y$aria$setState$$($el$$76_labelInputElement$$2$$, "label", $JSCompiler_StaticMethods_check_$self$$.$label_$));
  $JSCompiler_StaticMethods_hasChanged$$($JSCompiler_StaticMethods_check_$self$$) ? ($el$$76_labelInputElement$$2$$ = $JSCompiler_StaticMethods_check_$self$$.$getElement$(), $goog$dom$classlist$remove$$($el$$76_labelInputElement$$2$$, $JSCompiler_StaticMethods_check_$self$$.$LABEL_CLASS_NAME$)) : (!$JSCompiler_StaticMethods_check_$self$$.$inFocusAndSelect_$ && !$JSCompiler_StaticMethods_check_$self$$.$hasFocus_$ && ($el$$76_labelInputElement$$2$$ = $JSCompiler_StaticMethods_check_$self$$.$getElement$(), 
  $goog$dom$classlist$add$$($el$$76_labelInputElement$$2$$, $JSCompiler_StaticMethods_check_$self$$.$LABEL_CLASS_NAME$)), $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ || $goog$Timer$callOnce$$($JSCompiler_StaticMethods_check_$self$$.$restoreLabel_$, 10, $JSCompiler_StaticMethods_check_$self$$))
}
$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$8$$) {
  this.$getElement$().disabled = !$enabled$$8$$;
  var $el$$77$$ = this.$getElement$(), $className$$inline_691$$ = this.$LABEL_CLASS_NAME$ + "-disabled";
  !$enabled$$8$$ ? $goog$dom$classlist$add$$($el$$77$$, $className$$inline_691$$) : $goog$dom$classlist$remove$$($el$$77$$, $className$$inline_691$$)
};
$JSCompiler_prototypeAlias$$.isEnabled = function $$JSCompiler_prototypeAlias$$$isEnabled$() {
  return!this.$getElement$().disabled
};
$JSCompiler_prototypeAlias$$.$restoreLabel_$ = function $$JSCompiler_prototypeAlias$$$$restoreLabel_$$() {
  this.$getElement$() && (!$JSCompiler_StaticMethods_hasChanged$$(this) && !this.$hasFocus_$) && (this.$getElement$().value = this.$label_$)
};
// Input 133
function $uniform$Validators$$() {
  this.$metaMap_$ = new $goog$structs$Map$$;
  this.$metaMap_$.set("required", this.$validateRequired_$);
  this.$metaMap_$.set("validateMinLength", this.$validateMinLength_$);
  this.$metaMap_$.set("validateEmail", this.$validateEmail_$);
  this.$metaMap_$.set("validateMaxLength", this.$validateMaxLength_$);
  this.$metaMap_$.set("validateMin", this.$validateMin_$);
  this.$metaMap_$.set("validateMax", this.$validateMax_$);
  this.$metaMap_$.set("validateNumber", this.$validateNumber_$);
  this.$metaMap_$.set("validateInteger", this.$validateInteger_$);
  this.$metaMap_$.set("validateAlpha", this.$validateAlpha_$);
  this.$metaMap_$.set("validateAlphaNum", this.$validateAlphaNum_$);
  this.$metaMap_$.set("validatePhrase", this.$validatePhrase_$);
  this.$metaMap_$.set("validateUsername", this.$validateUsername_$)
}
$goog$addSingletonGetter$$($uniform$Validators$$);
$JSCompiler_prototypeAlias$$ = $uniform$Validators$$.prototype;
$JSCompiler_prototypeAlias$$.$metaMap_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$validateRequired_$ = function $$JSCompiler_prototypeAlias$$$$validateRequired_$$($el$$79_elValue$$, $condition$$5$$, $params$$6$$, $caption$$11$$) {
  if(!$condition$$5$$ || eval($condition$$5$$)) {
    $el$$79_elValue$$ = $goog$dom$forms$getValue$$($el$$79_elValue$$), ($el$$79_elValue$$ == $JSCompiler_alias_NULL$$ || $goog$string$isEmpty$$($el$$79_elValue$$)) && $JSCompiler_alias_THROW$$($caption$$11$$ + " is required")
  }
};
$JSCompiler_prototypeAlias$$.$validateMinLength_$ = function $$JSCompiler_prototypeAlias$$$$validateMinLength_$$($el$$80$$, $condition$$6$$, $minLength$$1$$, $caption$$12$$) {
  if(!$condition$$6$$ || eval($condition$$6$$)) {
    $minLength$$1$$ = parseInt($minLength$$1$$, 10), 0 < $minLength$$1$$ && $goog$dom$forms$getValue$$($el$$80$$).length < $minLength$$1$$ && $JSCompiler_alias_THROW$$($caption$$12$$ + (" should be at least " + ($minLength$$1$$ + " characters long")))
  }
};
$JSCompiler_prototypeAlias$$.$validateEmail_$ = function $$JSCompiler_prototypeAlias$$$$validateEmail_$$($el$$81$$, $condition$$7$$, $params$$7$$, $caption$$13$$) {
  (!$condition$$7$$ || eval($condition$$7$$)) && !$goog$dom$forms$getValue$$($el$$81$$).match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) && $JSCompiler_alias_THROW$$($caption$$13$$ + " is not a valid email address")
};
$JSCompiler_prototypeAlias$$.$validateMaxLength_$ = function $$JSCompiler_prototypeAlias$$$$validateMaxLength_$$($el$$82$$, $condition$$8$$, $maxLength$$, $caption$$14$$) {
  if(!$condition$$8$$ || eval($condition$$8$$)) {
    $maxLength$$ = parseInt($maxLength$$, 10), 0 < $maxLength$$ && $goog$dom$forms$getValue$$($el$$82$$).length > $maxLength$$ && $JSCompiler_alias_THROW$$($caption$$14$$ + (" should not be longer than " + ($maxLength$$ + " characters")))
  }
};
$JSCompiler_prototypeAlias$$.$validateMax_$ = function $$JSCompiler_prototypeAlias$$$$validateMax_$$($el$$83$$, $condition$$9$$, $maxValue$$, $caption$$15$$) {
  if(!$condition$$9$$ || eval($condition$$9$$)) {
    $maxValue$$ = parseInt($maxValue$$, 10), parseInt($goog$dom$forms$getValue$$($el$$83$$)) > $maxValue$$ && $JSCompiler_alias_THROW$$($caption$$15$$ + (" should be less than or equal to " + $maxValue$$))
  }
};
$JSCompiler_prototypeAlias$$.$validateMin_$ = function $$JSCompiler_prototypeAlias$$$$validateMin_$$($el$$84_fieldValue$$, $condition$$10$$, $minValue$$, $caption$$16$$) {
  if(!$condition$$10$$ || eval($condition$$10$$)) {
    $minValue$$ = parseInt($minValue$$, 10), $el$$84_fieldValue$$ = parseInt($goog$dom$forms$getValue$$($el$$84_fieldValue$$)), 0 < $el$$84_fieldValue$$ && $el$$84_fieldValue$$ < $minValue$$ && $JSCompiler_alias_THROW$$($caption$$16$$ + (" should be greater than or equal to " + $minValue$$))
  }
};
$JSCompiler_prototypeAlias$$.$validateNumber_$ = function $$JSCompiler_prototypeAlias$$$$validateNumber_$$($el$$85_elValue$$2$$, $condition$$11$$, $params$$8$$, $caption$$17$$) {
  if(!$condition$$11$$ || eval($condition$$11$$)) {
    $el$$85_elValue$$2$$ = $goog$dom$forms$getValue$$($el$$85_elValue$$2$$), !$el$$85_elValue$$2$$.match(/(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/) && !$goog$string$isEmpty$$($el$$85_elValue$$2$$) && $JSCompiler_alias_THROW$$($caption$$17$$ + " needs to be a number")
  }
};
$JSCompiler_prototypeAlias$$.$validateInteger_$ = function $$JSCompiler_prototypeAlias$$$$validateInteger_$$($el$$86_elValue$$3$$, $condition$$12$$, $params$$9$$, $caption$$18$$) {
  if(!$condition$$12$$ || eval($condition$$12$$)) {
    $el$$86_elValue$$3$$ = $goog$dom$forms$getValue$$($el$$86_elValue$$3$$), /[^0-9]/.test($el$$86_elValue$$3$$) && $JSCompiler_alias_THROW$$($caption$$18$$ + " needs to be a whole number")
  }
};
$JSCompiler_prototypeAlias$$.$validateAlpha_$ = function $$JSCompiler_prototypeAlias$$$$validateAlpha_$$($el$$87_elValue$$4$$, $condition$$13$$, $params$$10$$, $caption$$19$$) {
  if(!$condition$$13$$ || eval($condition$$13$$)) {
    $el$$87_elValue$$4$$ = $goog$dom$forms$getValue$$($el$$87_elValue$$4$$), /[^a-zA-Z]/.test($el$$87_elValue$$4$$) && $JSCompiler_alias_THROW$$($caption$$19$$ + " should contain only letters (without special characters or numbers)")
  }
};
$JSCompiler_prototypeAlias$$.$validateAlphaNum_$ = function $$JSCompiler_prototypeAlias$$$$validateAlphaNum_$$($el$$88_elValue$$5$$, $condition$$14$$, $params$$11$$, $caption$$20$$) {
  if(!$condition$$14$$ || eval($condition$$14$$)) {
    $el$$88_elValue$$5$$ = $goog$dom$forms$getValue$$($el$$88_elValue$$5$$), /[^a-zA-Z0-9]/.test($el$$88_elValue$$5$$) && $JSCompiler_alias_THROW$$($caption$$20$$ + " should contain only numbers and letters (without special characters)")
  }
};
$JSCompiler_prototypeAlias$$.$validatePhrase_$ = function $$JSCompiler_prototypeAlias$$$$validatePhrase_$$($el$$89_elValue$$6$$, $condition$$15$$, $params$$12$$, $caption$$21$$) {
  if(!$condition$$15$$ || eval($condition$$15$$)) {
    $el$$89_elValue$$6$$ = $goog$dom$forms$getValue$$($el$$89_elValue$$6$$), !$el$$89_elValue$$6$$.match(/^[\w\d\.\-_\(\)\*'# :,]+$/i) && !$goog$string$isEmpty$$($el$$89_elValue$$6$$) && $JSCompiler_alias_THROW$$($caption$$21$$ + " should contain only alphabetic characters, numbers, spaces, and the following: . , - _ () * # :")
  }
};
$JSCompiler_prototypeAlias$$.$validateUsername_$ = function $$JSCompiler_prototypeAlias$$$$validateUsername_$$($el$$90_elValue$$7$$, $condition$$16$$, $params$$13$$, $caption$$22$$) {
  if(!$condition$$16$$ || eval($condition$$16$$)) {
    $el$$90_elValue$$7$$ = $goog$dom$forms$getValue$$($el$$90_elValue$$7$$), !$el$$90_elValue$$7$$.match(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/) && !$goog$string$isEmpty$$($el$$90_elValue$$7$$) && $JSCompiler_alias_THROW$$($caption$$22$$ + " should contain only alphabetic characters, numbers, and the following characters: . _ -")
  }
};
// Input 134
function $uniform$Uniform$$($opt_model$$, $opt_domHelper$$25$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$25$$);
  var $model$$13$$ = $opt_model$$ || {}, $controlModel$$ = {};
  $controlModel$$.action = $goog$object$get$$($model$$13$$, "action", ".");
  $controlModel$$.accept = $goog$object$get$$($model$$13$$, "accept", $JSCompiler_alias_NULL$$);
  $controlModel$$.acceptCharset = $goog$object$get$$($model$$13$$, "acceptCharset", $JSCompiler_alias_NULL$$);
  $controlModel$$.enctype = $goog$object$get$$($model$$13$$, "enctype", $JSCompiler_alias_NULL$$);
  $controlModel$$.method = $goog$object$get$$($model$$13$$, "method", $JSCompiler_alias_NULL$$);
  $controlModel$$.name = $goog$object$get$$($model$$13$$, "name", $JSCompiler_alias_NULL$$);
  $controlModel$$.target = $goog$object$get$$($model$$13$$, "target", $JSCompiler_alias_NULL$$);
  this.$model_$ = $controlModel$$
}
$goog$inherits$$($uniform$Uniform$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $uniform$Uniform$$.prototype;
$JSCompiler_prototypeAlias$$.$logger_$ = $goog$debug$LogManager$getLogger$$("uniform.Uniform");
$JSCompiler_prototypeAlias$$.$getMethod$ = function $$JSCompiler_prototypeAlias$$$$getMethod$$() {
  return this.$model_$.method
};
$JSCompiler_prototypeAlias$$.getName = function $$JSCompiler_prototypeAlias$$$getName$() {
  return this.$model_$.name
};
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("uniForm");
$JSCompiler_prototypeAlias$$.$initialFormValue_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $dom$$14_topEl$$4$$ = this.$getDomHelper$(), $formAttributes$$ = {};
  $formAttributes$$.action = this.$model_$.action;
  this.$model_$.accept && ($formAttributes$$.accept = this.$model_$.accept);
  this.$model_$.acceptCharset && ($formAttributes$$["accept-charset"] = this.$model_$.acceptCharset);
  this.$model_$.enctype && ($formAttributes$$.enctype = this.$model_$.enctype);
  this.$getMethod$() && ($formAttributes$$.method = this.$getMethod$());
  this.getName() && ($formAttributes$$.name = this.getName());
  this.$model_$.target && ($formAttributes$$.target = this.$model_$.target);
  $dom$$14_topEl$$4$$ = $dom$$14_topEl$$4$$.$createDom$("form", $formAttributes$$, this.$content_$);
  $goog$dom$classes$add$$($dom$$14_topEl$$4$$, this.$getCssClass$());
  this.$element_$ = $dom$$14_topEl$$4$$;
  this.$decorateInternal$($dom$$14_topEl$$4$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$185$$) {
  $uniform$Uniform$$.$superClass_$.$decorateInternal$.call(this, $element$$185$$);
  this.$getDomHelper$();
  this.$model_$.action = $element$$185$$.getAttribute("action");
  this.$model_$.accept = $element$$185$$.getAttribute("accept");
  this.$model_$.acceptCharset = $element$$185$$.getAttribute("accept-charset");
  this.$model_$.enctype = $element$$185$$.getAttribute("enctype");
  this.$model_$.method = $element$$185$$.getAttribute("method");
  this.$model_$.name = $element$$185$$.getAttribute("name");
  this.$model_$.target = $element$$185$$.getAttribute("target");
  $goog$dom$classes$add$$($element$$185$$, this.$getCssClass$());
  for(var $els$$6$$ = this.$getElement$().elements, $el$$91$$, $i$$153$$ = 0;$el$$91$$ = $els$$6$$[$i$$153$$];$i$$153$$++) {
    if("INPUT" === $el$$91$$.tagName) {
      var $labelInput$$ = new $goog$ui$LabelInput$$;
      $JSCompiler_StaticMethods_addChild$$(this, $labelInput$$);
      $labelInput$$.$decorate$($el$$91$$)
    }
  }
  return $element$$185$$
};
$JSCompiler_prototypeAlias$$.$setContent$ = function $$JSCompiler_prototypeAlias$$$$setContent$$($content$$18$$) {
  this.$setContentInternal$($content$$18$$)
};
$JSCompiler_prototypeAlias$$.$setContentInternal$ = $JSCompiler_set$$("$content_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $uniform$Uniform$$.$superClass_$.$enterDocument$.call(this);
  this.$initialFormValue_$ = $goog$dom$forms$getFormDataString$$(this.$getElement$());
  var $handler$$67$$ = this.$getHandler$();
  $goog$dom$classes$has$$(this.$getElement$(), "askOnLeave") && $JSCompiler_StaticMethods_listen$$($handler$$67$$, window, "beforeunload", this.$onWindowBeforeUnload_$);
  $JSCompiler_StaticMethods_listen$$($handler$$67$$, this.$getElement$(), "submit", this.$onFormSubmit_$);
  for(var $els$$7$$ = this.$getElement$().elements, $el$$92$$, $i$$154$$ = 0;$el$$92$$ = $els$$7$$[$i$$154$$];$i$$154$$++) {
    $el$$92$$.disabled || $el$$92$$.tagName.toLowerCase() === "INPUT".$FIELDSET$ || ($JSCompiler_StaticMethods_listen$$($handler$$67$$, $el$$92$$, "focus", this.$onFormElementFocus_$), $JSCompiler_StaticMethods_listen$$($handler$$67$$, $el$$92$$, "blur", this.$onFormElementBlur_$), $JSCompiler_StaticMethods_listen$$($handler$$67$$, $el$$92$$, "click", this.$onFormElementClick_$), "SELECT" === $el$$92$$.tagName && $JSCompiler_StaticMethods_listen$$($handler$$67$$, $el$$92$$, "change", this.$onFormElementSelect_$), 
    "INPUT" === $el$$92$$.tagName && (ih = new $goog$events$KeyHandler$$, $JSCompiler_StaticMethods_attach$$(ih, $el$$92$$), $JSCompiler_StaticMethods_listen$$($handler$$67$$, ih, $goog$events$KeyHandler$EventType$KEY$$, this.$handleKeyEvent_$)))
  }
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_728$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_728$$.$metaMap_$)
  }catch($metaError$$) {
    this.$logger_$.info($metaError$$)
  }
};
function $JSCompiler_StaticMethods_processFieldEvent_$$($JSCompiler_StaticMethods_processFieldEvent_$self$$, $event$$5$$, $fieldElement$$) {
  var $controlHolderEl$$ = $goog$dom$getAncestorByTagNameAndClass$$($fieldElement$$, $JSCompiler_alias_NULL$$, "ctrlHolder");
  if($controlHolderEl$$ != $JSCompiler_alias_NULL$$) {
    switch($event$$5$$) {
      case 0:
        $goog$dom$classes$add$$($controlHolderEl$$, "focused");
        $goog$dom$classes$remove$$($controlHolderEl$$, "error");
        $goog$dom$classes$remove$$($controlHolderEl$$, "valid");
        break;
      case 1:
        $goog$dom$classes$remove$$($controlHolderEl$$, "focused");
        break;
      case 2:
        $goog$dom$classes$add$$($controlHolderEl$$, "valid");
        $JSCompiler_StaticMethods_processFieldEvent_$self$$.dispatchEvent(new $goog$events$Event$$("field_validated", $fieldElement$$));
        break;
      case 3:
        $goog$dom$classes$add$$($controlHolderEl$$, "error"), $JSCompiler_StaticMethods_processFieldEvent_$self$$.dispatchEvent(new $goog$events$Event$$("field_invalidated", $fieldElement$$))
    }
  }
}
$JSCompiler_prototypeAlias$$.$handleKeyEvent_$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEvent_$$($e$$144$$) {
  27 === $e$$144$$.keyCode ? $e$$144$$.preventDefault() : 13 === $e$$144$$.keyCode || $e$$144$$.keyCode === $goog$events$KeyCodes$$.$NUMPAD_ENTER$ || $uniform$InputFilters$$.$getInstance$().filter($e$$144$$)
};
$JSCompiler_prototypeAlias$$.$onFormElementFocus_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementFocus_$$($e$$145$$) {
  $JSCompiler_StaticMethods_processFieldEvent_$$(this, 0, $e$$145$$.target)
};
$JSCompiler_prototypeAlias$$.$onFormElementClick_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementClick_$$() {
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_731$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_731$$.$metaMap_$)
  }catch($metaError$$1$$) {
    this.$logger_$.info($metaError$$1$$)
  }
};
$JSCompiler_prototypeAlias$$.$onFormElementSelect_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementSelect_$$() {
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_734$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_734$$.$metaMap_$)
  }catch($metaError$$2$$) {
    this.$logger_$.info($metaError$$2$$)
  }
};
$JSCompiler_prototypeAlias$$.$onFormElementBlur_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementBlur_$$($e$$148$$) {
  $JSCompiler_StaticMethods_processFieldEvent_$$(this, 1, $e$$148$$.target);
  var $caption$$23$$ = $JSCompiler_StaticMethods_getCaptionForElement$$($e$$148$$.target);
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_737$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_737$$.$metaMap_$)
  }catch($metaError$$3$$) {
    this.$logger_$.info($metaError$$3$$)
  }
  try {
    var $JSCompiler_StaticMethods_runValidation$self$$inline_740$$ = $uniform$Validators$$.$getInstance$();
    $uniform$util$executeElementMetaTags$$($e$$148$$.target, "uniform-validators", $JSCompiler_StaticMethods_runValidation$self$$inline_740$$.$metaMap_$, $caption$$23$$);
    $JSCompiler_StaticMethods_processFieldEvent_$$(this, 2, $e$$148$$.target)
  }catch($validationError$$) {
    this.$logger_$.info($validationError$$), $JSCompiler_StaticMethods_processFieldEvent_$$(this, 3, $e$$148$$.target)
  }
};
$JSCompiler_prototypeAlias$$.$onWindowBeforeUnload_$ = function $$JSCompiler_prototypeAlias$$$$onWindowBeforeUnload_$$() {
  var $finalFormValue$$ = $goog$dom$forms$getFormDataString$$(this.$getElement$());
  return this.$initialFormValue_$ != $finalFormValue$$ && $goog$dom$classes$has$$(this.$getElement$(), "askOnLeave") ? confirm("Are you sure you want to leave this page without saving this form?") : $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.focus = function $$JSCompiler_prototypeAlias$$$focus$() {
  for(var $el$$inline_744_el$$inline_746_els$$8$$ = this.$getElement$().elements, $el$$inline_744_el$$inline_746_els$$8$$ = this.$getElement$().elements, $el$$94$$, $i$$156$$ = 0;$el$$94$$ = $el$$inline_744_el$$inline_746_els$$8$$[$i$$156$$];$i$$156$$++) {
    if(!($el$$94$$.disabled || $el$$94$$.tagName.toLowerCase() === "INPUT".$FIELDSET$)) {
      if("SELECT" === $el$$94$$.tagName) {
        $el$$inline_744_el$$inline_746_els$$8$$ = $el$$94$$;
        $el$$inline_744_el$$inline_746_els$$8$$.focus();
        $el$$inline_744_el$$inline_746_els$$8$$.select && $el$$inline_744_el$$inline_746_els$$8$$.select();
        break
      }else {
        if("INPUT" === $el$$94$$.tagName) {
          $el$$inline_744_el$$inline_746_els$$8$$ = $el$$94$$;
          $el$$inline_744_el$$inline_746_els$$8$$.focus();
          $el$$inline_744_el$$inline_746_els$$8$$.select && $el$$inline_744_el$$inline_746_els$$8$$.select();
          break
        }
      }
    }
  }
};
function $JSCompiler_StaticMethods_showFormError$$($JSCompiler_StaticMethods_showFormError$self$$, $messages$$) {
  var $dom$$16$$ = $JSCompiler_StaticMethods_showFormError$self$$.$getDomHelper$(), $currentErrorMsgEl_newErrorMsgEl$$ = $dom$$16$$.$getElement$("errorMsg");
  $currentErrorMsgEl_newErrorMsgEl$$ && $goog$dom$removeNode$$($currentErrorMsgEl_newErrorMsgEl$$);
  var $errorMessagesList$$ = $dom$$16$$.$createDom$("ol");
  $goog$array$forEach$$($messages$$, function($message$$23$$) {
    $errorMessagesList$$.appendChild($dom$$16$$.$createDom$("li", $JSCompiler_alias_VOID$$, $message$$23$$))
  });
  $currentErrorMsgEl_newErrorMsgEl$$ = $dom$$16$$.$createDom$("div", {id:"errorMsg"}, $dom$$16$$.$createDom$("h3", $JSCompiler_alias_VOID$$, "Sorry, this form needs corrections."), $errorMessagesList$$);
  $dom$$16$$.$insertSiblingBefore$($currentErrorMsgEl_newErrorMsgEl$$, $dom$$16$$.$getFirstElementChild$($JSCompiler_StaticMethods_showFormError$self$$.$getElement$()))
}
function $JSCompiler_StaticMethods_getCaptionForElement$$($el$$96$$) {
  var $controlHolderEl$$1_labelEl$$ = $goog$dom$getAncestorByTagNameAndClass$$($el$$96$$, "label");
  if($controlHolderEl$$1_labelEl$$ == $JSCompiler_alias_NULL$$) {
    var $controlHolderEl$$1_labelEl$$ = $goog$dom$getAncestorByTagNameAndClass$$($el$$96$$, $JSCompiler_alias_NULL$$, "ctrlHolder"), $allLabels_caption$$24$$ = $goog$dom$getElementsByTagNameAndClass$$("label", $JSCompiler_alias_VOID$$, $controlHolderEl$$1_labelEl$$), $controlHolderEl$$1_labelEl$$ = $goog$array$find$$($allLabels_caption$$24$$, function($lbEl$$) {
      if($goog$dom$getNextElementSibling$$($lbEl$$) == $el$$96$$) {
        return $JSCompiler_alias_TRUE$$
      }
    });
    $controlHolderEl$$1_labelEl$$ != $JSCompiler_alias_NULL$$ || ($controlHolderEl$$1_labelEl$$ = $allLabels_caption$$24$$[0])
  }
  $allLabels_caption$$24$$ = "";
  $controlHolderEl$$1_labelEl$$ != $JSCompiler_alias_NULL$$ && ($allLabels_caption$$24$$ = $goog$dom$getTextContent$$($controlHolderEl$$1_labelEl$$));
  return $allLabels_caption$$24$$
}
function $JSCompiler_StaticMethods_validate$$($JSCompiler_StaticMethods_validate$self$$) {
  for(var $errors$$ = [], $els$$9$$ = $JSCompiler_StaticMethods_validate$self$$.$getElement$().elements, $controlHolderEl$$2_el$$97$$, $i$$157$$ = 0;$controlHolderEl$$2_el$$97$$ = $els$$9$$[$i$$157$$];$i$$157$$++) {
    if(!($controlHolderEl$$2_el$$97$$.disabled || "fieldset" == $controlHolderEl$$2_el$$97$$.tagName.toLowerCase())) {
      var $caption$$25$$ = $JSCompiler_StaticMethods_getCaptionForElement$$($controlHolderEl$$2_el$$97$$);
      try {
        var $JSCompiler_StaticMethods_runValidation$self$$inline_748$$ = $uniform$Validators$$.$getInstance$();
        $uniform$util$executeElementMetaTags$$($controlHolderEl$$2_el$$97$$, "uniform-validators", $JSCompiler_StaticMethods_runValidation$self$$inline_748$$.$metaMap_$, $caption$$25$$)
      }catch($validationError$$1$$) {
        $JSCompiler_StaticMethods_validate$self$$.$logger_$.info($validationError$$1$$), $controlHolderEl$$2_el$$97$$ = $goog$dom$getAncestorByTagNameAndClass$$($controlHolderEl$$2_el$$97$$, $JSCompiler_alias_NULL$$, "ctrlHolder"), $controlHolderEl$$2_el$$97$$ != $JSCompiler_alias_NULL$$ && $goog$dom$classes$add$$($controlHolderEl$$2_el$$97$$, "error"), $errors$$.push($validationError$$1$$)
      }
    }
  }
  return $errors$$
}
$JSCompiler_prototypeAlias$$.$onFormSubmit_$ = function $$JSCompiler_prototypeAlias$$$$onFormSubmit_$$($e$$150$$) {
  var $errors$$1_resSubmit$$ = $JSCompiler_StaticMethods_validate$$(this);
  if(0 < $errors$$1_resSubmit$$.length) {
    return this.dispatchEvent(new $goog$events$Event$$("uniform_invalidated", this)), $JSCompiler_StaticMethods_showFormError$$(this, $errors$$1_resSubmit$$), $goog$dom$classes$add$$(this.$getElement$(), "failedSubmit"), $e$$150$$.preventDefault(), $JSCompiler_alias_FALSE$$
  }
  $goog$dom$classes$remove$$(this.$getElement$(), "failedSubmit");
  $goog$dom$classes$remove$$(this.$getElement$(), "askOnLeave");
  ($errors$$1_resSubmit$$ = this.dispatchEvent(new $goog$events$Event$$("uniform_submit", this))) || $e$$150$$.preventDefault();
  return $errors$$1_resSubmit$$
};
$goog$ui$registry$setDecoratorByClassName$$("uniForm", function() {
  return new $uniform$Uniform$$
});
// Input 135
function $bitex$view$NullView$$($app$$7$$, $opt_domHelper$$26$$) {
  $bitex$view$View$$.call(this, $app$$7$$, $opt_domHelper$$26$$)
}
$goog$inherits$$($bitex$view$NullView$$, $bitex$view$View$$);
// Input 136
function $goog$json$parse$$($o$$1_s$$42$$) {
  $o$$1_s$$42$$ = String($o$$1_s$$42$$);
  if(/^\s*$/.test($o$$1_s$$42$$) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test($o$$1_s$$42$$.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + $o$$1_s$$42$$ + ")")
    }catch($ex$$10$$) {
    }
  }
  $JSCompiler_alias_THROW$$(Error("Invalid JSON string: " + $o$$1_s$$42$$))
}
function $goog$json$serialize$$($object$$5$$) {
  return(new $goog$json$Serializer$$($JSCompiler_alias_VOID$$)).serialize($object$$5$$)
}
function $goog$json$Serializer$$($opt_replacer$$2$$) {
  this.$replacer_$ = $opt_replacer$$2$$
}
$goog$json$Serializer$$.prototype.serialize = function $$goog$json$Serializer$$$$serialize$($object$$6$$) {
  var $sb$$6$$ = [];
  $JSCompiler_StaticMethods_serialize_$$(this, $object$$6$$, $sb$$6$$);
  return $sb$$6$$.join("")
};
function $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, $object$$7$$, $sb$$7$$) {
  switch(typeof $object$$7$$) {
    case "string":
      $JSCompiler_StaticMethods_serializeString_$$($object$$7$$, $sb$$7$$);
      break;
    case "number":
      $sb$$7$$.push(isFinite($object$$7$$) && !isNaN($object$$7$$) ? $object$$7$$ : "null");
      break;
    case "boolean":
      $sb$$7$$.push($object$$7$$);
      break;
    case "undefined":
      $sb$$7$$.push("null");
      break;
    case "object":
      if($object$$7$$ == $JSCompiler_alias_NULL$$) {
        $sb$$7$$.push("null");
        break
      }
      if($goog$isArray$$($object$$7$$)) {
        $JSCompiler_StaticMethods_serialize_$self$$.serializeArray($object$$7$$, $sb$$7$$);
        break
      }
      $sb$$7$$.push("{");
      var $sep$$inline_758$$ = "", $key$$inline_759$$;
      for($key$$inline_759$$ in $object$$7$$) {
        if(Object.prototype.hasOwnProperty.call($object$$7$$, $key$$inline_759$$)) {
          var $value$$inline_760$$ = $object$$7$$[$key$$inline_759$$];
          "function" != typeof $value$$inline_760$$ && ($sb$$7$$.push($sep$$inline_758$$), $JSCompiler_StaticMethods_serializeString_$$($key$$inline_759$$, $sb$$7$$), $sb$$7$$.push(":"), $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$ ? $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$.call($object$$7$$, $key$$inline_759$$, $value$$inline_760$$) : $value$$inline_760$$, $sb$$7$$), $sep$$inline_758$$ = 
          ",")
        }
      }
      $sb$$7$$.push("}");
      break;
    case "function":
      break;
    default:
      $JSCompiler_alias_THROW$$(Error("Unknown type: " + typeof $object$$7$$))
  }
}
var $goog$json$Serializer$charToJsonCharCache_$$ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, $goog$json$Serializer$charsToReplace_$$ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function $JSCompiler_StaticMethods_serializeString_$$($s$$44$$, $sb$$8$$) {
  $sb$$8$$.push('"', $s$$44$$.replace($goog$json$Serializer$charsToReplace_$$, function($c$$8$$) {
    if($c$$8$$ in $goog$json$Serializer$charToJsonCharCache_$$) {
      return $goog$json$Serializer$charToJsonCharCache_$$[$c$$8$$]
    }
    var $cc$$2$$ = $c$$8$$.charCodeAt(0), $rv$$23$$ = "\\u";
    16 > $cc$$2$$ ? $rv$$23$$ += "000" : 256 > $cc$$2$$ ? $rv$$23$$ += "00" : 4096 > $cc$$2$$ && ($rv$$23$$ += "0");
    return $goog$json$Serializer$charToJsonCharCache_$$[$c$$8$$] = $rv$$23$$ + $cc$$2$$.toString(16)
  }), '"')
}
$goog$json$Serializer$$.prototype.serializeArray = function $$goog$json$Serializer$$$$serializeArray$($arr$$68$$, $sb$$10$$) {
  var $l$$24$$ = $arr$$68$$.length;
  $sb$$10$$.push("[");
  for(var $sep_value$$159$$ = "", $i$$158$$ = 0;$i$$158$$ < $l$$24$$;$i$$158$$++) {
    $sb$$10$$.push($sep_value$$159$$), $sep_value$$159$$ = $arr$$68$$[$i$$158$$], $JSCompiler_StaticMethods_serialize_$$(this, this.$replacer_$ ? this.$replacer_$.call($arr$$68$$, String($i$$158$$), $sep_value$$159$$) : $sep_value$$159$$, $sb$$10$$), $sep_value$$159$$ = ","
  }
  $sb$$10$$.push("]")
};
// Input 137
function $bitex$ui$Customers$$($opt_domHelper$$27$$) {
  this.$selected_customer_$ = $JSCompiler_alias_NULL$$;
  $bitex$ui$DataGrid$$.call(this, {title:"Clienstes", rowClassFn:this.$getRowClass$, columns:[{property:"Username", label:"Nombre de usuario", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-username"
  }}, {property:"Email", label:"Correo electronico", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-email"
  }}, {property:"Verified", label:"Verificado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$45$$) {
    return 2 == $s$$45$$ ? "Si" : 1 == $s$$45$$ ? "Pendiente" : "No"
  }, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-verified"
  }}, {property:"TwoFactorEnabled", label:"dos pasos", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$46$$) {
    return $s$$46$$ ? "Si" : "No"
  }, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-two-steps"
  }}, {property:"LastLogin", label:"Ultima visita", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-last-login"
  }}, {property:"ID", label:"Acciones", sortable:$JSCompiler_alias_TRUE$$, formatter:function($id$$10$$, $row_set_obj$$4$$) {
    var $data_row$$2$$ = $goog$json$serialize$$($row_set_obj$$4$$);
    return $goog$dom$createDom$$("button", {"class":"btn btn-mini btn-primary btn-deposit", "data-row":$data_row$$2$$}, "detalles")
  }, classes:function() {
    return $bitex$ui$Customers$CSS_CLASS$$ + "-last-login"
  }}], showSearch:$JSCompiler_alias_TRUE$$, searchPlaceholder:"Nombre de Usuario y correo electronico..."}, $opt_domHelper$$27$$)
}
$goog$inherits$$($bitex$ui$Customers$$, $bitex$ui$DataGrid$$);
var $bitex$ui$Customers$CSS_CLASS$$ = "customers";
$bitex$ui$Customers$$.prototype.$getCssClass$ = function $$bitex$ui$Customers$$$$$getCssClass$$() {
  return $bitex$ui$Customers$CSS_CLASS$$
};
$bitex$ui$Customers$$.prototype.$getRowClass$ = function $$bitex$ui$Customers$$$$$getRowClass$$($row_set$$7$$) {
  return 2 == $row_set$$7$$.Verified ? $bitex$ui$Customers$CSS_CLASS$$ + "-verified" : 1 == $row_set$$7$$.Verified ? $bitex$ui$Customers$CSS_CLASS$$ + "-verification-pending" : $bitex$ui$Customers$CSS_CLASS$$ + "-non-verified"
};
$bitex$ui$Customers$$.prototype.$enterDocument$ = function $$bitex$ui$Customers$$$$$enterDocument$$() {
  $bitex$ui$Customers$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "click", function($e$$151$$) {
    this.$selected_customer_$ = $goog$json$parse$$($e$$151$$.target.getAttribute("data-row"));
    this.$selected_customer_$ != $JSCompiler_alias_NULL$$ && this.dispatchEvent("detail")
  })
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$Customers$CSS_CLASS$$, function() {
  return new $bitex$ui$Customers$$
});
// Input 138
function $bitex$ui$OrderBook$templates$OrderBook$$($columnList6_opt_data$$40$$) {
  var $output$$37$$ = '<div class="text-center"><h4>' + $soy$$0$0escapeHtml$$($columnList6_opt_data$$40$$.title) + '</h4></div><table class="table"><thead><tr>';
  $columnList6_opt_data$$40$$ = $columnList6_opt_data$$40$$.$columns$;
  for(var $columnListLen6$$ = $columnList6_opt_data$$40$$.length, $columnIndex6$$ = 0;$columnIndex6$$ < $columnListLen6$$;$columnIndex6$$++) {
    $output$$37$$ += "<th>" + $soy$$0$0escapeHtml$$($columnList6_opt_data$$40$$[$columnIndex6$$]) + "</th>"
  }
  return $output$$37$$ + "</tr></thead><tbody></tbody></table>"
}
;
// Input 139
function $bitex$ui$OrderBook$$($username$$4$$, $side$$6$$, $qtyCurrencyDef$$, $priceCurrencyDef$$, $opt_blinkDelay$$3$$, $opt_domHelper$$28$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$28$$);
  this.$blink_delay_$ = $opt_blinkDelay$$3$$ || 700;
  this.$qtyCurrencyDef_$ = $qtyCurrencyDef$$;
  this.$priceCurrencyDef_$ = $priceCurrencyDef$$;
  this.$username_$ = $username$$4$$;
  this.$side_$ = $side$$6$$
}
$goog$inherits$$($bitex$ui$OrderBook$$, $goog$ui$Component$$);
var $bitex$ui$OrderBook$Side$BUY$$ = "0", $bitex$ui$OrderBook$Side$SELL$$ = "1", $bitex$ui$OrderBook$EventType$CANCEL$$ = "cancel";
$JSCompiler_prototypeAlias$$ = $bitex$ui$OrderBook$$.prototype;
$JSCompiler_prototypeAlias$$.$getBaseCssClass$ = $JSCompiler_returnArg$$("order-book");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $el$$98_title$$10$$ = "Ordenes de compra", $columns$$6$$ = ["Comprador", "Cantidad", "Precio"];
  this.$side_$ == $bitex$ui$OrderBook$Side$SELL$$ && ($el$$98_title$$10$$ = "Ordenes de venta", $columns$$6$$ = ["Precio", "Cantidad", "Vendedor"]);
  $el$$98_title$$10$$ = $goog$soy$renderAsElement$$($bitex$ui$OrderBook$templates$OrderBook$$, {title:$el$$98_title$$10$$, $columns$:$columns$$6$$});
  this.$decorateInternal$($el$$98_title$$10$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$186$$) {
  this.$element_$ = $element$$186$$;
  var $JSCompiler_StaticMethods_getElementsByTagNameAndClass$self$$inline_765$$ = this.$getDomHelper$();
  this.$bodyEl_$ = $goog$dom$getElementsByTagNameAndClass_$$($JSCompiler_StaticMethods_getElementsByTagNameAndClass$self$$inline_765$$.$document_$, "tbody", $JSCompiler_alias_VOID$$, $element$$186$$)[0]
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$OrderBook$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "click", this.$onClick_$)
};
$JSCompiler_prototypeAlias$$.$onClick_$ = function $$JSCompiler_prototypeAlias$$$$onClick_$$($e$$152$$) {
  var $cxlEl_orderId$$1$$ = $e$$152$$.target;
  if("A" == $cxlEl_orderId$$1$$.tagName || "I" == $cxlEl_orderId$$1$$.tagName) {
    $cxlEl_orderId$$1$$ = $cxlEl_orderId$$1$$.getAttribute("data-order-id"), $cxlEl_orderId$$1$$ != $JSCompiler_alias_NULL$$ && (this.dispatchEvent(new $bitex$ui$OrderBookEvent$$($bitex$ui$OrderBook$EventType$CANCEL$$, $cxlEl_orderId$$1$$)), $e$$152$$.preventDefault(), $e$$152$$.stopPropagation())
  }
};
function $bitex$ui$OrderBookEvent$$($type$$106$$, $orderId$$2$$) {
  $goog$events$Event$$.call(this, $type$$106$$);
  this.$order_id$ = $orderId$$2$$
}
$goog$inherits$$($bitex$ui$OrderBookEvent$$, $goog$events$Event$$);
$bitex$ui$OrderBook$$.prototype.clear = function $$bitex$ui$OrderBook$$$$clear$() {
  this.$getDomHelper$();
  $goog$dom$removeChildren$$(this.$bodyEl_$)
};
function $JSCompiler_StaticMethods_deleteOrderThru$$($JSCompiler_StaticMethods_deleteOrderThru$self$$, $index$$76$$) {
  $JSCompiler_StaticMethods_deleteOrderThru$self$$.$getDomHelper$();
  for(var $child$$17$$;($child$$17$$ = $JSCompiler_StaticMethods_deleteOrderThru$self$$.$bodyEl_$.firstChild) && 0 < $index$$76$$;) {
    $JSCompiler_StaticMethods_deleteOrderThru$self$$.$bodyEl_$.removeChild($child$$17$$), $index$$76$$--
  }
}
function $JSCompiler_StaticMethods_deleteOrder$$($JSCompiler_StaticMethods_deleteOrder$self$$, $index$$77$$) {
  var $dom$$21$$ = $JSCompiler_StaticMethods_deleteOrder$self$$.$getDomHelper$(), $trEl$$ = $dom$$21$$.$getChildren$($JSCompiler_StaticMethods_deleteOrder$self$$.$bodyEl_$)[$index$$77$$];
  $dom$$21$$.removeNode($trEl$$)
}
function $JSCompiler_StaticMethods_updateOrder$$($JSCompiler_StaticMethods_updateOrder$self$$, $index$$78_trEl$$1$$, $qty$$2$$) {
  var $dom$$22$$ = $JSCompiler_StaticMethods_updateOrder$self$$.$getDomHelper$();
  $qty$$2$$ = (new $goog$i18n$NumberFormat$$($JSCompiler_StaticMethods_updateOrder$self$$.$qtyCurrencyDef_$.$format$, $JSCompiler_StaticMethods_updateOrder$self$$.$qtyCurrencyDef_$.code)).$format$($qty$$2$$);
  $index$$78_trEl$$1$$ = $dom$$22$$.$getChildren$($JSCompiler_StaticMethods_updateOrder$self$$.$bodyEl_$)[$index$$78_trEl$$1$$];
  var $tdQtyEl$$ = $dom$$22$$.$getChildren$($index$$78_trEl$$1$$)[1];
  $dom$$22$$.$setTextContent$($tdQtyEl$$, $qty$$2$$);
  $goog$dom$classes$add$$($tdQtyEl$$, "warning");
  $goog$Timer$callOnce$$(function() {
    $goog$dom$classes$remove$$($tdQtyEl$$, "warning")
  }, $JSCompiler_StaticMethods_updateOrder$self$$.$blink_delay_$, $JSCompiler_StaticMethods_updateOrder$self$$)
}
function $JSCompiler_StaticMethods_insertOrder$$($JSCompiler_StaticMethods_insertOrder$self$$, $index$$79$$, $id$$11$$, $price$$2_priceEl$$, $qty$$3_qtyEl$$, $td_list_userNameEl_username$$5$$, $broker$$4$$) {
  var $dom$$23$$ = $JSCompiler_StaticMethods_insertOrder$self$$.$getDomHelper$(), $formatter$$8$$ = new $goog$i18n$NumberFormat$$($JSCompiler_StaticMethods_insertOrder$self$$.$qtyCurrencyDef_$.$format$, $JSCompiler_StaticMethods_insertOrder$self$$.$qtyCurrencyDef_$.code);
  $qty$$3_qtyEl$$ = $formatter$$8$$.$format$($qty$$3_qtyEl$$);
  $formatter$$8$$ = new $goog$i18n$NumberFormat$$($JSCompiler_StaticMethods_insertOrder$self$$.$priceCurrencyDef_$.$format$, $JSCompiler_StaticMethods_insertOrder$self$$.$priceCurrencyDef_$.code);
  $price$$2_priceEl$$ = $formatter$$8$$.$format$($price$$2_priceEl$$);
  $price$$2_priceEl$$ = $dom$$23$$.$createDom$("td", $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-price", $price$$2_priceEl$$);
  $qty$$3_qtyEl$$ = $dom$$23$$.$createDom$("td", $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-qty", $qty$$3_qtyEl$$);
  $td_list_userNameEl_username$$5$$ = $td_list_userNameEl_username$$5$$ === $JSCompiler_StaticMethods_insertOrder$self$$.$username_$ || $broker$$4$$ === $JSCompiler_StaticMethods_insertOrder$self$$.$username_$ ? $dom$$23$$.$createDom$("td", $JSCompiler_alias_VOID$$, $dom$$23$$.$createDom$("a", {"class":"btn-cancel-order text-error", href:"", "data-order-id":$id$$11$$}, $dom$$23$$.$createDom$("i", {"class":"icon-remove", style:"line-height: 2px;", "data-order-id":$id$$11$$}, "  " + $td_list_userNameEl_username$$5$$))) : 
  $dom$$23$$.$createDom$("td", $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-username", $td_list_userNameEl_username$$5$$);
  $JSCompiler_StaticMethods_insertOrder$self$$.$side_$ == $bitex$ui$OrderBook$Side$BUY$$ ? ($goog$dom$classes$add$$($td_list_userNameEl_username$$5$$, $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-left"), $goog$dom$classes$add$$($price$$2_priceEl$$, $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-right"), $td_list_userNameEl_username$$5$$ = [$td_list_userNameEl_username$$5$$, $qty$$3_qtyEl$$, $price$$2_priceEl$$]) : ($goog$dom$classes$add$$($td_list_userNameEl_username$$5$$, 
  $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-right"), $goog$dom$classes$add$$($price$$2_priceEl$$, $JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-left"), $td_list_userNameEl_username$$5$$ = [$price$$2_priceEl$$, $qty$$3_qtyEl$$, $td_list_userNameEl_username$$5$$]);
  var $rowEl$$ = $dom$$23$$.$createDom$("tr", {"data-order-id":$id$$11$$, "class":$JSCompiler_StaticMethods_insertOrder$self$$.$getBaseCssClass$() + "-row"}, $td_list_userNameEl_username$$5$$);
  $dom$$23$$.$insertChildAt$($JSCompiler_StaticMethods_insertOrder$self$$.$bodyEl_$, $rowEl$$, $index$$79$$);
  $goog$dom$classes$add$$($rowEl$$, "warning");
  $goog$Timer$callOnce$$(function() {
    $goog$dom$classes$remove$$($rowEl$$, "warning")
  }, $JSCompiler_StaticMethods_insertOrder$self$$.$blink_delay_$, $JSCompiler_StaticMethods_insertOrder$self$$)
}
;
// Input 140
function $bitex$view$BrokerView$$($app$$8$$, $opt_domHelper$$29$$) {
  $bitex$view$View$$.call(this, $app$$8$$, $opt_domHelper$$29$$)
}
$goog$inherits$$($bitex$view$BrokerView$$, $bitex$view$View$$);
$bitex$view$BrokerView$$.prototype.$enterDocument$ = function $$bitex$view$BrokerView$$$$$enterDocument$$() {
  $bitex$view$BrokerView$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$app_$.$model_$, "model_setBroker", this.$onModelSetBroker_$)
};
$bitex$view$BrokerView$$.prototype.$onModelSetBroker_$ = function $$bitex$view$BrokerView$$$$$onModelSetBroker_$$($broker$$5_e$$153$$) {
  $broker$$5_e$$153$$ = $broker$$5_e$$153$$.data;
  var $broker_list$$2$$ = this.$app_$.$model_$.get("BrokerList"), $fmt$$1$$ = new $goog$i18n$NumberFormat$$(3);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($fmt$$1$$);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($fmt$$1$$);
  $broker$$5_e$$153$$.FormattedTransactionFeeBuy = $fmt$$1$$.$format$($broker$$5_e$$153$$.TransactionFeeBuy / 1E4);
  $broker$$5_e$$153$$.FormattedTransactionFeeSell = $fmt$$1$$.$format$($broker$$5_e$$153$$.TransactionFeeSell / 1E4);
  $goog$soy$renderElement$$($goog$dom$getElement$$("my_broker"), $bitex$templates$BrokerView$$, {$show_title$:$JSCompiler_alias_TRUE$$, $msg_broker$:$broker$$5_e$$153$$, $broker_list$:$broker_list$$2$$})
};
// Input 141
function $bitex$view$CustomersView$$($app$$9$$, $opt_domHelper$$30$$) {
  $bitex$view$View$$.call(this, $app$$9$$, $opt_domHelper$$30$$);
  this.$confirmation_token_$ = this.$request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$CustomersView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$CustomersView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$CustomersView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$CustomersView$$.$superClass_$.$exitView$.call(this)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$CustomersView$$.$superClass_$.$enterDocument$.call(this);
  this.$getHandler$()
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$destroyComponents_$();
  $bitex$view$CustomersView$$.$superClass_$.$disposeInternal$.call(this)
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$71$$ = this.$getHandler$();
  this.$customers_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$71$$, this.$customers_table_$, "request_data", this.$onWithdrawListTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$71$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$WITHDRAW_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onWithdrawListReponse_$));
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$request_id_$ = this.$customers_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$72$$ = this.$getHandler$();
  this.$customers_table_$ != $JSCompiler_alias_NULL$$ ? this.$customers_table_$.reload() : (this.$request_id_$ = parseInt(1E7 * Math.random(), 10), this.$customers_table_$ = new $bitex$ui$Customers$$, $JSCompiler_StaticMethods_listen$$($handler$$72$$, this.$customers_table_$, "request_data", this.$onCustomerListTableRequestData_$), $JSCompiler_StaticMethods_listen$$($handler$$72$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$CUSTOMER_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onCustomerListReponse_$), 
  $JSCompiler_StaticMethods_listen$$($handler$$72$$, this.$customers_table_$, "detail", this.$onUserDetailsClick_$), $JSCompiler_StaticMethods_addChild$$(this, this.$customers_table_$, $JSCompiler_alias_TRUE$$))
};
$JSCompiler_prototypeAlias$$.$onUserDetailsClick_$ = function $$JSCompiler_prototypeAlias$$$$onUserDetailsClick_$$($data$$35_e$$154$$) {
  $data$$35_e$$154$$ = $data$$35_e$$154$$.target.$selected_customer_$;
  this.$app_$.$model_$.set("SelectedCustomer", $data$$35_e$$154$$);
  this.$app_$.$setView$("account_overview/" + $data$$35_e$$154$$.Username + "/")
};
$JSCompiler_prototypeAlias$$.$onCustomerListTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onCustomerListTableRequestData_$$($e$$155$$) {
  this.$app_$.$conn_$.$requestCustomerList$(this.$request_id_$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $e$$155$$.options.Filter, $e$$155$$.options.Page, $e$$155$$.options.Limit, [0, 1, 2])
};
$JSCompiler_prototypeAlias$$.$onCustomerListReponse_$ = function $$JSCompiler_prototypeAlias$$$$onCustomerListReponse_$$($e$$156_msg$$20$$) {
  this.$customers_table_$ != $JSCompiler_alias_NULL$$ && ($e$$156_msg$$20$$ = $e$$156_msg$$20$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$customers_table_$, $e$$156_msg$$20$$.CustomerListGrp, $e$$156_msg$$20$$.Columns))
};
// Input 142
function $bitex$ui$DepositList$$($crypto_currencies_def$$, $opt_broker_mode$$1_show_customers$$1$$, $grid_columns$$3_opt_show_customers$$1$$, $opt_domHelper$$31$$) {
  var $broker_mode$$1$$ = $JSCompiler_alias_FALSE$$;
  $opt_broker_mode$$1_show_customers$$1$$ === $JSCompiler_alias_TRUE$$ && ($broker_mode$$1$$ = $opt_broker_mode$$1_show_customers$$1$$);
  $opt_broker_mode$$1_show_customers$$1$$ = $JSCompiler_alias_FALSE$$;
  $grid_columns$$3_opt_show_customers$$1$$ === $JSCompiler_alias_TRUE$$ && ($opt_broker_mode$$1_show_customers$$1$$ = $grid_columns$$3_opt_show_customers$$1$$);
  $grid_columns$$3_opt_show_customers$$1$$ = [{property:"Created", label:"Fecha/Hora", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-created"
  }}, {property:"Status", label:"Estado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$47$$, $rowSet$$3$$) {
    var $progress_message$$ = "En progreso...", $crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ = $JSCompiler_alias_NULL$$;
    if("CRY" == $rowSet$$3$$.Type && ($crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ = $goog$array$find$$($crypto_currencies_def$$, function($c$$9$$) {
      if($c$$9$$.CurrencyCode == $rowSet$$3$$.Currency) {
        return $JSCompiler_alias_TRUE$$
      }
    }), $crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ != $JSCompiler_alias_NULL$$)) {
      var $confirmation_info_array_number_of_confirmations$$;
      $rowSet$$3$$.PaidValue != $JSCompiler_alias_NULL$$ && 0 < $rowSet$$3$$.PaidValue && ($confirmation_info_array_number_of_confirmations$$ = $goog$array$find$$($crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$.Confirmations, function($conf_info$$) {
        if($rowSet$$3$$.PaidValue >= $conf_info$$[0] && $rowSet$$3$$.PaidValue < $conf_info$$[1]) {
          return $JSCompiler_alias_TRUE$$
        }
      }));
      $confirmation_info_array_number_of_confirmations$$ != $JSCompiler_alias_NULL$$ && ($crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ = $confirmation_info_array_number_of_confirmations$$[2], $confirmation_info_array_number_of_confirmations$$ = 0, $goog$isDef$$($rowSet$$3$$.Data) && $goog$isDef$$($rowSet$$3$$.Data.Confirmations) && ($confirmation_info_array_number_of_confirmations$$ = $rowSet$$3$$.Data.Confirmations), $progress_message$$ = $confirmation_info_array_number_of_confirmations$$ + 
      (" de " + ($crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ + " confirmaci\u00f3nes")))
    }
    $crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$ = function($s$$48$$) {
      switch($s$$48$$) {
        case "0":
          return["", "Sin confirmar"];
        case "1":
          return["warning", "Pendiente"];
        case "2":
          return["info", $progress_message$$];
        case "4":
          return["success", "Completado"];
        case "8":
          return["important", "Cancelado"]
      }
      return["", ""]
    }($s$$47$$);
    return $goog$dom$createDom$$("span", ["label", "label-" + $crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$[0]], $crypto_currency_def_label_class_text$$1_number_of_necessary_confirmations$$[1])
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-status"
  }}, {property:"Value", label:"Valor", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-value"
  }}, {property:"ControlNumber", label:"N\u00famero de control", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$161$$, $rowSet$$4$$) {
    switch($rowSet$$4$$.Type) {
      case "CRY":
        var $top_el$$ = $goog$dom$createDom$$("div");
        $goog$style$setStyle$$($top_el$$, "position", "relative");
        $goog$style$setWidth$$($top_el$$, 120);
        var $inner_el$$ = $goog$dom$createDom$$("div", $JSCompiler_alias_VOID$$, $goog$dom$createDom$$("span", $JSCompiler_alias_VOID$$, $rowSet$$4$$.Data.InputAddress));
        "BTC" == $rowSet$$4$$.Currency && ($inner_el$$ = $goog$dom$createDom$$("div", $JSCompiler_alias_VOID$$, $goog$dom$createDom$$("a", {href:"https://blockchain.info/address/" + $rowSet$$4$$.Data.InputAddress, target:"blank_"}, $rowSet$$4$$.Data.InputAddress)));
        $inner_el$$.style[$goog$userAgent$IE$$ ? "styleFloat" : "cssFloat"] = "left";
        $goog$style$setStyle$$($inner_el$$, "max-width", "110px");
        $goog$style$setStyle$$($inner_el$$, "overflow", "hidden");
        $goog$style$setStyle$$($inner_el$$, "text-overflow", "ellipsis");
        $goog$style$setStyle$$($inner_el$$, "white-space", "nowrap");
        $top_el$$.appendChild($inner_el$$);
        return $top_el$$;
      default:
        return"" + $value$$161$$
    }
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-method"
  }}, {property:"Data", label:"Detalles", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$162$$, $rowSet$$5$$) {
    var $btn_qr$$1_data_row$$3$$ = $goog$json$serialize$$($rowSet$$5$$), $btn_view$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-info btn-deposit-view", href:"/get_deposit?deposit_id=" + $rowSet$$5$$.DepositID, target:"_blank"}, "ver", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-eye-open"])), $btn_qr$$1_data_row$$3$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-info btn-deposit-view-qr", href:"#", "data-action":"SHOW_QR", "data-row":$btn_qr$$1_data_row$$3$$}, "qr", 
    " ", $goog$dom$createDom$$("i", ["icon-white", "icon-qrcode"]));
    switch($rowSet$$5$$.Type) {
      case "CRY":
        switch($rowSet$$5$$.Status) {
          case "0":
          ;
          case "1":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_qr$$1_data_row$$3$$]);
          case "2":
          ;
          case "4":
          ;
          case "8":
            return""
        }
        break;
      case "BBS":
      ;
      case "WTP":
      ;
      case "DTP":
        switch($rowSet$$5$$.Status) {
          case "0":
          ;
          case "1":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_view$$]);
          case "2":
          ;
          case "4":
          ;
          case "8":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_view$$])
        }
    }
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-details"
  }}];
  $opt_broker_mode$$1_show_customers$$1$$ && $grid_columns$$3_opt_show_customers$$1$$.push({property:"Username", label:"Nombre de usuario", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-username"
  }});
  $broker_mode$$1$$ ? $grid_columns$$3_opt_show_customers$$1$$.push({property:"DepositID", label:"Acciones", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$163$$, $rowSet$$6$$) {
    var $btn_show_receipt_broker_data_row$$4$$ = $goog$json$serialize$$($rowSet$$6$$), $btn_cancel$$1$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-danger btn-deposit-cancel", href:"#", "data-action":"CANCEL", "data-row":$btn_show_receipt_broker_data_row$$4$$}, "cancelar", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-remove"])), $btn_progress$$1$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-info btn-deposit-progress", href:"#", "data-action":"PROGRESS", "data-row":$btn_show_receipt_broker_data_row$$4$$}, 
    'Definir como "en curso"', " ", $goog$dom$createDom$$("i", ["icon-white", "icon-refresh"])), $btn_complete$$1$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-success btn-deposit-complete", href:"#", "data-action":"COMPLETE", "data-row":$btn_show_receipt_broker_data_row$$4$$}, 'Definir como "completado"', " ", $goog$dom$createDom$$("i", ["icon-white", "icon-ok"])), $btn_show_receipt_broker_data_row$$4$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-success btn-deposit-show-receipt", 
    "data-action":"SHOW_RECEIPT", "data-row":$btn_show_receipt_broker_data_row$$4$$}, $goog$dom$createDom$$("i", ["icon-white", "icon-file"]));
    switch($rowSet$$6$$.Type) {
      case "CRY":
        switch($rowSet$$6$$.Status) {
          case "0":
          ;
          case "1":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_progress$$1$$]);
          case "2":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_complete$$1$$]);
          case "4":
            return"";
          case "8":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_progress$$1$$])
        }
        break;
      default:
        switch($rowSet$$6$$.Status) {
          case "0":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_cancel$$1$$, $btn_progress$$1$$]);
          case "1":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_show_receipt_broker_data_row$$4$$, $btn_cancel$$1$$, $btn_progress$$1$$]);
          case "2":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_show_receipt_broker_data_row$$4$$, $btn_cancel$$1$$, $btn_complete$$1$$]);
          case "4":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_cancel$$1$$]);
          case "8":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_progress$$1$$])
        }
    }
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-actions"
  }}) : $grid_columns$$3_opt_show_customers$$1$$.push({property:"DepositID", label:"Acciones", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$164$$, $rowSet$$7$$) {
    var $btn_show_receipt_data_row$$5$$ = $goog$json$serialize$$($rowSet$$7$$), $btn_upload$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-success btn-deposit-upload", "data-action":"UPLOAD", "data-row":$btn_show_receipt_data_row$$5$$}, "enviar recibo", " ", $goog$dom$createDom$$("i", ["icon-white", "icon-file"])), $btn_show_receipt_data_row$$5$$ = $goog$dom$createDom$$("a", {"class":"btn btn-mini btn-success btn-deposit-show-receipt", "data-action":"SHOW_RECEIPT", "data-row":$btn_show_receipt_data_row$$5$$}, 
    $goog$dom$createDom$$("i", ["icon-white", "icon-file"]));
    switch($rowSet$$7$$.Type) {
      case "CRY":
        switch($rowSet$$7$$.Status) {
          case "0":
          ;
          case "1":
          ;
          case "2":
          ;
          case "4":
          ;
          case "8":
            return""
        }
        break;
      default:
        switch($rowSet$$7$$.Status) {
          case "0":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_upload$$]);
          case "1":
            return $goog$dom$createDom$$("div", "btn-group", [$btn_show_receipt_data_row$$5$$]);
          case "2":
          ;
          case "4":
          ;
          case "8":
            return""
        }
    }
  }, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-actions"
  }});
  this.$selected_deposit_$ = $JSCompiler_alias_NULL$$;
  $bitex$ui$DataGrid$$.call(this, {rowIDFn:this.$getRowId$, rowClassFn:this.$getRowClass$, columns:$grid_columns$$3_opt_show_customers$$1$$, title:"Dep\u00f3sito", showSearch:$JSCompiler_alias_TRUE$$, searchPlaceholder:"B\u00fasqueda ..."}, $opt_domHelper$$31$$)
}
$goog$inherits$$($bitex$ui$DepositList$$, $bitex$ui$DataGrid$$);
var $bitex$ui$DepositList$CSS_CLASS$$ = "deposit-list";
$JSCompiler_prototypeAlias$$ = $bitex$ui$DepositList$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = function $$JSCompiler_prototypeAlias$$$$getCssClass$$() {
  return $bitex$ui$DepositList$CSS_CLASS$$
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$DepositList$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), this.$getElement$(), "click", this.$handleClick_$)
};
$JSCompiler_prototypeAlias$$.$getDepositData$ = $JSCompiler_get$$("$selected_deposit_$");
$JSCompiler_prototypeAlias$$.$handleClick_$ = function $$JSCompiler_prototypeAlias$$$$handleClick_$$($e$$157$$) {
  this.$selected_deposit_$ = $goog$json$parse$$($e$$157$$.target.getAttribute("data-row"));
  this.$selected_deposit_$ != $JSCompiler_alias_NULL$$ && ($goog$dom$classes$has$$($e$$157$$.target, "btn-deposit-complete") ? this.dispatchEvent("deposit_complete") : $goog$dom$classes$has$$($e$$157$$.target, "btn-deposit-progress") ? this.dispatchEvent("deposit_progress") : $goog$dom$classes$has$$($e$$157$$.target, "btn-deposit-cancel") && this.dispatchEvent("deposit_cancel"), this.$selected_deposit_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$getRowId$ = function $$JSCompiler_prototypeAlias$$$$getRowId$$($row_set$$8$$) {
  return $JSCompiler_StaticMethods_makeId$$(this, $row_set$$8$$.DepositID)
};
$JSCompiler_prototypeAlias$$.$getRowClass$ = function $$JSCompiler_prototypeAlias$$$$getRowClass$$($row_set$$9$$) {
  var $class_status$$4$$;
  switch($row_set$$9$$.Status) {
    case "0":
      $class_status$$4$$ = $bitex$ui$DepositList$CSS_CLASS$$ + "-unconfirmed";
      break;
    case "1":
      $class_status$$4$$ = $bitex$ui$DepositList$CSS_CLASS$$ + "-pending";
      break;
    case "2":
      $class_status$$4$$ = $bitex$ui$DepositList$CSS_CLASS$$ + "-processing";
      break;
    case "4":
      $class_status$$4$$ = $bitex$ui$DepositList$CSS_CLASS$$ + "-complete";
      break;
    case "8":
      $class_status$$4$$ = $bitex$ui$DepositList$CSS_CLASS$$ + "-cancelled"
  }
  return $class_status$$4$$
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$DepositList$CSS_CLASS$$, function() {
  return new $bitex$ui$DepositList$$
});
// Input 143
function $bitex$view$DepositView$$($app$$10$$, $opt_requests_from_customers$$, $opt_domHelper$$32$$) {
  $bitex$view$View$$.call(this, $app$$10$$, $opt_domHelper$$32$$);
  this.$is_requests_from_customers_$ = $JSCompiler_alias_FALSE$$;
  $opt_requests_from_customers$$ === $JSCompiler_alias_TRUE$$ && (this.$is_requests_from_customers_$ = $opt_requests_from_customers$$);
  this.$request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$DepositView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$DepositView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$DepositView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$DepositView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$getAmount$ = $JSCompiler_get$$("$amount_$");
$JSCompiler_prototypeAlias$$.$getDepositAction$ = $JSCompiler_get$$("$action_$");
$JSCompiler_prototypeAlias$$.$getDepositData$ = $JSCompiler_get$$("$data_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$DepositView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$74$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$74$$, this.$getElement$(), "click", function($e$$158$$) {
    "deposit" === $e$$158$$.target.getAttribute("data-action") && (console.log("deposit request click"), this.$currency_$ = $e$$158$$.target.getAttribute("data-currency"), this.dispatchEvent("request_deposit"))
  }, this)
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$75$$ = this.$getHandler$(), $model$$18$$ = this.$app_$.$model_$;
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$75$$, this.$deposit_list_table_$, "request_data", this.$onDepositListTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$75$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onDepositListReponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$75$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + 
  "." + $model$$18$$.get("UserID"), this.$onDepositRefresh_$), $JSCompiler_StaticMethods_unlisten$$($handler$$75$$, this.$deposit_list_table_$.$getElement$(), "click", this.$onDepositListTableClick_$));
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$request_id_$ = this.$deposit_list_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$76$$ = this.$getHandler$(), $model$$19$$ = this.$app_$.$model_$;
  this.$destroyComponents_$();
  this.$request_id_$ = parseInt(1E7 * Math.random(), 10);
  var $broker$$6_profile$$ = $model$$19$$.get("Broker");
  $model$$19$$.get("IsBroker") && this.$is_requests_from_customers_$ ? ($broker$$6_profile$$ = $model$$19$$.get("Profile"), this.$deposit_list_table_$ = new $bitex$ui$DepositList$$($broker$$6_profile$$.CryptoCurrencies, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$)) : this.$deposit_list_table_$ = new $bitex$ui$DepositList$$($broker$$6_profile$$.CryptoCurrencies, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_listen$$($handler$$76$$, this.$deposit_list_table_$, "request_data", this.$onDepositListTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$76$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onDepositListReponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$76$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $model$$19$$.get("UserID"), this.$onDepositRefresh_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$deposit_list_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$deposit_list_table_$, "Value", this.$valuePriceFormatter_$, this);
  $JSCompiler_StaticMethods_listen$$($handler$$76$$, this.$deposit_list_table_$.$getElement$(), "click", this.$onDepositListTableClick_$)
};
$JSCompiler_prototypeAlias$$.$onDepositListTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListTableClick_$$($e$$159$$) {
  var $element$$188$$ = $e$$159$$.target;
  "I" === $element$$188$$.tagName && ($element$$188$$ = $goog$dom$getParentElement$$($element$$188$$));
  var $data_action$$ = $element$$188$$.getAttribute("data-action");
  if($data_action$$ != $JSCompiler_alias_NULL$$) {
    switch($e$$159$$.preventDefault(), $e$$159$$.stopPropagation(), this.$action_$ = $data_action$$, this.$data_$ = $goog$json$parse$$($element$$188$$.getAttribute("data-row")), $data_action$$) {
      case "SHOW_QR":
        this.$qr_data_$ = {Wallet:this.$data_$.Data.InputAddress, Currency:this.$data_$.Currency};
        this.$qr_data_verb_$ = "DEPOSIT";
        this.dispatchEvent("show_qr");
        break;
      case "SHOW_RECEIPT":
        this.$receipt_data_$ = {SubmissionID:this.$data_$.Data.SubmissionID, DepositReceipt:this.$data_$.Data.DepositReceipt};
        this.dispatchEvent("show_receipt");
        break;
      case "UPLOAD":
        this.dispatchEvent("upload_receipt");
        break;
      case "CANCEL":
      ;
      case "PROGRESS":
      ;
      case "COMPLETE":
        this.dispatchEvent("process_deposit")
    }
  }
};
$JSCompiler_prototypeAlias$$.$valuePriceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$valuePriceFormatter_$$($value$$165$$, $rowSet$$8$$) {
  var $formatted_paid_value_paid_value$$ = $rowSet$$8$$.PaidValue, $priceCurrency$$ = $rowSet$$8$$.Currency, $currency_description$$ = this.$app_$.$getCurrencyDescription$($priceCurrency$$), $formatted_value$$ = this.$app_$.$formatCurrency$($value$$165$$ / 1E8, $priceCurrency$$);
  return 0 === $value$$165$$ ? 0 === $formatted_paid_value_paid_value$$ ? "-" : $goog$dom$createDom$$("abbr", {title:$currency_description$$}, this.$app_$.$formatCurrency$($formatted_paid_value_paid_value$$ / 1E8, $priceCurrency$$)) : 0 < $formatted_paid_value_paid_value$$ && $formatted_paid_value_paid_value$$ != $value$$165$$ ? ($formatted_paid_value_paid_value$$ = this.$app_$.$formatCurrency$($formatted_paid_value_paid_value$$ / 1E8, $priceCurrency$$), $goog$dom$createDom$$("abbr", {title:"declarado / pagado en " + 
  $currency_description$$}, $formatted_value$$ + " / " + $formatted_paid_value_paid_value$$)) : $goog$dom$createDom$$("abbr", {title:$currency_description$$}, $formatted_value$$)
};
$JSCompiler_prototypeAlias$$.$onDepositListTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListTableRequestData_$$($e$$160_filter$$7$$) {
  var $page$$1$$ = $e$$160_filter$$7$$.options.Page, $limit$$1$$ = $e$$160_filter$$7$$.options.Limit;
  $e$$160_filter$$7$$ = $e$$160_filter$$7$$.options.Filter;
  var $conn$$4$$ = this.$app_$.$conn_$, $model$$20$$ = this.$app_$.$model_$, $clientID$$ = $JSCompiler_alias_VOID$$;
  $model$$20$$.get("IsBroker") && !this.$is_requests_from_customers_$ && ($clientID$$ = $model$$20$$.get("UserID"));
  $conn$$4$$.$requestDepositList$(this.$request_id_$, $page$$1$$, $limit$$1$$, ["0", "1", "2", "4", "8"], $clientID$$, $e$$160_filter$$7$$)
};
$JSCompiler_prototypeAlias$$.$onDepositRefresh_$ = function $$JSCompiler_prototypeAlias$$$$onDepositRefresh_$$($e$$161_msg$$21$$) {
  $e$$161_msg$$21$$ = $e$$161_msg$$21$$.data;
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$deposit_list_table_$, $e$$161_msg$$21$$)
};
$JSCompiler_prototypeAlias$$.$onDepositListReponse_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListReponse_$$($e$$162_msg$$22$$) {
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && ($e$$162_msg$$22$$ = $e$$162_msg$$22$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$deposit_list_table_$, $e$$162_msg$$22$$.DepositListGrp, $e$$162_msg$$22$$.Columns))
};
// Input 144
function $bitex$view$TradingView$$($app$$11$$, $opt_domHelper$$33$$) {
  $bitex$view$View$$.call(this, $app$$11$$, $opt_domHelper$$33$$);
  this.$request_order_id_$ = this.$client_order_id$ = this.$order_id_$ = this.$market_data_subscription_symbol_$ = this.$market_data_subscription_id_$ = $JSCompiler_alias_NULL$$;
  this.$bids_$ = [];
  this.$asks_$ = []
}
$goog$inherits$$($bitex$view$TradingView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$TradingView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$TradingView$$.$superClass_$.$enterView$.call(this);
  var $selected_symbol$$4$$ = this.$app_$.$model_$.get("SelectedSymbol");
  $selected_symbol$$4$$ != $JSCompiler_alias_NULL$$ && this.$recreateComponents_$($selected_symbol$$4$$)
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$TradingView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$77$$ = this.$getHandler$();
  if(this.$market_data_subscription_id_$ != $JSCompiler_alias_NULL$$) {
    var $conn$$5$$ = this.$app_$.$conn_$;
    $JSCompiler_StaticMethods_unlisten$$($handler$$77$$, $conn$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ + "." + this.$market_data_subscription_id_$, this.$onOBClear_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$77$$, $conn$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ + "." + this.$market_data_subscription_id_$, this.$onOBDeleteOrdersThru_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$77$$, $conn$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBDeleteOrder_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$77$$, $conn$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBUpdateOrder_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$77$$, $conn$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBNewOrder_$);
    this.dispatchEvent("md_unsubscribe");
    this.$market_data_subscription_symbol_$ = this.$market_data_subscription_id_$ = $JSCompiler_alias_NULL$$
  }
  this.$bid_order_entry_$ != $JSCompiler_alias_NULL$$ && this.$bid_order_entry_$.$dispose$();
  this.$ask_order_entry_$ != $JSCompiler_alias_NULL$$ && this.$ask_order_entry_$.$dispose$();
  this.$order_manager_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$77$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$EXECUTION_REPORT$$, this.$onExecutionReport_$), $JSCompiler_StaticMethods_unlisten$$($handler$$77$$, this.$order_manager_table_$, "request_data", this.$onOrderManagerRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$77$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$ + "." + this.$request_order_id_$, 
  this.$onOrderListResponse_$));
  $goog$dom$removeChildren$$($goog$dom$getElement$$("trading_order_entry_content"));
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$request_order_id_$ = this.$order_manager_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$($conn$$6_selected_symbol$$5$$) {
  var $handler$$78$$ = this.$getHandler$(), $model$$22_obj$$inline_786$$ = this.$app_$.$model_$;
  if(this.$market_data_subscription_symbol_$ !== $conn$$6_selected_symbol$$5$$.$symbol$) {
    this.$destroyComponents_$();
    this.$bid_order_entry_$ = new $bitex$ui$SimpleOrderEntry$$;
    var $obj$$inline_783$$ = {$username$:$model$$22_obj$$inline_786$$.get("Username"), $symbol$:$conn$$6_selected_symbol$$5$$.$symbol$, $crypto_currency_symbol$:this.$app_$.$getCurrencySign$($conn$$6_selected_symbol$$5$$.$symbol$.substr(0, 3)), $crypto_currency_description$:this.$app_$.$getCurrencyDescription$($conn$$6_selected_symbol$$5$$.$symbol$.substr(0, 3)), $currency_symbol$:this.$app_$.$getCurrencySign$($conn$$6_selected_symbol$$5$$.$symbol$.substr(3)), $currency_description$:this.$app_$.$getCurrencyDescription$($conn$$6_selected_symbol$$5$$.$symbol$.substr(3)), 
    $side$:"1", type:"2", $client_id$:$model$$22_obj$$inline_786$$.get("UserID"), $broker_id$:$model$$22_obj$$inline_786$$.get("BrokerID"), $currency_code$:$conn$$6_selected_symbol$$5$$.$symbol$.substr(3), $currency_format$:this.$app_$.$getCurrencyHumanFormat$($conn$$6_selected_symbol$$5$$.$symbol$.substr(3)), $crypto_currency_code$:$conn$$6_selected_symbol$$5$$.$symbol$.substr(0, 3), $crypto_currency_format$:this.$app_$.$getCurrencyHumanFormat$($conn$$6_selected_symbol$$5$$.$symbol$.substr(0, 3)), 
    $fee$:$model$$22_obj$$inline_786$$.get("Broker").TransactionFeeBuy, $formatted_fee$:$model$$22_obj$$inline_786$$.get("Broker").FormattedTransactionFeeBuy};
    this.$bid_order_entry_$.$model_$ = $obj$$inline_783$$;
    $JSCompiler_StaticMethods_addChild$$(this, this.$bid_order_entry_$, $JSCompiler_alias_TRUE$$);
    this.$ask_order_entry_$ = new $bitex$ui$SimpleOrderEntry$$;
    $model$$22_obj$$inline_786$$ = {$username$:$model$$22_obj$$inline_786$$.get("Username"), $symbol$:$conn$$6_selected_symbol$$5$$.$symbol$, $crypto_currency_symbol$:this.$app_$.$getCurrencySign$($conn$$6_selected_symbol$$5$$.$symbol$.substr(0, 3)), $crypto_currency_description$:this.$app_$.$getCurrencyDescription$($conn$$6_selected_symbol$$5$$.$symbol$.substr(0, 3)), $currency_symbol$:this.$app_$.$getCurrencySign$($conn$$6_selected_symbol$$5$$.$symbol$.substr(3)), $currency_description$:this.$app_$.$getCurrencyDescription$($conn$$6_selected_symbol$$5$$.$symbol$.substr(3)), 
    $side$:"2", type:"2", $client_id$:$model$$22_obj$$inline_786$$.get("UserID"), $broker_id$:$model$$22_obj$$inline_786$$.get("BrokerID"), $currency_code$:$conn$$6_selected_symbol$$5$$.$symbol$.substr(3), $currency_format$:this.$app_$.$getCurrencyHumanFormat$($conn$$6_selected_symbol$$5$$.$symbol$.substr(3)), $crypto_currency_code$:$conn$$6_selected_symbol$$5$$.$symbol$.substr(0, 3), $crypto_currency_format$:this.$app_$.$getCurrencyHumanFormat$($conn$$6_selected_symbol$$5$$.$symbol$.substr(0, 3)), 
    $fee$:$model$$22_obj$$inline_786$$.get("Broker").TransactionFeeBuy, $formatted_fee$:$model$$22_obj$$inline_786$$.get("Broker").FormattedTransactionFeeSell};
    this.$ask_order_entry_$.$model_$ = $model$$22_obj$$inline_786$$;
    $JSCompiler_StaticMethods_addChild$$(this, this.$ask_order_entry_$, $JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, this.$bid_order_entry_$, "simple_order_entry_submitted", this.$onSimpleOrderAction_$);
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, this.$ask_order_entry_$, "simple_order_entry_submitted", this.$onSimpleOrderAction_$);
    this.$request_order_id_$ = parseInt(1E7 * Math.random(), 10);
    this.$order_manager_table_$ = new $bitex$ui$OrderManager$$("simple");
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$EXECUTION_REPORT$$, this.$onExecutionReport_$);
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, this.$order_manager_table_$, "request_data", this.$onOrderManagerRequestData_$);
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$ + "." + this.$request_order_id_$, this.$onOrderListResponse_$);
    $JSCompiler_StaticMethods_addChild$$(this, this.$order_manager_table_$, $JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_setColumnFormatter$$(this.$order_manager_table_$, "Side", this.$orderFormatter_$, this);
    $JSCompiler_StaticMethods_setColumnFormatter$$(this.$order_manager_table_$, "OrdStatus", this.$simpleStatusFormatter_$, this);
    $JSCompiler_StaticMethods_setColumnFormatter$$(this.$order_manager_table_$, "AvgPx", this.$avgPriceFormatter_$, this);
    $JSCompiler_StaticMethods_setColumnFormatter$$(this.$order_manager_table_$, "Volume", this.$priceFormatter_$, this);
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, this.$order_manager_table_$.$getElement$(), "click", this.$onCancelOrder_$);
    this.$market_data_subscription_id_$ = parseInt(1E7 * Math.random(), 10);
    this.$market_data_subscription_symbol_$ = $conn$$6_selected_symbol$$5$$.$symbol$;
    $conn$$6_selected_symbol$$5$$ = this.$app_$.$conn_$;
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, $conn$$6_selected_symbol$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ + "." + this.$market_data_subscription_id_$, this.$onOBClear_$);
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, $conn$$6_selected_symbol$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ + "." + this.$market_data_subscription_id_$, this.$onOBDeleteOrdersThru_$);
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, $conn$$6_selected_symbol$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBDeleteOrder_$);
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, $conn$$6_selected_symbol$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBUpdateOrder_$);
    $JSCompiler_StaticMethods_listen$$($handler$$78$$, $conn$$6_selected_symbol$$5$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onOBNewOrder_$);
    this.dispatchEvent("md_subscribe")
  }
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$TradingView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$79$$ = this.$getHandler$(), $model$$23$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$79$$, $model$$23$$, "model_setSelectedSymbol", function() {
    var $selected_symbol$$6$$ = $model$$23$$.get("SelectedSymbol");
    $model$$23$$.get("SelectedBrokerID");
    this.$is_active_$ && this.$recreateComponents_$($selected_symbol$$6$$)
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$79$$, $model$$23$$, "model_setSelectedBrokerID", function() {
    $model$$23$$.get("SelectedBrokerID");
    $model$$23$$.get("UserBrokers")
  })
};
$JSCompiler_prototypeAlias$$.$orderFormatter_$ = function $$JSCompiler_prototypeAlias$$$$orderFormatter_$$($value$$166$$, $rowSet$$9$$) {
  var $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$ = this.$app_$.$getQtyCurrencyFromSymbol$($rowSet$$9$$.Symbol), $orderQty$$ = this.$app_$.$formatCurrency$($rowSet$$9$$.OrderQty / 1E8, $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$, $JSCompiler_alias_TRUE$$), $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$ = this.$app_$.$formatCurrency$($rowSet$$9$$.CumQty / 1E8, $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$, $JSCompiler_alias_TRUE$$), $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$ = 
  "Comprado " + ($MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$ + (" de " + $orderQty$$)), $MSG_ORDER_MANAGER_DESC_PARTIAL_SOLD$$ = "Vendido " + ($MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$ + (" de " + $orderQty$$)), $MSG_ORDER_MANAGER_DESC_BOUGHT$$ = "Comprado " + $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$, $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$ = "Vendido " + $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$;
  switch($rowSet$$9$$.OrdStatus) {
    case "-":
    ;
    case "0":
      return"1" == $rowSet$$9$$.Side ? "Comprando " + $orderQty$$ : "Vendiendo " + $orderQty$$;
    case "1":
      return"1" == $rowSet$$9$$.Side ? $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$ : $MSG_ORDER_MANAGER_DESC_PARTIAL_SOLD$$;
    case "2":
      return"1" == $rowSet$$9$$.Side ? $MSG_ORDER_MANAGER_DESC_BOUGHT$$ : $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$;
    case "4":
      return 0 == $rowSet$$9$$.CumQty ? "1" == $rowSet$$9$$.Side ? "Cancelada la oferta de compra de " + $orderQty$$ : "Cancelada la oferta de venta de " + $orderQty$$ : 0 < $rowSet$$9$$.CumQty && $rowSet$$9$$.CumQty < $orderQty$$ ? "1" == $rowSet$$9$$.Side ? $MSG_ORDER_MANAGER_DESC_PARTIAL_BOUGHT_qtyCurrency$$ : $MSG_ORDER_MANAGER_DESC_PARTIAL_SOLD$$ : "1" == $rowSet$$9$$.Side ? $MSG_ORDER_MANAGER_DESC_BOUGHT$$ : $MSG_ORDER_MANAGER_DESC_SOLD_cumQty$$
  }
};
$JSCompiler_prototypeAlias$$.$simpleStatusFormatter_$ = function $$JSCompiler_prototypeAlias$$$$simpleStatusFormatter_$$($value$$167$$, $rowSet$$10$$) {
  switch($value$$167$$) {
    case "-":
      return"Enviando...";
    case "0":
      return"1" == $rowSet$$10$$.Side ? "Esperando vendedores" : "Esperando compradores";
    case "1":
      return"1" == $rowSet$$10$$.Side ? "Parcialmente comprado" : "Parcialmente vendido";
    case "2":
      return"Hecho";
    case "4":
      return 0 == $rowSet$$10$$.CumQty ? "Cancelado" : "Hecho"
  }
};
$JSCompiler_prototypeAlias$$.$avgPriceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$avgPriceFormatter_$$($value$$168$$, $rowSet$$11$$) {
  var $priceCurrency$$2$$ = this.$app_$.$getPriceCurrencyFromSymbol$($rowSet$$11$$.Symbol);
  return 0 != $value$$168$$ ? this.$app_$.$formatCurrency$($value$$168$$ / 1E8, $priceCurrency$$2$$, $JSCompiler_alias_TRUE$$) : this.$app_$.$formatCurrency$($rowSet$$11$$.Price / 1E8, $priceCurrency$$2$$, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$priceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$priceFormatter_$$($value$$169$$, $rowSet$$12$$) {
  return this.$app_$.$formatCurrency$($value$$169$$ / 1E8, this.$app_$.$getPriceCurrencyFromSymbol$($rowSet$$12$$.Symbol), $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$getMDInstruments$ = function $$JSCompiler_prototypeAlias$$$$getMDInstruments$$() {
  return[this.$market_data_subscription_symbol_$]
};
$JSCompiler_prototypeAlias$$.$getMDMarketDepth$ = $JSCompiler_returnArg$$(0);
$JSCompiler_prototypeAlias$$.$getMDEntries$ = function $$JSCompiler_prototypeAlias$$$$getMDEntries$$() {
  return["0", "1"]
};
$JSCompiler_prototypeAlias$$.$onSimpleOrderAction_$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onCancelOrder_$ = function $$JSCompiler_prototypeAlias$$$$onCancelOrder_$$($e$$166$$) {
  "cancel" == $e$$166$$.target.getAttribute("data-action") && ($e$$166$$.stopPropagation(), $e$$166$$.preventDefault(), this.$order_id_$ = $e$$166$$.target.getAttribute("data-order-id"), this.$client_order_id_$ = $e$$166$$.target.getAttribute("data-client-order-id"), this.dispatchEvent("cancel_order"))
};
$JSCompiler_prototypeAlias$$.$onExecutionReport_$ = function $$JSCompiler_prototypeAlias$$$$onExecutionReport_$$($e$$167$$) {
  this.$order_manager_table_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$order_manager_table_$, $e$$167$$.data)
};
$JSCompiler_prototypeAlias$$.$onOrderManagerRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onOrderManagerRequestData_$$($e$$168$$) {
  this.$app_$.$conn_$.$requestOrderList$(this.$request_order_id_$, $e$$168$$.options.Page, $e$$168$$.options.Limit, ["0", "1", "2", "4"])
};
$JSCompiler_prototypeAlias$$.$onOrderListResponse_$ = function $$JSCompiler_prototypeAlias$$$$onOrderListResponse_$$($e$$169_msg$$23$$) {
  this.$order_manager_table_$ != $JSCompiler_alias_NULL$$ && ($e$$169_msg$$23$$ = $e$$169_msg$$23$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$order_manager_table_$, $e$$169_msg$$23$$.OrdListGrp, $e$$169_msg$$23$$.Columns))
};
$JSCompiler_prototypeAlias$$.$onOBClear_$ = function $$JSCompiler_prototypeAlias$$$$onOBClear_$$() {
  this.$bids_$ = [];
  this.$asks_$ = [];
  $JSCompiler_StaticMethods_setOrderDepth$$(this.$ask_order_entry_$, this.$bids_$);
  $JSCompiler_StaticMethods_setOrderDepth$$(this.$bid_order_entry_$, this.$asks_$)
};
$JSCompiler_prototypeAlias$$.$onOBDeleteOrdersThru_$ = function $$JSCompiler_prototypeAlias$$$$onOBDeleteOrdersThru_$$($e$$171_index$$80$$) {
  var $msg$$24_side$$8$$ = $e$$171_index$$80$$.data;
  $e$$171_index$$80$$ = $msg$$24_side$$8$$.MDEntryPositionNo;
  $msg$$24_side$$8$$ = $msg$$24_side$$8$$.MDEntryType;
  "0" == $msg$$24_side$$8$$ ? (this.$bids_$.splice(0, $e$$171_index$$80$$), $JSCompiler_StaticMethods_setOrderDepth$$(this.$ask_order_entry_$, this.$bids_$)) : "1" == $msg$$24_side$$8$$ && (this.$asks_$.splice(0, $e$$171_index$$80$$), $JSCompiler_StaticMethods_setOrderDepth$$(this.$bid_order_entry_$, this.$asks_$))
};
$JSCompiler_prototypeAlias$$.$onOBDeleteOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBDeleteOrder_$$($e$$172_index$$81$$) {
  var $msg$$25_side$$9$$ = $e$$172_index$$81$$.data;
  $e$$172_index$$81$$ = $msg$$25_side$$9$$.MDEntryPositionNo - 1;
  $msg$$25_side$$9$$ = $msg$$25_side$$9$$.MDEntryType;
  "0" == $msg$$25_side$$9$$ ? (this.$bids_$.splice($e$$172_index$$81$$, 1), $JSCompiler_StaticMethods_setOrderDepth$$(this.$ask_order_entry_$, this.$bids_$)) : "1" == $msg$$25_side$$9$$ && (this.$asks_$.splice($e$$172_index$$81$$, 1), $JSCompiler_StaticMethods_setOrderDepth$$(this.$bid_order_entry_$, this.$asks_$))
};
$JSCompiler_prototypeAlias$$.$onOBUpdateOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBUpdateOrder_$$($e$$173_index$$82$$) {
  var $msg$$26_side$$10$$ = $e$$173_index$$82$$.data;
  $e$$173_index$$82$$ = $msg$$26_side$$10$$.MDEntryPositionNo - 1;
  var $qty$$4$$ = $msg$$26_side$$10$$.MDEntrySize, $msg$$26_side$$10$$ = $msg$$26_side$$10$$.MDEntryType;
  "0" == $msg$$26_side$$10$$ ? (this.$bids_$[$e$$173_index$$82$$] = [this.$bids_$[$e$$173_index$$82$$][0], $qty$$4$$, this.$bids_$[$e$$173_index$$82$$][2]], $JSCompiler_StaticMethods_setOrderDepth$$(this.$ask_order_entry_$, this.$bids_$)) : "1" == $msg$$26_side$$10$$ && (this.$asks_$[$e$$173_index$$82$$] = [this.$asks_$[$e$$173_index$$82$$][0], $qty$$4$$, this.$asks_$[$e$$173_index$$82$$][2]], $JSCompiler_StaticMethods_setOrderDepth$$(this.$bid_order_entry_$, this.$asks_$))
};
$JSCompiler_prototypeAlias$$.$onOBNewOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBNewOrder_$$($e$$174_index$$83$$) {
  var $msg$$27_side$$11$$ = $e$$174_index$$83$$.data;
  $e$$174_index$$83$$ = $msg$$27_side$$11$$.MDEntryPositionNo - 1;
  var $price$$3$$ = $msg$$27_side$$11$$.MDEntryPx, $qty$$5$$ = $msg$$27_side$$11$$.MDEntrySize, $username$$6$$ = $msg$$27_side$$11$$.Username, $msg$$27_side$$11$$ = $msg$$27_side$$11$$.MDEntryType;
  "0" == $msg$$27_side$$11$$ ? ($goog$array$splice$$(this.$bids_$, $e$$174_index$$83$$, 0, [$price$$3$$, $qty$$5$$, $username$$6$$]), $JSCompiler_StaticMethods_setOrderDepth$$(this.$ask_order_entry_$, this.$bids_$)) : "1" == $msg$$27_side$$11$$ && ($goog$array$splice$$(this.$asks_$, $e$$174_index$$83$$, 0, [$price$$3$$, $qty$$5$$, $username$$6$$]), $JSCompiler_StaticMethods_setOrderDepth$$(this.$bid_order_entry_$, this.$asks_$))
};
// Input 145
function $goog$net$WebSocket$$($opt_autoReconnect$$, $opt_getNextReconnect$$) {
  $goog$Disposable$$.call(this);
  this.$autoReconnect_$ = $goog$isDef$$($opt_autoReconnect$$) ? $opt_autoReconnect$$ : $JSCompiler_alias_TRUE$$;
  this.$getNextReconnect_$ = $opt_getNextReconnect$$ || $goog$net$WebSocket$EXPONENTIAL_BACKOFF_$$;
  this.$nextReconnect_$ = this.$getNextReconnect_$(this.$reconnectAttempt_$)
}
$goog$inherits$$($goog$net$WebSocket$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$net$WebSocket$$.prototype;
$JSCompiler_prototypeAlias$$.$webSocket_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$url_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$protocol_$ = $JSCompiler_alias_VOID$$;
$JSCompiler_prototypeAlias$$.$closeExpected_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$reconnectAttempt_$ = 0;
$JSCompiler_prototypeAlias$$.$logger_$ = $goog$debug$LogManager$getLogger$$("goog.net.WebSocket");
var $goog$net$WebSocket$EventType$CLOSED$$ = "closed_" + $goog$events$uniqueIdCounter_$$++, $goog$net$WebSocket$EventType$ERROR$$ = "error_" + $goog$events$uniqueIdCounter_$$++, $goog$net$WebSocket$EventType$MESSAGE$$ = "message_" + $goog$events$uniqueIdCounter_$$++, $goog$net$WebSocket$EventType$OPENED$$ = "opened_" + $goog$events$uniqueIdCounter_$$++;
function $goog$net$WebSocket$EXPONENTIAL_BACKOFF_$$($attempt$$) {
  return Math.min(1E3 * Math.pow(2, $attempt$$), 6E4)
}
$JSCompiler_prototypeAlias$$ = $goog$net$WebSocket$$.prototype;
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$($url$$30$$, $opt_protocol$$1$$) {
  this.$reconnectTimer_$ != $JSCompiler_alias_NULL$$ && $goog$Timer$defaultTimerObject$$.clearTimeout(this.$reconnectTimer_$);
  this.$reconnectTimer_$ = $JSCompiler_alias_NULL$$;
  this.$url_$ = $url$$30$$;
  (this.$protocol_$ = $opt_protocol$$1$$) ? (this.$logger_$.info("Opening the WebSocket on " + this.$url_$ + " with protocol " + this.$protocol_$), this.$webSocket_$ = new WebSocket(this.$url_$, this.$protocol_$)) : (this.$logger_$.info("Opening the WebSocket on " + this.$url_$), this.$webSocket_$ = new WebSocket(this.$url_$));
  this.$webSocket_$.onopen = $goog$bind$$(this.$onOpen_$, this);
  this.$webSocket_$.onclose = $goog$bind$$(this.$onClose_$, this);
  this.$webSocket_$.onmessage = $goog$bind$$(this.$onMessage_$, this);
  this.$webSocket_$.onerror = $goog$bind$$(this.$onError_$, this)
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  this.$reconnectTimer_$ != $JSCompiler_alias_NULL$$ && $goog$Timer$defaultTimerObject$$.clearTimeout(this.$reconnectTimer_$);
  this.$reconnectTimer_$ = $JSCompiler_alias_NULL$$;
  this.$webSocket_$ && (this.$logger_$.info("Closing the WebSocket."), this.$closeExpected_$ = $JSCompiler_alias_TRUE$$, this.$webSocket_$.close(), this.$webSocket_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($message$$24$$) {
  this.$webSocket_$.send($message$$24$$)
};
$JSCompiler_prototypeAlias$$.$isOpen$ = function $$JSCompiler_prototypeAlias$$$$isOpen$$() {
  return!!this.$webSocket_$ && 1 == this.$webSocket_$.readyState
};
$JSCompiler_prototypeAlias$$.$onOpen_$ = function $$JSCompiler_prototypeAlias$$$$onOpen_$$() {
  this.$logger_$.info("WebSocket opened on " + this.$url_$);
  this.dispatchEvent($goog$net$WebSocket$EventType$OPENED$$);
  this.$reconnectAttempt_$ = 0;
  this.$nextReconnect_$ = this.$getNextReconnect_$(this.$reconnectAttempt_$)
};
$JSCompiler_prototypeAlias$$.$onClose_$ = function $$JSCompiler_prototypeAlias$$$$onClose_$$($event$$6$$) {
  this.$logger_$.info("The WebSocket on " + this.$url_$ + " closed.");
  this.dispatchEvent($goog$net$WebSocket$EventType$CLOSED$$);
  this.$webSocket_$ = $JSCompiler_alias_NULL$$;
  this.$closeExpected_$ ? (this.$logger_$.info("The WebSocket closed normally."), this.$url_$ = $JSCompiler_alias_NULL$$, this.$protocol_$ = $JSCompiler_alias_VOID$$) : (this.$logger_$.log($goog$debug$Logger$Level$SEVERE$$, "The WebSocket disconnected unexpectedly: " + $event$$6$$.data, $JSCompiler_alias_VOID$$), this.$autoReconnect_$ && (this.$logger_$.info("Seconds until next reconnect attempt: " + Math.floor(this.$nextReconnect_$ / 1E3)), this.$reconnectTimer_$ = $goog$Timer$callOnce$$($goog$bind$$(this.open, 
  this, this.$url_$, this.$protocol_$), this.$nextReconnect_$, this), this.$reconnectAttempt_$++, this.$nextReconnect_$ = this.$getNextReconnect_$(this.$reconnectAttempt_$)));
  this.$closeExpected_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onMessage_$ = function $$JSCompiler_prototypeAlias$$$$onMessage_$$($event$$7$$) {
  this.dispatchEvent(new $goog$net$WebSocket$MessageEvent$$($event$$7$$.data))
};
$JSCompiler_prototypeAlias$$.$onError_$ = function $$JSCompiler_prototypeAlias$$$$onError_$$($data$$36_event$$8$$) {
  $data$$36_event$$8$$ = $data$$36_event$$8$$.data;
  this.$logger_$.log($goog$debug$Logger$Level$SEVERE$$, "An error occurred: " + $data$$36_event$$8$$, $JSCompiler_alias_VOID$$);
  this.dispatchEvent(new $goog$net$WebSocket$ErrorEvent$$($data$$36_event$$8$$))
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$net$WebSocket$$.$superClass_$.$disposeInternal$.call(this);
  this.close()
};
function $goog$net$WebSocket$MessageEvent$$($message$$26$$) {
  $goog$events$Event$$.call(this, $goog$net$WebSocket$EventType$MESSAGE$$);
  this.message = $message$$26$$
}
$goog$inherits$$($goog$net$WebSocket$MessageEvent$$, $goog$events$Event$$);
function $goog$net$WebSocket$ErrorEvent$$($data$$37$$) {
  $goog$events$Event$$.call(this, $goog$net$WebSocket$EventType$ERROR$$);
  this.data = $data$$37$$
}
$goog$inherits$$($goog$net$WebSocket$ErrorEvent$$, $goog$events$Event$$);
// Input 146
function $bitex$api$BitEx$$() {
  $goog$Disposable$$.call(this);
  this.$all_markets_$ = this.$currency_info_$ = $JSCompiler_alias_NULL$$;
  this.$ws_$ = new $goog$net$WebSocket$$($JSCompiler_alias_TRUE$$)
}
$goog$inherits$$($bitex$api$BitEx$$, $goog$events$EventTarget$$);
$bitex$api$BitEx$$.prototype.$ws_$ = $JSCompiler_alias_NULL$$;
$bitex$api$BitEx$$.prototype.$url_$ = $JSCompiler_alias_NULL$$;
$bitex$api$BitEx$$.prototype.$connected_$ = $JSCompiler_alias_FALSE$$;
$bitex$api$BitEx$$.prototype.$logged_$ = $JSCompiler_alias_FALSE$$;
var $bitex$api$BitEx$EventType$UPDATE_PROFILE_RESPONSE$$ = "update_profile_response", $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ = "deposit_refresh", $bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ = "deposit_list", $bitex$api$BitEx$EventType$WITHDRAW_LIST_RESPONSE$$ = "withdraw_list_response", $bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$ = "order_list_response", $bitex$api$BitEx$EventType$EXECUTION_REPORT$$ = "execution_report", $bitex$api$BitEx$EventType$CUSTOMER_LIST_RESPONSE$$ = "customer_list", 
$bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ = "ob_clear", $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ = "ob_delete_orders_thru", $bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ = "ob_delete_order", $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ = "ob_new_order", $bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ = "ob_update_order";
$JSCompiler_prototypeAlias$$ = $bitex$api$BitEx$$.prototype;
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$($url$$31$$, $opt_protocol$$2$$) {
  this.$url_$ = $url$$31$$;
  var $handler$$80$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$80$$, this.$ws_$, $goog$net$WebSocket$EventType$CLOSED$$, this.$onClose_$);
  $JSCompiler_StaticMethods_listen$$($handler$$80$$, this.$ws_$, $goog$net$WebSocket$EventType$MESSAGE$$, this.$onMessage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$80$$, this.$ws_$, $goog$net$WebSocket$EventType$ERROR$$, this.$onError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$80$$, this.$ws_$, $goog$net$WebSocket$EventType$OPENED$$, this.$onOpen_$);
  this.$ws_$.open($url$$31$$, $opt_protocol$$2$$)
};
$JSCompiler_prototypeAlias$$.$isConnected$ = $JSCompiler_get$$("$connected_$");
$JSCompiler_prototypeAlias$$.$isLogged$ = $JSCompiler_get$$("$logged_$");
$JSCompiler_prototypeAlias$$.$getHandler$ = function $$JSCompiler_prototypeAlias$$$$getHandler$$() {
  return this.$handler_$ || (this.$handler_$ = new $goog$events$EventHandler$$(this))
};
$JSCompiler_prototypeAlias$$.$getCurrencyDescription$ = function $$JSCompiler_prototypeAlias$$$$getCurrencyDescription$$($currency_code$$) {
  return this.$currency_info_$[$currency_code$$].description
};
$JSCompiler_prototypeAlias$$.$getCurrencyHumanFormat$ = function $$JSCompiler_prototypeAlias$$$$getCurrencyHumanFormat$$($currency_code$$1$$) {
  return this.$currency_info_$[$currency_code$$1$$].$human_format$
};
$JSCompiler_prototypeAlias$$.$getCurrencySign$ = function $$JSCompiler_prototypeAlias$$$$getCurrencySign$$($currency_code$$3$$) {
  return this.$currency_info_$[$currency_code$$3$$].$sign$
};
$JSCompiler_prototypeAlias$$.$isCryptoCurrency$ = function $$JSCompiler_prototypeAlias$$$$isCryptoCurrency$$($currency_code$$4$$) {
  return this.$currency_info_$[$currency_code$$4$$].$is_crypto$
};
$JSCompiler_prototypeAlias$$.$formatCurrency$ = function $$JSCompiler_prototypeAlias$$$$formatCurrency$$($amount$$3$$, $currency_code$$5_currency_def$$5$$, $opt_human$$) {
  if(this.$currency_info_$ == $JSCompiler_alias_NULL$$) {
    return $amount$$3$$
  }
  $currency_code$$5_currency_def$$5$$ = this.$currency_info_$[$currency_code$$5_currency_def$$5$$];
  return($opt_human$$ != $JSCompiler_alias_NULL$$ && $opt_human$$ === $JSCompiler_alias_TRUE$$ ? new $goog$i18n$NumberFormat$$($currency_code$$5_currency_def$$5$$.$human_format$, $currency_code$$5_currency_def$$5$$.code) : new $goog$i18n$NumberFormat$$($currency_code$$5_currency_def$$5$$.$format$, $currency_code$$5_currency_def$$5$$.code)).$format$($amount$$3$$)
};
$JSCompiler_prototypeAlias$$.$getPriceCurrencyFromSymbol$ = function $$JSCompiler_prototypeAlias$$$$getPriceCurrencyFromSymbol$$($symbol$$3$$) {
  return $symbol$$3$$.substr(3)
};
$JSCompiler_prototypeAlias$$.$getQtyCurrencyFromSymbol$ = function $$JSCompiler_prototypeAlias$$$$getQtyCurrencyFromSymbol$$($symbol$$4$$) {
  return $symbol$$4$$.substr(0, 3)
};
$JSCompiler_prototypeAlias$$.$onSecurityList_$ = function $$JSCompiler_prototypeAlias$$$$onSecurityList_$$($msg$$28$$) {
  this.$currency_info_$ = {};
  this.$all_markets_$ = {};
  $goog$array$forEach$$($msg$$28$$.Currencies, function($currency$$3$$) {
    this.$currency_info_$[$currency$$3$$.Code] = {code:$currency$$3$$.Code, $format$:$currency$$3$$.FormatJS, $human_format$:$currency$$3$$.HumanFormatJS, description:$currency$$3$$.Description, $sign$:$currency$$3$$.Sign, $pip$:$currency$$3$$.Pip, $is_crypto$:$currency$$3$$.IsCrypto}
  }, this);
  var $symbols$$ = [];
  $goog$array$forEach$$($msg$$28$$.Instruments, function($instrument$$) {
    var $symbol$$5$$ = $instrument$$.Symbol;
    this.$all_markets_$[$symbol$$5$$] = {$symbol$:$symbol$$5$$, description:$instrument$$.Description};
    $symbols$$.push($symbol$$5$$)
  }, this)
};
$JSCompiler_prototypeAlias$$.$onOpen_$ = function $$JSCompiler_prototypeAlias$$$$onOpen_$$() {
  this.dispatchEvent("opened");
  this.$connected_$ = $JSCompiler_alias_TRUE$$;
  this.$logged_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onClose_$ = function $$JSCompiler_prototypeAlias$$$$onClose_$$() {
  this.dispatchEvent("closed");
  this.$logged_$ = this.$connected_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onError_$ = function $$JSCompiler_prototypeAlias$$$$onError_$$() {
  this.dispatchEvent("error");
  this.$logged_$ = this.$connected_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onMessage_$ = function $$JSCompiler_prototypeAlias$$$$onMessage_$$($e$$177_entry$$) {
  var $msg$$29$$ = JSON.parse($e$$177_entry$$.message);
  this.dispatchEvent(new $bitex$api$BitExEvent$$("raw_message", $e$$177_entry$$.message));
  switch($msg$$29$$.MsgType) {
    case "ERROR":
      $msg$$29$$.ReqID != $JSCompiler_alias_NULL$$ && this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message." + $msg$$29$$.ReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message", $msg$$29$$));
      break;
    case "0":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("heartbeat", $msg$$29$$));
      break;
    case "B":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("news", $msg$$29$$));
      break;
    case "BF":
      if(3 == $msg$$29$$.UserReqTyp) {
        this.dispatchEvent(new $bitex$api$BitExEvent$$("change_password_error." + $msg$$29$$.UserReqID, $msg$$29$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$("change_password_error", $msg$$29$$));
        break
      }
      1 == $msg$$29$$.UserStatus ? (this.$logged_$ = $JSCompiler_alias_TRUE$$, this.dispatchEvent(new $bitex$api$BitExEvent$$("login_ok." + $msg$$29$$.UserReqID, $msg$$29$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("login_ok", $msg$$29$$))) : (this.$logged_$ = $JSCompiler_alias_FALSE$$, this.dispatchEvent(new $bitex$api$BitExEvent$$("login_error." + $msg$$29$$.UserReqID, $msg$$29$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("login_error", $msg$$29$$)));
      break;
    case "y":
      this.$onSecurityList_$($msg$$29$$);
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_list." + $msg$$29$$.SecurityReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_list", $msg$$29$$));
      break;
    case "f":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_status." + $msg$$29$$.SecurityStatusReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_status", $msg$$29$$));
      break;
    case "U13":
      1 == $msg$$29$$.UserStatus ? (this.dispatchEvent(new $bitex$api$BitExEvent$$("pwd_changed_ok." + $msg$$29$$.ResetPasswordReqID, $msg$$29$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("pwd_changed_ok", $msg$$29$$))) : (this.dispatchEvent(new $bitex$api$BitExEvent$$("pwd_changed_error." + $msg$$29$$.ResetPasswordReqID, $msg$$29$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("pwd_changed_error", $msg$$29$$)));
      break;
    case "U19":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_response." + $msg$$29$$.DepositReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_response", $msg$$29$$));
      break;
    case "U23":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $msg$$29$$.UserID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $msg$$29$$.BrokerID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $msg$$29$$.DepositReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$, $msg$$29$$));
      break;
    case "U25":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_confirmation_response." + $msg$$29$$.WithdrawReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_confirmation_response", $msg$$29$$));
      break;
    case "U7":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_response." + $msg$$29$$.WithdrawReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_response", $msg$$29$$));
      break;
    case "U9":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_refresh." + $msg$$29$$.UserID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_refresh." + $msg$$29$$.BrokerID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_refresh", $msg$$29$$));
      break;
    case "U3":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("balance_response." + $msg$$29$$.BalanceReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("balance_response", $msg$$29$$));
      break;
    case "U5":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$ + "." + $msg$$29$$.OrdersReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$, $msg$$29$$));
      break;
    case "U17":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("two_factor_secret." + $msg$$29$$.EnableTwoFactorReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("two_factor_secret", $msg$$29$$));
      break;
    case "U21":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_methods_response." + $msg$$29$$.DepositMethodReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_methods_response", $msg$$29$$));
      break;
    case "U27":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$WITHDRAW_LIST_RESPONSE$$ + "." + $msg$$29$$.WithdrawListReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$WITHDRAW_LIST_RESPONSE$$, $msg$$29$$));
      break;
    case "U29":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("broker_list." + $msg$$29$$.BrokerListReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("broker_list", $msg$$29$$));
      break;
    case "U31":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ + "." + $msg$$29$$.DepositListReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$, $msg$$29$$));
      break;
    case "U33":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_history_response." + $msg$$29$$.TradeHistoryReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_history_response", $msg$$29$$));
      break;
    case "U35":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("ledger_list." + $msg$$29$$.LedgerListReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("ledger_list", $msg$$29$$));
      break;
    case "U37":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("traders_rank." + $msg$$29$$.TradersRankReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("traders_rank", $msg$$29$$));
      break;
    case "U39":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$UPDATE_PROFILE_RESPONSE$$ + "." + $msg$$29$$.UpdateReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$UPDATE_PROFILE_RESPONSE$$, $msg$$29$$));
      break;
    case "U40":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("profile_refresh", $msg$$29$$));
      break;
    case "U43":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("position_response." + $msg$$29$$.PositionReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("position_response", $msg$$29$$));
      break;
    case "U45":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("suggest_trusted_address_response." + $msg$$29$$.SuggestTrustedAddressReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("suggest_trusted_address_response", $msg$$29$$));
      break;
    case "U46":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("suggest_trusted_address_pub." + $msg$$29$$.SuggestTrustedAddressReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("suggest_trusted_address_pub", $msg$$29$$));
      break;
    case "B1":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_deposit." + $msg$$29$$.ProcessDepositReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_deposit", $msg$$29$$));
      break;
    case "B3":
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$CUSTOMER_LIST_RESPONSE$$ + "." + $msg$$29$$.CustomerListReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$CUSTOMER_LIST_RESPONSE$$, $msg$$29$$));
      break;
    case "B5":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("customer_detail." + $msg$$29$$.CustomerReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("customer_detail", $msg$$29$$));
      break;
    case "B7":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_withdraw." + $msg$$29$$.ProcessWithdrawReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_withdraw", $msg$$29$$));
      break;
    case "B9":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("verify_customer_response." + $msg$$29$$.VerifyCustomerReqID, $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("verify_customer_response", $msg$$29$$));
      break;
    case "B11":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("verify_customer_update", $msg$$29$$));
      break;
    case "W":
      if(1 != $msg$$29$$.MarketDepth) {
        this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$, $msg$$29$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_CLEAR$$ + "." + $msg$$29$$.MDReqID, $msg$$29$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_clear", $msg$$29$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_clear." + $msg$$29$$.MDReqID, $msg$$29$$));
        for(var $x$$77$$ in $msg$$29$$.MDFullGrp) {
          switch($e$$177_entry$$ = $msg$$29$$.MDFullGrp[$x$$77$$], $e$$177_entry$$.MDReqID = $msg$$29$$.MDReqID, $e$$177_entry$$.MDEntryType) {
            case "0":
            ;
            case "1":
              $e$$177_entry$$.Symbol = $msg$$29$$.Symbol;
              this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$, $e$$177_entry$$));
              this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + $msg$$29$$.MDReqID, $e$$177_entry$$));
              break;
            case "2":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade", $e$$177_entry$$));
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade." + $msg$$29$$.MDReqID, $e$$177_entry$$));
              break;
            case "4":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status", $e$$177_entry$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status." + $msg$$29$$.MDReqID, $e$$177_entry$$))
          }
        }
      }
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_full_refresh", $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_full_refresh." + $msg$$29$$.MDReqID, $msg$$29$$));
      break;
    case "X":
      if("3" == $msg$$29$$.MDBkTyp) {
        for($x$$77$$ in $msg$$29$$.MDIncGrp) {
          switch($e$$177_entry$$ = $msg$$29$$.MDIncGrp[$x$$77$$], $e$$177_entry$$.MDReqID = $msg$$29$$.MDReqID, $e$$177_entry$$.MDEntryType) {
            case "0":
            ;
            case "1":
              switch($e$$177_entry$$.MDUpdateAction) {
                case "0":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$, $e$$177_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + $msg$$29$$.MDReqID, $e$$177_entry$$));
                  break;
                case "1":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$, $e$$177_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_UPDATE_ORDER$$ + "." + $msg$$29$$.MDReqID, $e$$177_entry$$));
                  break;
                case "2":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$, $e$$177_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDER$$ + "." + $msg$$29$$.MDReqID, $e$$177_entry$$));
                  break;
                case "3":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$, $e$$177_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$ORDER_BOOK_DELETE_ORDERS_THRU$$ + "." + $msg$$29$$.MDReqID, $e$$177_entry$$));
                  break;
                case "4":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status", $e$$177_entry$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status." + $msg$$29$$.MDReqID, $e$$177_entry$$))
              }
              break;
            case "2":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade", $e$$177_entry$$));
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade." + $msg$$29$$.MDReqID, $e$$177_entry$$));
              break;
            case "4":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status", $e$$177_entry$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status." + $msg$$29$$.MDReqID, $e$$177_entry$$))
          }
        }
      }
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_incremental_refresh", $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_incremental_refresh." + $msg$$29$$.MDReqID, $msg$$29$$));
      break;
    case "Y":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_request_reject", $msg$$29$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_request_reject." + $msg$$29$$.MDReqID, $msg$$29$$));
      break;
    case "8":
      $msg$$29$$.Volume != $JSCompiler_alias_NULL$$ || ($msg$$29$$.Volume = $msg$$29$$.AvgPx != $JSCompiler_alias_NULL$$ && 0 < $msg$$29$$.AvgPx ? $msg$$29$$.CumQty * $msg$$29$$.AvgPx / 1E8 : 0), $msg$$29$$.ClOrdID != $JSCompiler_alias_NULL$$ && this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$EXECUTION_REPORT$$ + "." + $msg$$29$$.ClOrdID, $msg$$29$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$($bitex$api$BitEx$EventType$EXECUTION_REPORT$$, $msg$$29$$))
  }
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  this.$logged_$ = this.$connected_$ = $JSCompiler_alias_FALSE$$;
  this.$ws_$.close();
  this.$ws_$.$dispose$();
  this.$ws_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.login = function $$JSCompiler_prototypeAlias$$$login$($msg$$30_username$$7$$, $password$$3$$, $opt_second_factor$$, $opt_request_id$$) {
  $msg$$30_username$$7$$ = {MsgType:"BE", UserReqID:$opt_request_id$$ || parseInt(1E6 * Math.random(), 10), Username:$msg$$30_username$$7$$, Password:$password$$3$$, UserReqTyp:"1"};
  $opt_second_factor$$ != $JSCompiler_alias_NULL$$ && ($msg$$30_username$$7$$.SecondFactor = $opt_second_factor$$);
  this.sendMessage($msg$$30_username$$7$$)
};
$JSCompiler_prototypeAlias$$.$enableTwoFactor$ = function $$JSCompiler_prototypeAlias$$$$enableTwoFactor$$($enable$$16_msg$$31$$, $opt_secret$$, $opt_code$$, $opt_clientID$$, $opt_request_id$$1$$) {
  $enable$$16_msg$$31$$ = {MsgType:"U16", EnableTwoFactorReqID:$opt_request_id$$1$$ || parseInt(1E6 * Math.random(), 10), Enable:$enable$$16_msg$$31$$};
  $opt_secret$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_secret$$) && ($enable$$16_msg$$31$$.Secret = $opt_secret$$);
  $opt_code$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_code$$) && ($enable$$16_msg$$31$$.Code = $opt_code$$);
  $opt_clientID$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$) && ($enable$$16_msg$$31$$.ClientID = $opt_clientID$$);
  this.sendMessage($enable$$16_msg$$31$$)
};
$JSCompiler_prototypeAlias$$.$forgotPassword$ = function $$JSCompiler_prototypeAlias$$$$forgotPassword$$($email$$1$$, $opt_request_id$$2$$) {
  this.sendMessage({MsgType:"U10", ForgotPasswordReqID:$opt_request_id$$2$$ || parseInt(1E6 * Math.random(), 10), Email:$email$$1$$})
};
$JSCompiler_prototypeAlias$$.$requestBalances$ = function $$JSCompiler_prototypeAlias$$$$requestBalances$$($opt_clientID$$1$$, $opt_request_id$$3$$) {
  var $msg$$33$$ = {MsgType:"U2", BalanceReqID:$opt_request_id$$3$$ || parseInt(1E6 * Math.random(), 10)};
  $opt_clientID$$1$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$1$$) && ($msg$$33$$.ClientID = $opt_clientID$$1$$);
  this.sendMessage($msg$$33$$)
};
$JSCompiler_prototypeAlias$$.$requestWithdraw$ = function $$JSCompiler_prototypeAlias$$$$requestWithdraw$$($opt_request_id$$5_reqId$$5$$, $amount$$4_msg$$35$$, $method$$5$$, $currency$$4$$, $data$$38$$, $opt_client_order_id$$1$$) {
  $opt_request_id$$5_reqId$$5$$ = $opt_request_id$$5_reqId$$5$$ || parseInt(1E6 * Math.random(), 10);
  $amount$$4_msg$$35$$ = {MsgType:"U6", WithdrawReqID:$opt_request_id$$5_reqId$$5$$, Currency:$currency$$4$$, Amount:$amount$$4_msg$$35$$, Method:$method$$5$$, Data:$goog$json$serialize$$($data$$38$$)};
  $opt_client_order_id$$1$$ != $JSCompiler_alias_NULL$$ && ($amount$$4_msg$$35$$.ClOrdID = "" + $opt_client_order_id$$1$$);
  this.sendMessage($amount$$4_msg$$35$$);
  return $opt_request_id$$5_reqId$$5$$
};
$JSCompiler_prototypeAlias$$.$confirmWithdraw$ = function $$JSCompiler_prototypeAlias$$$$confirmWithdraw$$($confirmation_token$$) {
  this.sendMessage({MsgType:"U24", WithdrawReqID:parseInt(1E6 * Math.random(), 10), ConfirmationToken:$confirmation_token$$})
};
$JSCompiler_prototypeAlias$$.$requestWithdrawList$ = function $$JSCompiler_prototypeAlias$$$$requestWithdrawList$$($opt_requestId_requestId$$1$$, $msg$$37_opt_page$$, $opt_limit$$1$$, $opt_status$$, $opt_clientID$$3$$, $opt_filter$$) {
  $opt_requestId_requestId$$1$$ = $opt_requestId_requestId$$1$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$37_opt_page$$ = {MsgType:"U26", WithdrawListReqID:$opt_requestId_requestId$$1$$, Page:$msg$$37_opt_page$$ || 0, PageSize:$opt_limit$$1$$ || 100, StatusList:$opt_status$$ || ["1", "2"]};
  $opt_clientID$$3$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$3$$) && ($msg$$37_opt_page$$.ClientID = $opt_clientID$$3$$);
  $opt_filter$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$.length && ($msg$$37_opt_page$$.Filter = $opt_filter$$);
  this.sendMessage($msg$$37_opt_page$$);
  return $opt_requestId_requestId$$1$$
};
function $JSCompiler_StaticMethods_updateUserProfile$$($JSCompiler_StaticMethods_updateUserProfile$self$$, $fields_msg$$38$$, $opt_userId$$) {
  var $requestId$$2$$ = parseInt(1E7 * Math.random(), 10);
  $fields_msg$$38$$ = {MsgType:"U38", UpdateReqID:$requestId$$2$$, Fields:$fields_msg$$38$$};
  $opt_userId$$ != $JSCompiler_alias_NULL$$ && ($fields_msg$$38$$.UserID = $opt_userId$$);
  $JSCompiler_StaticMethods_updateUserProfile$self$$.sendMessage($fields_msg$$38$$);
  return $requestId$$2$$
}
$JSCompiler_prototypeAlias$$.$requestDepositList$ = function $$JSCompiler_prototypeAlias$$$$requestDepositList$$($opt_requestId$$2_requestId$$3$$, $msg$$39_opt_page$$1$$, $opt_limit$$2$$, $opt_status$$1$$, $opt_clientID$$4$$, $opt_filter$$1$$) {
  $opt_requestId$$2_requestId$$3$$ = $opt_requestId$$2_requestId$$3$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$39_opt_page$$1$$ = {MsgType:"U30", DepositListReqID:$opt_requestId$$2_requestId$$3$$, Page:$msg$$39_opt_page$$1$$ || 0, PageSize:$opt_limit$$2$$ || 100, StatusList:$opt_status$$1$$ || ["1", "2"]};
  $opt_clientID$$4$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$4$$) && ($msg$$39_opt_page$$1$$.ClientID = $opt_clientID$$4$$);
  $opt_filter$$1$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$1$$.length && ($msg$$39_opt_page$$1$$.Filter = $opt_filter$$1$$);
  this.sendMessage($msg$$39_opt_page$$1$$);
  return $opt_requestId$$2_requestId$$3$$
};
$JSCompiler_prototypeAlias$$.$requestLedgerList$ = function $$JSCompiler_prototypeAlias$$$$requestLedgerList$$($opt_requestId$$6_requestId$$7$$, $msg$$43_opt_page$$4$$, $opt_limit$$5$$, $opt_brokerID$$, $opt_clientID$$7$$, $opt_currency$$1$$, $opt_filter$$4$$) {
  $opt_requestId$$6_requestId$$7$$ = $opt_requestId$$6_requestId$$7$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$43_opt_page$$4$$ = {MsgType:"U34", LedgerListReqID:$opt_requestId$$6_requestId$$7$$, OperationList:["C", "D"], Page:$msg$$43_opt_page$$4$$ || 0, PageSize:$opt_limit$$5$$ || 100};
  $opt_brokerID$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_brokerID$$) && ($msg$$43_opt_page$$4$$.BrokerID = $opt_brokerID$$);
  $opt_clientID$$7$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$7$$) && ($msg$$43_opt_page$$4$$.ClientID = $opt_clientID$$7$$);
  $opt_currency$$1$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_currency$$1$$) && ($msg$$43_opt_page$$4$$.Currency = $opt_currency$$1$$);
  $opt_filter$$4$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$4$$.length && ($msg$$43_opt_page$$4$$.Filter = $opt_filter$$4$$);
  this.sendMessage($msg$$43_opt_page$$4$$);
  return $opt_requestId$$6_requestId$$7$$
};
$JSCompiler_prototypeAlias$$.$requestBrokerList$ = function $$JSCompiler_prototypeAlias$$$$requestBrokerList$$($opt_requestId$$7_requestId$$8$$, $opt_country$$, $msg$$44_opt_page$$5$$, $opt_limit$$6$$, $opt_status$$2$$) {
  $opt_requestId$$7_requestId$$8$$ = $opt_requestId$$7_requestId$$8$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$44_opt_page$$5$$ = {MsgType:"U28", BrokerListReqID:$opt_requestId$$7_requestId$$8$$, Page:$msg$$44_opt_page$$5$$ || 0, PageSize:$opt_limit$$6$$ || 100, StatusList:$opt_status$$2$$ || ["1"]};
  $opt_country$$ != $JSCompiler_alias_NULL$$ && ($msg$$44_opt_page$$5$$.Country = $opt_country$$);
  this.sendMessage($msg$$44_opt_page$$5$$);
  return $opt_requestId$$7_requestId$$8$$
};
$JSCompiler_prototypeAlias$$.$requestCustomerList$ = function $$JSCompiler_prototypeAlias$$$$requestCustomerList$$($opt_requestId$$8_requestId$$9$$, $opt_filter_country$$, $opt_filter_state$$, $opt_filter_username_or_email$$, $msg$$45_opt_page$$6$$, $opt_limit$$7$$, $opt_status$$3$$, $opt_sort_column$$, $opt_sort_direction$$) {
  $opt_requestId$$8_requestId$$9$$ = $opt_requestId$$8_requestId$$9$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$45_opt_page$$6$$ = {MsgType:"B2", CustomerListReqID:$opt_requestId$$8_requestId$$9$$, Page:$msg$$45_opt_page$$6$$ || 0, PageSize:$opt_limit$$7$$ || 100, StatusList:$opt_status$$3$$ || [0, 1, 2]};
  $opt_filter_country$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_page$$6$$.Country = $opt_filter_country$$);
  $opt_filter_state$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_page$$6$$.State = $opt_filter_state$$);
  $opt_filter_username_or_email$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_page$$6$$.ClientID = $opt_filter_username_or_email$$);
  $opt_sort_column$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_page$$6$$.Sort = $opt_sort_column$$);
  $opt_sort_direction$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_page$$6$$.SortOrder = $opt_sort_direction$$);
  this.sendMessage($msg$$45_opt_page$$6$$);
  return $opt_requestId$$8_requestId$$9$$
};
$JSCompiler_prototypeAlias$$.$requestCustomerDetails$ = function $$JSCompiler_prototypeAlias$$$$requestCustomerDetails$$($opt_requestId$$9$$, $clientId$$) {
  var $requestId$$10$$ = $opt_requestId$$9$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"B4", CustomerReqID:$requestId$$10$$, ClientID:$clientId$$});
  return $requestId$$10$$
};
$JSCompiler_prototypeAlias$$.$verifyCustomer$ = function $$JSCompiler_prototypeAlias$$$$verifyCustomer$$($opt_requestId$$10_requestId$$11$$, $clientId$$1$$, $verify$$, $verificationData$$) {
  $opt_requestId$$10_requestId$$11$$ = $opt_requestId$$10_requestId$$11$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"B8", VerifyCustomerReqID:$opt_requestId$$10_requestId$$11$$, ClientID:$clientId$$1$$, Verify:$verify$$, VerificationData:$verificationData$$});
  return $opt_requestId$$10_requestId$$11$$
};
$JSCompiler_prototypeAlias$$.$processWithdraw$ = function $$JSCompiler_prototypeAlias$$$$processWithdraw$$($opt_requestId$$11_requestId$$12$$, $action_msg$$48$$, $withdrawId$$, $opt_reasonId$$, $opt_reason$$, $opt_data$$41$$, $opt_percent_fee$$, $opt_fixed_fee$$) {
  $opt_requestId$$11_requestId$$12$$ = $opt_requestId$$11_requestId$$12$$ || parseInt(1E7 * Math.random(), 10);
  $action_msg$$48$$ = {MsgType:"B6", ProcessWithdrawReqID:$opt_requestId$$11_requestId$$12$$, WithdrawID:$withdrawId$$, Action:$action_msg$$48$$};
  $opt_reasonId$$ != $JSCompiler_alias_NULL$$ && ($action_msg$$48$$.ReasonID = $opt_reasonId$$);
  $opt_reason$$ != $JSCompiler_alias_NULL$$ && ($action_msg$$48$$.Reason = $opt_reason$$);
  $opt_data$$41$$ != $JSCompiler_alias_NULL$$ && ($action_msg$$48$$.Data = $opt_data$$41$$);
  $opt_percent_fee$$ != $JSCompiler_alias_NULL$$ && ($action_msg$$48$$.PercentFee = $opt_percent_fee$$);
  $opt_fixed_fee$$ != $JSCompiler_alias_NULL$$ && ($action_msg$$48$$.FixedFee = $opt_fixed_fee$$);
  this.sendMessage($action_msg$$48$$);
  return $opt_requestId$$11_requestId$$12$$
};
$JSCompiler_prototypeAlias$$.$processDeposit$ = function $$JSCompiler_prototypeAlias$$$$processDeposit$$($opt_requestId$$12_requestId$$13$$, $action$$1_msg$$49$$, $opt_secret$$1$$, $opt_depositId$$, $opt_reasonId$$1$$, $opt_reason$$1$$, $opt_amount$$, $opt_percent_fee$$1$$, $opt_fixed_fee$$1$$) {
  $opt_requestId$$12_requestId$$13$$ = $opt_requestId$$12_requestId$$13$$ || parseInt(1E7 * Math.random(), 10);
  $action$$1_msg$$49$$ = {MsgType:"B0", ProcessDepositReqID:$opt_requestId$$12_requestId$$13$$, Action:$action$$1_msg$$49$$};
  $opt_secret$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$49$$.Secret = $opt_secret$$1$$);
  $opt_depositId$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$49$$.DepositID = $opt_depositId$$);
  $opt_reasonId$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$49$$.ReasonID = $opt_reasonId$$1$$);
  $opt_reason$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$49$$.Reason = $opt_reason$$1$$);
  $opt_amount$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$49$$.Amount = $opt_amount$$);
  $opt_percent_fee$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$49$$.PercentFee = $opt_percent_fee$$1$$);
  $opt_fixed_fee$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$49$$.FixedFee = $opt_fixed_fee$$1$$);
  this.sendMessage($action$$1_msg$$49$$);
  return $opt_requestId$$12_requestId$$13$$
};
$JSCompiler_prototypeAlias$$.$resetPassword$ = function $$JSCompiler_prototypeAlias$$$$resetPassword$$($token$$7$$, $new_password$$, $opt_requestId$$13$$) {
  this.sendMessage({MsgType:"U12", ResetPasswordReqID:$opt_requestId$$13$$ || parseInt(1E7 * Math.random(), 10), Token:$token$$7$$, NewPassword:$new_password$$})
};
$JSCompiler_prototypeAlias$$.$changePassword$ = function $$JSCompiler_prototypeAlias$$$$changePassword$$($msg$$51_username$$8$$, $password$$4$$, $new_password$$1$$, $opt_second_factor$$1$$, $opt_requestId$$14$$) {
  $msg$$51_username$$8$$ = {MsgType:"BE", UserReqID:$opt_requestId$$14$$ || parseInt(1E7 * Math.random(), 10), UserReqTyp:"3", Username:$msg$$51_username$$8$$, Password:$password$$4$$, NewPassword:$new_password$$1$$};
  $opt_second_factor$$1$$ != $JSCompiler_alias_NULL$$ && ($msg$$51_username$$8$$.SecondFactor = $opt_second_factor$$1$$);
  this.sendMessage($msg$$51_username$$8$$)
};
$JSCompiler_prototypeAlias$$.$subscribeMarketData$ = function $$JSCompiler_prototypeAlias$$$$subscribeMarketData$$($market_depth$$, $symbols$$1$$, $entries$$, $opt_requestId$$15_requestId$$16$$) {
  $opt_requestId$$15_requestId$$16$$ = $opt_requestId$$15_requestId$$16$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"V", MDReqID:$opt_requestId$$15_requestId$$16$$, SubscriptionRequestType:"1", MarketDepth:$market_depth$$, MDUpdateType:"1", MDEntryTypes:$entries$$, Instruments:$symbols$$1$$});
  return $opt_requestId$$15_requestId$$16$$
};
$JSCompiler_prototypeAlias$$.$unSubscribeMarketData$ = function $$JSCompiler_prototypeAlias$$$$unSubscribeMarketData$$($market_data_id$$) {
  this.sendMessage({MsgType:"V", MDReqID:$market_data_id$$, MarketDepth:0, SubscriptionRequestType:"2"})
};
$JSCompiler_prototypeAlias$$.$requestSecurityList$ = function $$JSCompiler_prototypeAlias$$$$requestSecurityList$$($opt_requestId$$17$$) {
  this.sendMessage({MsgType:"x", SecurityReqID:$opt_requestId$$17$$ || parseInt(1E7 * Math.random(), 10), SecurityListRequestType:0, SecurityRequestResult:0})
};
$JSCompiler_prototypeAlias$$.$signUp$ = function $$JSCompiler_prototypeAlias$$$$signUp$$($username$$9$$, $password$$5$$, $email$$2$$, $state$$20$$, $country_code$$2$$, $broker$$8$$, $opt_requestId$$18$$) {
  this.sendMessage({MsgType:"U0", UserReqID:$opt_requestId$$18$$ || parseInt(1E7 * Math.random(), 10), Username:$username$$9$$, Password:$password$$5$$, Email:$email$$2$$, State:$state$$20$$, CountryCode:$country_code$$2$$, BrokerID:$broker$$8$$})
};
$JSCompiler_prototypeAlias$$.$requestOrderList$ = function $$JSCompiler_prototypeAlias$$$$requestOrderList$$($opt_requestId$$19_requestId$$20$$, $opt_page$$7$$, $opt_limit$$8$$, $opt_status$$4$$) {
  $opt_requestId$$19_requestId$$20$$ = $opt_requestId$$19_requestId$$20$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"U4", OrdersReqID:$opt_requestId$$19_requestId$$20$$, Page:$opt_page$$7$$ || 0, PageSize:$opt_limit$$8$$ || 100, StatusList:$opt_status$$4$$ || ["0", "1"]});
  return $opt_requestId$$19_requestId$$20$$
};
$JSCompiler_prototypeAlias$$.$requestDeposit$ = function $$JSCompiler_prototypeAlias$$$$requestDeposit$$($msg$$59_opt_requestId$$20$$, $opt_depositOptionId$$, $opt_value$$10$$, $opt_depositID$$, $opt_currency$$2$$, $opt_client_order_id$$2$$, $opt_instructions$$) {
  $msg$$59_opt_requestId$$20$$ = {MsgType:"U18", DepositReqID:$msg$$59_opt_requestId$$20$$ || parseInt(1E7 * Math.random(), 10)};
  $opt_depositOptionId$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.DepositMethodID = $opt_depositOptionId$$);
  $opt_value$$10$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.Value = parseInt($opt_value$$10$$, 10));
  $opt_depositID$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.DepositID = $opt_depositID$$);
  $opt_currency$$2$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.Currency = $opt_currency$$2$$);
  $opt_client_order_id$$2$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.ClOrdID = "" + $opt_client_order_id$$2$$);
  $opt_instructions$$ != $JSCompiler_alias_NULL$$ && ($msg$$59_opt_requestId$$20$$.Instructions = $opt_instructions$$);
  this.sendMessage($msg$$59_opt_requestId$$20$$)
};
$JSCompiler_prototypeAlias$$.$requestDepositMethods$ = function $$JSCompiler_prototypeAlias$$$$requestDepositMethods$$($opt_requestId$$21$$) {
  this.sendMessage({MsgType:"U20", DepositMethodReqID:$opt_requestId$$21$$ || parseInt(1E7 * Math.random(), 10)})
};
function $JSCompiler_StaticMethods_sendOrder_$$($JSCompiler_StaticMethods_sendOrder_$self$$, $msg$$61_symbol$$6$$, $qty$$6$$, $price$$4$$, $side$$12$$, $broker_id$$1$$, $opt_client_id$$, $clientOrderId_opt_clientOrderId$$) {
  $clientOrderId_opt_clientOrderId$$ = $clientOrderId_opt_clientOrderId$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$61_symbol$$6$$ = {MsgType:"D", ClOrdID:"" + $clientOrderId_opt_clientOrderId$$, Symbol:$msg$$61_symbol$$6$$, Side:$side$$12$$, OrdType:"2", Price:$price$$4$$, OrderQty:$qty$$6$$, BrokerID:$broker_id$$1$$};
  $opt_client_id$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_client_id$$) && ($msg$$61_symbol$$6$$.ClientID = $opt_client_id$$);
  $JSCompiler_StaticMethods_sendOrder_$self$$.sendMessage($msg$$61_symbol$$6$$);
  return $clientOrderId_opt_clientOrderId$$
}
$JSCompiler_prototypeAlias$$.$cancelOrder$ = function $$JSCompiler_prototypeAlias$$$$cancelOrder$$($opt_clientOrderId$$1$$, $opt_OrderId$$) {
  var $msg$$62$$ = {MsgType:"F"};
  $opt_OrderId$$ ? $msg$$62$$.OrderID = $opt_OrderId$$ : $opt_clientOrderId$$1$$ && ($msg$$62$$.OrigClOrdID = $opt_clientOrderId$$1$$);
  this.sendMessage($msg$$62$$)
};
$JSCompiler_prototypeAlias$$.$sendRawMessage$ = function $$JSCompiler_prototypeAlias$$$$sendRawMessage$$($msg$$63$$) {
  if(this.$ws_$.$isOpen$()) {
    try {
      this.$ws_$.send($msg$$63$$), this.dispatchEvent(new $bitex$api$BitExEvent$$("sent_raw_message", $msg$$63$$))
    }catch($s$$49$$) {
      this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message", {MsgType:"ERROR", Description:"Excepcion", Detail:$s$$49$$.toLocaleString()}))
    }
  }else {
    this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message", {MsgType:"ERROR", Description:"Error", Detail:"No esta coectado al servidor"}))
  }
};
$JSCompiler_prototypeAlias$$.sendMessage = function $$JSCompiler_prototypeAlias$$$sendMessage$($msg$$64$$) {
  this.$sendRawMessage$(JSON.stringify($msg$$64$$))
};
$JSCompiler_prototypeAlias$$.$sendBuyLimitedOrder$ = function $$JSCompiler_prototypeAlias$$$$sendBuyLimitedOrder$$($symbol$$7$$, $qty$$7$$, $price$$5$$, $broker_id$$2$$, $opt_client_id$$1$$, $opt_clientOrderId$$2$$) {
  return $JSCompiler_StaticMethods_sendOrder_$$(this, $symbol$$7$$, $qty$$7$$, $price$$5$$, "1", $broker_id$$2$$, $opt_client_id$$1$$, $opt_clientOrderId$$2$$)
};
$JSCompiler_prototypeAlias$$.$sendSellLimitedOrder$ = function $$JSCompiler_prototypeAlias$$$$sendSellLimitedOrder$$($symbol$$8$$, $qty$$8$$, $price$$6$$, $broker_id$$3$$, $opt_client_id$$2$$, $opt_clientOrderId$$3$$) {
  return $JSCompiler_StaticMethods_sendOrder_$$(this, $symbol$$8$$, $qty$$8$$, $price$$6$$, "2", $broker_id$$3$$, $opt_client_id$$2$$, $opt_clientOrderId$$3$$)
};
$JSCompiler_prototypeAlias$$.$testRequest$ = function $$JSCompiler_prototypeAlias$$$$testRequest$$($opt_requestId$$22$$) {
  var $d$$7$$ = new Date;
  this.sendMessage({MsgType:"1", TestReqID:$opt_requestId$$22$$ || $d$$7$$.getTime(), SendTime:$d$$7$$.getTime()})
};
function $bitex$api$BitExEvent$$($type$$107$$, $opt_data$$42$$) {
  $goog$events$Event$$.call(this, $type$$107$$);
  this.data = $opt_data$$42$$
}
$goog$inherits$$($bitex$api$BitExEvent$$, $goog$events$Event$$);
$goog$exportPath_$$("BitEx", $bitex$api$BitEx$$);
BitEx.prototype.open = $bitex$api$BitEx$$.prototype.open;
BitEx.prototype.close = $bitex$api$BitEx$$.prototype.close;
BitEx.prototype.login = $bitex$api$BitEx$$.prototype.login;
BitEx.prototype.isLogged = $bitex$api$BitEx$$.prototype.$isLogged$;
BitEx.prototype.isConnected = $bitex$api$BitEx$$.prototype.$isConnected$;
BitEx.prototype.changePassword = $bitex$api$BitEx$$.prototype.$changePassword$;
BitEx.prototype.enableTwoFactor = $bitex$api$BitEx$$.prototype.$enableTwoFactor$;
BitEx.prototype.resetPassword = $bitex$api$BitEx$$.prototype.$resetPassword$;
BitEx.prototype.subscribeMarketData = $bitex$api$BitEx$$.prototype.$subscribeMarketData$;
BitEx.prototype.unSubscribeMarketData = $bitex$api$BitEx$$.prototype.$unSubscribeMarketData$;
BitEx.prototype.signUp = $bitex$api$BitEx$$.prototype.$signUp$;
BitEx.prototype.forgotPassword = $bitex$api$BitEx$$.prototype.$forgotPassword$;
BitEx.prototype.requestBalances = $bitex$api$BitEx$$.prototype.$requestBalances$;
BitEx.prototype.requestSecurityList = $bitex$api$BitEx$$.prototype.$requestSecurityList$;
BitEx.prototype.requestDepositMethods = $bitex$api$BitEx$$.prototype.$requestDepositMethods$;
BitEx.prototype.requestLedgerList = $bitex$api$BitEx$$.prototype.$requestLedgerList$;
BitEx.prototype.requestDeposit = $bitex$api$BitEx$$.prototype.$requestDeposit$;
BitEx.prototype.processDeposit = $bitex$api$BitEx$$.prototype.$processDeposit$;
BitEx.prototype.requestDepositList = $bitex$api$BitEx$$.prototype.$requestDepositList$;
BitEx.prototype.requestWithdraw = $bitex$api$BitEx$$.prototype.$requestWithdraw$;
BitEx.prototype.processWithdraw = $bitex$api$BitEx$$.prototype.$processWithdraw$;
BitEx.prototype.requestWithdrawList = $bitex$api$BitEx$$.prototype.$requestWithdrawList$;
BitEx.prototype.confirmWithdraw = $bitex$api$BitEx$$.prototype.$confirmWithdraw$;
BitEx.prototype.requestCustomerList = $bitex$api$BitEx$$.prototype.$requestCustomerList$;
BitEx.prototype.requestCustomerDetails = $bitex$api$BitEx$$.prototype.$requestCustomerDetails$;
BitEx.prototype.verifyCustomer = $bitex$api$BitEx$$.prototype.$verifyCustomer$;
BitEx.prototype.requestBrokerList = $bitex$api$BitEx$$.prototype.$requestBrokerList$;
BitEx.prototype.requestOrderList = $bitex$api$BitEx$$.prototype.$requestOrderList$;
BitEx.prototype.cancelOrder = $bitex$api$BitEx$$.prototype.$cancelOrder$;
BitEx.prototype.sendRawMessage = $bitex$api$BitEx$$.prototype.$sendRawMessage$;
BitEx.prototype.sendBuyLimitedOrder = $bitex$api$BitEx$$.prototype.$sendBuyLimitedOrder$;
BitEx.prototype.sendSellLimitedOrder = $bitex$api$BitEx$$.prototype.$sendSellLimitedOrder$;
BitEx.prototype.testRequest = $bitex$api$BitEx$$.prototype.$testRequest$;
BitEx.prototype.addEventListener = $bitex$api$BitEx$$.prototype.addEventListener;
BitEx.prototype.removeEventListener = $bitex$api$BitEx$$.prototype.removeEventListener;
// Input 147
function $bitex$ui$RankingViewTable$$($opt_domHelper$$34$$) {
  this.$selected_trade_$ = $JSCompiler_alias_NULL$$;
  $bitex$ui$DataGrid$$.call(this, {title:"Ranking de mejores comerciantes", rowIDFn:this.$getRowId$, columns:[{property:"Rank", label:"#", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$RankingViewTable$CSS_CLASS$$ + "-rank"
  }}, {property:"Trader", label:"comerciante", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$RankingViewTable$CSS_CLASS$$ + "-trader"
  }}, {property:"Broker", label:"Corredor", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$RankingViewTable$CSS_CLASS$$ + "-broker"
  }}, {property:"Amount", label:"cantidad de BTC", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$171$$) {
    return app.$formatCurrency$($value$$171$$ / 1E8, "BTC", $JSCompiler_alias_TRUE$$)
  }, classes:function() {
    return $bitex$ui$RankingViewTable$CSS_CLASS$$ + "-amount"
  }}], show_search:$JSCompiler_alias_FALSE$$}, $opt_domHelper$$34$$)
}
$goog$inherits$$($bitex$ui$RankingViewTable$$, $bitex$ui$DataGrid$$);
var $bitex$ui$RankingViewTable$CSS_CLASS$$ = "ranking";
$bitex$ui$RankingViewTable$$.prototype.$getRowId$ = function $$bitex$ui$RankingViewTable$$$$$getRowId$$($row_set$$10$$) {
  return $JSCompiler_StaticMethods_makeId$$(this, $row_set$$10$$.rank)
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$RankingViewTable$CSS_CLASS$$, function() {
  return new $bitex$ui$RankingViewTable$$
});
// Input 148
function $bitex$view$RankingView$$($app$$12$$, $opt_domHelper$$35$$) {
  $bitex$view$View$$.call(this, $app$$12$$, $opt_domHelper$$35$$)
}
$goog$inherits$$($bitex$view$RankingView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$RankingView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$RankingView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$RankingView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$RankingView$$.$superClass_$.$enterDocument$.call(this)
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $bitex$view$RankingView$$.$superClass_$.$exitDocument$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$81$$ = this.$getHandler$();
  this.$ranking_table_$ = new $bitex$ui$RankingViewTable$$;
  $JSCompiler_StaticMethods_listen$$($handler$$81$$, this.$ranking_table_$, "request_data", this.$onRankingTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$81$$, this.$app_$.$conn_$, "traders_rank", this.$onTradeRankResponse_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$ranking_table_$, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$82$$ = this.$getHandler$();
  this.$ranking_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$82$$, this.$ranking_table_$, "request_data", this.$onRankingTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$82$$, this.$app_$.$conn_$, "traders_rank", this.$onTradeRankResponse_$));
  this.$removeChildren$($JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$onRankingTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onRankingTableRequestData_$$($e$$178_msg$$inline_956$$) {
  var $JSCompiler_StaticMethods_requestTradersRank$self$$inline_949$$ = this.$app_$.$conn_$, $opt_filter$$inline_952$$ = $e$$178_msg$$inline_956$$.options.Filter;
  $e$$178_msg$$inline_956$$ = {MsgType:"U36", TradersRankReqID:parseInt(1E7 * Math.random(), 10), Page:$e$$178_msg$$inline_956$$.options.Page || 0, PageSize:$e$$178_msg$$inline_956$$.options.Limit || 100};
  $opt_filter$$inline_952$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$inline_952$$.length && ($e$$178_msg$$inline_956$$.Filter = $opt_filter$$inline_952$$);
  $JSCompiler_StaticMethods_requestTradersRank$self$$inline_949$$.sendMessage($e$$178_msg$$inline_956$$)
};
$JSCompiler_prototypeAlias$$.$onTradeRankResponse_$ = function $$JSCompiler_prototypeAlias$$$$onTradeRankResponse_$$($e$$179_msg$$66$$) {
  this.$ranking_table_$ != $JSCompiler_alias_NULL$$ && ($e$$179_msg$$66$$ = $e$$179_msg$$66$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$ranking_table_$, $e$$179_msg$$66$$.TradersRankGrp, $e$$179_msg$$66$$.Columns))
};
// Input 149
function $bitex$view$SetNewPasswordView$$($app$$13$$, $opt_domHelper$$36$$) {
  $bitex$view$View$$.call(this, $app$$13$$, $opt_domHelper$$36$$)
}
$goog$inherits$$($bitex$view$SetNewPasswordView$$, $bitex$view$View$$);
$bitex$view$SetNewPasswordView$$.prototype.$getToken$ = function $$bitex$view$SetNewPasswordView$$$$$getToken$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_set_new_password_token"))
};
$bitex$view$SetNewPasswordView$$.prototype.$getPassword$ = function $$bitex$view$SetNewPasswordView$$$$$getPassword$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_set_new_password_password"))
};
$bitex$view$SetNewPasswordView$$.prototype.$enterDocument$ = function $$bitex$view$SetNewPasswordView$$$$$enterDocument$$() {
  $bitex$view$SetNewPasswordView$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $goog$dom$getElement$$("id_btn_set_new_password"), "click", function($e$$180$$) {
    $e$$180$$.stopPropagation();
    $e$$180$$.preventDefault();
    $goog$string$isEmpty$$(this.$getToken$()) ? this.$app_$.$showDialog$("Codigo de confirmacion invalido") : $goog$string$isEmpty$$(this.$getPassword$()) || 8 > this.$getPassword$().length ? this.$app_$.$showDialog$("La contrasena debe tener al menos 8 caracteres") : this.$getPassword$() !== $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_set_new_password_password2")) ? this.$app_$.$showDialog$("La contrasena no coincide") : this.dispatchEvent("set_new_pwd")
  }, this)
};
// Input 150
function $bitex$view$ForgotPasswordView$$($app$$14$$, $opt_domHelper$$37$$) {
  $bitex$view$View$$.call(this, $app$$14$$, $opt_domHelper$$37$$)
}
$goog$inherits$$($bitex$view$ForgotPasswordView$$, $bitex$view$View$$);
$bitex$view$ForgotPasswordView$$.prototype.$enterDocument$ = function $$bitex$view$ForgotPasswordView$$$$$enterDocument$$() {
  $bitex$view$ForgotPasswordView$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $goog$dom$getElement$$("id_btn_forgot_password"), "click", function($e$$181$$) {
    $e$$181$$.stopPropagation();
    $e$$181$$.preventDefault();
    $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_forgot_password_email")).match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) ? this.dispatchEvent("recover_pwd") : ($goog$dom$getElement$$("id_forgot_password_email").focus(), this.$app_$.$showDialog$("Correo electronico invalido"))
  }, this)
};
$bitex$view$ForgotPasswordView$$.prototype.$getEmail$ = function $$bitex$view$ForgotPasswordView$$$$$getEmail$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_forgot_password_email"))
};
// Input 151
function $bitex$view$WithdrawView$$($app$$15$$, $opt_requests_from_customers$$1$$, $opt_domHelper$$38$$) {
  $bitex$view$View$$.call(this, $app$$15$$, $opt_domHelper$$38$$);
  this.$is_requests_from_customers_$ = $JSCompiler_alias_FALSE$$;
  $opt_requests_from_customers$$1$$ === $JSCompiler_alias_TRUE$$ && (this.$is_requests_from_customers_$ = $opt_requests_from_customers$$1$$);
  this.$qr_data_verb_$ = this.$qr_data_$ = this.$withdraw_action_$ = this.$confirmation_token_$ = this.$request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$WithdrawView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$WithdrawView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$WithdrawView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$WithdrawView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$WithdrawView$$.$superClass_$.$enterDocument$.call(this)
};
$JSCompiler_prototypeAlias$$.$getAmount$ = $JSCompiler_get$$("$amount_$");
$JSCompiler_prototypeAlias$$.$getMethod$ = $JSCompiler_get$$("$method_$");
$JSCompiler_prototypeAlias$$.$getWithdrawData$ = $JSCompiler_get$$("$data_$");
$JSCompiler_prototypeAlias$$.$onWithdrawListTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListTableClick_$$($data$$39_e$$182$$) {
  var $element$$191$$ = $data$$39_e$$182$$.target;
  "I" === $element$$191$$.tagName && ($element$$191$$ = $goog$dom$getParentElement$$($element$$191$$));
  var $data_action$$1$$ = $element$$191$$.getAttribute("data-action");
  if($data_action$$1$$ != $JSCompiler_alias_NULL$$) {
    switch($data$$39_e$$182$$.preventDefault(), $data$$39_e$$182$$.stopPropagation(), $data$$39_e$$182$$ = $goog$json$parse$$($element$$191$$.getAttribute("data-row")), $data_action$$1$$) {
      case "SHOW_QR":
        this.$qr_data_$ = {Wallet:$data$$39_e$$182$$.Data.Wallet, Currency:$data$$39_e$$182$$.Currency}, this.$qr_data_verb_$ = "WITHDRAW", this.dispatchEvent("show_qr")
    }
  }
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$85$$ = this.$getHandler$(), $model$$24$$ = this.$app_$.$model_$;
  this.$withdraw_list_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$85$$, this.$withdraw_list_table_$, "request_data", this.$onWithdrawListTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$85$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$WITHDRAW_LIST_RESPONSE$$, this.$onWithdrawListReponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$85$$, this.$app_$.$conn_$, "withdraw_refresh." + $model$$24$$.get("UserID"), this.$onWithdrawRefresh_$), 
  $JSCompiler_StaticMethods_unlisten$$($handler$$85$$, this.$withdraw_list_table_$.$getElement$(), "click", this.$onWithdrawListTableClick_$), $JSCompiler_StaticMethods_unlisten$$($handler$$85$$, this.$withdraw_list_table_$, "withdraw_cancel", this.$onUserCancelWithdraw_$), $JSCompiler_StaticMethods_unlisten$$($handler$$85$$, this.$withdraw_list_table_$, "withdraw_progress", this.$onUserSetWithdrawInProgress_$), $JSCompiler_StaticMethods_unlisten$$($handler$$85$$, this.$withdraw_list_table_$, "withdraw_complete", 
  this.$onUserSetWithdrawComplete_$), this.$removeChildren$($JSCompiler_alias_TRUE$$));
  this.$request_id_$ = this.$withdraw_list_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$86$$ = this.$getHandler$(), $model$$25$$ = this.$app_$.$model_$;
  this.$destroyComponents_$();
  this.$request_id_$ = parseInt(1E7 * Math.random(), 10);
  var $currency_method_description_obj$$ = {}, $broker$$9$$ = $model$$25$$.get("Broker");
  $model$$25$$.get("IsBroker") && this.$is_requests_from_customers_$ && ($broker$$9$$ = $model$$25$$.get("Profile"), $broker$$9$$ = $goog$array$find$$($model$$25$$.get("BrokerList"), function($broker_obj$$) {
    if($broker_obj$$.BrokerID == $model$$25$$.get("UserID")) {
      return $JSCompiler_alias_TRUE$$
    }
  }));
  $goog$object$forEach$$($broker$$9$$.WithdrawStructure, function($method_list$$, $currency$$6$$) {
    $currency_method_description_obj$$[$currency$$6$$] = {};
    $goog$array$forEach$$($method_list$$, function($method$$6$$) {
      $currency_method_description_obj$$[$currency$$6$$][$method$$6$$.method] = $method$$6$$.description
    })
  });
  $model$$25$$.get("IsBroker") && this.$is_requests_from_customers_$ ? this.$withdraw_list_table_$ = new $bitex$ui$WithdrawList$$($currency_method_description_obj$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$) : this.$withdraw_list_table_$ = new $bitex$ui$WithdrawList$$($currency_method_description_obj$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_listen$$($handler$$86$$, this.$withdraw_list_table_$, "request_data", this.$onWithdrawListTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$86$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$WITHDRAW_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onWithdrawListReponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$86$$, this.$app_$.$conn_$, "withdraw_refresh." + $model$$25$$.get("UserID"), this.$onWithdrawRefresh_$);
  $JSCompiler_StaticMethods_listen$$($handler$$86$$, this.$withdraw_list_table_$, "withdraw_cancel", this.$onUserCancelWithdraw_$);
  $JSCompiler_StaticMethods_listen$$($handler$$86$$, this.$withdraw_list_table_$, "withdraw_progress", this.$onUserSetWithdrawInProgress_$);
  $JSCompiler_StaticMethods_listen$$($handler$$86$$, this.$withdraw_list_table_$, "withdraw_complete", this.$onUserSetWithdrawComplete_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$withdraw_list_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$withdraw_list_table_$, "Amount", this.$priceFormatter_$, this);
  $JSCompiler_StaticMethods_listen$$($handler$$86$$, this.$withdraw_list_table_$.$getElement$(), "click", this.$onWithdrawListTableClick_$)
};
$JSCompiler_prototypeAlias$$.$priceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$priceFormatter_$$($value$$172$$, $rowSet$$14$$) {
  var $priceCurrency$$5$$ = $rowSet$$14$$.Currency;
  return 0 === $value$$172$$ ? "-" : $goog$dom$createDom$$("abbr", {title:this.$app_$.$getCurrencyDescription$($priceCurrency$$5$$)}, this.$app_$.$formatCurrency$($value$$172$$ / 1E8, $priceCurrency$$5$$))
};
$JSCompiler_prototypeAlias$$.$onWithdrawListTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListTableRequestData_$$($e$$183_filter$$9$$) {
  var $page$$12$$ = $e$$183_filter$$9$$.options.Page, $limit$$12$$ = $e$$183_filter$$9$$.options.Limit;
  $e$$183_filter$$9$$ = $e$$183_filter$$9$$.options.Filter;
  var $conn$$9$$ = this.$app_$.$conn_$, $model$$26$$ = this.$app_$.$model_$, $clientID$$1$$ = $JSCompiler_alias_VOID$$;
  $model$$26$$.get("IsBroker") && !this.$is_requests_from_customers_$ && ($clientID$$1$$ = $model$$26$$.get("UserID"));
  $conn$$9$$.$requestWithdrawList$(this.$request_id_$, $page$$12$$, $limit$$12$$, ["1", "2", "4", "8"], $clientID$$1$$, $e$$183_filter$$9$$)
};
$JSCompiler_prototypeAlias$$.$onUserCancelWithdraw_$ = function $$JSCompiler_prototypeAlias$$$$onUserCancelWithdraw_$$() {
  this.$withdraw_action_$ = "CANCEL";
  this.$data_$ = this.$withdraw_list_table_$.$getWithdrawData$();
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onUserSetWithdrawInProgress_$ = function $$JSCompiler_prototypeAlias$$$$onUserSetWithdrawInProgress_$$() {
  this.$withdraw_action_$ = "PROGRESS";
  this.$data_$ = this.$withdraw_list_table_$.$getWithdrawData$();
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onUserSetWithdrawComplete_$ = function $$JSCompiler_prototypeAlias$$$$onUserSetWithdrawComplete_$$() {
  this.$withdraw_action_$ = "COMPLETE";
  this.$data_$ = this.$withdraw_list_table_$.$getWithdrawData$();
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onWithdrawRefresh_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawRefresh_$$($e$$187_msg$$67$$) {
  $e$$187_msg$$67$$ = $e$$187_msg$$67$$.data;
  this.$withdraw_list_table_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$withdraw_list_table_$, $e$$187_msg$$67$$)
};
$JSCompiler_prototypeAlias$$.$onWithdrawListReponse_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListReponse_$$($e$$188_msg$$68$$) {
  this.$withdraw_list_table_$ != $JSCompiler_alias_NULL$$ && ($e$$188_msg$$68$$ = $e$$188_msg$$68$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$withdraw_list_table_$, $e$$188_msg$$68$$.WithdrawListGrp, $e$$188_msg$$68$$.Columns))
};
// Input 152
function $bitex$ui$LedgerActivity$$($button_filters$$, $opt_broker_mode$$2$$, $opt_domHelper$$39$$) {
  $bitex$ui$DataGrid$$.call(this, {title:"Libro de cuentas", showSearch:$JSCompiler_alias_TRUE$$, searchPlaceholder:"Buscar...", buttonFilters:$button_filters$$, rowClassFn:this.$getRowClass$, columns:[{property:"Created", label:"Fecha/Hora", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-date-time"
  }}, {property:"Currency", label:"Moneda", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-currency"
  }}, {property:"Description", label:"Descripcion", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$50$$) {
    switch($s$$50$$) {
      case "B":
        return"Bono";
      case "D":
        return"Deposito";
      case "DF":
        return"Comision por deposito";
      case "W":
        return"Retiro";
      case "WF":
        return"Comision por retiro";
      case "T":
        return"Transaccion";
      case "TF":
        return"commission por transaccion"
    }
  }, classes:function() {
    return $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-description"
  }}, {property:"PayeeName", label:"Contraparte", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$DepositList$CSS_CLASS$$ + "-payee"
  }}, {property:"Amount", label:"Cantidad", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-amount"
  }}, {property:"Balance", label:"Balance", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-balance"
  }}]}, $opt_domHelper$$39$$)
}
$goog$inherits$$($bitex$ui$LedgerActivity$$, $bitex$ui$DataGrid$$);
var $bitex$ui$LedgerActivity$CSS_CLASS$$ = "ledger-activity";
$bitex$ui$LedgerActivity$$.prototype.$getCssClass$ = function $$bitex$ui$LedgerActivity$$$$$getCssClass$$() {
  return $bitex$ui$LedgerActivity$CSS_CLASS$$
};
$bitex$ui$LedgerActivity$$.prototype.$getRowClass$ = function $$bitex$ui$LedgerActivity$$$$$getRowClass$$($row_set$$11$$) {
  var $class_status$$5$$;
  switch($row_set$$11$$.Operation) {
    case "D":
      $class_status$$5$$ = $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-debit";
      break;
    case "C":
      $class_status$$5$$ = $bitex$ui$LedgerActivity$CSS_CLASS$$ + "-credit"
  }
  return $class_status$$5$$
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$LedgerActivity$CSS_CLASS$$, function() {
  return new $bitex$ui$LedgerActivity$$
});
// Input 153
function $bitex$view$LedgerView$$($app$$16$$, $opt_domHelper$$40$$) {
  $bitex$view$View$$.call(this, $app$$16$$, $opt_domHelper$$40$$);
  this.$request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$LedgerView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$LedgerView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$LedgerView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$LedgerView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$87$$ = this.$getHandler$();
  this.$ledger_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$87$$, this.$ledger_table_$, "request_data", this.$onLedgerTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$87$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$ORDER_LIST_RESPONSE$$, this.$onLedgerListResponse_$));
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$request_id_$ = this.$ledger_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$88$$ = this.$getHandler$(), $model$$27$$ = this.$app_$.$model_$;
  this.$destroyComponents_$();
  var $button_filters$$1$$ = [{label:"todas las monedas", value:"all"}];
  $model$$27$$.get("IsBroker") ? ($button_filters$$1$$ = [], $goog$array$forEach$$($model$$27$$.get("Broker").BrokerCurrencies, function($currency_code$$6$$) {
    $button_filters$$1$$.push({label:$model$$27$$.get("Broker").ShortName + ":" + this.$app_$.$getCurrencyDescription$($currency_code$$6$$), value:$goog$json$serialize$$({currency:$currency_code$$6$$, broker_id:$model$$27$$.get("Broker").BrokerID})})
  }, this), $goog$array$forEach$$($model$$27$$.get("Profile").BrokerCurrencies, function($currency_code$$7$$) {
    $button_filters$$1$$.push({label:"Mis clientes:" + this.$app_$.$getCurrencyDescription$($currency_code$$7$$), value:$goog$json$serialize$$({currency:$currency_code$$7$$, broker_id:$model$$27$$.get("UserID")})})
  }, this)) : $goog$array$forEach$$($model$$27$$.get("BrokerCurrencies"), function($currency_code$$8$$) {
    $button_filters$$1$$.push({label:this.$app_$.$getCurrencyDescription$($currency_code$$8$$), value:$goog$json$serialize$$({currency:$currency_code$$8$$, broker_id:$model$$27$$.get("Broker").BrokerID})})
  }, this);
  this.$request_id_$ = parseInt(1E7 * Math.random(), 10);
  this.$ledger_table_$ = new $bitex$ui$LedgerActivity$$($button_filters$$1$$, $model$$27$$.get("IsBroker"));
  $JSCompiler_StaticMethods_listen$$($handler$$88$$, this.$ledger_table_$, "request_data", this.$onLedgerTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$88$$, this.$app_$.$conn_$, "ledger_list." + this.$request_id_$, this.$onLedgerListResponse_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$ledger_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$ledger_table_$, "Amount", this.$amountFormatter_$, this);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$ledger_table_$, "Balance", this.$balanceFormatter_$, this)
};
$JSCompiler_prototypeAlias$$.$amountFormatter_$ = function $$JSCompiler_prototypeAlias$$$$amountFormatter_$$($value$$173$$, $rowSet$$16$$) {
  "D" == $rowSet$$16$$.Operation && ($value$$173$$ *= -1);
  return this.$app_$.$formatCurrency$($value$$173$$ / 1E8, $rowSet$$16$$.Currency)
};
$JSCompiler_prototypeAlias$$.$balanceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$balanceFormatter_$$($value$$174$$, $rowSet$$17$$) {
  return this.$app_$.$formatCurrency$($value$$174$$ / 1E8, $rowSet$$17$$.Currency)
};
$JSCompiler_prototypeAlias$$.$onLedgerTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onLedgerTableRequestData_$$($e$$189_filters_param$$) {
  var $page$$13$$ = $e$$189_filters_param$$.options.Page, $limit$$13$$ = $e$$189_filters_param$$.options.Limit;
  $e$$189_filters_param$$ = $e$$189_filters_param$$.options.Filter;
  var $currency$$7$$, $filters$$ = [], $userID$$ = this.$app_$.$model_$.get("UserID"), $brokerID$$ = this.$app_$.$model_$.get("Broker").BrokerID;
  this.$app_$.$model_$.get("IsBroker") && ($brokerID$$ = $userID$$);
  $goog$isArrayLike$$($e$$189_filters_param$$) && $goog$array$forEach$$($e$$189_filters_param$$, function($filter$$10$$) {
    try {
      var $filter_obj$$ = $goog$json$parse$$($filter$$10$$);
      $filter_obj$$.currency != $JSCompiler_alias_NULL$$ && ($currency$$7$$ = $filter_obj$$.currency);
      $filter_obj$$.broker_id != $JSCompiler_alias_NULL$$ && ($brokerID$$ = $filter_obj$$.broker_id)
    }catch($ex$$11$$) {
      $filters$$.push($filter$$10$$)
    }
  }, this);
  this.$app_$.$conn_$.$requestLedgerList$(this.$request_id_$, $page$$13$$, $limit$$13$$, $brokerID$$, $userID$$, $currency$$7$$, $filters$$)
};
$JSCompiler_prototypeAlias$$.$onLedgerListResponse_$ = function $$JSCompiler_prototypeAlias$$$$onLedgerListResponse_$$($e$$190_msg$$69$$) {
  this.$ledger_table_$ != $JSCompiler_alias_NULL$$ && ($e$$190_msg$$69$$ = $e$$190_msg$$69$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$ledger_table_$, $e$$190_msg$$69$$.LedgerListGrp, $e$$190_msg$$69$$.Columns))
};
// Input 154
// Input 155
function $goog$history$Event$$($token$$8$$, $isNavigation$$) {
  $goog$events$Event$$.call(this, "navigate");
  this.$token$ = $token$$8$$;
  this.$isNavigation$ = $isNavigation$$
}
$goog$inherits$$($goog$history$Event$$, $goog$events$Event$$);
// Input 156
function $goog$history$Html5History$$($opt_win$$, $opt_transformer$$) {
  $goog$Disposable$$.call(this);
  this.$window_$ = $opt_win$$ || window;
  this.$transformer_$ = $opt_transformer$$ || $JSCompiler_alias_NULL$$;
  $goog$events$listen$$(this.$window_$, "popstate", this.$onHistoryEvent_$, $JSCompiler_alias_FALSE$$, this);
  $goog$events$listen$$(this.$window_$, "hashchange", this.$onHistoryEvent_$, $JSCompiler_alias_FALSE$$, this)
}
$goog$inherits$$($goog$history$Html5History$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$history$Html5History$$.prototype;
$JSCompiler_prototypeAlias$$.$enabled_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$useFragment_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$pathPrefix_$ = "/";
$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enable$$17$$) {
  $enable$$17$$ != this.$enabled_$ && (this.$enabled_$ = $enable$$17$$) && this.dispatchEvent(new $goog$history$Event$$(this.$getToken$(), $JSCompiler_alias_FALSE$$))
};
$JSCompiler_prototypeAlias$$.$getToken$ = function $$JSCompiler_prototypeAlias$$$$getToken$$() {
  if(this.$useFragment_$) {
    var $loc$$ = this.$window_$.location.href, $index$$84$$ = $loc$$.indexOf("#");
    return 0 > $index$$84$$ ? "" : $loc$$.substring($index$$84$$ + 1)
  }
  return this.$transformer_$ ? this.$transformer_$.$retrieveToken$(this.$pathPrefix_$, this.$window_$.location) : this.$window_$.location.pathname.substr(this.$pathPrefix_$.length)
};
function $JSCompiler_StaticMethods_setToken$$($JSCompiler_StaticMethods_setToken$self$$, $token$$9$$) {
  $token$$9$$ != $JSCompiler_StaticMethods_setToken$self$$.$getToken$() && ($JSCompiler_StaticMethods_setToken$self$$.$window_$.history.pushState($JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_setToken$self$$.$window_$.document.title || "", $JSCompiler_StaticMethods_setToken$self$$.$useFragment_$ ? "#" + $token$$9$$ : $JSCompiler_StaticMethods_setToken$self$$.$transformer_$ ? $JSCompiler_StaticMethods_setToken$self$$.$transformer_$.$createUrl$($token$$9$$, $JSCompiler_StaticMethods_setToken$self$$.$pathPrefix_$, 
  $JSCompiler_StaticMethods_setToken$self$$.$window_$.location) : $JSCompiler_StaticMethods_setToken$self$$.$pathPrefix_$ + $token$$9$$ + $JSCompiler_StaticMethods_setToken$self$$.$window_$.location.search), $JSCompiler_StaticMethods_setToken$self$$.dispatchEvent(new $goog$history$Event$$($token$$9$$, $JSCompiler_alias_FALSE$$)))
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$unlisten$$(this.$window_$, "popstate", this.$onHistoryEvent_$, $JSCompiler_alias_FALSE$$, this);
  this.$useFragment_$ && $goog$events$unlisten$$(this.$window_$, "hashchange", this.$onHistoryEvent_$, $JSCompiler_alias_FALSE$$, this)
};
$JSCompiler_prototypeAlias$$.$onHistoryEvent_$ = function $$JSCompiler_prototypeAlias$$$$onHistoryEvent_$$() {
  this.$enabled_$ && this.dispatchEvent(new $goog$history$Event$$(this.$getToken$(), $JSCompiler_alias_TRUE$$))
};
// Input 157
function $bitex$app$UrlRouter$$($app$$17$$, $baseUrl$$, $defaultView$$) {
  this.$urls_$ = [];
  this.$app_$ = $app$$17$$;
  this.$history_$ = $JSCompiler_alias_NULL$$;
  this.$base_url_$ = $baseUrl$$;
  this.$default_view_$ = $defaultView$$
}
$goog$inherits$$($bitex$app$UrlRouter$$, $goog$events$EventTarget$$);
function $JSCompiler_StaticMethods_addView$$($JSCompiler_StaticMethods_addView$self$$, $view_name$$, $viewObject$$) {
  $JSCompiler_StaticMethods_addView$self$$.$urls_$.push({$re$:$view_name$$, view:$viewObject$$})
}
function $JSCompiler_StaticMethods_setViewInternal$$($JSCompiler_StaticMethods_setViewInternal$self$$, $view_name$$1$$) {
  var $actual_view_name$$ = $goog$string$remove$$($view_name$$1$$, $JSCompiler_StaticMethods_setViewInternal$self$$.$base_url_$);
  "" === $actual_view_name$$ && ($actual_view_name$$ = $JSCompiler_StaticMethods_setViewInternal$self$$.$default_view_$);
  var $urlMapping$$ = $goog$array$find$$($JSCompiler_StaticMethods_setViewInternal$self$$.$urls_$, function($url_object$$) {
    if(RegExp($url_object$$.$re$, "g").exec($actual_view_name$$) != $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_TRUE$$
    }
  });
  if($urlMapping$$ == $JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_setViewInternal$self$$.$current_view_$ === $actual_view_name$$) {
    return $JSCompiler_alias_FALSE$$
  }
  $JSCompiler_StaticMethods_setViewInternal$self$$.$activeViewInfo_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setViewInternal$self$$.$activeViewInfo_$.view.$exitView$();
  var $args$$13$$ = RegExp($urlMapping$$.$re$, "g").exec($actual_view_name$$).splice(2);
  $JSCompiler_StaticMethods_setViewInternal$self$$.$current_view_$ = $actual_view_name$$;
  $JSCompiler_StaticMethods_setViewInternal$self$$.$activeViewInfo_$ = $urlMapping$$;
  $JSCompiler_StaticMethods_setViewInternal$self$$.$activeViewInfo_$.view.$enterView$($args$$13$$);
  return $JSCompiler_alias_TRUE$$
}
$bitex$app$UrlRouter$$.prototype.$setView$ = function $$bitex$app$UrlRouter$$$$$setView$$($view_name$$2$$) {
  var $urlMapping$$1_view_url$$1$$ = $goog$array$find$$(this.$urls_$, function($url_object$$1$$) {
    if(RegExp($url_object$$1$$.$re$, "g").exec($view_name$$2$$) != $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_TRUE$$
    }
  });
  if("/" === $view_name$$2$$[0] && $urlMapping$$1_view_url$$1$$ == $JSCompiler_alias_NULL$$) {
    this.$setView$($view_name$$2$$.substr(1))
  }else {
    var $actual_view_name$$1_view_id$$1$$ = $goog$string$remove$$($view_name$$2$$, this.$base_url_$), $view_args_view_data$$1$$ = RegExp($urlMapping$$1_view_url$$1$$.$re$, "g").exec($actual_view_name$$1_view_id$$1$$), $urlMapping$$1_view_url$$1$$ = $view_args_view_data$$1$$[0], $actual_view_name$$1_view_id$$1$$ = $view_args_view_data$$1$$[1], $view_args_view_data$$1$$ = $view_args_view_data$$1$$.splice(2);
    this.dispatchEvent(new $bitex$app$UrlRouterEvent$$("set_view", $actual_view_name$$1_view_id$$1$$, $view_args_view_data$$1$$, $urlMapping$$1_view_url$$1$$)) && $JSCompiler_StaticMethods_setViewInternal$$(this, $view_name$$2$$) && this.$history_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setToken$$(this.$history_$, this.$base_url_$ + $view_name$$2$$)
  }
};
$bitex$app$UrlRouter$$.prototype.init = function $$bitex$app$UrlRouter$$$$init$() {
  var $JSCompiler_StaticMethods_setUseFragment$self$$inline_966$$ = this.$history_$ = new $goog$history$Html5History$$;
  $JSCompiler_StaticMethods_setUseFragment$self$$inline_966$$.$useFragment_$ != $JSCompiler_alias_FALSE$$ && ($goog$events$unlisten$$($JSCompiler_StaticMethods_setUseFragment$self$$inline_966$$.$window_$, "hashchange", $JSCompiler_StaticMethods_setUseFragment$self$$inline_966$$.$onHistoryEvent_$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_setUseFragment$self$$inline_966$$), $JSCompiler_StaticMethods_setUseFragment$self$$inline_966$$.$useFragment_$ = $JSCompiler_alias_FALSE$$);
  this.$history_$.addEventListener("navigate", this.$onNavigate_$, $JSCompiler_alias_VOID$$, this);
  this.$history_$.$setEnabled$($JSCompiler_alias_TRUE$$)
};
$bitex$app$UrlRouter$$.prototype.$onNavigate_$ = function $$bitex$app$UrlRouter$$$$$onNavigate_$$($e$$192_view_name$$3$$) {
  $e$$192_view_name$$3$$.$isNavigation$ && ($e$$192_view_name$$3$$ = $e$$192_view_name$$3$$.$token$, this.dispatchEvent(new $bitex$app$UrlRouterEvent$$("set_view", $e$$192_view_name$$3$$)) && $JSCompiler_StaticMethods_setViewInternal$$(this, $e$$192_view_name$$3$$))
};
function $bitex$app$UrlRouterEvent$$($type$$108$$, $view_id$$2$$, $view_args$$1$$, $view_url$$2$$) {
  $goog$events$Event$$.call(this, $type$$108$$);
  this.$view_id$ = $view_id$$2$$;
  this.$view_args$ = $view_args$$1$$;
  this.$view_url$ = $view_url$$2$$
}
$goog$inherits$$($bitex$app$UrlRouterEvent$$, $goog$events$Event$$);
// Input 158
function $bitex$view$VerificationView$$($app$$18$$, $opt_domHelper$$41$$) {
  $bitex$view$View$$.call(this, $app$$18$$, $opt_domHelper$$41$$);
  this.$loaded_jot_form_$ = $JSCompiler_alias_FALSE$$
}
$goog$inherits$$($bitex$view$VerificationView$$, $bitex$view$View$$);
$bitex$view$VerificationView$$.prototype.$enterView$ = function $$bitex$view$VerificationView$$$$$enterView$$() {
  $bitex$view$VerificationView$$.$superClass_$.$enterView$.call(this);
  if(!this.$loaded_jot_form_$) {
    var $form_src_model$$28$$ = this.$app_$.$model_$, $broker$$10_verificationIFrameForm_verification_form_url$$ = $form_src_model$$28$$.get("Broker");
    $broker$$10_verificationIFrameForm_verification_form_url$$ != $JSCompiler_alias_NULL$$ && ($broker$$10_verificationIFrameForm_verification_form_url$$ = $broker$$10_verificationIFrameForm_verification_form_url$$.VerificationForm, $broker$$10_verificationIFrameForm_verification_form_url$$ = $broker$$10_verificationIFrameForm_verification_form_url$$.replace("{{UserID}}", $form_src_model$$28$$.get("UserID")), $broker$$10_verificationIFrameForm_verification_form_url$$ = $broker$$10_verificationIFrameForm_verification_form_url$$.replace("{{Username}}", 
    $form_src_model$$28$$.get("Username")), $broker$$10_verificationIFrameForm_verification_form_url$$ = $broker$$10_verificationIFrameForm_verification_form_url$$.replace("{{BrokerID}}", $form_src_model$$28$$.get("Broker").BrokerID), $broker$$10_verificationIFrameForm_verification_form_url$$ = $broker$$10_verificationIFrameForm_verification_form_url$$.replace("{{BrokerUsername}}", $form_src_model$$28$$.get("Broker").ShortName), $form_src_model$$28$$ = $broker$$10_verificationIFrameForm_verification_form_url$$ = 
    $broker$$10_verificationIFrameForm_verification_form_url$$.replace("{{Email}}", $form_src_model$$28$$.get("Email")), $broker$$10_verificationIFrameForm_verification_form_url$$ = $goog$dom$getElement$$("JotFormIFrame"), $broker$$10_verificationIFrameForm_verification_form_url$$.src !== $form_src_model$$28$$ && ($broker$$10_verificationIFrameForm_verification_form_url$$.src = $form_src_model$$28$$, this.$loaded_jot_form_$ = $JSCompiler_alias_TRUE$$))
  }
};
$bitex$view$VerificationView$$.prototype.$enterDocument$ = function $$bitex$view$VerificationView$$$$$enterDocument$$() {
  $bitex$view$VerificationView$$.$superClass_$.$enterDocument$.call(this)
};
// Input 159
function $bitex$view$SideBarView$$($app$$19$$, $opt_domHelper$$42$$) {
  $bitex$view$View$$.call(this, $app$$19$$, $opt_domHelper$$42$$)
}
$goog$inherits$$($bitex$view$SideBarView$$, $bitex$view$View$$);
$bitex$view$SideBarView$$.prototype.$onSelectedBroker_$ = function $$bitex$view$SideBarView$$$$$onSelectedBroker_$$() {
  var $element$$192_selectedBrokerID$$ = this.$app_$.$model_$.get("SelectedBrokerID");
  if($element$$192_selectedBrokerID$$ != $JSCompiler_alias_NULL$$) {
    var $element$$192_selectedBrokerID$$ = $goog$dom$getElement$$("id_account_summary_" + $element$$192_selectedBrokerID$$), $broker_elements$$ = $goog$dom$getElementsByClass$$("account-summary-broker");
    $broker_elements$$ != $JSCompiler_alias_NULL$$ && $goog$array$forEach$$($broker_elements$$, function($broker_element$$) {
      $goog$dom$classes$remove$$($broker_element$$, "account-summary-broker-selected")
    }, this);
    $element$$192_selectedBrokerID$$ != $JSCompiler_alias_NULL$$ && $goog$dom$classes$add$$($element$$192_selectedBrokerID$$, "account-summary-broker-selected")
  }
};
$bitex$view$SideBarView$$.prototype.$enterDocument$ = function $$bitex$view$SideBarView$$$$$enterDocument$$() {
  $bitex$view$SideBarView$$.$superClass_$.$enterDocument$.call(this);
  var $handler$$89$$ = this.$getHandler$(), $model$$30$$ = this.$app_$.$model_$;
  $JSCompiler_StaticMethods_listen$$($handler$$89$$, $model$$30$$, "model_setSelectedBrokerID", this.$onSelectedBroker_$);
  $JSCompiler_StaticMethods_listen$$($handler$$89$$, $model$$30$$, "model_setBrokerCurrencies", function() {
    $goog$dom$removeChildren$$($goog$dom$getElement$$("id_account_summary_content"));
    var $accounts$$ = [];
    $accounts$$.push({brokerID:$model$$30$$.get("Broker").BrokerID, brokerName:$model$$30$$.get("Broker").ShortName, clientID:$model$$30$$.get("UserID"), currencies:[]});
    $goog$array$forEach$$($model$$30$$.get("Broker").BrokerCurrencies, function($currency$$8$$) {
      $accounts$$[0].currencies.push({currency:$currency$$8$$, balance:0, formattedBalance:this.$app_$.$formatCurrency$(0, $currency$$8$$, $JSCompiler_alias_TRUE$$), showDeposit:$JSCompiler_alias_TRUE$$, showWithdraw:$JSCompiler_alias_TRUE$$})
    }, this);
    $model$$30$$.get("IsBroker") && ($accounts$$.push({brokerID:$model$$30$$.get("Profile").BrokerID, brokerName:"Mis clientes", clientID:$model$$30$$.get("UserID"), currencies:[]}), $goog$array$forEach$$($model$$30$$.get("Profile").BrokerCurrencies, function($currency$$9$$) {
      $accounts$$[1].currencies.push({currency:$currency$$9$$, balance:0, formattedBalance:this.$app_$.$formatCurrency$(0, $currency$$9$$, $JSCompiler_alias_TRUE$$), showDeposit:$JSCompiler_alias_FALSE$$, showWithdraw:$JSCompiler_alias_FALSE$$})
    }, this));
    $goog$soy$renderElement$$($goog$dom$getElement$$("id_account_summary_content"), $bitex$templates$YourAccountSummary$$, {$accounts$:$accounts$$});
    this.$onSelectedBroker_$()
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$89$$, $model$$30$$, "model_setSecurityList", function() {
    var $msg$$70$$ = $model$$30$$.get("SecurityList");
    $goog$dom$removeChildren$$($goog$dom$getElement$$("id_instrument_1"));
    $goog$array$forEach$$($msg$$70$$.Instruments, function($el$$100_instrument$$1$$) {
      $el$$100_instrument$$1$$ = $goog$dom$createDom$$("option", {value:$el$$100_instrument$$1$$.Symbol}, $el$$100_instrument$$1$$.Description);
      $goog$dom$getElement$$("id_instrument_1").appendChild($el$$100_instrument$$1$$)
    }, this)
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$89$$, $model$$30$$, "model_setAllowedMarkets", function() {
    var $allowed_markets$$1_allowed_markets_array$$ = $model$$30$$.get("AllowedMarkets"), $allowed_markets$$1_allowed_markets_array$$ = $goog$object$getKeys$$($allowed_markets$$1_allowed_markets_array$$);
    0 < $allowed_markets$$1_allowed_markets_array$$.length && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_instrument_1"), $allowed_markets$$1_allowed_markets_array$$[0]), this.dispatchEvent("changed_market"))
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$89$$, $goog$dom$getElement$$("id_instrument_1"), "change", function() {
    this.dispatchEvent("changed_market")
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$89$$, this.$getElement$(), "click", function($e$$198$$) {
    "withdraw" === $e$$198$$.target.getAttribute("data-action") ? (this.$currency_$ = $e$$198$$.target.getAttribute("data-currency"), this.dispatchEvent("request_withdraw")) : "deposit" === $e$$198$$.target.getAttribute("data-action") && (this.$currency_$ = $e$$198$$.target.getAttribute("data-currency"), this.dispatchEvent("request_deposit"))
  }, this)
};
$bitex$view$SideBarView$$.prototype.$getSymbol$ = function $$bitex$view$SideBarView$$$$$getSymbol$$() {
  return $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_instrument_1"))
};
// Input 160
function $bitex$ui$market_view_table$templates$MarketViewTable$$($instList30_opt_data$$43$$) {
  var $output$$38$$;
  $output$$38$$ = "" + ('<div class="row-fluid"><div class="span12"><table id="' + $soy$$0$0escapeHtml$$($instList30_opt_data$$43$$.id) + '_table" class="table table-bordered table-condensed"><thead><tr><th> Pareja</th><th> Ultimo </th><th> Bid </th><th> Ask </th><th> Volumen (BTC) </th><th> Volumen </th><th> Alto </th><th> Bajo </th></tr></thead><tbody>');
  $instList30_opt_data$$43$$ = $instList30_opt_data$$43$$.$instruments$;
  for(var $instListLen30$$ = $instList30_opt_data$$43$$.length, $instIndex30$$ = 0;$instIndex30$$ < $instListLen30$$;$instIndex30$$++) {
    var $instData30$$ = $instList30_opt_data$$43$$[$instIndex30$$];
    $output$$38$$ += '<tr data-symbol="' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '" ><td>' + $soy$$0$0escapeHtml$$($instData30$$.Description) + ' </td><td><span class="bitex-model" data-model-key="formatted_last_price_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_bid_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_ask_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + 
    '"></span></td><td><span class="bitex-model" data-model-key="formatted_volume_sell_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_volume_buy_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_max_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_min_' + $soy$$0$0escapeHtml$$($instData30$$.Symbol) + 
    '"></span></td></tr>'
  }
  return $output$$38$$ + "</tbody></table></div></div>"
}
;
// Input 161
function $bitex$ui$MarketViewTable$$($opt_domHelper$$43$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$43$$)
}
$goog$inherits$$($bitex$ui$MarketViewTable$$, $goog$ui$Component$$);
$bitex$ui$MarketViewTable$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("market-view-table");
$bitex$ui$MarketViewTable$$.prototype.$createDom$ = function $$bitex$ui$MarketViewTable$$$$$createDom$$() {
  this.$getDomHelper$();
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$market_view_table$templates$MarketViewTable$$, {id:$JSCompiler_StaticMethods_makeId$$(this, "form"), $instruments$:this.$model_$.$instruments$})
};
$bitex$ui$MarketViewTable$$.prototype.$enterDocument$ = function $$bitex$ui$MarketViewTable$$$$$enterDocument$$() {
  $bitex$ui$MarketViewTable$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_table")), "click", this.$onTableClick_$)
};
function $JSCompiler_StaticMethods_selectFirst$$($JSCompiler_StaticMethods_selectFirst$self$$) {
  var $first_tr_element_tbody$$ = $goog$dom$getElementsByTagNameAndClass$$("TBODY", $JSCompiler_alias_VOID$$, $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_selectFirst$self$$, "form_table")))[0], $first_tr_element_tbody$$ = $goog$dom$getFirstElementChild$$($first_tr_element_tbody$$);
  if($first_tr_element_tbody$$ != $JSCompiler_alias_NULL$$) {
    var $selected_tr_elements$$ = $goog$dom$getElementsByClass$$($JSCompiler_StaticMethods_selectFirst$self$$.$getCssClass$() + "-selected", $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_selectFirst$self$$, "form_table")));
    $goog$array$forEach$$($selected_tr_elements$$, function($selected_tr_el$$) {
      $goog$dom$classes$remove$$($selected_tr_el$$, this.$getCssClass$() + "-selected")
    }, $JSCompiler_StaticMethods_selectFirst$self$$);
    $goog$dom$classes$add$$($first_tr_element_tbody$$, $JSCompiler_StaticMethods_selectFirst$self$$.$getCssClass$() + "-selected");
    $JSCompiler_StaticMethods_selectFirst$self$$.dispatchEvent("select_symbol")
  }
}
$bitex$ui$MarketViewTable$$.prototype.$onTableClick_$ = function $$bitex$ui$MarketViewTable$$$$$onTableClick_$$($e$$200$$) {
  var $tr_el$$2$$ = $goog$dom$getAncestorByTagNameAndClass$$($e$$200$$.target, "TR");
  if($tr_el$$2$$ != $JSCompiler_alias_NULL$$ && !$goog$dom$classes$has$$($tr_el$$2$$, this.$getCssClass$() + "-selected")) {
    var $selected_tr_elements$$1$$ = $goog$dom$getElementsByClass$$(this.$getCssClass$() + "-selected", $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$(this, "form_table")));
    $goog$array$forEach$$($selected_tr_elements$$1$$, function($selected_tr_el$$1$$) {
      $goog$dom$classes$remove$$($selected_tr_el$$1$$, this.$getCssClass$() + "-selected")
    }, this);
    $goog$dom$classes$add$$($tr_el$$2$$, this.$getCssClass$() + "-selected");
    this.dispatchEvent("select_symbol");
    $e$$200$$.preventDefault();
    $e$$200$$.stopPropagation()
  }
};
// Input 162
function $bitex$ui$SimpleChart$templates$SimpleChart$$($opt_data$$44$$) {
  return'<iframe id="HighChartIFrame" allowtransparency="true" src="' + ($opt_data$$44$$.$symbol$ ? "/chart.html?s=" + $soy$$0$0escapeHtml$$($opt_data$$44$$.$symbol$) : "") + '" data-symbol="' + ($opt_data$$44$$.$symbol$ ? "/chart.html?s=" + $soy$$0$0escapeHtml$$($opt_data$$44$$.$symbol$) : "") + '" style="width: 100%; height: ' + ($opt_data$$44$$.height ? $soy$$0$0escapeHtml$$($opt_data$$44$$.height) : "400") + 'px" frameborder="0" scrolling="no"></iframe>'
}
;
// Input 163
function $bitex$ui$SimpleChart$$($opt_domHelper$$44$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$44$$)
}
$goog$inherits$$($bitex$ui$SimpleChart$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$SimpleChart$$.prototype;
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("simple-chart");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = $goog$soy$renderAsElement$$($bitex$ui$SimpleChart$templates$SimpleChart$$, {$symbol$:this.$model_$.$symbol$, height:this.$model_$.height})
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$193$$) {
  this.$element_$ = $element$$193$$;
  this.$model_$ = {$symbol$:this.$getElement$().getAttribute("data-symbol")}
};
$JSCompiler_prototypeAlias$$.$getSymbol$ = function $$JSCompiler_prototypeAlias$$$$getSymbol$$() {
  return this.$model_$.$symbol$
};
$JSCompiler_prototypeAlias$$.$setSymbol$ = function $$JSCompiler_prototypeAlias$$$$setSymbol$$($symbol$$10$$) {
  this.$model_$.$symbol$ = $symbol$$10$$;
  this.$getElement$().src = "/chart.html?s=" + $symbol$$10$$;
  this.$getElement$().setAttribute("data-symbol", $symbol$$10$$)
};
// Input 164
function $bitex$ui$TradeHistory$$($opt_domHelper$$45$$) {
  this.$selected_trade_$ = $JSCompiler_alias_NULL$$;
  $bitex$ui$DataGrid$$.call(this, {title:"Ultimas transacciones", rowIDFn:this.$getRowId$, rowClassFn:this.$getRowClass$, columns:[{property:"Market", label:"Mercado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$51$$) {
    size_currency = $s$$51$$.substring(0, 3);
    price_currency = $s$$51$$.substring(3);
    return size_currency + " / " + price_currency
  }, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-market"
  }}, {property:"Side", label:"Lado", sortable:$JSCompiler_alias_FALSE$$, formatter:function($s$$52$$) {
    switch($s$$52$$) {
      case "1":
        return"Comprar";
      case "2":
        return"Vender"
    }
    return""
  }, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-side"
  }}, {property:"Price", label:"Precio", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$175$$) {
    return($value$$175$$ / 1E8).toFixed(8)
  }, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-price"
  }}, {property:"Size", label:"Tama\u00f1o", sortable:$JSCompiler_alias_FALSE$$, formatter:function($value$$176$$) {
    return($value$$176$$ / 1E8).toFixed(8)
  }, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-size"
  }}, {property:"Buyer", label:"Comprador", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-buyer"
  }}, {property:"Seller", label:"Vendedor", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-seller"
  }}, {property:"Created", label:"Fecha/Hora", sortable:$JSCompiler_alias_FALSE$$, classes:function() {
    return $bitex$ui$TradeHistory$CSS_CLASS$$ + "-created"
  }}], show_search:$JSCompiler_alias_FALSE$$}, $opt_domHelper$$45$$)
}
$goog$inherits$$($bitex$ui$TradeHistory$$, $bitex$ui$DataGrid$$);
var $bitex$ui$TradeHistory$CSS_CLASS$$ = "trade-history";
$bitex$ui$TradeHistory$$.prototype.$getRowId$ = function $$bitex$ui$TradeHistory$$$$$getRowId$$($row_set$$12$$) {
  return $JSCompiler_StaticMethods_makeId$$(this, $row_set$$12$$.TradeID)
};
$bitex$ui$TradeHistory$$.prototype.$getRowClass$ = function $$bitex$ui$TradeHistory$$$$$getRowClass$$($row_set$$13$$) {
  var $class_status$$6$$;
  switch($row_set$$13$$.Status) {
    case "0":
      $class_status$$6$$ = $bitex$ui$TradeHistory$CSS_CLASS$$ + "-unconfirmed";
      break;
    case "1":
      $class_status$$6$$ = $bitex$ui$TradeHistory$CSS_CLASS$$ + "-pending";
      break;
    case "2":
      $class_status$$6$$ = $bitex$ui$TradeHistory$CSS_CLASS$$ + "-processing";
      break;
    case "4":
      $class_status$$6$$ = $bitex$ui$TradeHistory$CSS_CLASS$$ + "-complete";
      break;
    case "8":
      $class_status$$6$$ = $bitex$ui$TradeHistory$CSS_CLASS$$ + "-cancelled"
  }
  return $class_status$$6$$
};
$goog$ui$registry$setDecoratorByClassName$$($bitex$ui$TradeHistory$CSS_CLASS$$, function() {
  return new $bitex$ui$TradeHistory$$
});
// Input 165
function $bitex$view$MarketView$$($app$$20$$, $opt_domHelper$$46$$) {
  $bitex$view$View$$.call(this, $app$$20$$, $opt_domHelper$$46$$);
  this.$market_data_subscription_symbol_$ = this.$market_data_subscription_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$MarketView$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$MarketView$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$() {
  $bitex$view$MarketView$$.$superClass_$.$enterView$.call(this);
  this.$recreateComponents_$()
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$MarketView$$.$superClass_$.$exitView$.call(this);
  this.$destroyComponents_$()
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$MarketView$$.$superClass_$.$enterDocument$.call(this)
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$() {
  var $handler$$91$$ = this.$getHandler$(), $model$$31$$ = this.$app_$.$model_$, $conn$$11$$ = this.$app_$.$conn_$;
  this.$destroyComponents_$();
  this.$market_data_subscription_id_$ = parseInt(1E7 * Math.random(), 10);
  this.$market_data_subscription_symbol_$ = [];
  $goog$array$forEach$$(app.$model_$.get("SecurityList").Instruments, function($instrument_info$$) {
    this.$market_data_subscription_symbol_$.push($instrument_info$$.Symbol)
  }, this);
  this.$market_view_table_$ = new $bitex$ui$MarketViewTable$$;
  $JSCompiler_StaticMethods_setModel$$(this.$market_view_table_$, {id:"market_view", $instruments$:$model$$31$$.get("SecurityList").Instruments});
  $JSCompiler_StaticMethods_addChild$$(this, this.$market_view_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_updateDom$$();
  this.$simple_chart_$ = new $bitex$ui$SimpleChart$$;
  $JSCompiler_StaticMethods_setModel$$(this.$simple_chart_$, {$symbol$:$model$$31$$.get("SecurityList").Instruments[0].Symbol});
  $JSCompiler_StaticMethods_addChild$$(this, this.$simple_chart_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_listen$$($handler$$91$$, this.$market_view_table_$, "select_symbol", this.$onSelectedSymbol_$);
  this.$last_trades_table_$ = new $bitex$ui$TradeHistory$$;
  $JSCompiler_StaticMethods_listen$$($handler$$91$$, this.$last_trades_table_$, "request_data", this.$onTradeHistoryTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$91$$, this.$app_$.$conn_$, "trade_history_response." + this.$market_data_subscription_id_$, this.$onTradeHistoryReponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$91$$, $conn$$11$$, "md_status." + this.$market_data_subscription_id_$, this.$onBitexTradingSessionStatus_$);
  $JSCompiler_StaticMethods_listen$$($handler$$91$$, $conn$$11$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onBitexOrderBookNewOrder_$);
  $JSCompiler_StaticMethods_listen$$($handler$$91$$, $conn$$11$$, "trade." + this.$market_data_subscription_id_$, this.$onBitexTrade_$);
  $JSCompiler_StaticMethods_listen$$($handler$$91$$, $conn$$11$$, "security_status." + this.$market_data_subscription_id_$, this.$onBitexSecurityStatus_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$last_trades_table_$, $JSCompiler_alias_TRUE$$);
  this.dispatchEvent("md_subscribe");
  this.dispatchEvent("sec_subscribe");
  $JSCompiler_StaticMethods_selectFirst$$(this.$market_view_table_$)
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$() {
  var $handler$$92$$ = this.$getHandler$();
  this.$market_view_table_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_unlisten$$($handler$$92$$, this.$market_view_table_$, "select_symbol", this.$onSelectedSymbol_$);
  this.$last_trades_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$92$$, this.$last_trades_table_$, "request_data", this.$onTradeHistoryTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$92$$, this.$app_$.$conn_$, "trade_history_response." + this.$market_data_subscription_id_$, this.$onTradeHistoryReponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$92$$, this.$last_trades_table_$.$getElement$(), "click", this.$onTradeHistoryTableClick_$));
  if(this.$market_data_subscription_id_$ != $JSCompiler_alias_NULL$$) {
    var $conn$$12$$ = this.$app_$.$conn_$;
    $JSCompiler_StaticMethods_unlisten$$($handler$$92$$, $conn$$12$$, "md_status." + this.$market_data_subscription_id_$, this.$onBitexTradingSessionStatus_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$92$$, $conn$$12$$, $bitex$api$BitEx$EventType$ORDER_BOOK_NEW_ORDER$$ + "." + this.$market_data_subscription_id_$, this.$onBitexOrderBookNewOrder_$);
    $JSCompiler_StaticMethods_unlisten$$($handler$$92$$, $conn$$12$$, "trade." + this.$market_data_subscription_id_$, this.$onBitexTrade_$);
    this.dispatchEvent("md_unsubscribe");
    this.dispatchEvent("sec_unsubscribe")
  }
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$market_data_subscription_symbol_$ = this.$market_data_subscription_id_$ = this.$simple_chart_$ = this.$last_trades_table_$ = this.$market_view_table_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$onSelectedSymbol_$ = function $$JSCompiler_prototypeAlias$$$$onSelectedSymbol_$$($JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_984_e$$201_selected_tr_el$$inline_985_symbol$$11$$) {
  $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_984_e$$201_selected_tr_el$$inline_985_symbol$$11$$ = $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_984_e$$201_selected_tr_el$$inline_985_symbol$$11$$.target;
  $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_984_e$$201_selected_tr_el$$inline_985_symbol$$11$$ = $goog$dom$getElementByClass$$($JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_984_e$$201_selected_tr_el$$inline_985_symbol$$11$$.$getCssClass$() + "-selected", $goog$dom$getElement$$($JSCompiler_StaticMethods_makeId$$($JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_984_e$$201_selected_tr_el$$inline_985_symbol$$11$$, "form_table")));
  $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_984_e$$201_selected_tr_el$$inline_985_symbol$$11$$ = $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_984_e$$201_selected_tr_el$$inline_985_symbol$$11$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_984_e$$201_selected_tr_el$$inline_985_symbol$$11$$.getAttribute("data-symbol") : $JSCompiler_alias_VOID$$;
  this.$simple_chart_$.$setSymbol$($JSCompiler_StaticMethods_getSelectedSymbol$self$$inline_984_e$$201_selected_tr_el$$inline_985_symbol$$11$$)
};
$JSCompiler_prototypeAlias$$.$onTradeHistoryTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onTradeHistoryTableRequestData_$$($e$$202_msg$$inline_994$$) {
  var $JSCompiler_StaticMethods_requestTradeHistory$self$$inline_987$$ = this.$app_$.$conn_$, $opt_filter$$inline_991$$ = $e$$202_msg$$inline_994$$.options.Filter;
  $e$$202_msg$$inline_994$$ = {MsgType:"U32", TradeHistoryReqID:this.$market_data_subscription_id_$ || parseInt(1E7 * Math.random(), 10), Page:$e$$202_msg$$inline_994$$.options.Page || 0, PageSize:$e$$202_msg$$inline_994$$.options.Limit || 100};
  $opt_filter$$inline_991$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$inline_991$$.length && ($e$$202_msg$$inline_994$$.Filter = $opt_filter$$inline_991$$);
  $JSCompiler_StaticMethods_requestTradeHistory$self$$inline_987$$.sendMessage($e$$202_msg$$inline_994$$)
};
$JSCompiler_prototypeAlias$$.$onBitexSecurityStatus_$ = function $$JSCompiler_prototypeAlias$$$$onBitexSecurityStatus_$$($e$$203_msg$$71$$) {
  if(this.$market_view_table_$ != $JSCompiler_alias_NULL$$) {
    $e$$203_msg$$71$$ = $e$$203_msg$$71$$.data;
    var $model$$32$$ = this.$app_$.$model_$, $currency$$10$$ = $e$$203_msg$$71$$.Symbol.substr(3), $crypto_currency$$ = $e$$203_msg$$71$$.Symbol.substr(0, 3);
    $model$$32$$.set("formatted_volume_buy_" + $e$$203_msg$$71$$.Symbol, this.$app_$.$formatCurrency$($e$$203_msg$$71$$.BuyVolume / 1E8, $currency$$10$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$32$$.set("formatted_volume_sell_" + $e$$203_msg$$71$$.Symbol, this.$app_$.$formatCurrency$($e$$203_msg$$71$$.SellVolume / 1E8, $crypto_currency$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$32$$.set("formatted_min_" + $e$$203_msg$$71$$.Symbol, this.$app_$.$formatCurrency$($e$$203_msg$$71$$.LowPx / 1E8, $currency$$10$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$32$$.set("formatted_max_" + $e$$203_msg$$71$$.Symbol, this.$app_$.$formatCurrency$($e$$203_msg$$71$$.HighPx / 1E8, $currency$$10$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$32$$.set("formatted_last_price_" + $e$$203_msg$$71$$.Symbol, this.$app_$.$formatCurrency$($e$$203_msg$$71$$.LastPx / 1E8, $currency$$10$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$32$$.set("formatted_bid_" + $e$$203_msg$$71$$.Symbol, this.$app_$.$formatCurrency$($e$$203_msg$$71$$.BestBid / 1E8, $currency$$10$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    $model$$32$$.set("formatted_ask_" + $e$$203_msg$$71$$.Symbol, this.$app_$.$formatCurrency$($e$$203_msg$$71$$.BestAsk / 1E8, $currency$$10$$, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$)
  }
};
$JSCompiler_prototypeAlias$$.$onBitexTrade_$ = function $$JSCompiler_prototypeAlias$$$$onBitexTrade_$$($e$$204_msg$$72$$) {
  if(this.$last_trades_table_$ != $JSCompiler_alias_NULL$$) {
    $e$$204_msg$$72$$ = $e$$204_msg$$72$$.data;
    var $record$$1$$ = [];
    $record$$1$$.TradeID = $e$$204_msg$$72$$.TradeID;
    $record$$1$$.Market = $e$$204_msg$$72$$.Symbol;
    $record$$1$$.Size = $e$$204_msg$$72$$.MDEntrySize;
    $record$$1$$.Price = $e$$204_msg$$72$$.MDEntryPx;
    $record$$1$$.Side = $e$$204_msg$$72$$.Side;
    $record$$1$$.Buyer = $e$$204_msg$$72$$.MDEntryBuyer;
    $record$$1$$.Seller = $e$$204_msg$$72$$.MDEntrySeller;
    $record$$1$$.Created = $e$$204_msg$$72$$.MDEntryDate + " " + $e$$204_msg$$72$$.MDEntryTime;
    $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$last_trades_table_$, $record$$1$$)
  }
};
$JSCompiler_prototypeAlias$$.$onTradeHistoryReponse_$ = function $$JSCompiler_prototypeAlias$$$$onTradeHistoryReponse_$$($e$$205_msg$$73$$) {
  this.$last_trades_table_$ != $JSCompiler_alias_NULL$$ && ($e$$205_msg$$73$$ = $e$$205_msg$$73$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$last_trades_table_$, $e$$205_msg$$73$$.TradeHistoryGrp, $e$$205_msg$$73$$.Columns))
};
$JSCompiler_prototypeAlias$$.$onBitexOrderBookNewOrder_$ = function $$JSCompiler_prototypeAlias$$$$onBitexOrderBookNewOrder_$$($e$$206_index$$85$$) {
  var $currency$$11_msg$$74$$ = $e$$206_index$$85$$.data;
  $e$$206_index$$85$$ = $currency$$11_msg$$74$$.MDEntryPositionNo - 1;
  var $price$$8$$ = $currency$$11_msg$$74$$.MDEntryPx / 1E8, $side$$15$$ = $currency$$11_msg$$74$$.MDEntryType, $currency$$11_msg$$74$$ = $currency$$11_msg$$74$$.Symbol.substr(3, 3);
  "0" == $side$$15$$ ? 0 === $e$$206_index$$85$$ && this.$app_$.$model_$.set("formatted_best_bid_" + $currency$$11_msg$$74$$.toLowerCase(), this.$app_$.$formatCurrency$($price$$8$$, $currency$$11_msg$$74$$)) : "1" == $side$$15$$ && 0 === $e$$206_index$$85$$ && this.$app_$.$model_$.set("formatted_best_offer_" + $currency$$11_msg$$74$$.toLowerCase(), this.$app_$.$formatCurrency$($price$$8$$, $currency$$11_msg$$74$$))
};
$JSCompiler_prototypeAlias$$.$onBitexTradingSessionStatus_$ = function $$JSCompiler_prototypeAlias$$$$onBitexTradingSessionStatus_$$($e$$207$$) {
  try {
    var $msg$$75$$ = $e$$207$$.data;
    delete $msg$$75$$.MDEntryType;
    delete $msg$$75$$.MDReqID;
    var $app$$21$$ = this.$app_$;
    $goog$object$forEach$$($msg$$75$$, function($volume$$, $currency$$12$$) {
      $volume$$ /= 1E8;
      var $volume_key$$ = "volume_" + $currency$$12$$.toLowerCase();
      $app$$21$$.$model_$.set($volume_key$$, $volume$$);
      $app$$21$$.$model_$.set("formatted_" + $volume_key$$, $app$$21$$.$formatCurrency$($volume$$, $currency$$12$$))
    })
  }catch($str$$107$$) {
  }
};
$JSCompiler_prototypeAlias$$.$onTradeHistoryTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onTradeHistoryTableClick_$$($e$$208$$) {
  var $element$$194$$ = $e$$208$$.target;
  "I" === $element$$194$$.tagName && ($element$$194$$ = $goog$dom$getParentElement$$($element$$194$$));
  var $data_action$$2$$ = $element$$194$$.getAttribute("data-action");
  $data_action$$2$$ != $JSCompiler_alias_NULL$$ && ($e$$208$$.preventDefault(), $e$$208$$.stopPropagation(), this.$action_$ = $data_action$$2$$, this.$data_$ = $goog$json$parse$$($element$$194$$.getAttribute("data-row")))
};
$JSCompiler_prototypeAlias$$.$getMDInstruments$ = $JSCompiler_get$$("$market_data_subscription_symbol_$");
$JSCompiler_prototypeAlias$$.$getMDMarketDepth$ = $JSCompiler_returnArg$$(1);
$JSCompiler_prototypeAlias$$.$getMDEntries$ = function $$JSCompiler_prototypeAlias$$$$getMDEntries$$() {
  return["2"]
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $bitex$view$MarketView$$.$superClass_$.$exitDocument$.call(this);
  this.$destroyComponents_$()
};
// Input 166
// Input 167
// Input 168
function $bootstrap$Alert$$($opt_type$$11$$, $opt_content$$, $opt_close$$, $opt_domHelper$$47$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$47$$);
  this.$type_$ = $opt_type$$11$$;
  this.$content_$ = $opt_content$$;
  this.$has_close_$ = $JSCompiler_alias_TRUE$$;
  $opt_close$$ != $JSCompiler_alias_NULL$$ && $opt_close$$ === $JSCompiler_alias_FALSE$$ && (this.$has_close_$ = $JSCompiler_alias_FALSE$$)
}
$goog$inherits$$($bootstrap$Alert$$, $goog$ui$Component$$);
$bootstrap$Alert$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("alert");
$bootstrap$Alert$$.prototype.$createDom$ = function $$bootstrap$Alert$$$$$createDom$$() {
  var $dom$$25_element$$195$$ = this.$getDomHelper$();
  return this.$element_$ = $dom$$25_element$$195$$ = this.$has_close_$ ? $dom$$25_element$$195$$.$createDom$("div", [this.$getCssClass$(), this.$getCssClass$() + "-" + this.$type_$], $dom$$25_element$$195$$.$createDom$("button", ["close", "pull-right"], "\u00d7"), this.$content_$) : $dom$$25_element$$195$$.$createDom$("div", [this.$getCssClass$(), this.$getCssClass$() + "-" + this.$type_$], this.$content_$)
};
$bootstrap$Alert$$.prototype.$logger_$ = $goog$debug$LogManager$getLogger$$("bootstrap.Alert");
$bootstrap$Alert$$.prototype.$enterDocument$ = function $$bootstrap$Alert$$$$$enterDocument$$() {
  $bootstrap$Alert$$.$superClass_$.$enterDocument$.call(this);
  var $closeBtn_dom$$26$$ = this.$getDomHelper$(), $handler$$93$$ = this.$getHandler$(), $closeBtn_dom$$26$$ = $closeBtn_dom$$26$$.$getElementByClass$("close", this.$getElement$());
  $closeBtn_dom$$26$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_listenOnce$$($handler$$93$$, $closeBtn_dom$$26$$, "click", function() {
    this.$dispose$()
  })
};
// Input 169
function $bitex$view$AccountOverview$$($app$$22$$, $opt_domHelper$$48$$) {
  $bitex$view$View$$.call(this, $app$$22$$, $opt_domHelper$$48$$);
  this.$verification_data_$ = this.$qr_data_verb_$ = this.$qr_data_$ = this.$deposit_data_$ = this.$deposit_action_$ = this.$withdraw_action_$ = this.$request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$view$AccountOverview$$, $bitex$view$View$$);
$JSCompiler_prototypeAlias$$ = $bitex$view$AccountOverview$$.prototype;
$JSCompiler_prototypeAlias$$.$enterView$ = function $$JSCompiler_prototypeAlias$$$$enterView$$($state$$21_username$$11$$) {
  $bitex$view$AccountOverview$$.$superClass_$.$enterView$.call(this);
  var $selectedCustomer$$ = this.$app_$.$model_$.get("SelectedCustomer");
  $selectedCustomer$$ != $JSCompiler_alias_NULL$$ && $selectedCustomer$$.Username == $state$$21_username$$11$$ && ($state$$21_username$$11$$ = $selectedCustomer$$.State, $state$$21_username$$11$$ == $JSCompiler_alias_NULL$$ && ($state$$21_username$$11$$ = this.$app_$.$model_$.get("Profile").State, $state$$21_username$$11$$ != $JSCompiler_alias_NULL$$ || ($state$$21_username$$11$$ = this.$app_$.$model_$.get("Broker").State)), $selectedCustomer$$.State = $state$$21_username$$11$$, this.$recreateComponents_$($selectedCustomer$$))
};
$JSCompiler_prototypeAlias$$.$exitView$ = function $$JSCompiler_prototypeAlias$$$$exitView$$() {
  $bitex$view$AccountOverview$$.$superClass_$.$exitView$.call(this);
  var $selectedCustomer$$1$$ = this.$app_$.$model_$.get("SelectedCustomer");
  this.$destroyComponents_$($selectedCustomer$$1$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$view$AccountOverview$$.$superClass_$.$enterDocument$.call(this);
  this.$getHandler$()
};
$JSCompiler_prototypeAlias$$.$destroyComponents_$ = function $$JSCompiler_prototypeAlias$$$$destroyComponents_$$($account_overview_header_el$$1_customer$$1$$) {
  var $handler$$95$$ = this.$getHandler$();
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$deposit_list_table_$, "request_data", this.$onDepositListTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onDepositListResponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$app_$.$conn_$, "process_deposit." + this.$request_id_$, this.$onDepositProcessResponse_$), 
  $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $account_overview_header_el$$1_customer$$1$$.ID, this.$onDepositRefresh_$), $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$deposit_list_table_$.$getElement$(), "click", this.$onDepositListTableClick_$));
  this.$withdraw_list_table_$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$withdraw_list_table_$, "request_data", this.$onWithdrawListTableRequestData_$), $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$WITHDRAW_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onWithdrawListReponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$withdraw_list_table_$, "withdraw_cancel", this.$onUserCancelWithdraw_$), 
  $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$withdraw_list_table_$, "withdraw_progress", this.$onUserSetWithdrawInProgress_$), $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$withdraw_list_table_$, "withdraw_complete", this.$onUserSetWithdrawComplete_$), $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$app_$.$conn_$, "process_withdraw." + this.$request_id_$, this.$onWithdrawProcessResponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$app_$.$conn_$, 
  "withdraw_refresh." + $account_overview_header_el$$1_customer$$1$$.ID, this.$onWithdrawRefresh_$), $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$app_$.$conn_$, "balance_response", this.$onBalanceResponse_$), $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$withdraw_list_table_$.$getElement$(), "click", this.$onWithdrawListTableClick_$));
  this.$removeChildren$($JSCompiler_alias_TRUE$$);
  this.$deposit_list_table_$ = this.$withdraw_list_table_$ = $JSCompiler_alias_NULL$$;
  $account_overview_header_el$$1_customer$$1$$ = $goog$dom$getElement$$("account_overview_header_id");
  $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, $account_overview_header_el$$1_customer$$1$$, "click", this.$onAccountOverviewHeaderClick_$);
  $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, this.$app_$.$conn_$, "verify_customer_response." + this.$request_id_$, this.$onVerifyCustomerResponse_$);
  $JSCompiler_StaticMethods_unlisten$$($handler$$95$$, $goog$dom$getElement$$("id_btn_user_fees"), "click", this.$onBtnUserFeesClick_$);
  $goog$dom$removeChildren$$($account_overview_header_el$$1_customer$$1$$);
  this.$request_id_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$() {
  return $goog$dom$getElementByClass$$("bitex-account-overview-view-content", this.$getElement$()) || this.$getElement$()
};
$JSCompiler_prototypeAlias$$.$recreateComponents_$ = function $$JSCompiler_prototypeAlias$$$$recreateComponents_$$($customer$$2$$) {
  var $handler$$96$$ = this.$getHandler$(), $model$$34$$ = this.$app_$.$model_$;
  this.$destroyComponents_$($customer$$2$$);
  this.$request_id_$ = parseInt(1E7 * Math.random(), 10);
  var $account_overview_header_el$$2$$ = $goog$dom$getElement$$("account_overview_header_id");
  $goog$soy$renderElement$$($account_overview_header_el$$2$$, $bitex$templates$AccountOverviewHeader$$, {$msg_customer_detail$:$customer$$2$$});
  var $profile$$1$$ = $model$$34$$.get("Profile");
  $model$$34$$.get("Broker");
  this.$deposit_list_table_$ = new $bitex$ui$DepositList$$($profile$$1$$.CryptoCurrencies, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$deposit_list_table_$, "request_data", this.$onDepositListTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onDepositListResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$app_$.$conn_$, "process_deposit." + this.$request_id_$, this.$onDepositProcessResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$ + "." + $customer$$2$$.ID, this.$onDepositRefresh_$);
  var $currency_method_description_obj$$1$$ = {};
  $goog$object$forEach$$($profile$$1$$.WithdrawStructure, function($method_list$$1$$, $currency$$13$$) {
    $currency_method_description_obj$$1$$[$currency$$13$$] = {};
    $goog$array$forEach$$($method_list$$1$$, function($method$$7$$) {
      $currency_method_description_obj$$1$$[$currency$$13$$][$method$$7$$.method] = $method$$7$$.description
    })
  });
  this.$withdraw_list_table_$ = new $bitex$ui$WithdrawList$$($currency_method_description_obj$$1$$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$withdraw_list_table_$, "request_data", this.$onWithdrawListTableRequestData_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$app_$.$conn_$, $bitex$api$BitEx$EventType$WITHDRAW_LIST_RESPONSE$$ + "." + this.$request_id_$, this.$onWithdrawListReponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$withdraw_list_table_$, "withdraw_cancel", this.$onUserCancelWithdraw_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$withdraw_list_table_$, "withdraw_progress", this.$onUserSetWithdrawInProgress_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$withdraw_list_table_$, "withdraw_complete", this.$onUserSetWithdrawComplete_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$app_$.$conn_$, "process_withdraw." + this.$request_id_$, this.$onWithdrawProcessResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$app_$.$conn_$, "withdraw_refresh." + $customer$$2$$.ID, this.$onWithdrawRefresh_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$app_$.$conn_$, "balance_response", this.$onBalanceResponse_$);
  $JSCompiler_StaticMethods_addChild$$(this, this.$deposit_list_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$deposit_list_table_$, "Value", this.$valuePriceFormatter_$, this);
  $JSCompiler_StaticMethods_addChild$$(this, this.$withdraw_list_table_$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setColumnFormatter$$(this.$withdraw_list_table_$, "Amount", this.$priceFormatter_$, this);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$deposit_list_table_$.$getElement$(), "click", this.$onDepositListTableClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$withdraw_list_table_$.$getElement$(), "click", this.$onWithdrawListTableClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, $account_overview_header_el$$2$$, "click", this.$onAccountOverviewHeaderClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, $goog$dom$getElement$$("id_btn_user_fees"), "click", this.$onBtnUserFeesClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$96$$, this.$app_$.$conn_$, "verify_customer_response." + this.$request_id_$, this.$onVerifyCustomerResponse_$);
  this.$app_$.$conn_$.$requestBalances$($customer$$2$$.ID);
  $JSCompiler_StaticMethods_recreateUserFeeComponents_$$($customer$$2$$)
};
function $JSCompiler_StaticMethods_recreateUserFeeComponents_$$($customer$$3_sell_fee$$) {
  var $buy_fee$$ = $customer$$3_sell_fee$$.TransactionFeeBuy;
  $customer$$3_sell_fee$$ = $customer$$3_sell_fee$$.TransactionFeeSell;
  $buy_fee$$ != $JSCompiler_alias_NULL$$ || ($buy_fee$$ = "None");
  $customer$$3_sell_fee$$ != $JSCompiler_alias_NULL$$ || ($customer$$3_sell_fee$$ = "None");
  $goog$soy$renderElement$$($goog$dom$getElement$$("account_overview_fees_balances_id"), $bitex$templates$YourFeesBalances$$, {$buy_fee$:$buy_fee$$, $sell_fee$:$customer$$3_sell_fee$$})
}
$JSCompiler_prototypeAlias$$.$getWithdrawData$ = function $$JSCompiler_prototypeAlias$$$$getWithdrawData$$() {
  return this.$withdraw_list_table_$.$getWithdrawData$()
};
$JSCompiler_prototypeAlias$$.$getClientID$ = $JSCompiler_get$$("$client_id_$");
$JSCompiler_prototypeAlias$$.$getDepositData$ = $JSCompiler_get$$("$deposit_data_$");
$JSCompiler_prototypeAlias$$.$getDepositAction$ = $JSCompiler_get$$("$deposit_action_$");
$JSCompiler_prototypeAlias$$.$onDepositListTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListTableRequestData_$$($e$$210_filter$$12$$) {
  var $page$$15$$ = $e$$210_filter$$12$$.options.Page, $limit$$15$$ = $e$$210_filter$$12$$.options.Limit;
  $e$$210_filter$$12$$ = $e$$210_filter$$12$$.options.Filter;
  var $selectedCustomer$$2$$ = this.$app_$.$model_$.get("SelectedCustomer");
  this.$app_$.$conn_$.$requestDepositList$(this.$request_id_$, $page$$15$$, $limit$$15$$, ["0", "1", "2", "4", "8"], $selectedCustomer$$2$$.ID, $e$$210_filter$$12$$)
};
$JSCompiler_prototypeAlias$$.$onDepositRefresh_$ = function $$JSCompiler_prototypeAlias$$$$onDepositRefresh_$$($e$$211_msg$$76$$) {
  $e$$211_msg$$76$$ = $e$$211_msg$$76$$.data;
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$deposit_list_table_$, $e$$211_msg$$76$$)
};
$JSCompiler_prototypeAlias$$.$onDepositListResponse_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListResponse_$$($e$$212_msg$$77$$) {
  this.$deposit_list_table_$ != $JSCompiler_alias_NULL$$ && ($e$$212_msg$$77$$ = $e$$212_msg$$77$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$deposit_list_table_$, $e$$212_msg$$77$$.DepositListGrp, $e$$212_msg$$77$$.Columns))
};
$JSCompiler_prototypeAlias$$.$onVerifyCustomerResponse_$ = function $$JSCompiler_prototypeAlias$$$$onVerifyCustomerResponse_$$($e$$213_new_verified_data_el$$) {
  $e$$213_new_verified_data_el$$ = $soy$renderAsElement$$($bitex$templates$AccountOverviewHeaderVerifiedData$$, {$msg_customer_detail$:$e$$213_new_verified_data_el$$.data});
  var $verified_data_el$$ = $goog$dom$getElementByClass$$("account-overview-verified", $goog$dom$getElement$$("account_overview_header_id"));
  $goog$dom$removeChildren$$($verified_data_el$$);
  $verified_data_el$$.appendChild($e$$213_new_verified_data_el$$)
};
$JSCompiler_prototypeAlias$$.$onBtnUserFeesClick_$ = function $$JSCompiler_prototypeAlias$$$$onBtnUserFeesClick_$$() {
  var $dlg_content_selectedCustomer$$3_userFeesDialog$$ = this.$app_$.$model_$.get("SelectedCustomer"), $buy_fee$$1$$ = $dlg_content_selectedCustomer$$3_userFeesDialog$$.TransactionFeeBuy, $sell_fee$$1$$ = $dlg_content_selectedCustomer$$3_userFeesDialog$$.TransactionFeeSell, $dlg_content_selectedCustomer$$3_userFeesDialog$$ = $bitex$templates$UserFeesDialogContent$$({id:"id_user_fees", $buy_fee$:$buy_fee$$1$$, $sell_fee$:$sell_fee$$1$$}), $dlg_content_selectedCustomer$$3_userFeesDialog$$ = this.$app_$.$showDialog$($dlg_content_selectedCustomer$$3_userFeesDialog$$, 
  "configurar comision del cliente", $bootstrap$Dialog$ButtonSet$createOkCancel$$());
  $buy_fee$$1$$ != $JSCompiler_alias_NULL$$ ? ($goog$dom$getElement$$("id_user_fees_buy_fee").disabled = $JSCompiler_alias_FALSE$$, $goog$dom$getElement$$("id_user_fees_broker_buy_fee").checked = $JSCompiler_alias_FALSE$$, $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"), $buy_fee$$1$$)) : ($goog$dom$getElement$$("id_user_fees_buy_fee").disabled = $JSCompiler_alias_TRUE$$, $goog$dom$getElement$$("id_user_fees_broker_buy_fee").checked = $JSCompiler_alias_TRUE$$, $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"), 
  "None"));
  $sell_fee$$1$$ != $JSCompiler_alias_NULL$$ ? ($goog$dom$getElement$$("id_user_fees_sell_fee").disabled = $JSCompiler_alias_FALSE$$, $goog$dom$getElement$$("id_user_fees_broker_sell_fee").checked = $JSCompiler_alias_FALSE$$, $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_sell_fee"), $sell_fee$$1$$)) : ($goog$dom$getElement$$("id_user_fees_sell_fee").disabled = $JSCompiler_alias_TRUE$$, $goog$dom$getElement$$("id_user_fees_broker_sell_fee").checked = $JSCompiler_alias_TRUE$$, $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_sell_fee"), 
  "None"));
  var $handler$$97$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$97$$, $goog$dom$getElement$$("id_user_fees_broker_buy_fee"), "click", function($e$$215$$) {
    $e$$215$$.target.checked ? ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"), "None"), $goog$dom$getElement$$("id_user_fees_buy_fee").disabled = $JSCompiler_alias_TRUE$$) : ($buy_fee$$1$$ != $JSCompiler_alias_NULL$$ ? $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"), $buy_fee$$1$$) : $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"), "0"), $goog$dom$getElement$$("id_user_fees_buy_fee").disabled = $JSCompiler_alias_FALSE$$)
  });
  $JSCompiler_StaticMethods_listen$$($handler$$97$$, $goog$dom$getElement$$("id_user_fees_broker_sell_fee"), "click", function($e$$216$$) {
    $e$$216$$.target.checked ? ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_sell_fee"), "None"), $goog$dom$getElement$$("id_user_fees_sell_fee").disabled = $JSCompiler_alias_TRUE$$) : ($sell_fee$$1$$ != $JSCompiler_alias_NULL$$ ? $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_sell_fee"), $sell_fee$$1$$) : $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_user_fees_sell_fee"), "0"), $goog$dom$getElement$$("id_user_fees_sell_fee").disabled = $JSCompiler_alias_FALSE$$)
  });
  $JSCompiler_StaticMethods_listenOnce$$($handler$$97$$, $dlg_content_selectedCustomer$$3_userFeesDialog$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$217_new_fee_buy$$) {
    if("ok" == $e$$217_new_fee_buy$$.key) {
      $e$$217_new_fee_buy$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_user_fees_buy_fee"));
      var $new_fee_sell$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_user_fees_sell_fee")), $selectedCustomer$$4$$ = this.$app_$.$model_$.get("SelectedCustomer"), $conn$$15$$ = this.$app_$.$conn_$;
      "None" == $e$$217_new_fee_buy$$ && ($e$$217_new_fee_buy$$ = $JSCompiler_alias_NULL$$);
      "None" == $new_fee_sell$$ && ($new_fee_sell$$ = $JSCompiler_alias_NULL$$);
      $JSCompiler_StaticMethods_updateUserProfile$$($conn$$15$$, {TransactionFeeBuy:$e$$217_new_fee_buy$$, TransactionFeeSell:$new_fee_sell$$}, $selectedCustomer$$4$$.ID);
      $selectedCustomer$$4$$.TransactionFeeBuy = $e$$217_new_fee_buy$$;
      $selectedCustomer$$4$$.TransactionFeeSell = $new_fee_sell$$;
      this.$app_$.$model_$.set("SelectedCustomer", $selectedCustomer$$4$$);
      $JSCompiler_StaticMethods_recreateUserFeeComponents_$$($selectedCustomer$$4$$)
    }
  }, this)
};
$JSCompiler_prototypeAlias$$.$onAccountOverviewHeaderClick_$ = function $$JSCompiler_prototypeAlias$$$$onAccountOverviewHeaderClick_$$($dlg_content$$1_e$$218_selectedCustomer$$5$$) {
  var $data_action$$3_element$$198_new_withdraw_email_data_el$$ = $dlg_content$$1_e$$218_selectedCustomer$$5$$.target;
  "I" === $data_action$$3_element$$198_new_withdraw_email_data_el$$.tagName && ($data_action$$3_element$$198_new_withdraw_email_data_el$$ = $goog$dom$getParentElement$$($data_action$$3_element$$198_new_withdraw_email_data_el$$));
  $data_action$$3_element$$198_new_withdraw_email_data_el$$ = $data_action$$3_element$$198_new_withdraw_email_data_el$$.getAttribute("data-action");
  if($data_action$$3_element$$198_new_withdraw_email_data_el$$ != $JSCompiler_alias_NULL$$) {
    $dlg_content$$1_e$$218_selectedCustomer$$5$$.preventDefault();
    $dlg_content$$1_e$$218_selectedCustomer$$5$$.stopPropagation();
    var $handler$$98_withdraw_email_data_el$$ = this.$getHandler$();
    $dlg_content$$1_e$$218_selectedCustomer$$5$$ = this.$app_$.$model_$.get("SelectedCustomer");
    console.log("hey yo:", $data_action$$3_element$$198_new_withdraw_email_data_el$$);
    switch($data_action$$3_element$$198_new_withdraw_email_data_el$$) {
      case "SET_TWO_FACTOR":
        this.$client_id_$ = $goog$string$toNumber$$($dlg_content$$1_e$$218_selectedCustomer$$5$$.ID);
        this.dispatchEvent("reset_two_factor");
        $data_action$$3_element$$198_new_withdraw_email_data_el$$ = $soy$renderAsElement$$($bitex$templates$AccountOverviewHeaderTwoFactors$$, {$msg_customer_detail$:{TwoFactorEnabled:$JSCompiler_alias_FALSE$$}});
        $handler$$98_withdraw_email_data_el$$ = $goog$dom$getElementByClass$$("account-overview-two-factors", $goog$dom$getElement$$("account_overview_header_id"));
        $goog$dom$removeChildren$$($handler$$98_withdraw_email_data_el$$);
        $handler$$98_withdraw_email_data_el$$.appendChild($data_action$$3_element$$198_new_withdraw_email_data_el$$);
        break;
      case "SET_WITHDRAW_EMAIL":
        this.$client_id_$ = $dlg_content$$1_e$$218_selectedCustomer$$5$$.ID;
        this.$verification_data_$ = {WithdrawEmailValidation:!$dlg_content$$1_e$$218_selectedCustomer$$5$$.NeedWithdrawEmail};
        this.dispatchEvent("set_withdraw_email");
        $data_action$$3_element$$198_new_withdraw_email_data_el$$ = $soy$renderAsElement$$($bitex$templates$AccountOverviewHeaderWithDrawEmailData$$, {$msg_customer_detail$:{NeedWithdrawEmail:!$dlg_content$$1_e$$218_selectedCustomer$$5$$.NeedWithdrawEmail}});
        $handler$$98_withdraw_email_data_el$$ = $goog$dom$getElementByClass$$("account-overview-withdraw-email", $goog$dom$getElement$$("account_overview_header_id"));
        $goog$dom$removeChildren$$($handler$$98_withdraw_email_data_el$$);
        $handler$$98_withdraw_email_data_el$$.appendChild($data_action$$3_element$$198_new_withdraw_email_data_el$$);
        $dlg_content$$1_e$$218_selectedCustomer$$5$$.NeedWithdrawEmail = !$dlg_content$$1_e$$218_selectedCustomer$$5$$.NeedWithdrawEmail;
        this.$app_$.$model_$.set("SelectedCustomer", $dlg_content$$1_e$$218_selectedCustomer$$5$$);
        break;
      case "SET_NOT_VERIFIED":
        this.$client_id_$ = $goog$string$toNumber$$($dlg_content$$1_e$$218_selectedCustomer$$5$$.ID);
        this.dispatchEvent("set_not_verified");
        break;
      case "SET_VERIFIED":
        $dlg_content$$1_e$$218_selectedCustomer$$5$$ = $bitex$templates$EnterVerificationDataDialogContent$$({$clientID$:$dlg_content$$1_e$$218_selectedCustomer$$5$$.ID});
        var $dlg$$ = this.$app_$.$showDialog$($dlg_content$$1_e$$218_selectedCustomer$$5$$, "Ingresar datos de verificacion", $bootstrap$Dialog$ButtonSet$createOkCancel$$());
        $JSCompiler_StaticMethods_listen$$($handler$$98_withdraw_email_data_el$$, $dlg$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$219_verification_data$$) {
          "ok" == $e$$219_verification_data$$.key && ($e$$219_verification_data$$.preventDefault(), $e$$219_verification_data$$.stopPropagation(), $e$$219_verification_data$$ = $bitex$util$getFormAsJSON$$($goog$dom$getFirstElementChild$$($dlg$$.$getContentElement$())), $e$$219_verification_data$$.VerificationData != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($e$$219_verification_data$$.VerificationData) && (this.$client_id_$ = $goog$string$toNumber$$($e$$219_verification_data$$.ClientID), 
          this.$verification_data_$ = $e$$219_verification_data$$.VerificationData, this.dispatchEvent("set_verified"), $dlg$$.$dispose$()))
        }, this)
    }
  }
};
$JSCompiler_prototypeAlias$$.$onWithdrawListTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListTableClick_$$($data$$40_e$$220$$) {
  var $element$$199$$ = $data$$40_e$$220$$.target;
  "I" === $element$$199$$.tagName && ($element$$199$$ = $goog$dom$getParentElement$$($element$$199$$));
  var $data_action$$4$$ = $element$$199$$.getAttribute("data-action");
  if($data_action$$4$$ != $JSCompiler_alias_NULL$$) {
    switch($data$$40_e$$220$$.preventDefault(), $data$$40_e$$220$$.stopPropagation(), $data$$40_e$$220$$ = $goog$json$parse$$($element$$199$$.getAttribute("data-row")), $data_action$$4$$) {
      case "SHOW_QR":
        this.$qr_data_$ = {Wallet:$data$$40_e$$220$$.Data.Wallet, Currency:$data$$40_e$$220$$.Currency}, this.$qr_data_verb_$ = "WITHDRAW", this.dispatchEvent("show_qr")
    }
  }
};
$JSCompiler_prototypeAlias$$.$onDepositListTableClick_$ = function $$JSCompiler_prototypeAlias$$$$onDepositListTableClick_$$($e$$221$$) {
  var $element$$200$$ = $e$$221$$.target;
  "I" === $element$$200$$.tagName && ($element$$200$$ = $goog$dom$getParentElement$$($element$$200$$));
  var $data_action$$5$$ = $element$$200$$.getAttribute("data-action");
  if($data_action$$5$$ != $JSCompiler_alias_NULL$$) {
    switch($e$$221$$.preventDefault(), $e$$221$$.stopPropagation(), this.$deposit_action_$ = $data_action$$5$$, this.$deposit_data_$ = $goog$json$parse$$($element$$200$$.getAttribute("data-row")), $data_action$$5$$) {
      case "SHOW_RECEIPT":
        this.$receipt_data_$ = {SubmissionID:this.$data_$.Data.SubmissionID, DepositReceipt:this.$data_$.Data.DepositReceipt};
        this.dispatchEvent("show_receipt");
        break;
      case "SHOW_QR":
        this.$qr_data_$ = {Wallet:this.$deposit_data_$.Data.InputAddress, Currency:this.$deposit_data_$.Currency};
        this.$qr_data_verb_$ = "DEPOSIT";
        this.dispatchEvent("show_qr");
        break;
      case "UPLOAD":
        this.dispatchEvent("upload_receipt");
        break;
      case "CANCEL":
      ;
      case "PROGRESS":
      ;
      case "COMPLETE":
        this.dispatchEvent("process_deposit")
    }
  }
};
$JSCompiler_prototypeAlias$$.$onUserCancelWithdraw_$ = function $$JSCompiler_prototypeAlias$$$$onUserCancelWithdraw_$$() {
  this.$withdraw_action_$ = "CANCEL";
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onUserSetWithdrawInProgress_$ = function $$JSCompiler_prototypeAlias$$$$onUserSetWithdrawInProgress_$$() {
  this.$withdraw_action_$ = "PROGRESS";
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onUserSetWithdrawComplete_$ = function $$JSCompiler_prototypeAlias$$$$onUserSetWithdrawComplete_$$() {
  this.$withdraw_action_$ = "COMPLETE";
  this.dispatchEvent("process_withdraw")
};
$JSCompiler_prototypeAlias$$.$onWithdrawListTableRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListTableRequestData_$$($e$$225_filter$$13$$) {
  var $page$$16$$ = $e$$225_filter$$13$$.options.Page, $limit$$16$$ = $e$$225_filter$$13$$.options.Limit;
  $e$$225_filter$$13$$ = $e$$225_filter$$13$$.options.Filter;
  var $selectedCustomer$$6$$ = this.$app_$.$model_$.get("SelectedCustomer");
  this.$app_$.$conn_$.$requestWithdrawList$(this.$request_id_$, $page$$16$$, $limit$$16$$, ["1", "2", "4", "8"], $selectedCustomer$$6$$.ID, $e$$225_filter$$13$$)
};
$JSCompiler_prototypeAlias$$.$priceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$priceFormatter_$$($value$$177$$, $rowSet$$18$$) {
  var $priceCurrency$$6$$ = $rowSet$$18$$.Currency;
  return 0 === $value$$177$$ ? "-" : $goog$dom$createDom$$("abbr", {title:this.$app_$.$getCurrencyDescription$($priceCurrency$$6$$)}, this.$app_$.$formatCurrency$($value$$177$$ / 1E8, $priceCurrency$$6$$))
};
$JSCompiler_prototypeAlias$$.$valuePriceFormatter_$ = function $$JSCompiler_prototypeAlias$$$$valuePriceFormatter_$$($value$$178$$, $rowSet$$19$$) {
  var $formatted_paid_value$$1_paid_value$$1$$ = $rowSet$$19$$.PaidValue, $priceCurrency$$7$$ = $rowSet$$19$$.Currency, $currency_description$$3$$ = this.$app_$.$getCurrencyDescription$($priceCurrency$$7$$), $formatted_value$$1$$ = this.$app_$.$formatCurrency$($value$$178$$ / 1E8, $priceCurrency$$7$$);
  return 0 === $value$$178$$ ? 0 === $formatted_paid_value$$1_paid_value$$1$$ ? "-" : $goog$dom$createDom$$("abbr", {title:$currency_description$$3$$}, this.$app_$.$formatCurrency$($formatted_paid_value$$1_paid_value$$1$$ / 1E8, $priceCurrency$$7$$)) : 0 < $formatted_paid_value$$1_paid_value$$1$$ && $formatted_paid_value$$1_paid_value$$1$$ != $value$$178$$ ? ($formatted_paid_value$$1_paid_value$$1$$ = this.$app_$.$formatCurrency$($formatted_paid_value$$1_paid_value$$1$$ / 1E8, $priceCurrency$$7$$), 
  $goog$dom$createDom$$("abbr", {title:"declarado / pagado en " + $currency_description$$3$$}, $formatted_value$$1$$ + " / " + $formatted_paid_value$$1_paid_value$$1$$)) : $goog$dom$createDom$$("abbr", {title:$currency_description$$3$$}, $formatted_value$$1$$)
};
$JSCompiler_prototypeAlias$$.$onWithdrawListReponse_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawListReponse_$$($e$$226_msg$$79$$) {
  this.$withdraw_list_table_$ != $JSCompiler_alias_NULL$$ && ($e$$226_msg$$79$$ = $e$$226_msg$$79$$.data, $JSCompiler_StaticMethods_setResultSet$$(this.$withdraw_list_table_$, $e$$226_msg$$79$$.WithdrawListGrp, $e$$226_msg$$79$$.Columns))
};
$JSCompiler_prototypeAlias$$.$onWithdrawProcessResponse_$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onDepositProcessResponse_$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onBalanceResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBalanceResponse_$$($e$$229_user_balances$$) {
  var $msg$$82$$ = $e$$229_user_balances$$.data, $model$$35$$ = this.$app_$.$model_$;
  delete $msg$$82$$.MsgType;
  delete $msg$$82$$.BalanceReqID;
  $e$$229_user_balances$$ = $msg$$82$$[$model$$35$$.get("UserID")];
  var $currencies$$ = [];
  $goog$object$forEach$$($e$$229_user_balances$$, function($balance$$, $currency$$14$$) {
    $balance$$ /= 1E8;
    var $formatted_balance$$ = this.$app_$.$formatCurrency$($balance$$, $currency$$14$$);
    $currencies$$.push({code:$currency$$14$$, $model_key$:$currency$$14$$ + "." + $msg$$82$$.ClientID, $balance$:$formatted_balance$$});
    var $balance_key$$ = "balance_" + $currency$$14$$ + "." + $msg$$82$$.ClientID;
    $model$$35$$.set($balance_key$$, $balance$$);
    $model$$35$$.set("formatted_" + $balance_key$$, $formatted_balance$$)
  }, this);
  $goog$dom$removeChildren$$($goog$dom$getElement$$("account_overview_balances_id"));
  $goog$soy$renderElement$$($goog$dom$getElement$$("account_overview_balances_id"), $bitex$templates$YourAccountBalances$$, {$currencies$:$currencies$$})
};
$JSCompiler_prototypeAlias$$.$onWithdrawRefresh_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawRefresh_$$($e$$230$$) {
  $JSCompiler_StaticMethods_insertOrUpdateRecord$$(this.$withdraw_list_table_$, $e$$230$$.data)
};
// Input 170
function $bitex$app$BlinkTrade$$($opt_default_country$$, $opt_default_broker_id$$, $opt_default_state$$, $opt_test_request_timer_in_ms$$, $opt_maximum_allowed_delay_in_ms$$) {
  $goog$Disposable$$.call(this);
  $bootstrap$Dropdown$install$$();
  this.$dialog_$ = $JSCompiler_alias_NULL$$;
  this.$error_message_alert_timeout_$ = 5E3;
  try {
    this.$router_$ = new $bitex$app$UrlRouter$$(this, "", "start"), this.$model_$ = new $bitex$model$Model$$(document.body), this.$conn_$ = new $bitex$api$BitEx$$, this.$views_$ = new $goog$ui$Component$$, this.$pricemax_$ = this.$pricemin_$ = 0
  }catch($error$$5$$) {
    this.$showDialog$($error$$5$$)
  }
  $opt_default_country$$ != $JSCompiler_alias_NULL$$ && this.$model_$.set("DefaultCountry", $opt_default_country$$);
  $opt_default_broker_id$$ != $JSCompiler_alias_NULL$$ && this.$model_$.set("DefaultBrokerID", $opt_default_broker_id$$);
  $opt_default_state$$ != $JSCompiler_alias_NULL$$ && this.$model_$.set("DefaultState", $opt_default_state$$);
  this.$maximum_allowed_delay_in_ms_$ = $opt_maximum_allowed_delay_in_ms$$ || 1E4;
  this.$test_request_delay_$ = $opt_test_request_timer_in_ms$$ || 3E4;
  this.$currency_info_$ = {};
  this.$all_markets_$ = {};
  this.$test_request_timer_$ = new $goog$Timer$$(this.$test_request_delay_$);
  this.$test_request_timer_$.start()
}
$goog$inherits$$($bitex$app$BlinkTrade$$, $goog$events$EventTarget$$);
$goog$addSingletonGetter$$($bitex$app$BlinkTrade$$);
$JSCompiler_prototypeAlias$$ = $bitex$app$BlinkTrade$$.prototype;
$JSCompiler_prototypeAlias$$.$getHandler$ = function $$JSCompiler_prototypeAlias$$$$getHandler$$() {
  return this.$handler_$ || (this.$handler_$ = new $goog$events$EventHandler$$(this))
};
function $bitex$app$BlinkTrade$validateBitcoinAddress_$$($el$$101_elValue$$8$$, $condition$$17$$, $minLength$$2$$, $caption$$26$$) {
  if(!$condition$$17$$ || eval($condition$$17$$)) {
    $el$$101_elValue$$8$$ = $goog$dom$forms$getValue$$($el$$101_elValue$$8$$), ($el$$101_elValue$$8$$ == $JSCompiler_alias_NULL$$ || $goog$string$isEmpty$$($el$$101_elValue$$8$$)) && $JSCompiler_alias_THROW$$($caption$$26$$ + " es requerido"), $bitex$util$isValidAddress$$($el$$101_elValue$$8$$) || $JSCompiler_alias_THROW$$($caption$$26$$ + " no es una direcci\u00f3n de bitcoin valida")
  }
}
$JSCompiler_prototypeAlias$$.$run$ = function $$JSCompiler_prototypeAlias$$$$run$$($buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$) {
  var $setNewPasswordView_url$$32$$ = "wss://" + window.location.hostname + "/trade/";
  $buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$ != $JSCompiler_alias_NULL$$ && ($setNewPasswordView_url$$32$$ = $buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$);
  $uniform$Validators$$.$getInstance$().$metaMap_$.set("validateAddress", $bitex$app$BlinkTrade$validateBitcoinAddress_$$);
  $goog$dom$removeChildren$$($goog$dom$getElement$$("offer_book_order_entry_content"));
  $buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$ = $goog$soy$renderAsElement$$($bitex$templates$OrderEntry$$, {id:"id_order_entry_buy", $symbol$:"", $side$:1, type:2, $hide_fee$:$JSCompiler_alias_TRUE$$, $hide_client_id$:$JSCompiler_alias_TRUE$$, $broker_id$:""});
  var $sell_order_entry_el$$inline_1023_signUpView$$ = $goog$soy$renderAsElement$$($bitex$templates$OrderEntry$$, {id:"id_order_entry_sell", $symbol$:"", $side$:2, type:2, $hide_fee$:$JSCompiler_alias_TRUE$$, $hide_client_id$:$JSCompiler_alias_TRUE$$, $broker_id$:""});
  $goog$dom$getElement$$("offer_book_order_entry_content").appendChild($buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$);
  $goog$dom$getElement$$("offer_book_order_entry_content").appendChild($sell_order_entry_el$$inline_1023_signUpView$$);
  this.$url_$ = $setNewPasswordView_url$$32$$;
  var $handler$$99_startView$$ = new $bitex$view$NullView$$(this), $setNewPasswordView_url$$32$$ = new $bitex$view$SetNewPasswordView$$(this);
  $buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$ = new $bitex$view$LoginView$$(this);
  var $sell_order_entry_el$$inline_1023_signUpView$$ = new $bitex$view$SignupView$$(this), $forgotPasswordView$$ = new $bitex$view$ForgotPasswordView$$(this), $tosView$$ = new $bitex$view$NullView$$(this), $depositView$$ = new $bitex$view$DepositView$$(this, $JSCompiler_alias_FALSE$$), $depositRequestsView$$ = new $bitex$view$DepositView$$(this, $JSCompiler_alias_TRUE$$), $verificationView$$ = new $bitex$view$VerificationView$$(this), $offerBookView$$ = new $bitex$view$OfferBookView$$(this), $withdrawView$$ = 
  new $bitex$view$WithdrawView$$(this, $JSCompiler_alias_FALSE$$), $withdrawRequestsView$$ = new $bitex$view$WithdrawView$$(this, $JSCompiler_alias_TRUE$$), $customersView$$ = new $bitex$view$CustomersView$$(this), $accountOverviewView$$ = new $bitex$view$AccountOverview$$(this), $brokerView$$ = new $bitex$view$BrokerView$$(this), $marketView$$ = new $bitex$view$MarketView$$(this), $rankingView$$ = new $bitex$view$RankingView$$(this), $tradingView$$ = new $bitex$view$TradingView$$(this), $toolBarView$$ = 
  new $bitex$view$ToolBarView$$(this), $sideBarView$$ = new $bitex$view$SideBarView$$(this), $ledgerView$$ = new $bitex$view$LedgerView$$(this), $profileView$$ = new $bitex$view$ProfileView$$(this), $brokerApplicationView$$ = new $bitex$view$NullView$$(this);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $toolBarView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $sideBarView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $handler$$99_startView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $setNewPasswordView_url$$32$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $sell_order_entry_el$$inline_1023_signUpView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $forgotPasswordView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $tosView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $tradingView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $offerBookView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $depositView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $depositRequestsView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $withdrawView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $withdrawRequestsView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $customersView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $accountOverviewView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $verificationView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $brokerView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $marketView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $rankingView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $ledgerView$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $profileView$$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_addChild$$(this.$views_$, $brokerApplicationView$$);
  $handler$$99_startView$$.$decorate$($goog$dom$getElement$$("start"));
  $setNewPasswordView_url$$32$$.$decorate$($goog$dom$getElement$$("set_new_password"));
  $buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$.$decorate$($goog$dom$getElement$$("signin"));
  $sell_order_entry_el$$inline_1023_signUpView$$.$decorate$($goog$dom$getElement$$("signup"));
  $forgotPasswordView$$.$decorate$($goog$dom$getElement$$("forgot_password"));
  $tosView$$.$decorate$($goog$dom$getElement$$("tos"));
  $tradingView$$.$decorate$($goog$dom$getElement$$("trading"));
  $offerBookView$$.$decorate$($goog$dom$getElement$$("offerbook"));
  $depositView$$.$decorate$($goog$dom$getElement$$("deposit"));
  $depositRequestsView$$.$decorate$($goog$dom$getElement$$("deposit_requests"));
  $withdrawView$$.$decorate$($goog$dom$getElement$$("withdraw"));
  $withdrawRequestsView$$.$decorate$($goog$dom$getElement$$("withdraw_requests"));
  $customersView$$.$decorate$($goog$dom$getElement$$("customers"));
  $accountOverviewView$$.$decorate$($goog$dom$getElement$$("account_overview"));
  $verificationView$$.$decorate$($goog$dom$getElement$$("verification"));
  $sideBarView$$.$decorate$($goog$dom$getElement$$("id_sidebar"));
  $toolBarView$$.$decorate$($goog$dom$getElement$$("id_toolbar"));
  $brokerView$$.$decorate$($goog$dom$getElement$$("my_broker"));
  $marketView$$.$decorate$($goog$dom$getElement$$("market"));
  $rankingView$$.$decorate$($goog$dom$getElement$$("ranking"));
  $ledgerView$$.$decorate$($goog$dom$getElement$$("ledger"));
  $profileView$$.$decorate$($goog$dom$getElement$$("profile"));
  $brokerApplicationView$$.$decorate$($goog$dom$getElement$$("broker_application"));
  this.$views_$.$decorate$(document.body);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(account_overview)/(\\w+)/$", $accountOverviewView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(start)", $handler$$99_startView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(set_new_password)", $setNewPasswordView_url$$32$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(signin)", $buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(signup)", $sell_order_entry_el$$inline_1023_signUpView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(forgot_password)", $forgotPasswordView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(tos)", $tosView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(trading)", $tradingView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(offerbook)", $offerBookView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(deposit_requests)", $depositRequestsView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(deposit)", $depositView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(withdraw_requests)", $withdrawRequestsView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(withdraw)", $withdrawView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(customers)", $customersView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(verification)", $verificationView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(my_broker)", $brokerView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(market)", $marketView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(ranking)", $rankingView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(ledger)", $ledgerView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(profile)", $profileView$$);
  $JSCompiler_StaticMethods_addView$$(this.$router_$, "(broker_application)", $brokerApplicationView$$);
  this.$router_$.$setView$("start");
  this.$router_$.init();
  this.$loginView_$ = $buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$;
  this.$profileView_$ = $profileView$$;
  $handler$$99_startView$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$router_$, "set_view", this.$onBeforeSetView_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "opened", this.$onConnectionOpen_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "closed", this.$onConnectionClose_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "error", this.$onConnectionError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "error_message", this.$onConnectionErrorMessage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "broker_list", this.$onBrokerListResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "security_list", this.$onSecurityList_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "login_ok", this.$onUserLoginOk_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "login_error", this.$onUserLoginError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$test_request_timer_$, $goog$Timer$TICK$$, this.$onTestRequestTimer_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "heartbeat", this.$onHearbeat_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "change_password", this.$onUserChangePassword_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "change_password_error", this.$onChangePasswordResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "two_factor_secret", this.$onBitexTwoFactorSecretResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "balance_response", this.$onBitexBalanceResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "position_response", this.$onBitexPositionResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "pwd_changed_ok", this.$onBitexPasswordChangedOk_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "pwd_changed_error", this.$onBitexPasswordChangedError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "deposit_methods_response", this.$onBitexDepositMethodsResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "withdraw_refresh", this.$onBitexWithdrawIncrementalUpdate_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, $bitex$api$BitEx$EventType$EXECUTION_REPORT$$, this.$onBitexExecutionReport_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "raw_message", $goog$bind$$(this.$onBitexRawMessageLogger_$, this, "rx"));
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "sent_raw_message", $goog$bind$$(this.$onBitexRawMessageLogger_$, this, "tx"));
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "verify_customer_update", this.$onBitexVerifyCustomerUpdate_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "withdraw_response", this.$onBitexWithdrawResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "withdraw_confirmation_response", this.$onBitexWithdrawConfirmationResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$conn_$, "suggest_trusted_address_pub", this.$onSuggestTrustedAddress_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, document.body, "click", this.$onBodyClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, document.body, "change", this.$onBodyChange_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $sell_order_entry_el$$inline_1023_signUpView$$, "signup_click", this.$onUserSignupButton_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $buy_order_entry_el$$inline_1022_loginView_opt_url$$3$$, "login_click", this.$onUserLoginButtonClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $profileView$$, "two_factor_enable", this.$onUserEnableTwoFactor_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $profileView$$, "two_factor_disable", this.$onUserDisableTwoFactor_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $forgotPasswordView$$, "recover_pwd", this.$onUserForgotPassword_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $setNewPasswordView_url$$32$$, "set_new_pwd", this.$onUserSetNewPassword_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, $sideBarView$$, "changed_market", this.$onUserChangeMarket_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "change_broker", this.$onUserChangeBroker_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "order_entry_submitted", this.$onUserOrderEntry_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "cancel_order", this.$onUserCancelOrder_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "simple_order_entry_submitted", this.$onUserOrderEntry_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "md_subscribe", this.$onUserMarketDataSubscribe_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "md_unsubscribe", this.$onUserMarketDataUnsubscribe_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "sec_subscribe", this.$onUserSecurityStatusSubscribe_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "sec_unsubscribe", this.$onUserSecurityStatusUnsubscribe_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "request_withdraw", this.$onUserWithdrawRequest_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "confirm_withdraw", this.$onUserConfirmWithdraw_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "process_withdraw", this.$onBrokerProcessWithdraw_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "request_deposit", this.$onUserDepositRequest_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "process_deposit", this.$onProcessDeposit_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "connect_bitex", this.$onUserConnectBitEx_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "show_qr", this.$onUserShowQr_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "show_receipt", this.$onShowReceipt_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "upload_receipt", this.$onUserUploadReceipt_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "set_verified", this.$onBrokerSetUserAsVerified_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "set_not_verified", this.$onBrokerSetUserNotVerified_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "set_withdraw_email", this.$onBrokerSetWithdrawEmailConfirmation_$);
  $JSCompiler_StaticMethods_listen$$($handler$$99_startView$$, this.$views_$, "reset_two_factor", this.$onBrokerResetUserTwoFactor_$);
  this.$connectBitEx$()
};
$JSCompiler_prototypeAlias$$.$onBitexRawMessageLogger_$ = function $$JSCompiler_prototypeAlias$$$$onBitexRawMessageLogger_$$($action$$2$$, $e$$231$$) {
  var $raw_msg$$ = $e$$231$$.data;
  try {
    console.log($action$$2$$ + ":" + $raw_msg$$)
  }catch($e$$232$$) {
  }
};
$JSCompiler_prototypeAlias$$.$onBitexWithdrawConfirmationResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexWithdrawConfirmationResponse_$$($e$$233$$) {
  $e$$233$$.data.ConfirmationToken == $JSCompiler_alias_NULL$$ && (this.$showNotification$("error", "Senal de confirmacion invalida!"), this.$onBitexWithdrawResponse_$())
};
$JSCompiler_prototypeAlias$$.$onBitexWithdrawResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexWithdrawResponse_$$() {
  if(this.$model_$.get("Profile").NeedWithdrawEmail) {
    var $dlg_content$$2$$ = $bitex$templates$WithdrawConfirmationDialogContent$$(), $withdrawConfirmationDialog$$ = this.$showDialog$($dlg_content$$2$$, "Confirmar", $bootstrap$Dialog$ButtonSet$createOkCancel$$());
    $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $withdrawConfirmationDialog$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$235$$) {
      if("ok" == $e$$235$$.key) {
        var $form_element$$ = $goog$dom$getFirstElementChild$$($withdrawConfirmationDialog$$.$getContentElement$()), $uf$$ = new $uniform$Uniform$$;
        $uf$$.$decorate$($form_element$$);
        error_list = $JSCompiler_StaticMethods_validate$$($uf$$);
        0 < error_list.length ? ($goog$array$forEach$$(error_list, function($error_msg$$1$$) {
          this.$showNotification$("error", "Error: " + $error_msg$$1$$)
        }, this), $e$$235$$.stopPropagation(), $e$$235$$.preventDefault()) : this.$conn_$.$confirmWithdraw$($goog$dom$forms$getValue$$($goog$dom$getElement$$("id_withdraw_confirmation")))
      }
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$connectBitEx$ = function $$JSCompiler_prototypeAlias$$$$connectBitEx$$() {
  try {
    this.$conn_$.open(this.$url_$)
  }catch($e$$236$$) {
    var $JSCompiler_object_inline_error_code_1127_output$$inline_1026$$ = "WebSocket: " + $e$$236$$, $JSCompiler_object_inline_error_code_1127_output$$inline_1026$$ = "" + ('<p class="lead">' + $soy$$0$0escapeHtml$$("Error al conectar con el servidor. Su navegador debe ser compatible con WebSockets.") + '</p><dl class="dl-horizontal"><dt>Error de codigo</dt><dd>' + $soy$$0$0escapeHtml$$($JSCompiler_object_inline_error_code_1127_output$$inline_1026$$) + "</dd></dl>");
    this.$showDialog$($JSCompiler_object_inline_error_code_1127_output$$inline_1026$$, $JSCompiler_alias_VOID$$, $bootstrap$Dialog$ButtonSet$createYesNoCancel$$())
  }
};
$JSCompiler_prototypeAlias$$.$getBitexConnection$ = $JSCompiler_get$$("$conn_$");
$JSCompiler_prototypeAlias$$.$setView$ = function $$JSCompiler_prototypeAlias$$$$setView$$($view_id$$3$$) {
  this.$router_$.$setView$($view_id$$3$$)
};
$JSCompiler_prototypeAlias$$.$onUserMarketDataSubscribe_$ = function $$JSCompiler_prototypeAlias$$$$onUserMarketDataSubscribe_$$($e$$237$$) {
  this.$conn_$.$subscribeMarketData$($e$$237$$.target.$getMDMarketDepth$(), $e$$237$$.target.$getMDInstruments$(), $e$$237$$.target.$getMDEntries$(), $e$$237$$.target.$market_data_subscription_id_$)
};
$JSCompiler_prototypeAlias$$.$onUserMarketDataUnsubscribe_$ = function $$JSCompiler_prototypeAlias$$$$onUserMarketDataUnsubscribe_$$($e$$238$$) {
  this.$conn_$.$unSubscribeMarketData$($e$$238$$.target.$market_data_subscription_id_$)
};
$JSCompiler_prototypeAlias$$.$onUserSecurityStatusSubscribe_$ = function $$JSCompiler_prototypeAlias$$$$onUserSecurityStatusSubscribe_$$($e$$239$$) {
  this.$conn_$.sendMessage({MsgType:"e", SecurityStatusReqID:$e$$239$$.target.$market_data_subscription_id_$ || parseInt(1E7 * Math.random(), 10), SubscriptionRequestType:"1", Instruments:$e$$239$$.target.$market_data_subscription_symbol_$})
};
$JSCompiler_prototypeAlias$$.$onUserSecurityStatusUnsubscribe_$ = function $$JSCompiler_prototypeAlias$$$$onUserSecurityStatusUnsubscribe_$$($e$$240$$) {
  this.$conn_$.sendMessage({MsgType:"e", SecurityStatusReqID:$e$$240$$.target.$market_data_subscription_id_$, SubscriptionRequestType:"2"})
};
$JSCompiler_prototypeAlias$$.$getPriceCurrencyFromSymbol$ = function $$JSCompiler_prototypeAlias$$$$getPriceCurrencyFromSymbol$$($symbol$$13$$) {
  return $symbol$$13$$.substr(3)
};
$JSCompiler_prototypeAlias$$.$getQtyCurrencyFromSymbol$ = function $$JSCompiler_prototypeAlias$$$$getQtyCurrencyFromSymbol$$($symbol$$14$$) {
  return $symbol$$14$$.substr(0, 3)
};
$JSCompiler_prototypeAlias$$.$onUserChangeBroker_$ = function $$JSCompiler_prototypeAlias$$$$onUserChangeBroker_$$($brokerID$$1_e$$241$$) {
  $brokerID$$1_e$$241$$ = $brokerID$$1_e$$241$$.target.$getBrokerID$();
  this.$model_$.set("SelectedBrokerID", $brokerID$$1_e$$241$$)
};
$JSCompiler_prototypeAlias$$.$onUserChangePassword_$ = function $$JSCompiler_prototypeAlias$$$$onUserChangePassword_$$($e$$242_new_password$$2$$) {
  var $password$$6$$ = $e$$242_new_password$$2$$.target.$getCurrentPassword$();
  $e$$242_new_password$$2$$ = $e$$242_new_password$$2$$.target.$getNewPassword$();
  this.$conn_$.$changePassword$(this.$model_$.get("Username"), $password$$6$$, $e$$242_new_password$$2$$)
};
$JSCompiler_prototypeAlias$$.$onChangePasswordResponse_$ = function $$JSCompiler_prototypeAlias$$$$onChangePasswordResponse_$$($dlg__e$$243_msg$$85$$) {
  $dlg__e$$243_msg$$85$$ = $dlg__e$$243_msg$$85$$.data;
  $dlg__e$$243_msg$$85$$.NeedSecondFactor ? ($dlg__e$$243_msg$$85$$ = this.$showDialog$("Verificaci\u00f3n de dos pasos", "", $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $goog$dom$appendChild$$($dlg__e$$243_msg$$85$$.$getContentElement$(), $goog$soy$renderAsElement$$($bitex$templates$GoogleAuthenticationCodeDialogContent$$, {id:"id_second_factor"})), $JSCompiler_StaticMethods_listenOnce$$(this.$getHandler$(), $dlg__e$$243_msg$$85$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$244_second_factor$$) {
    if("ok" == $e$$244_second_factor$$.key) {
      $e$$244_second_factor$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_second_factor"));
      var $password$$7$$ = this.$profileView_$.$getCurrentPassword$(), $new_password$$3$$ = this.$profileView_$.$getNewPassword$();
      this.$conn_$.$changePassword$(this.$model_$.get("Username"), $password$$7$$, $new_password$$3$$, $e$$244_second_factor$$)
    }
  })) : "MSG_SUCCESS_PASSWORD_CHANGE" == $dlg__e$$243_msg$$85$$.UserStatusText ? this.$showDialog$("Contrase\u00f1a cambiada!", "Success") : this.$showDialog$($dlg__e$$243_msg$$85$$.UserStatusText)
};
$JSCompiler_prototypeAlias$$.$onUserChangeMarket_$ = function $$JSCompiler_prototypeAlias$$$$onUserChangeMarket_$$($e$$245_symbol$$15$$) {
  $e$$245_symbol$$15$$ = $e$$245_symbol$$15$$.target.$getSymbol$();
  this.$model_$.set("SelectedSymbol", {$symbol$:$e$$245_symbol$$15$$, $qty_currency$:this.$currency_info_$[this.$getQtyCurrencyFromSymbol$($e$$245_symbol$$15$$)], $price_currency$:this.$currency_info_$[this.$getPriceCurrencyFromSymbol$($e$$245_symbol$$15$$)]})
};
$JSCompiler_prototypeAlias$$.$onBitexDepositMethodsResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexDepositMethodsResponse_$$($e$$246$$) {
  var $deposit_methods$$ = [];
  $goog$array$forEach$$($e$$246$$.data.DepositMethodGrp, function($deposit_method$$) {
    $deposit_methods$$.push({id:$deposit_method$$.DepositMethodID, description:$deposit_method$$.Description, $disclaimer$:$deposit_method$$.Disclaimer, type:$deposit_method$$.Type, $currency$:$deposit_method$$.Currency, $percent_fee$:$deposit_method$$.PercentFee, $fixed_fee$:$deposit_method$$.FixedFee, $deposit_limits$:$deposit_method$$.DepositLimits})
  });
  this.$model_$.set("DepositMethods", $deposit_methods$$)
};
$JSCompiler_prototypeAlias$$.$onBitexPasswordChangedOk_$ = function $$JSCompiler_prototypeAlias$$$$onBitexPasswordChangedOk_$$($e$$247_msg$$87$$) {
  $e$$247_msg$$87$$ = $e$$247_msg$$87$$.data;
  "MSG_SUCCESS_PASSWORD_CHANGE" == $e$$247_msg$$87$$.UserStatusText ? this.$showDialog$("Contrase\u00f1a cambiada!", "Success") : this.$showDialog$($e$$247_msg$$87$$.UserStatusText, "Success");
  this.$router_$.$setView$("signin")
};
$JSCompiler_prototypeAlias$$.$onBitexPasswordChangedError_$ = function $$JSCompiler_prototypeAlias$$$$onBitexPasswordChangedError_$$($e$$248$$) {
  "MSG_CHANGE_PASSWORD_INVALID_SECURITY_CODE" == $e$$248$$.data.UserStatusText ? this.$showDialog$("Invalid security code.", "Error") : this.$showDialog$("Hubo un error al cambiar la contrase\u00f1a", "Error")
};
$JSCompiler_prototypeAlias$$.$onBitexWithdrawIncrementalUpdate_$ = function $$JSCompiler_prototypeAlias$$$$onBitexWithdrawIncrementalUpdate_$$($e$$249_msg$$89$$) {
  $e$$249_msg$$89$$ = $e$$249_msg$$89$$.data;
  var $MSG_WITHDRAW_NOTIFICATION_USER_UNCONFIRMED_TITLE$$ = "Retiro solicitado [" + ($e$$249_msg$$89$$.WithdrawID + "]"), $MSG_WITHDRAW_NOTIFICATION_USER_CONFIRMED_TITLE$$ = "Retiro [" + ($e$$249_msg$$89$$.WithdrawID + "] confirmado"), $MSG_WITHDRAW_NOTIFICATION_USER_PROGRESS_TITLE$$ = "Retiro [" + ($e$$249_msg$$89$$.WithdrawID + "] en progreso"), $MSG_WITHDRAW_NOTIFICATION_USER_COMPLETE_TITLE$$ = "Retiro [" + ($e$$249_msg$$89$$.WithdrawID + "] completado"), $MSG_WITHDRAW_NOTIFICATION_USER_CANCEL_TITLE$$ = 
  "Retiro [" + ($e$$249_msg$$89$$.WithdrawID + "] cancelado"), $formatted_value$$2$$ = this.$formatCurrency$($e$$249_msg$$89$$.Amount / 1E8, $e$$249_msg$$89$$.Currency), $notification_type_title$$;
  switch($e$$249_msg$$89$$.Status) {
    case "0":
      $notification_type_title$$ = ["warning", $MSG_WITHDRAW_NOTIFICATION_USER_UNCONFIRMED_TITLE$$];
      break;
    case "1":
      $notification_type_title$$ = ["info", $MSG_WITHDRAW_NOTIFICATION_USER_CONFIRMED_TITLE$$];
      break;
    case "2":
      $notification_type_title$$ = ["info", $MSG_WITHDRAW_NOTIFICATION_USER_PROGRESS_TITLE$$];
      break;
    case "4":
      $notification_type_title$$ = ["success", $MSG_WITHDRAW_NOTIFICATION_USER_COMPLETE_TITLE$$];
      break;
    case "8":
      $notification_type_title$$ = ["danger", $MSG_WITHDRAW_NOTIFICATION_USER_CANCEL_TITLE$$]
  }
  $notification_type_title$$ != $JSCompiler_alias_NULL$$ && this.$showNotification$($notification_type_title$$[0], $notification_type_title$$[1], $formatted_value$$2$$)
};
$JSCompiler_prototypeAlias$$.$onBitexVerifyCustomerUpdate_$ = function $$JSCompiler_prototypeAlias$$$$onBitexVerifyCustomerUpdate_$$($e$$250_profile$$2$$) {
  var $MSG_ACCOUNT_VERIFIED_CONTENT_msg$$90$$ = $e$$250_profile$$2$$.data;
  $e$$250_profile$$2$$ = this.$model_$.get("Profile");
  var $old_verified$$ = $e$$250_profile$$2$$.Verified;
  $e$$250_profile$$2$$.Verified = $MSG_ACCOUNT_VERIFIED_CONTENT_msg$$90$$.Verified;
  $e$$250_profile$$2$$.VerificationData = $MSG_ACCOUNT_VERIFIED_CONTENT_msg$$90$$.VerificationData;
  this.$model_$.set("Profile", $e$$250_profile$$2$$);
  this.$model_$.set("IsVerified", 1 < $e$$250_profile$$2$$.Verified);
  $MSG_ACCOUNT_VERIFIED_CONTENT_msg$$90$$ = "Su cuenta ha sido verificada. Nivel- " + $e$$250_profile$$2$$.Verified;
  0 == $old_verified$$ && 1 == $e$$250_profile$$2$$.Verified ? (this.$router_$.$setView$("offerbook"), this.$showNotification$("success", "Verificaci\u00f3n:", "Enviar al corredor.")) : 2 <= $e$$250_profile$$2$$.Verified && this.$showNotification$("success", "Verificaci\u00f3n:", $MSG_ACCOUNT_VERIFIED_CONTENT_msg$$90$$)
};
$JSCompiler_prototypeAlias$$.$onBitexExecutionReport_$ = function $$JSCompiler_prototypeAlias$$$$onBitexExecutionReport_$$($e$$251_msg$$91$$) {
  $e$$251_msg$$91$$ = $e$$251_msg$$91$$.data;
  var $MSG_ORDER_EXECUTION_TITLE_NOTIFICATION$$ = "Orden " + $e$$251_msg$$91$$.OrderID;
  switch($e$$251_msg$$91$$.ExecType) {
    case "1":
      this.$showNotification$("success", $MSG_ORDER_EXECUTION_TITLE_NOTIFICATION$$, "Parcialmente completado");
      break;
    case "2":
      this.$showNotification$("success", $MSG_ORDER_EXECUTION_TITLE_NOTIFICATION$$, "completado");
      break;
    case "4":
      this.$showNotification$("success", $MSG_ORDER_EXECUTION_TITLE_NOTIFICATION$$, "cancelado")
  }
};
$JSCompiler_prototypeAlias$$.$onBitexTwoFactorSecretResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexTwoFactorSecretResponse_$$($e$$252_msg$$92$$) {
  $e$$252_msg$$92$$ = $e$$252_msg$$92$$.data;
  this.$model_$.set("TwoFactorSecret", $e$$252_msg$$92$$.TwoFactorSecret);
  this.$model_$.set("TwoFactorEnabled", $e$$252_msg$$92$$.TwoFactorEnabled)
};
$JSCompiler_prototypeAlias$$.$onBitexPositionResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexPositionResponse_$$($e$$253_msg$$93$$) {
  $e$$253_msg$$93$$ = $e$$253_msg$$93$$.data;
  delete $e$$253_msg$$93$$.MsgType;
  delete $e$$253_msg$$93$$.PositionReqID;
  var $clientID$$2$$ = $e$$253_msg$$93$$.ClientID;
  $goog$object$forEach$$($e$$253_msg$$93$$, function($positions$$, $broker$$13$$) {
    $goog$object$forEach$$($positions$$, function($position$$1$$, $currency$$16$$) {
      $position$$1$$ /= 1E8;
      var $position_key$$ = "position_" + $broker$$13$$ + ":" + $clientID$$2$$ + "_" + $currency$$16$$;
      this.$model_$.set($position_key$$, $position$$1$$);
      $position$$1$$ ? this.$model_$.set("formatted_" + $position_key$$, this.$formatCurrency$($position$$1$$, $currency$$16$$, $JSCompiler_alias_TRUE$$)) : this.$model_$.set("formatted_" + $position_key$$, "")
    }, this)
  }, this)
};
$JSCompiler_prototypeAlias$$.$onBitexBalanceResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexBalanceResponse_$$($e$$254_msg$$94$$) {
  $e$$254_msg$$94$$ = $e$$254_msg$$94$$.data;
  delete $e$$254_msg$$94$$.MsgType;
  delete $e$$254_msg$$94$$.BalanceReqID;
  var $clientID$$3$$ = $e$$254_msg$$94$$.ClientID;
  $goog$object$forEach$$($e$$254_msg$$94$$, function($balances$$, $broker$$14$$) {
    $goog$object$forEach$$($balances$$, function($balance$$1$$, $currency$$17$$) {
      $balance$$1$$ /= 1E8;
      var $balance_key$$1$$ = "balance_" + $broker$$14$$ + ":" + $clientID$$3$$ + "_" + $currency$$17$$;
      this.$model_$.set($balance_key$$1$$, $balance$$1$$);
      this.$model_$.set("formatted_" + $balance_key$$1$$, this.$formatCurrency$($balance$$1$$, $currency$$17$$, $JSCompiler_alias_TRUE$$))
    }, this)
  }, this)
};
$JSCompiler_prototypeAlias$$.$onUserWithdrawRequest_$ = function $$JSCompiler_prototypeAlias$$$$onUserWithdrawRequest_$$($e$$255_withdraw_methods$$2$$) {
  var $currency$$18$$ = $e$$255_withdraw_methods$$2$$.target.$currency_$;
  $e$$255_withdraw_methods$$2$$ = this.$model_$.get("Broker").WithdrawStructure[$currency$$18$$];
  var $dialogContent_method_element_id$$ = $goog$string$getRandomString$$(), $withdraw_amount_element_id$$ = $goog$string$getRandomString$$(), $fixed_fee_element_id$$ = $goog$string$getRandomString$$(), $percent_fee_element_id$$ = $goog$string$getRandomString$$(), $total_fees_element_id$$ = $goog$string$getRandomString$$(), $net_value_element_id$$ = $goog$string$getRandomString$$(), $fmt$$2$$ = new $goog$i18n$NumberFormat$$(1), $dialogContent_method_element_id$$ = $bitex$templates$DepositWithdrawDialogContent$$({$fmt$:$fmt$$2$$, 
  $side$:"client", $currency$:$currency$$18$$, $currencySign$:this.$getCurrencySign$($currency$$18$$), $methods$:$e$$255_withdraw_methods$$2$$, $methodID$:$dialogContent_method_element_id$$, $showFeeDataEntry$:$JSCompiler_alias_FALSE$$, $amountID$:$withdraw_amount_element_id$$, $fixedFeeID$:$fixed_fee_element_id$$, $percentFeeID$:$percent_fee_element_id$$, $totalFeesID$:$total_fees_element_id$$, $netValueID$:$net_value_element_id$$, $hideNetAmount$:$JSCompiler_alias_TRUE$$}), $dlg$$2$$ = this.$showDialog$($dialogContent_method_element_id$$, 
  "Retiro " + this.$getCurrencyDescription$($currency$$18$$), $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $handler$$102$$ = this.$getHandler$();
  $goog$array$forEach$$($e$$255_withdraw_methods$$2$$, function($withdraw_method$$1$$) {
    var $method_id$$ = $withdraw_method$$1$$.method;
    $JSCompiler_StaticMethods_listen$$($handler$$102$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($method_id$$ + "_" + $withdraw_amount_element_id$$)), $goog$events$InputHandler$EventType$INPUT$$, function() {
      this.$doCalculateFees_$($method_id$$ + "_" + $withdraw_amount_element_id$$, $method_id$$ + "_" + $fixed_fee_element_id$$, $method_id$$ + "_" + $percent_fee_element_id$$, $currency$$18$$, $method_id$$ + "_" + $total_fees_element_id$$, $method_id$$ + "_" + $net_value_element_id$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$)
    }, this)
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$102$$, $dlg$$2$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$257$$) {
    if("ok" == $e$$257$$.key) {
      var $form_element$$1_withdraw_data$$ = $goog$dom$getFirstElementChild$$($dlg$$2$$.$getContentElement$()), $amount$$5_uf$$1$$ = new $uniform$Uniform$$;
      $amount$$5_uf$$1$$.$decorate$($form_element$$1_withdraw_data$$);
      error_list = $JSCompiler_StaticMethods_validate$$($amount$$5_uf$$1$$);
      if(0 < error_list.length) {
        $goog$array$forEach$$(error_list, function($error_msg$$2$$) {
          this.$showNotification$("error", "Error: " + $error_msg$$2$$)
        }, this), $e$$257$$.stopPropagation(), $e$$257$$.preventDefault()
      }else {
        $form_element$$1_withdraw_data$$ = $bitex$util$getFormAsJSON$$($form_element$$1_withdraw_data$$);
        $amount$$5_uf$$1$$ = $goog$string$toNumber$$($form_element$$1_withdraw_data$$.Amount);
        delete $form_element$$1_withdraw_data$$.Amount;
        var $method$$8$$ = $form_element$$1_withdraw_data$$.Method;
        delete $form_element$$1_withdraw_data$$.Method;
        var $currency$$19$$ = $form_element$$1_withdraw_data$$.Currency;
        delete $form_element$$1_withdraw_data$$.Currency;
        this.$conn_$.$requestWithdraw$($e$$257$$.target.$request_id_$, parseInt(1E8 * $amount$$5_uf$$1$$, 10), $method$$8$$, $currency$$19$$, $form_element$$1_withdraw_data$$)
      }
    }
  }, this)
};
$JSCompiler_prototypeAlias$$.$onUserConfirmWithdraw_$ = function $$JSCompiler_prototypeAlias$$$$onUserConfirmWithdraw_$$($e$$258$$) {
  this.$conn_$.$confirmWithdraw$($e$$258$$.target.$confirmation_token_$)
};
$JSCompiler_prototypeAlias$$.$onBrokerResetUserTwoFactor_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerResetUserTwoFactor_$$($client_id$$1_e$$259$$) {
  $client_id$$1_e$$259$$ = $client_id$$1_e$$259$$.target.$getClientID$();
  $JSCompiler_StaticMethods_updateUserProfile$$(this.$conn_$, {TwoFactorEnabled:$JSCompiler_alias_FALSE$$}, $client_id$$1_e$$259$$)
};
$JSCompiler_prototypeAlias$$.$onBrokerSetWithdrawEmailConfirmation_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerSetWithdrawEmailConfirmation_$$($e$$260$$) {
  var $client_id$$2$$ = $e$$260$$.target.$getClientID$();
  $JSCompiler_StaticMethods_updateUserProfile$$(this.$conn_$, $e$$260$$.target.$verification_data_$, $client_id$$2$$)
};
$JSCompiler_prototypeAlias$$.$onBrokerSetUserNotVerified_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerSetUserNotVerified_$$($client_id$$3_e$$261$$) {
  var $request_id$$ = $client_id$$3_e$$261$$.target.$request_id_$;
  $client_id$$3_e$$261$$ = $client_id$$3_e$$261$$.target.$getClientID$();
  this.$conn_$.$verifyCustomer$($request_id$$, $client_id$$3_e$$261$$, 0, "Set as Not verified by the broker")
};
$JSCompiler_prototypeAlias$$.$onBrokerSetUserAsVerified_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerSetUserAsVerified_$$($e$$262$$) {
  var $request_id$$1$$ = $e$$262$$.target.$request_id_$, $client_id$$4$$ = $e$$262$$.target.$getClientID$();
  this.$conn_$.$verifyCustomer$($request_id$$1$$, $client_id$$4$$, 2, $e$$262$$.target.$verification_data_$)
};
$JSCompiler_prototypeAlias$$.$onBrokerProcessWithdraw_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerProcessWithdraw_$$($e$$263_handler$$103$$) {
  var $valueFormatter$$ = new $goog$i18n$NumberFormat$$(1), $withdraw_data$$1$$ = $e$$263_handler$$103$$.target.$getWithdrawData$(), $request_id$$2$$ = $e$$263_handler$$103$$.target.$request_id_$, $action$$3$$ = $e$$263_handler$$103$$.target.$withdraw_action_$;
  $e$$263_handler$$103$$ = this.$getHandler$();
  var $feeDialogContent_formatted_amount_model$$36$$ = this.$model_$, $method_element_id$$1$$ = $goog$string$getRandomString$$(), $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$ = $goog$string$getRandomString$$(), $fixed_fee_element_id$$1$$ = $goog$string$getRandomString$$(), $percent_fee_element_id$$1$$ = $goog$string$getRandomString$$(), $total_fees_element_id$$1$$ = $goog$string$getRandomString$$(), $net_value_element_id$$1$$ = $goog$string$getRandomString$$();
  if("CANCEL" === $action$$3$$) {
    var $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$ = $bitex$templates$CancelWithdrawDialogContent$$(), $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$ = this.$showDialog$($cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, "Cancelar retiro", $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $select_reason_el$$ = $goog$dom$getElement$$("id_select_reason"), 
    $reason_el$$1$$ = $goog$dom$getElement$$("id_custom_reason_text");
    $JSCompiler_StaticMethods_listen$$($e$$263_handler$$103$$, $select_reason_el$$, "change", function() {
      var $reason_id$$1$$ = $goog$string$toNumber$$($goog$dom$forms$getValue$$($select_reason_el$$));
      $goog$style$showElement$$($reason_el$$1$$, 0 === $reason_id$$1$$)
    });
    $JSCompiler_StaticMethods_listen$$($e$$263_handler$$103$$, $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$265$$) {
      if("ok" == $e$$265$$.key) {
        var $reason_id$$2$$ = $goog$string$toNumber$$($goog$dom$forms$getValue$$($select_reason_el$$)), $reason$$1$$;
        if(0 === $reason_id$$2$$ && ($reason$$1$$ = $goog$string$trim$$($goog$dom$forms$getValue$$($reason_el$$1$$)), $goog$string$isEmpty$$($reason$$1$$))) {
          $e$$265$$.stopPropagation();
          $e$$265$$.preventDefault();
          $goog$dom$getElement$$("id_custom_reason_text").focus();
          return
        }
        this.$conn_$.$processWithdraw$($request_id$$2$$, $action$$3$$, $withdraw_data$$1$$.WithdrawID, $reason_id$$2$$, $reason$$1$$)
      }
    }, this)
  }else {
    if("PROGRESS" === $action$$3$$) {
      var $feeDialogContent_formatted_amount_model$$36$$ = this.$formatCurrency$($withdraw_data$$1$$.Amount / 1E8, $withdraw_data$$1$$.Currency), $feeDialogContent_formatted_amount_model$$36$$ = $bitex$templates$FeesForm$$({$amount$:$withdraw_data$$1$$.Amount, $formattedAmount$:$feeDialogContent_formatted_amount_model$$36$$, $currency$:$withdraw_data$$1$$.Currency, $currencySign$:this.$getCurrencySign$($withdraw_data$$1$$.Currency), $amountID$:$cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, 
      $fixedFeeID$:$fixed_fee_element_id$$1$$, $percentFeeID$:$percent_fee_element_id$$1$$, $totalFeesID$:$total_fees_element_id$$1$$, $netValueID$:$net_value_element_id$$1$$, $fixedFee$:$valueFormatter$$.$format$($withdraw_data$$1$$.FixedFee / 1E8), $percentFee$:$valueFormatter$$.$format$($withdraw_data$$1$$.PercentFee)}), $feeDlg$$ = this.$showDialog$($feeDialogContent_formatted_amount_model$$36$$, "Ajustar " + (this.$getCurrencyDescription$($withdraw_data$$1$$.Currency) + " retiro como 'en curso'"), 
      $bootstrap$Dialog$ButtonSet$createOkCancel$$());
      this.$doCalculateFees_$($cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $fixed_fee_element_id$$1$$, $percent_fee_element_id$$1$$, $withdraw_data$$1$$.Currency, $total_fees_element_id$$1$$, $net_value_element_id$$1$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$);
      $JSCompiler_StaticMethods_listen$$($e$$263_handler$$103$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$)), $goog$events$InputHandler$EventType$INPUT$$, $goog$bind$$(this.$doCalculateFees_$, this, $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $fixed_fee_element_id$$1$$, $percent_fee_element_id$$1$$, $withdraw_data$$1$$.Currency, $total_fees_element_id$$1$$, 
      $net_value_element_id$$1$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$));
      $JSCompiler_StaticMethods_listen$$($e$$263_handler$$103$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($percent_fee_element_id$$1$$)), $goog$events$InputHandler$EventType$INPUT$$, $goog$bind$$(this.$doCalculateFees_$, this, $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $fixed_fee_element_id$$1$$, $percent_fee_element_id$$1$$, $withdraw_data$$1$$.Currency, $total_fees_element_id$$1$$, $net_value_element_id$$1$$, $JSCompiler_alias_TRUE$$, 
      $JSCompiler_alias_FALSE$$));
      $JSCompiler_StaticMethods_listen$$($e$$263_handler$$103$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($fixed_fee_element_id$$1$$)), $goog$events$InputHandler$EventType$INPUT$$, $goog$bind$$(this.$doCalculateFees_$, this, $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $fixed_fee_element_id$$1$$, $percent_fee_element_id$$1$$, $withdraw_data$$1$$.Currency, $total_fees_element_id$$1$$, $net_value_element_id$$1$$, $JSCompiler_alias_TRUE$$, 
      $JSCompiler_alias_FALSE$$));
      $JSCompiler_StaticMethods_listen$$($e$$263_handler$$103$$, $feeDlg$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$266$$) {
        if("ok" == $e$$266$$.key) {
          var $form_data$$ = $bitex$util$getFormAsJSON$$($goog$dom$getFirstElementChild$$($feeDlg$$.$getContentElement$())), $fixed_fee$$2_percent_fee$$1$$ = $form_data$$.PercentFee, $pos$$14$$ = [0], $percent_fee_value$$ = $valueFormatter$$.parse($fixed_fee$$2_percent_fee$$1$$, $pos$$14$$);
          isNaN($percent_fee_value$$) && ($percent_fee_value$$ = 0);
          if($pos$$14$$[0] != $fixed_fee$$2_percent_fee$$1$$.length || isNaN($percent_fee_value$$) || 0 > $percent_fee_value$$) {
            $e$$266$$.stopPropagation(), $e$$266$$.preventDefault()
          }else {
            var $fixed_fee$$2_percent_fee$$1$$ = $form_data$$.FixedFee, $pos$$14$$ = [0], $fixed_fee_value$$ = $valueFormatter$$.parse($fixed_fee$$2_percent_fee$$1$$, $pos$$14$$);
            isNaN($fixed_fee_value$$) && ($fixed_fee_value$$ = 0);
            $pos$$14$$[0] != $fixed_fee$$2_percent_fee$$1$$.length || isNaN($fixed_fee_value$$) || 0 > $fixed_fee_value$$ ? ($e$$266$$.stopPropagation(), $e$$266$$.preventDefault()) : this.$conn_$.$processWithdraw$($request_id$$2$$, $action$$3$$, $withdraw_data$$1$$.WithdrawID, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $form_data$$, $percent_fee_value$$, 1E8 * $fixed_fee_value$$)
          }
        }
      })
    }else {
      if("COMPLETE" === $action$$3$$) {
        var $fmt$$3$$ = new $goog$i18n$NumberFormat$$(1), $cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$ = $bitex$templates$DepositWithdrawDialogContent$$({$fmt$:$fmt$$3$$, $side$:"broker", $currency$:$withdraw_data$$1$$.Currency, $currencySign$:this.$getCurrencySign$($withdraw_data$$1$$.Currency), $force_method$:$withdraw_data$$1$$.Method, $amount$:$withdraw_data$$1$$.Amount, $methods$:$feeDialogContent_formatted_amount_model$$36$$.get("Profile").WithdrawStructure[$withdraw_data$$1$$.Currency], 
        $methodID$:$method_element_id$$1$$, $showFeeDataEntry$:$JSCompiler_alias_FALSE$$, $amountID$:$cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, $fixedFeeID$:$fixed_fee_element_id$$1$$, $percentFeeID$:$percent_fee_element_id$$1$$, $totalFeesID$:$total_fees_element_id$$1$$, $netValueID$:$net_value_element_id$$1$$, $hideNetAmount$:$JSCompiler_alias_FALSE$$}), $dlg$$3$$ = this.$showDialog$($cancelWithdrawDlg_cancel_reason_dialog_content_dialogContent$$1_withdraw_amount_element_id$$1$$, 
        "Confirmar " + (this.$getCurrencyDescription$($withdraw_data$$1$$.Currency) + " retiro"), $bootstrap$Dialog$ButtonSet$createOkCancel$$());
        $JSCompiler_StaticMethods_listen$$($e$$263_handler$$103$$, $dlg$$3$$, $goog$ui$Dialog$EventType$SELECT$$, function($broker_withdraw_data_e$$267$$) {
          "ok" == $broker_withdraw_data_e$$267$$.key && ($broker_withdraw_data_e$$267$$ = $bitex$util$getFormAsJSON$$($goog$dom$getFirstElementChild$$($dlg$$3$$.$getContentElement$())), this.$conn_$.$processWithdraw$($request_id$$2$$, $action$$3$$, $withdraw_data$$1$$.WithdrawID, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $broker_withdraw_data_e$$267$$))
        }, this)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$onUserOrderEntry_$ = function $$JSCompiler_prototypeAlias$$$$onUserOrderEntry_$$($e$$268_opt_client_id$$inline_1042$$) {
  var $MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1037$$ = "COMPRAR";
  "2" == $e$$268_opt_client_id$$inline_1042$$.target.$getSide$() && ($MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1037$$ = "VENDER");
  $MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1037$$ += " " + ($e$$268_opt_client_id$$inline_1042$$.target.$getAmount$() + (" " + ($e$$268_opt_client_id$$inline_1042$$.target.$getSymbol$() + (" @ " + $e$$268_opt_client_id$$inline_1042$$.target.$getPrice$()))));
  this.$showNotification$("info", "Enviando orden...", $MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1037$$);
  var $MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1037$$ = $e$$268_opt_client_id$$inline_1042$$.target.$getSymbol$(), $qty$$inline_1038$$ = $e$$268_opt_client_id$$inline_1042$$.target.$getAmount$(), $price$$inline_1039$$ = $e$$268_opt_client_id$$inline_1042$$.target.$getPrice$(), $side$$inline_1040$$ = $e$$268_opt_client_id$$inline_1042$$.target.$getSide$(), $broker_id$$inline_1041$$ = $e$$268_opt_client_id$$inline_1042$$.target.$getBrokerID$();
  $e$$268_opt_client_id$$inline_1042$$ = $e$$268_opt_client_id$$inline_1042$$.target.$getClientID$();
  $JSCompiler_StaticMethods_sendOrder_$$(this.$conn_$, $MSG_SEND_ORDER_NOTIFICATION_CONTENT_side_msg_symbol$$inline_1037$$, $qty$$inline_1038$$, $price$$inline_1039$$, $side$$inline_1040$$, $broker_id$$inline_1041$$, $e$$268_opt_client_id$$inline_1042$$, $JSCompiler_alias_VOID$$)
};
$JSCompiler_prototypeAlias$$.$onUserCancelOrder_$ = function $$JSCompiler_prototypeAlias$$$$onUserCancelOrder_$$($e$$269$$) {
  $e$$269$$.target.$client_order_id_$ != $JSCompiler_alias_NULL$$ ? this.$showNotification$("info", "Cancelando orden...", ":" + $e$$269$$.target.$client_order_id_$) : this.$showNotification$("info", "Cancelando orden...", ":" + $e$$269$$.target.$order_id_$);
  this.$conn_$.$cancelOrder$($e$$269$$.target.$client_order_id_$, $e$$269$$.target.$order_id_$)
};
$JSCompiler_prototypeAlias$$.$onShowReceipt_$ = function $$JSCompiler_prototypeAlias$$$$onShowReceipt_$$($e$$270_receiptData$$) {
  $e$$270_receiptData$$ = $e$$270_receiptData$$.target.$receipt_data_$;
  var $MSG_SHOW_DEPOSIT_RECEIPT_DIALOG_TITLE$$ = "Submission " + $e$$270_receiptData$$.SubmissionID;
  this.$showDialog$($bitex$templates$DepositReceiptDialogContent$$({$depositReceiptList$:$e$$270_receiptData$$.DepositReceipt}), $MSG_SHOW_DEPOSIT_RECEIPT_DIALOG_TITLE$$, $JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$))
};
$JSCompiler_prototypeAlias$$.$onSuggestTrustedAddress_$ = function $$JSCompiler_prototypeAlias$$$$onSuggestTrustedAddress_$$($MSG_ENABLE_INSTANT_DEPOSIT_DIALOG_TITLE_e$$271$$) {
  var $msg$$95$$ = $MSG_ENABLE_INSTANT_DEPOSIT_DIALOG_TITLE_e$$271$$.data;
  if(this.$model_$.get("IsVerified")) {
    $MSG_ENABLE_INSTANT_DEPOSIT_DIALOG_TITLE_e$$271$$ = "Enable " + (this.$getCurrencyDescription$($msg$$95$$.Currency) + " instant deposit?");
    var $dlg$$5$$ = this.$showDialog$($bitex$templates$ConfirmTrustedAddressContentDialog$$({data:$msg$$95$$}), $MSG_ENABLE_INSTANT_DEPOSIT_DIALOG_TITLE_e$$271$$, $bootstrap$Dialog$ButtonSet$createYesNoCancel$$());
    $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $dlg$$5$$, $goog$ui$Dialog$EventType$SELECT$$, function($address_label_el_e$$272$$) {
      if("yes" == $address_label_el_e$$272$$.key) {
        $address_label_el_e$$272$$.preventDefault();
        $address_label_el_e$$272$$.stopPropagation();
        $address_label_el_e$$272$$ = $goog$dom$getElementByClass$$("confirm-trusted-address-label", $dlg$$5$$.$getContentElement$());
        var $label$$7$$;
        $address_label_el_e$$272$$ != $JSCompiler_alias_NULL$$ && ($label$$7$$ = $goog$dom$forms$getValue$$($address_label_el_e$$272$$));
        this.$conn_$.sendMessage({MsgType:"U44", ConfirmTrustedAddressReqID:parseInt(1E7 * Math.random(), 10), Address:$msg$$95$$.Address, Currency:$msg$$95$$.Currency, Label:$label$$7$$})
      }
      $dlg$$5$$.$dispose$()
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$onUserShowQr_$ = function $$JSCompiler_prototypeAlias$$$$onUserShowQr_$$($e$$273_handler$$105$$) {
  var $qrData$$ = $e$$273_handler$$105$$.target.$qr_data_$, $MSG_SHOW_QR_CURRENCY_DEPOSIT_DIALOG_TITLE$$ = this.$getCurrencyDescription$($qrData$$.Currency) + " depositar", $dialog_title$$ = this.$getCurrencyDescription$($qrData$$.Currency) + " retirar";
  "DEPOSIT" === $e$$273_handler$$105$$.target.$qr_data_verb_$ && ($dialog_title$$ = $MSG_SHOW_QR_CURRENCY_DEPOSIT_DIALOG_TITLE$$);
  var $dlg$$6$$ = this.$showDialog$($bitex$templates$CryptoCurrencyQRContentDialog$$({data:$qrData$$}), $dialog_title$$, $JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$));
  $e$$273_handler$$105$$ = this.$getHandler$();
  var $input_address$$ = $qrData$$.Wallet;
  $JSCompiler_StaticMethods_listenOnce$$($e$$273_handler$$105$$, this.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$, function($e$$274_refresh_msg$$) {
    $e$$274_refresh_msg$$ = $e$$274_refresh_msg$$.data;
    $e$$274_refresh_msg$$.Data.InputAddress === $input_address$$ && $e$$274_refresh_msg$$.Data.Confirmations != $JSCompiler_alias_NULL$$ && "0" == $e$$274_refresh_msg$$.Data.Confirmations && $dlg$$6$$.$dispose$()
  })
};
$JSCompiler_prototypeAlias$$.$onUserUploadReceipt_$ = function $$JSCompiler_prototypeAlias$$$$onUserUploadReceipt_$$($deposit_data_e$$275$$) {
  var $model$$38$$ = this.$model_$;
  $deposit_data_e$$275$$ = $deposit_data_e$$275$$.target.$getDepositData$();
  var $broker$$15_upload_form_url$$ = $model$$38$$.get("Broker");
  $broker$$15_upload_form_url$$ != $JSCompiler_alias_NULL$$ && ($broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.UploadForm, $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{UserID}}", $model$$38$$.get("UserID")), $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{Username}}", $model$$38$$.get("Username")), $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{BrokerID}}", $model$$38$$.get("Broker").BrokerID), $broker$$15_upload_form_url$$ = 
  $broker$$15_upload_form_url$$.replace("{{BrokerUsername}}", $model$$38$$.get("Broker").ShortName), $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{Email}}", $model$$38$$.get("Email")), $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{DepositMethod}}", $deposit_data_e$$275$$.DepositMethodName), $broker$$15_upload_form_url$$ = $broker$$15_upload_form_url$$.replace("{{ControlNumber}}", $deposit_data_e$$275$$.ControlNumber), $broker$$15_upload_form_url$$ = 
  $broker$$15_upload_form_url$$.replace("{{DepositID}}", $deposit_data_e$$275$$.DepositID), window.open($broker$$15_upload_form_url$$, "blank", "scrollbars=yes,toolbar=no,width=700,height=500"))
};
$JSCompiler_prototypeAlias$$.$doCalculateFees_$ = function $$JSCompiler_prototypeAlias$$$$doCalculateFees_$$($amount$$6_amount_element_id$$, $fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$, $percent_fee$$2_percent_fee_element_id$$2_percent_fee_value$$1$$, $currency$$20_formatted_net_amount$$, $opt_fee_value_element_id$$, $opt_net_amount_element_id$$, $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$, $opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$) {
  var $add_fees_formatted_total_fee$$ = $JSCompiler_alias_TRUE$$;
  $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ === $JSCompiler_alias_FALSE$$ && ($add_fees_formatted_total_fee$$ = $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$);
  $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ = $JSCompiler_alias_TRUE$$;
  $opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$ === $JSCompiler_alias_FALSE$$ && ($is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ = $opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$);
  $opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$ = new $goog$i18n$NumberFormat$$(1);
  var $pos$$15$$ = [0], $raw_amount$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($amount$$6_amount_element_id$$));
  $amount$$6_amount_element_id$$ = $opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$.parse($raw_amount$$, $pos$$15$$);
  if(!($pos$$15$$[0] != $raw_amount$$.length || isNaN($amount$$6_amount_element_id$$) || 0 >= $amount$$6_amount_element_id$$)) {
    return $amount$$6_amount_element_id$$ *= 1E8, $percent_fee$$2_percent_fee_element_id$$2_percent_fee_value$$1$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($percent_fee$$2_percent_fee_element_id$$2_percent_fee_value$$1$$)), $pos$$15$$ = [0], $percent_fee$$2_percent_fee_element_id$$2_percent_fee_value$$1$$ = $opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$.parse($percent_fee$$2_percent_fee_element_id$$2_percent_fee_value$$1$$, $pos$$15$$), isNaN($percent_fee$$2_percent_fee_element_id$$2_percent_fee_value$$1$$) && 
    ($percent_fee$$2_percent_fee_element_id$$2_percent_fee_value$$1$$ = 0), $fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$)), $pos$$15$$ = [0], $fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$ = $opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$.parse($fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$, $pos$$15$$), isNaN($fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$) && 
    ($fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$ = 0), $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ || ($fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$ *= 1E8), $opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$ = ($amount$$6_amount_element_id$$ - $fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$) * ($percent_fee$$2_percent_fee_element_id$$2_percent_fee_value$$1$$ / 100) + $fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$, $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ = 
    $amount$$6_amount_element_id$$ - $opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$, $add_fees_formatted_total_fee$$ && ($is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ = $amount$$6_amount_element_id$$ + $opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$), $opt_fee_value_element_id$$ != $JSCompiler_alias_NULL$$ && ($add_fees_formatted_total_fee$$ = this.$formatCurrency$($opt_is_fixed_fee_in_satoshis_total_fees_valueFormatter$$1$$ / 1E8, $currency$$20_formatted_net_amount$$, 
    $JSCompiler_alias_TRUE$$), $goog$dom$setTextContent$$($goog$dom$getElement$$($opt_fee_value_element_id$$), $add_fees_formatted_total_fee$$)), $opt_net_amount_element_id$$ != $JSCompiler_alias_NULL$$ && ($currency$$20_formatted_net_amount$$ = this.$formatCurrency$($is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$ / 1E8, $currency$$20_formatted_net_amount$$, $JSCompiler_alias_TRUE$$), $goog$dom$setTextContent$$($goog$dom$getElement$$($opt_net_amount_element_id$$), $currency$$20_formatted_net_amount$$)), 
    [$amount$$6_amount_element_id$$, $percent_fee$$2_percent_fee_element_id$$2_percent_fee_value$$1$$, $fixed_fee$$3_fixed_fee_element_id$$2_fixed_fee_value$$1$$, $is_fixed_fee_in_satoshis_net_amount_opt_add_fees$$]
  }
};
$JSCompiler_prototypeAlias$$.$onProcessDeposit_$ = function $$JSCompiler_prototypeAlias$$$$onProcessDeposit_$$($e$$276_handler$$106$$) {
  var $deposit_data$$1$$ = $e$$276_handler$$106$$.target.$getDepositData$(), $request_id$$3$$ = $e$$276_handler$$106$$.target.$request_id_$, $action$$4$$ = $e$$276_handler$$106$$.target.$getDepositAction$();
  $e$$276_handler$$106$$ = this.$getHandler$();
  if("CANCEL" === $action$$4$$) {
    var $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$ = $bitex$templates$CancelDepositDialogContent$$(), $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$ = this.$showDialog$($cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, "Cancelar deposito", $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $select_reason_el$$1$$ = $goog$dom$getElement$$("id_select_reason"), $reason_el$$2$$ = $goog$dom$getElement$$("id_custom_reason_text");
    $JSCompiler_StaticMethods_listen$$($e$$276_handler$$106$$, $select_reason_el$$1$$, "change", function() {
      var $reason_id$$3$$ = $goog$string$toNumber$$($goog$dom$forms$getValue$$($select_reason_el$$1$$));
      $goog$style$showElement$$($reason_el$$2$$, 0 === $reason_id$$3$$)
    });
    $JSCompiler_StaticMethods_listen$$($e$$276_handler$$106$$, $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$278$$) {
      if("ok" == $e$$278$$.key) {
        var $reason_id$$4$$ = $goog$string$toNumber$$($goog$dom$forms$getValue$$($select_reason_el$$1$$)), $reason$$2$$;
        if(0 === $reason_id$$4$$ && ($reason$$2$$ = $goog$string$trim$$($goog$dom$forms$getValue$$($reason_el$$2$$)), $goog$string$isEmpty$$($reason$$2$$))) {
          $e$$278$$.stopPropagation();
          $e$$278$$.preventDefault();
          $goog$dom$getElement$$("id_custom_reason_text").focus();
          return
        }
        this.$conn_$.$processDeposit$($request_id$$3$$, $action$$4$$, $JSCompiler_alias_VOID$$, $deposit_data$$1$$.DepositID, $reason_id$$4$$, $reason$$2$$)
      }
    }, this)
  }else {
    if("PROGRESS" === $action$$4$$) {
      this.$conn_$.$processDeposit$($request_id$$3$$, $action$$4$$, $JSCompiler_alias_VOID$$, $deposit_data$$1$$.DepositID)
    }else {
      if("COMPLETE" === $action$$4$$) {
        var $valueFormatter$$2$$ = new $goog$i18n$NumberFormat$$(1), $paid_value_element_id$$ = $goog$string$getRandomString$$(), $fixed_fee_element_id$$3$$ = $goog$string$getRandomString$$(), $percent_fee_element_id$$3$$ = $goog$string$getRandomString$$(), $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$ = $goog$string$getRandomString$$(), $net_value_element_id$$2$$ = $goog$string$getRandomString$$(), $confirmDepositDlg_confirm_deposit_dialog_content_control_number$$ = 
        $deposit_data$$1$$.ControlNumber;
        "CRY" == $deposit_data$$1$$.Type && ($confirmDepositDlg_confirm_deposit_dialog_content_control_number$$ = $deposit_data$$1$$.Data.InputAddress);
        $confirmDepositDlg_confirm_deposit_dialog_content_control_number$$ = $bitex$templates$BrokerConfirmDepositContent$$({$id_value$:$paid_value_element_id$$, $fixedFeeID$:$fixed_fee_element_id$$3$$, $percentFeeID$:$percent_fee_element_id$$3$$, $totalFeesID$:$cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $netValueID$:$net_value_element_id$$2$$, $controlNumber$:$confirmDepositDlg_confirm_deposit_dialog_content_control_number$$, $currencySign$:this.$getCurrencySign$($deposit_data$$1$$.Currency), 
        value:$valueFormatter$$2$$.$format$($deposit_data$$1$$.Value / 1E8), $percentFee$:$valueFormatter$$2$$.$format$($deposit_data$$1$$.PercentFee), $fixedFee$:$valueFormatter$$2$$.$format$($deposit_data$$1$$.FixedFee / 1E8)});
        $confirmDepositDlg_confirm_deposit_dialog_content_control_number$$ = this.$showDialog$($confirmDepositDlg_confirm_deposit_dialog_content_control_number$$, "Confirmar deposito", $bootstrap$Dialog$ButtonSet$createOkCancel$$());
        this.$doCalculateFees_$($paid_value_element_id$$, $fixed_fee_element_id$$3$$, $percent_fee_element_id$$3$$, $deposit_data$$1$$.Currency, $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $net_value_element_id$$2$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$);
        $JSCompiler_StaticMethods_listen$$($e$$276_handler$$106$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($paid_value_element_id$$)), $goog$events$InputHandler$EventType$INPUT$$, $goog$bind$$(this.$doCalculateFees_$, this, $paid_value_element_id$$, $fixed_fee_element_id$$3$$, $percent_fee_element_id$$3$$, $deposit_data$$1$$.Currency, $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $net_value_element_id$$2$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$));
        $JSCompiler_StaticMethods_listen$$($e$$276_handler$$106$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($percent_fee_element_id$$3$$)), $goog$events$InputHandler$EventType$INPUT$$, $goog$bind$$(this.$doCalculateFees_$, this, $paid_value_element_id$$, $fixed_fee_element_id$$3$$, $percent_fee_element_id$$3$$, $deposit_data$$1$$.Currency, $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $net_value_element_id$$2$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$));
        $JSCompiler_StaticMethods_listen$$($e$$276_handler$$106$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($fixed_fee_element_id$$3$$)), $goog$events$InputHandler$EventType$INPUT$$, $goog$bind$$(this.$doCalculateFees_$, this, $paid_value_element_id$$, $fixed_fee_element_id$$3$$, $percent_fee_element_id$$3$$, $deposit_data$$1$$.Currency, $cancelWithdrawDlg$$1_cancel_reason_dialog_content$$1_total_fees_element_id$$2$$, $net_value_element_id$$2$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$));
        $JSCompiler_StaticMethods_listen$$($e$$276_handler$$106$$, $confirmDepositDlg_confirm_deposit_dialog_content_control_number$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$279$$) {
          if("ok" == $e$$279$$.key) {
            var $pos$$16$$ = [0], $percent_fee_value$$2_raw_paid_value$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($paid_value_element_id$$)), $paid_value$$2$$ = $valueFormatter$$2$$.parse($percent_fee_value$$2_raw_paid_value$$, $pos$$16$$);
            if($pos$$16$$[0] != $percent_fee_value$$2_raw_paid_value$$.length || isNaN($paid_value$$2$$) || 0 >= $paid_value$$2$$) {
              $e$$279$$.stopPropagation(), $e$$279$$.preventDefault(), $goog$dom$getElement$$($paid_value_element_id$$).focus()
            }else {
              var $paid_value$$2$$ = 1E8 * $paid_value$$2$$, $fixed_fee$$4_percent_fee$$3$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($percent_fee_element_id$$3$$)), $pos$$16$$ = [0], $percent_fee_value$$2_raw_paid_value$$ = $valueFormatter$$2$$.parse($fixed_fee$$4_percent_fee$$3$$, $pos$$16$$);
              isNaN($percent_fee_value$$2_raw_paid_value$$) && ($percent_fee_value$$2_raw_paid_value$$ = 0);
              if($pos$$16$$[0] != $fixed_fee$$4_percent_fee$$3$$.length || isNaN($percent_fee_value$$2_raw_paid_value$$) || 0 > $percent_fee_value$$2_raw_paid_value$$) {
                $e$$279$$.stopPropagation(), $e$$279$$.preventDefault(), $goog$dom$getElement$$($percent_fee_element_id$$3$$).focus()
              }else {
                var $fixed_fee$$4_percent_fee$$3$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($fixed_fee_element_id$$3$$)), $pos$$16$$ = [0], $fixed_fee_value$$2$$ = $valueFormatter$$2$$.parse($fixed_fee$$4_percent_fee$$3$$, $pos$$16$$);
                isNaN($fixed_fee_value$$2$$) && ($fixed_fee_value$$2$$ = 0);
                $pos$$16$$[0] != $fixed_fee$$4_percent_fee$$3$$.length || isNaN($fixed_fee_value$$2$$) || 0 > $fixed_fee_value$$2$$ ? ($e$$279$$.stopPropagation(), $e$$279$$.preventDefault(), $goog$dom$getElement$$($fixed_fee_element_id$$3$$).focus()) : this.$conn_$.$processDeposit$($request_id$$3$$, $action$$4$$, $JSCompiler_alias_VOID$$, $deposit_data$$1$$.DepositID, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $paid_value$$2$$, $percent_fee_value$$2_raw_paid_value$$, 1E8 * $fixed_fee_value$$2$$)
              }
            }
          }
        }, this)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$onUserDepositRequest_$ = function $$JSCompiler_prototypeAlias$$$$onUserDepositRequest_$$($MSG_CURRENCY_DEPOSIT_DIALOG_TITLE_e$$280$$) {
  var $currency$$21$$ = $MSG_CURRENCY_DEPOSIT_DIALOG_TITLE_e$$280$$.target.$currency_$, $handler$$107$$ = this.$getHandler$();
  $MSG_CURRENCY_DEPOSIT_DIALOG_TITLE_e$$280$$ = this.$getCurrencyDescription$($currency$$21$$) + " deposito";
  if(this.$isCryptoCurrency$($currency$$21$$)) {
    var $confirmDialogContent_dialogContent$$2_method_element_id$$2$$ = $bitex$templates$ConfirmDepositCryptoCurrencyContentDialog$$({$currencydescription$:this.$getCurrencyDescription$($currency$$21$$)}), $dlgConfirm$$ = this.$showDialog$($confirmDialogContent_dialogContent$$2_method_element_id$$2$$, $MSG_CURRENCY_DEPOSIT_DIALOG_TITLE_e$$280$$, $bootstrap$Dialog$ButtonSet$createYesNoCancel$$());
    $JSCompiler_StaticMethods_listen$$($handler$$107$$, $dlgConfirm$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$281_request_id$$4$$) {
      "yes" == $e$$281_request_id$$4$$.key && ($e$$281_request_id$$4$$.preventDefault(), $e$$281_request_id$$4$$.stopPropagation(), $e$$281_request_id$$4$$ = parseInt(1E7 * Math.random(), 10), this.$conn_$.$requestDeposit$($e$$281_request_id$$4$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $currency$$21$$), $goog$soy$renderElement$$($goog$dom$getFirstElementChild$$($dlgConfirm$$.$getContentElement$()), $bitex$templates$WaitingForDepositResponseDialogContent$$), 
      $JSCompiler_StaticMethods_setButtonSet$$($dlgConfirm$$, $JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$CANCEL$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)), $JSCompiler_StaticMethods_listenOnce$$($handler$$107$$, this.$conn_$, "error_message." + $e$$281_request_id$$4$$, function() {
        $dlgConfirm$$.$dispose$()
      }), $JSCompiler_StaticMethods_listenOnce$$($handler$$107$$, this.$conn_$, "deposit_response." + $e$$281_request_id$$4$$, function($e$$283_msg$$96$$) {
        $e$$283_msg$$96$$ = $e$$283_msg$$96$$.data;
        var $input_address$$1$$ = $e$$283_msg$$96$$.Data.InputAddress;
        $goog$soy$renderElement$$($goog$dom$getFirstElementChild$$($dlgConfirm$$.$getContentElement$()), $bitex$templates$DepositCryptoCurrencyContentDialog$$, {$deposit_message$:$e$$283_msg$$96$$});
        $JSCompiler_StaticMethods_listen$$($handler$$107$$, this.$conn_$, $bitex$api$BitEx$EventType$DEPOSIT_REFRESH$$, function($e$$284_refresh_msg$$1$$) {
          $e$$284_refresh_msg$$1$$ = $e$$284_refresh_msg$$1$$.data;
          $e$$284_refresh_msg$$1$$.Data.InputAddress === $input_address$$1$$ && $e$$284_refresh_msg$$1$$.Data.Confirmations != $JSCompiler_alias_NULL$$ && "0" == $e$$284_refresh_msg$$1$$.Data.Confirmations && $dlgConfirm$$.$dispose$()
        })
      }, this))
    })
  }else {
    var $user_verification_level$$ = this.$model_$.get("Profile").Verified, $broker_deposit_limit$$;
    $goog$isDefAndNotNull$$(this.$model_$.get("Broker").DepositLimits[$currency$$21$$]) && ($broker_deposit_limit$$ = this.$model_$.get("Broker").DepositLimits[$currency$$21$$][$user_verification_level$$]);
    var $deposit_methods$$1$$ = [];
    $goog$array$forEach$$(this.$model_$.get("DepositMethods"), function($deposit_method$$1$$) {
      if($deposit_method$$1$$.$currency$ == $currency$$21$$) {
        var $deposit_method_limit$$ = $deposit_method$$1$$.$deposit_limits$[$user_verification_level$$], $deposit_limit$$ = {enabled:$JSCompiler_alias_FALSE$$}, $has_limits_enabled_on_deposit_method$$ = $JSCompiler_alias_FALSE$$;
        $deposit_method_limit$$ != $JSCompiler_alias_NULL$$ && $deposit_method_limit$$.enabled != $JSCompiler_alias_NULL$$ && ($has_limits_enabled_on_deposit_method$$ = $deposit_method_limit$$.enabled);
        var $has_limits_enabled_on_broker$$ = $JSCompiler_alias_FALSE$$;
        $broker_deposit_limit$$ != $JSCompiler_alias_NULL$$ && $broker_deposit_limit$$.enabled != $JSCompiler_alias_NULL$$ && ($has_limits_enabled_on_broker$$ = $broker_deposit_limit$$.enabled);
        $has_limits_enabled_on_deposit_method$$ && $has_limits_enabled_on_broker$$ && ($deposit_limit$$.enabled = $JSCompiler_alias_TRUE$$, $deposit_limit$$.min = Math.max($broker_deposit_limit$$.min, $deposit_method_limit$$.min), $deposit_limit$$.max = Math.min($broker_deposit_limit$$.max, $deposit_method_limit$$.max), $deposit_limit$$.min /= 1E8, $deposit_limit$$.formatted_min = this.$formatCurrency$($deposit_limit$$.min, $currency$$21$$, $JSCompiler_alias_TRUE$$), $deposit_limit$$.max /= 1E8, 
        $deposit_limit$$.formatted_max = this.$formatCurrency$($deposit_limit$$.max, $currency$$21$$, $JSCompiler_alias_TRUE$$));
        $deposit_limit$$ != $JSCompiler_alias_NULL$$ && $deposit_limit$$.enabled && $deposit_methods$$1$$.push({method:$deposit_method$$1$$.id, description:$deposit_method$$1$$.description, disclaimer:$deposit_method$$1$$.$disclaimer$, percent_fee:$deposit_method$$1$$.$percent_fee$, fixed_fee:$deposit_method$$1$$.$fixed_fee$, limits:$deposit_limit$$, fields:[]})
      }
    }, this);
    var $confirmDialogContent_dialogContent$$2_method_element_id$$2$$ = $goog$string$getRandomString$$(), $amount_element_id$$1$$ = $goog$string$getRandomString$$(), $fixed_fee_element_id$$4$$ = $goog$string$getRandomString$$(), $percent_fee_element_id$$4$$ = $goog$string$getRandomString$$(), $total_fees_element_id$$3$$ = $goog$string$getRandomString$$(), $net_value_element_id$$3$$ = $goog$string$getRandomString$$(), $confirmDialogContent_dialogContent$$2_method_element_id$$2$$ = $bitex$templates$DepositWithdrawDialogContent$$({$side$:"client", 
    $currency$:$currency$$21$$, $currencySign$:this.$getCurrencySign$($currency$$21$$), $methods$:$deposit_methods$$1$$, $methodID$:$confirmDialogContent_dialogContent$$2_method_element_id$$2$$, $amountID$:$amount_element_id$$1$$, $showFeeDataEntry$:$JSCompiler_alias_FALSE$$, $fixedFeeID$:$fixed_fee_element_id$$4$$, $percentFeeID$:$percent_fee_element_id$$4$$, $totalFeesID$:$total_fees_element_id$$3$$, $netValueID$:$net_value_element_id$$3$$, $hideNetAmount$:$JSCompiler_alias_FALSE$$}), $dlg$$7$$ = 
    this.$showDialog$($confirmDialogContent_dialogContent$$2_method_element_id$$2$$, $MSG_CURRENCY_DEPOSIT_DIALOG_TITLE_e$$280$$, $bootstrap$Dialog$ButtonSet$createOkCancel$$());
    $goog$array$forEach$$($deposit_methods$$1$$, function($deposit_method$$2$$) {
      var $method_id$$1$$ = $deposit_method$$2$$.method;
      $JSCompiler_StaticMethods_listen$$($handler$$107$$, new $goog$events$InputHandler$$($goog$dom$getElement$$($method_id$$1$$ + "_" + $amount_element_id$$1$$)), $goog$events$InputHandler$EventType$INPUT$$, function() {
        this.$doCalculateFees_$($method_id$$1$$ + "_" + $amount_element_id$$1$$, $method_id$$1$$ + "_" + $fixed_fee_element_id$$4$$, $method_id$$1$$ + "_" + $percent_fee_element_id$$4$$, $currency$$21$$, $method_id$$1$$ + "_" + $total_fees_element_id$$3$$, $method_id$$1$$ + "_" + $net_value_element_id$$3$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)
      }, this)
    }, this);
    var $validate_deposit$$ = $JSCompiler_alias_TRUE$$;
    $JSCompiler_StaticMethods_listen$$($handler$$107$$, $dlg$$7$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$286_request_id$$5$$) {
      if("ok" == $e$$286_request_id$$5$$.key) {
        var $deposit_form_el$$ = $goog$dom$getFirstElementChild$$($dlg$$7$$.$getContentElement$());
        if($validate_deposit$$) {
          $e$$286_request_id$$5$$.preventDefault();
          $e$$286_request_id$$5$$.stopPropagation();
          var $amount$$7_error_list$$1_uf$$2$$ = new $uniform$Uniform$$;
          $amount$$7_error_list$$1_uf$$2$$.$decorate$($deposit_form_el$$);
          $amount$$7_error_list$$1_uf$$2$$ = $JSCompiler_StaticMethods_validate$$($amount$$7_error_list$$1_uf$$2$$);
          if(0 < $amount$$7_error_list$$1_uf$$2$$.length) {
            $goog$array$forEach$$($amount$$7_error_list$$1_uf$$2$$, function($error_msg$$3$$) {
              this.$showNotification$("error", "Error: " + $error_msg$$3$$)
            }, this);
            $e$$286_request_id$$5$$.stopPropagation();
            $e$$286_request_id$$5$$.preventDefault();
            return
          }
          var $deposit_data$$2_deposit_method_id$$1$$ = $bitex$util$getFormAsJSON$$($deposit_form_el$$), $amount$$7_error_list$$1_uf$$2$$ = $goog$string$toNumber$$($deposit_data$$2_deposit_method_id$$1$$.Amount), $deposit_data$$2_deposit_method_id$$1$$ = $goog$string$toNumber$$($deposit_data$$2_deposit_method_id$$1$$.Method);
          if(!$goog$isNumber$$($amount$$7_error_list$$1_uf$$2$$) || isNaN($amount$$7_error_list$$1_uf$$2$$)) {
            this.$showNotification$("error", "Error: Invalid amount typed!");
            $e$$286_request_id$$5$$.stopPropagation();
            $e$$286_request_id$$5$$.preventDefault();
            return
          }
        }
        "prepare" != $deposit_form_el$$.getAttribute("data-deposit-status") ? $dlg$$7$$.$dispose$() : $validate_deposit$$ && ($e$$286_request_id$$5$$ = parseInt(1E7 * Math.random(), 10), this.$conn_$.$requestDeposit$($e$$286_request_id$$5$$, $deposit_data$$2_deposit_method_id$$1$$, 1E8 * $amount$$7_error_list$$1_uf$$2$$), $goog$soy$renderElement$$($deposit_form_el$$, $bitex$templates$WaitingForDepositResponseDialogContent$$), $JSCompiler_StaticMethods_listenOnce$$($handler$$107$$, this.$conn_$, "deposit_response." + 
        $e$$286_request_id$$5$$, function($e$$287$$) {
          $goog$soy$renderElement$$($deposit_form_el$$, $bitex$templates$DepositSlipContentDialog$$, {$deposit_id$:$e$$287$$.data.DepositID});
          $JSCompiler_StaticMethods_setButtonSet$$($dlg$$7$$, $JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$))
        }), $validate_deposit$$ = $JSCompiler_alias_FALSE$$)
      }
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$onUserForgotPassword_$ = function $$JSCompiler_prototypeAlias$$$$onUserForgotPassword_$$($e$$288$$) {
  this.$conn_$.$forgotPassword$($e$$288$$.target.$getEmail$());
  this.$router_$.$setView$("set_new_password")
};
$JSCompiler_prototypeAlias$$.$onUserSetNewPassword_$ = function $$JSCompiler_prototypeAlias$$$$onUserSetNewPassword_$$($e$$289$$) {
  this.$conn_$.$resetPassword$($e$$289$$.target.$getToken$(), $e$$289$$.target.$getPassword$())
};
$JSCompiler_prototypeAlias$$.$onUserEnableTwoFactor_$ = function $$JSCompiler_prototypeAlias$$$$onUserEnableTwoFactor_$$() {
  var $code$$5$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_second_step_verification")), $has_code$$ = !$goog$string$isEmpty$$($code$$5$$), $secret$$2$$ = "";
  $has_code$$ && ($secret$$2$$ = this.$model_$.get("TwoFactorSecret"));
  var $req_id$$ = parseInt(1E6 * Math.random(), 10);
  this.$conn_$.$enableTwoFactor$($JSCompiler_alias_TRUE$$, $secret$$2$$, $code$$5$$, $JSCompiler_alias_VOID$$, $req_id$$);
  $JSCompiler_StaticMethods_listenOnce$$(this.$getHandler$(), this.$conn_$, "two_factor_secret." + $req_id$$, function($e$$291_msg$$98$$) {
    $e$$291_msg$$98$$ = $e$$291_msg$$98$$.data;
    $has_code$$ && !$e$$291_msg$$98$$.TwoFactorEnabled && this.$showDialog$("Wrong authentication code. Please, make sure that you are using Google Authenticator and your cellphone time is exact synched with google servers.")
  }, this)
};
$JSCompiler_prototypeAlias$$.$onUserDisableTwoFactor_$ = function $$JSCompiler_prototypeAlias$$$$onUserDisableTwoFactor_$$() {
  this.$conn_$.$enableTwoFactor$($JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$onBodyClick_$ = function $$JSCompiler_prototypeAlias$$$$onBodyClick_$$($e$$293_model_set_element$$) {
  var $model$$40_view_name$$4$$ = $e$$293_model_set_element$$.target.getAttribute("data-switch-view");
  $model$$40_view_name$$4$$ != $JSCompiler_alias_NULL$$ && ($e$$293_model_set_element$$.preventDefault(), $e$$293_model_set_element$$.stopPropagation(), this.$router_$.$setView$($model$$40_view_name$$4$$));
  $model$$40_view_name$$4$$ = this.$model_$;
  $e$$293_model_set_element$$ = $goog$dom$classes$has$$($e$$293_model_set_element$$.target, "model-action-set") ? $e$$293_model_set_element$$.target : $goog$dom$getAncestorByTagNameAndClass$$($e$$293_model_set_element$$.target, $JSCompiler_alias_NULL$$, "model-action-set");
  $e$$293_model_set_element$$ != $JSCompiler_alias_NULL$$ && $e$$293_model_set_element$$.getAttribute("data-key") != $JSCompiler_alias_NULL$$ && $model$$40_view_name$$4$$.set($e$$293_model_set_element$$.getAttribute("data-key"), $e$$293_model_set_element$$.getAttribute("data-value"))
};
$JSCompiler_prototypeAlias$$.$onBodyChange_$ = function $$JSCompiler_prototypeAlias$$$$onBodyChange_$$($e$$294_elements$$7$$) {
  if($goog$dom$classes$has$$($e$$294_elements$$7$$.target, "withdraw-method-selector")) {
    var $selected_method$$ = $goog$dom$forms$getValue$$($e$$294_elements$$7$$.target);
    $e$$294_elements$$7$$ = $goog$dom$getElementsByClass$$("withdraw-method");
    $goog$array$forEach$$($e$$294_elements$$7$$, function($element$$202_field_elements$$) {
      var $method$$9$$ = $element$$202_field_elements$$.getAttribute("data-withdraw-method");
      $goog$style$showElement$$($element$$202_field_elements$$, $method$$9$$ == $selected_method$$);
      $element$$202_field_elements$$ = $goog$dom$getElementsByClass$$("withdraw-field", $element$$202_field_elements$$);
      $goog$array$forEach$$($element$$202_field_elements$$, function($element$$203$$) {
        $element$$203$$.disabled = $method$$9$$ != $selected_method$$
      })
    }, this)
  }
};
$JSCompiler_prototypeAlias$$.$onUserLoginButtonClick_$ = function $$JSCompiler_prototypeAlias$$$$onUserLoginButtonClick_$$($e$$295$$) {
  var $username$$12$$ = $e$$295$$.target.$getUsername$(), $password$$8$$ = $e$$295$$.target.$getPassword$();
  this.$model_$.set("Password", $e$$295$$.target.$getPassword$());
  this.$conn_$.login($username$$12$$, $password$$8$$)
};
$JSCompiler_prototypeAlias$$.$onUserLoginOk_$ = function $$JSCompiler_prototypeAlias$$$$onUserLoginOk_$$($e$$296_msg$$99$$) {
  $e$$296_msg$$99$$ = $e$$296_msg$$99$$.data;
  $goog$dom$classes$add$$(document.body, "bitex-logged");
  $goog$dom$classes$remove$$(document.body, "bitex-not-logged");
  this.$model_$.set("UserID", $e$$296_msg$$99$$.UserID);
  this.$model_$.set("Username", $e$$296_msg$$99$$.Username);
  this.$model_$.set("TwoFactorEnabled", $e$$296_msg$$99$$.TwoFactorEnabled);
  this.$model_$.set("IsBroker", $e$$296_msg$$99$$.IsBroker);
  this.$model_$.set("IsVerified", 1 < $e$$296_msg$$99$$.Profile.Verified);
  var $broker_currencies$$3$$ = new $goog$structs$Set$$, $allowed_markets$$2$$ = {}, $user_brokers$$ = {}, $broker_info$$7_profile$$3$$;
  $e$$296_msg$$99$$.Broker != $JSCompiler_alias_NULL$$ && ($broker_info$$7_profile$$3$$ = $JSCompiler_StaticMethods_adjustBrokerData_$$(this, $e$$296_msg$$99$$.Broker), $goog$object$extend$$($allowed_markets$$2$$, $broker_info$$7_profile$$3$$.AllowedMarkets), $broker_currencies$$3$$.$addAll$($broker_info$$7_profile$$3$$.BrokerCurrencies), this.$model_$.set("Broker", $broker_info$$7_profile$$3$$), $user_brokers$$[$broker_info$$7_profile$$3$$.BrokerID] = $broker_info$$7_profile$$3$$, $e$$296_msg$$99$$.IsBroker || 
  this.$model_$.set("UserBrokers", $user_brokers$$));
  $broker_info$$7_profile$$3$$ = $e$$296_msg$$99$$.Profile;
  $e$$296_msg$$99$$.IsBroker ? ($goog$dom$classes$add$$(document.body, "bitex-broker"), $broker_info$$7_profile$$3$$ = $JSCompiler_StaticMethods_adjustBrokerData_$$(this, $broker_info$$7_profile$$3$$), $user_brokers$$[$broker_info$$7_profile$$3$$.BrokerID] = $broker_info$$7_profile$$3$$, this.$model_$.set("UserBrokers", $user_brokers$$), $goog$object$extend$$($allowed_markets$$2$$, $broker_info$$7_profile$$3$$.AllowedMarkets), $broker_currencies$$3$$.$addAll$($broker_info$$7_profile$$3$$.BrokerCurrencies)) : 
  ($goog$dom$classes$add$$(document.body, "bitex-non-broker"), 2 == $broker_info$$7_profile$$3$$.Verified && $goog$style$showElement$$($goog$dom$getElement$$("verification_menu_id"), $JSCompiler_alias_FALSE$$));
  this.$model_$.set("Profile", $broker_info$$7_profile$$3$$);
  $e$$296_msg$$99$$.IsBroker ? this.$model_$.set("SelectedBrokerID", this.$model_$.get("Profile").BrokerID) : $e$$296_msg$$99$$.Broker != $JSCompiler_alias_NULL$$ && this.$model_$.set("SelectedBrokerID", this.$model_$.get("Broker").BrokerID);
  this.$model_$.set("AllowedMarkets", $allowed_markets$$2$$);
  this.$model_$.set("BrokerCurrencies", $broker_currencies$$3$$.$getValues$());
  this.$conn_$.$requestBalances$();
  this.$conn_$.$requestDepositMethods$();
  this.$model_$.get("IsVerified") ? this.$router_$.$setView$("offerbook") : 0 == this.$model_$.get("Profile").Verified ? this.$router_$.$setView$("verification") : this.$router_$.$setView$("offerbook")
};
$JSCompiler_prototypeAlias$$.$onUserLoginError_$ = function $$JSCompiler_prototypeAlias$$$$onUserLoginError_$$($dlg_$$1_e$$297_msg$$100$$) {
  $goog$dom$classes$add$$(document.body, "bitex-not-logged");
  $goog$dom$classes$remove$$(document.body, "bitex-logged");
  $goog$dom$classes$remove$$(document.body, "bitex-broker");
  $goog$dom$classes$remove$$(document.body, "bitex-non-broker");
  $dlg_$$1_e$$297_msg$$100$$ = $dlg_$$1_e$$297_msg$$100$$.data;
  this.$model_$.set("UserID", "");
  this.$model_$.set("Username", "");
  if($dlg_$$1_e$$297_msg$$100$$.NeedSecondFactor) {
    $dlg_$$1_e$$297_msg$$100$$ = this.$showDialog$("verificacion de dos pasos", "", $bootstrap$Dialog$ButtonSet$createOkCancel$$()), $goog$dom$appendChild$$($dlg_$$1_e$$297_msg$$100$$.$getContentElement$(), $goog$soy$renderAsElement$$($bitex$templates$GoogleAuthenticationCodeDialogContent$$, {id:"id_second_factor"})), $JSCompiler_StaticMethods_listenOnce$$(this.$getHandler$(), $dlg_$$1_e$$297_msg$$100$$, $goog$ui$Dialog$EventType$SELECT$$, function($e$$298_second_factor$$1$$) {
      "ok" == $e$$298_second_factor$$1$$.key && ($e$$298_second_factor$$1$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_second_factor")), this.$conn_$.login(this.$loginView_$.$getUsername$(), this.$loginView_$.$getPassword$(), $e$$298_second_factor$$1$$))
    })
  }else {
    var $user_status_text$$ = $dlg_$$1_e$$297_msg$$100$$.UserStatusText;
    switch($dlg_$$1_e$$297_msg$$100$$.UserStatusText) {
      case "MSG_LOGIN_ERROR_INVALID_PASSWORD":
        $user_status_text$$ = "Invalid password";
        break;
      case "MSG_LOGIN_ERROR_INVALID_USERNAME_OR_PASSWORD":
        $user_status_text$$ = "Invalid username or password";
        break;
      case "MSG_LOGIN_ERROR_INVALID_SECOND_STEP":
        $user_status_text$$ = "Invalid second step authentication code";
        break;
      case "MSG_LOGIN_ERROR_INVALID_BROKER":
        $user_status_text$$ = "Invalid Broker";
        break;
      case "MSG_LOGIN_ERROR_USERNAME_ALREADY_TAKEN":
        $user_status_text$$ = "Username or email already taken"
    }
    this.$showDialog$($user_status_text$$)
  }
};
$JSCompiler_prototypeAlias$$.$onUserSignupButton_$ = function $$JSCompiler_prototypeAlias$$$$onUserSignupButton_$$($e$$299$$) {
  this.$model_$.set("Password", $e$$299$$.target.$getPassword$());
  this.$conn_$.$signUp$($e$$299$$.target.$getUsername$(), $e$$299$$.target.$getPassword$(), $e$$299$$.target.$getEmail$(), $e$$299$$.target.$getState$(), $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country")), $goog$string$toNumber$$($goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_broker"))))
};
$JSCompiler_prototypeAlias$$.$getModel$ = $JSCompiler_get$$("$model_$");
$JSCompiler_prototypeAlias$$.$onBeforeSetView_$ = function $$JSCompiler_prototypeAlias$$$$onBeforeSetView_$$($e$$300_view_id$$4$$) {
  $e$$300_view_id$$4$$ = $e$$300_view_id$$4$$.$view_id$;
  if(!this.$conn_$.$logged_$) {
    switch($e$$300_view_id$$4$$) {
      case "start":
      ;
      case "signin":
      ;
      case "signup":
      ;
      case "tos":
      ;
      case "forgot_password":
      ;
      case "set_new_password":
      ;
      case "broker_application":
        break;
      case "market":
      ;
      case "ranking":
        this.$conn_$.$connected_$ || this.$router_$.$setView$("start");
        break;
      default:
        return this.$router_$.$setView$("start"), $JSCompiler_alias_FALSE$$
    }
  }
  var $classes$$11$$ = $goog$dom$classes$get$$(document.body), $classes_to_remove$$ = [];
  $goog$array$forEach$$($classes$$11$$, function($cls$$2$$) {
    0 == $cls$$2$$.lastIndexOf("active-view-", 0) && $classes_to_remove$$.push($cls$$2$$)
  });
  $goog$array$forEach$$($classes_to_remove$$, function($cls$$3$$) {
    $goog$dom$classes$remove$$(document.body, $cls$$3$$)
  });
  document.body.scrollTop = 0;
  $goog$dom$classes$add$$(document.body, "active-view-" + $e$$300_view_id$$4$$)
};
$JSCompiler_prototypeAlias$$.$getBrokersByCountry$ = function $$JSCompiler_prototypeAlias$$$$getBrokersByCountry$$($country$$1$$, $opt_state$$1$$) {
  var $response$$ = [], $query$$3$$ = $country$$1$$;
  $opt_state$$1$$ != $JSCompiler_alias_NULL$$ && ($query$$3$$ += "_" + $opt_state$$1$$);
  var $brokers$$ = this.$model_$.get("BrokerList");
  $brokers$$ != $JSCompiler_alias_NULL$$ && $goog$array$forEach$$($brokers$$, function($broker$$16$$) {
    var $broker_accept_array_is_accepted$$ = $broker$$16$$.AcceptCustomersFrom[0], $broker_reject_array_is_rejected$$ = $broker$$16$$.AcceptCustomersFrom[1], $is_explicit_accepted$$ = 0 <= $goog$array$findIndex$$($broker_accept_array_is_accepted$$, function($accept_data$$) {
      return $accept_data$$ === $query$$3$$ || $accept_data$$ === $country$$1$$
    }), $broker_accept_array_is_accepted$$ = $is_explicit_accepted$$ || "*" === $broker_accept_array_is_accepted$$[0], $broker_reject_array_is_rejected$$ = 0 <= $goog$array$findIndex$$($broker_reject_array_is_rejected$$, function($accept_data$$1$$) {
      return $accept_data$$1$$ === $query$$3$$ || $accept_data$$1$$ === $country$$1$$
    }) || "*" === $broker_reject_array_is_rejected$$[0];
    $is_explicit_accepted$$ ? $response$$.push($broker$$16$$) : $broker_accept_array_is_accepted$$ && !$broker_reject_array_is_rejected$$ && $response$$.push($broker$$16$$)
  });
  return $response$$
};
$JSCompiler_prototypeAlias$$.$formatCurrency$ = function $$JSCompiler_prototypeAlias$$$$formatCurrency$$($amount$$8$$, $currency_code$$9_currency_def$$6$$, $opt_human$$1$$) {
  $currency_code$$9_currency_def$$6$$ = this.$currency_info_$[$currency_code$$9_currency_def$$6$$];
  return($opt_human$$1$$ != $JSCompiler_alias_NULL$$ && $opt_human$$1$$ === $JSCompiler_alias_TRUE$$ ? new $goog$i18n$NumberFormat$$($currency_code$$9_currency_def$$6$$.$human_format$, $currency_code$$9_currency_def$$6$$.code) : new $goog$i18n$NumberFormat$$($currency_code$$9_currency_def$$6$$.$format$, $currency_code$$9_currency_def$$6$$.code)).$format$($amount$$8$$)
};
$JSCompiler_prototypeAlias$$.$isCryptoCurrency$ = function $$JSCompiler_prototypeAlias$$$$isCryptoCurrency$$($currency_code$$10$$) {
  return this.$currency_info_$[$currency_code$$10$$].$is_crypto$
};
$JSCompiler_prototypeAlias$$.$getCurrencySign$ = function $$JSCompiler_prototypeAlias$$$$getCurrencySign$$($currency_code$$11$$) {
  return this.$currency_info_$[$currency_code$$11$$].$sign$
};
$JSCompiler_prototypeAlias$$.$getCurrencyHumanFormat$ = function $$JSCompiler_prototypeAlias$$$$getCurrencyHumanFormat$$($currency_code$$13$$) {
  return this.$currency_info_$[$currency_code$$13$$].$human_format$
};
$JSCompiler_prototypeAlias$$.$getCurrencyDescription$ = function $$JSCompiler_prototypeAlias$$$$getCurrencyDescription$$($currency_code$$14$$) {
  return this.$currency_info_$[$currency_code$$14$$].description
};
$JSCompiler_prototypeAlias$$.$onSecurityList_$ = function $$JSCompiler_prototypeAlias$$$$onSecurityList_$$($e$$301_msg$$101$$) {
  $e$$301_msg$$101$$ = $e$$301_msg$$101$$.data;
  $goog$array$forEach$$($e$$301_msg$$101$$.Currencies, function($currency$$22$$) {
    this.$currency_info_$[$currency$$22$$.Code] = {code:$currency$$22$$.Code, $format$:$currency$$22$$.FormatJS, $human_format$:$currency$$22$$.HumanFormatJS, description:$currency$$22$$.Description, $sign$:$currency$$22$$.Sign, $pip$:$currency$$22$$.Pip, $is_crypto$:$currency$$22$$.IsCrypto}
  }, this);
  var $symbols$$3$$ = [];
  $goog$array$forEach$$($e$$301_msg$$101$$.Instruments, function($instrument$$2$$) {
    var $symbol$$16$$ = $instrument$$2$$.Symbol;
    this.$all_markets_$[$symbol$$16$$] = {symbol:$symbol$$16$$, description:$instrument$$2$$.Description};
    $symbols$$3$$.push($symbol$$16$$);
    var $currency_key$$ = $instrument$$2$$.Symbol, $volume_buy_key$$ = "volume_buy_" + $currency_key$$, $min_key$$ = "min_" + $currency_key$$, $max_key$$ = "max_" + $currency_key$$, $avg_key$$ = "avg_" + $currency_key$$, $bid_key$$1$$ = "best_bid_" + $currency_key$$, $offer_key$$1$$ = "best_offer_" + $currency_key$$, $last_price$$ = "last_price_" + $currency_key$$;
    this.$model_$.set("formatted_volume_sell_" + $currency_key$$, this.$formatCurrency$(0, $symbol$$16$$.substr(0, 3), $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $volume_buy_key$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $min_key$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $max_key$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $avg_key$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $bid_key$$1$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $offer_key$$1$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$);
    this.$model_$.set("formatted_" + $last_price$$, this.$formatCurrency$(0, $instrument$$2$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$)
  }, this);
  this.$model_$.set("SecurityList", $e$$301_msg$$101$$)
};
function $JSCompiler_StaticMethods_adjustBrokerData_$$($JSCompiler_StaticMethods_adjustBrokerData_$self$$, $broker_info$$8$$) {
  $broker_info$$8$$.Currencies = $broker_info$$8$$.Currencies.split(",");
  1 === $broker_info$$8$$.Currencies.length && $goog$string$isEmpty$$($broker_info$$8$$.Currencies[0]) && ($broker_info$$8$$.Currencies = []);
  var $allowed_markets$$3$$ = {}, $broker_currencies$$4$$ = $goog$array$toArray$$($broker_info$$8$$.Currencies);
  $goog$array$forEach$$($broker_info$$8$$.CryptoCurrencies, function($crypto_currency$$1$$) {
    $broker_currencies$$4$$.push($crypto_currency$$1$$.CurrencyCode);
    $goog$object$findKey$$(this.$all_markets_$, function($market_info$$, $symbol$$17$$) {
      if(0 <= $symbol$$17$$.indexOf($crypto_currency$$1$$.CurrencyCode)) {
        return $JSCompiler_alias_TRUE$$
      }
    }) != $JSCompiler_alias_NULL$$ && $goog$array$forEach$$($broker_info$$8$$.Currencies, function($currency$$23$$) {
      var $market_currency$$ = $goog$object$findKey$$(this.$all_markets_$, function($market_info$$1$$, $symbol$$18$$) {
        if(0 <= $symbol$$18$$.indexOf($currency$$23$$)) {
          return $JSCompiler_alias_TRUE$$
        }
      });
      $market_currency$$ != $JSCompiler_alias_NULL$$ && ($allowed_markets$$3$$[$market_currency$$] = this.$all_markets_$[$market_currency$$])
    }, this)
  }, $JSCompiler_StaticMethods_adjustBrokerData_$self$$);
  $broker_info$$8$$.BrokerCurrencies = $broker_currencies$$4$$;
  $broker_info$$8$$.AllowedMarkets = $allowed_markets$$3$$;
  var $percent_fmt$$ = new $goog$i18n$NumberFormat$$(3);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($percent_fmt$$);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($percent_fmt$$);
  $broker_info$$8$$.FormattedTransactionFeeBuy = $percent_fmt$$.$format$($broker_info$$8$$.TransactionFeeBuy / 100);
  $broker_info$$8$$.FormattedTransactionFeeSell = $percent_fmt$$.$format$($broker_info$$8$$.TransactionFeeSell / 100);
  return $broker_info$$8$$
}
$JSCompiler_prototypeAlias$$.$onBrokerListResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerListResponse_$$($current_view_e$$302$$) {
  var $msg$$102$$ = $current_view_e$$302$$.data, $broker_list$$3$$ = [];
  $goog$array$forEach$$($msg$$102$$.BrokerListGrp, function($broker_array$$) {
    var $broker_info$$9$$ = {};
    $goog$array$forEach$$($msg$$102$$.Columns, function($column$$4$$, $index$$86$$) {
      $broker_info$$9$$[$column$$4$$] = $broker_array$$[$index$$86$$]
    }, this);
    switch($broker_info$$9$$.SignupLabel) {
      case "{MSG_BROKER_APPLY}":
        $broker_info$$9$$.SignupLabel = "Aplique para ser un corredor";
        break;
      case "{MSG_NOTIFY_NEW_BROKER}":
        $broker_info$$9$$.SignupLabel = "Notificame cuando un nuevo corredor llegue a mi region"
    }
    $broker_info$$9$$ = $JSCompiler_StaticMethods_adjustBrokerData_$$(this, $broker_info$$9$$);
    $broker_list$$3$$.push($broker_info$$9$$)
  }, this);
  this.$model_$.set("BrokerList", $broker_list$$3$$);
  ($current_view_e$$302$$ = location.pathname.replace("/", "")) && "-1" == $current_view_e$$302$$.indexOf(".html") && this.$router_$.$setView$($current_view_e$$302$$)
};
$JSCompiler_prototypeAlias$$.$onUserConnectBitEx_$ = function $$JSCompiler_prototypeAlias$$$$onUserConnectBitEx_$$() {
  this.$connectBitEx$()
};
$JSCompiler_prototypeAlias$$.$onConnectionOpen_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionOpen_$$() {
  $goog$dom$classes$remove$$(document.body, "ws-not-connected");
  $goog$dom$classes$add$$(document.body, "ws-connected");
  $goog$dom$classes$remove$$(document.body, "bitex-broker");
  $goog$dom$classes$remove$$(document.body, "bitex-non-broker");
  this.$model_$.get("SecurityList") != $JSCompiler_alias_NULL$$ || this.$conn_$.$requestSecurityList$();
  this.$model_$.get("BrokerList") != $JSCompiler_alias_NULL$$ || this.$conn_$.$requestBrokerList$();
  var $username$$13$$ = this.$model_$.get("Username"), $password$$9$$ = this.$model_$.get("Password");
  $username$$13$$ != $JSCompiler_alias_NULL$$ && $password$$9$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($username$$13$$) && !$goog$string$isEmpty$$($password$$9$$) && 8 <= $password$$9$$.length && this.$conn_$.login($username$$13$$, $password$$9$$);
  this.$conn_$.$testRequest$()
};
$JSCompiler_prototypeAlias$$.$onTestRequestTimer_$ = function $$JSCompiler_prototypeAlias$$$$onTestRequestTimer_$$() {
  this.$conn_$ != $JSCompiler_alias_NULL$$ && this.$conn_$.$connected_$ && this.$conn_$.$testRequest$();
  this.$test_request_deadline_timer_$ = new $goog$Timer$$(this.$maximum_allowed_delay_in_ms_$);
  this.$test_request_deadline_timer_$.start();
  $JSCompiler_StaticMethods_listenOnce$$(this.$getHandler$(), this.$test_request_deadline_timer_$, $goog$Timer$TICK$$, function() {
    location.reload()
  })
};
$JSCompiler_prototypeAlias$$.$onHearbeat_$ = function $$JSCompiler_prototypeAlias$$$$onHearbeat_$$($e$$307_msg$$103$$) {
  $e$$307_msg$$103$$ = $e$$307_msg$$103$$.data;
  this.$test_request_deadline_timer_$ != $JSCompiler_alias_NULL$$ && (this.$test_request_deadline_timer_$.stop(), this.$test_request_deadline_timer_$ = $JSCompiler_alias_NULL$$);
  $e$$307_msg$$103$$.SendTime != $JSCompiler_alias_NULL$$ && this.$model_$.set("latency", new Date(Date.now()) - new Date($e$$307_msg$$103$$.SendTime))
};
$JSCompiler_prototypeAlias$$.$onConnectionClose_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionClose_$$() {
  $goog$dom$classes$add$$(document.body, "ws-not-connected", "bitex-not-logged");
  $goog$dom$classes$remove$$(document.body, "ws-connected", "bitex-logged");
  $goog$dom$classes$remove$$(document.body, "bitex-broker");
  $goog$dom$classes$remove$$(document.body, "bitex-non-broker");
  this.$router_$.$setView$("start")
};
$JSCompiler_prototypeAlias$$.$onConnectionError_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionError_$$() {
  $goog$dom$classes$add$$(document.body, "ws-not-connected", "bitex-not-logged");
  $goog$dom$classes$remove$$(document.body, "ws-connected", "bitex-logged");
  $goog$dom$classes$remove$$(document.body, "bitex-broker");
  $goog$dom$classes$remove$$(document.body, "bitex-non-broker");
  this.$showNotification$("error", "Error", "Dectectado con la conexion.");
  this.$router_$.$setView$("start")
};
$JSCompiler_prototypeAlias$$.$onConnectionErrorMessage_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionErrorMessage_$$($e$$310_msg$$104$$) {
  $e$$310_msg$$104$$ = $e$$310_msg$$104$$.data;
  this.$showNotification$("error", "Message from server:", $e$$310_msg$$104$$.Description + " - " + $e$$310_msg$$104$$.Detail, this.$error_message_alert_timeout_$)
};
$JSCompiler_prototypeAlias$$.$showDialog$ = function $$JSCompiler_prototypeAlias$$$$showDialog$$($content$$20$$, $opt_title$$3_title$$11$$, $buttonSet$$3_opt_button_set$$) {
  $opt_title$$3_title$$11$$ = $opt_title$$3_title$$11$$ || "Error";
  $buttonSet$$3_opt_button_set$$ = $buttonSet$$3_opt_button_set$$ || $JSCompiler_StaticMethods_addButton$$(new $bootstrap$Dialog$ButtonSet$$, $goog$ui$Dialog$ButtonSet$DefaultButtons$OK$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$);
  this.$dialog_$ != $JSCompiler_alias_NULL$$ && (this.$dialog_$.$dispose$(), this.$dialog_$ = $JSCompiler_alias_NULL$$);
  this.$dialog_$ = new $bootstrap$Dialog$$;
  $JSCompiler_StaticMethods_setTitle$$(this.$dialog_$, $opt_title$$3_title$$11$$);
  this.$dialog_$.$setContent$($content$$20$$);
  $JSCompiler_StaticMethods_setButtonSet$$(this.$dialog_$, $buttonSet$$3_opt_button_set$$);
  this.$dialog_$.$setVisible$($JSCompiler_alias_TRUE$$);
  return this.$dialog_$
};
$JSCompiler_prototypeAlias$$.$showNotification$ = function $$JSCompiler_prototypeAlias$$$$showNotification$$($type$$110$$, $alert_content_title$$12$$, $content$$21$$, $opt_display_time$$) {
  var $display_time$$ = 3E3;
  $goog$isNumber$$($opt_display_time$$) && ($display_time$$ = $opt_display_time$$);
  $alert_content_title$$12$$ = $goog$dom$createDom$$("span", $JSCompiler_alias_VOID$$, [$goog$dom$createDom$$("strong", $JSCompiler_alias_VOID$$, $alert_content_title$$12$$), " ", $content$$21$$]);
  var $notification$$ = new $bootstrap$Alert$$($type$$110$$, $alert_content_title$$12$$, $JSCompiler_alias_TRUE$$);
  $notification$$.render($goog$dom$getElement$$("id_notifications"));
  if(0 < $display_time$$) {
    var $handler$$110$$ = this.$getHandler$();
    $goog$Timer$callOnce$$(function() {
      var $anim$$3$$ = new $goog$fx$dom$FadeOutAndHide$$($notification$$.$getElement$(), 200);
      $JSCompiler_StaticMethods_listenOnce$$($handler$$110$$, $anim$$3$$, "end", function() {
        $notification$$.$dispose$();
        $anim$$3$$.$dispose$()
      });
      $anim$$3$$.play()
    }, $display_time$$, this)
  }
};
$goog$exportPath_$$("BlinkTradeApp", $bitex$app$BlinkTrade$$);
BlinkTradeApp.prototype.showNotification = $bitex$app$BlinkTrade$$.prototype.$showNotification$;
BlinkTradeApp.prototype.showDialog = $bitex$app$BlinkTrade$$.prototype.$showDialog$;
BlinkTradeApp.prototype.getHandler = $bitex$app$BlinkTrade$$.prototype.$getHandler$;
BlinkTradeApp.prototype.getCurrencyDescription = $bitex$app$BlinkTrade$$.prototype.$getCurrencyDescription$;
BlinkTradeApp.prototype.getCurrencySign = $bitex$app$BlinkTrade$$.prototype.$getCurrencySign$;
BlinkTradeApp.prototype.isCryptoCurrency = $bitex$app$BlinkTrade$$.prototype.$isCryptoCurrency$;
BlinkTradeApp.prototype.formatCurrency = $bitex$app$BlinkTrade$$.prototype.$formatCurrency$;
BlinkTradeApp.prototype.getBrokersByCountry = $bitex$app$BlinkTrade$$.prototype.$getBrokersByCountry$;
BlinkTradeApp.prototype.getModel = $bitex$app$BlinkTrade$$.prototype.$getModel$;
BlinkTradeApp.prototype.getQtyCurrencyFromSymbol = $bitex$app$BlinkTrade$$.prototype.$getQtyCurrencyFromSymbol$;
BlinkTradeApp.prototype.getPriceCurrencyFromSymbol = $bitex$app$BlinkTrade$$.prototype.$getPriceCurrencyFromSymbol$;
BlinkTradeApp.prototype.setView = $bitex$app$BlinkTrade$$.prototype.$setView$;
BlinkTradeApp.prototype.getBitexConnection = $bitex$app$BlinkTrade$$.prototype.$getBitexConnection$;
BlinkTradeApp.prototype.connectBitEx = $bitex$app$BlinkTrade$$.prototype.$connectBitEx$;
BlinkTradeApp.prototype.run = $bitex$app$BlinkTrade$$.prototype.$run$;

