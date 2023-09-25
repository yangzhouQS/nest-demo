import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCustomConfig() {
    return {
      code: 201,
      status: 'success',
      result: {
        tableConfigs: [
          {
            remark: '',
            title: '',
            code: 'itemTableConfig',
            content: {
              tenant: {
                name: 'tenant',
                type: 'String',
                isEnable: true,
                sysComment: '租户编码',
                comment: {
                  value: '租户编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 0,
              },
              orgId: {
                name: 'orgId',
                type: 'Number',
                isEnable: true,
                sysComment: '组织机构主键',
                comment: {
                  value: '组织机构主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 1,
              },
              id: {
                name: 'id',
                type: 'Number',
                isEnable: true,
                sysComment: '主键id',
                comment: {
                  value: '主键id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 2,
              },
              orderId: {
                name: 'orderId',
                type: 'Number',
                isEnable: true,
                sysComment: '主表主键',
                comment: {
                  value: '主表主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 3,
              },
              materialId: {
                name: 'materialId',
                type: 'Number',
                isEnable: true,
                sysComment: '主材主键',
                comment: {
                  value: '主材主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 4,
              },
              materialCode: {
                name: 'materialCode',
                type: 'String',
                isEnable: true,
                sysComment: '材料编码',
                comment: {
                  value: '材料编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 5,
              },
              materialName: {
                name: 'materialName',
                type: 'String',
                isEnable: true,
                sysComment: '材料名称',
                comment: {
                  value: '材料名称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 6,
              },
              materialModel: {
                name: 'materialModel',
                type: 'String',
                isEnable: true,
                sysComment: '规格型号',
                comment: {
                  value: '规格型号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 7,
              },
              materialUnit: {
                name: 'materialUnit',
                type: 'String',
                isEnable: true,
                sysComment: '主单位',
                comment: {
                  value: '主单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 8,
              },
              auxiliaryUnit: {
                name: 'auxiliaryUnit',
                type: 'String',
                isEnable: true,
                sysComment: '辅单位',
                comment: {
                  value: '辅单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 9,
              },
              classId: {
                name: 'classId',
                type: 'Number',
                isEnable: true,
                sysComment: '材料类别id',
                comment: {
                  value: '材料类别id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 10,
              },
              classFullId: {
                name: 'classFullId',
                type: 'String',
                isEnable: true,
                sysComment: '材料类别主键链',
                comment: {
                  value: '材料类别主键链',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 11,
              },
              manufacturer: {
                name: 'manufacturer',
                type: 'String',
                isEnable: true,
                sysComment: '生产厂商',
                comment: {
                  value: '生产厂商',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 12,
              },
              batchNo: {
                name: 'batchNo',
                type: 'String',
                isEnable: true,
                sysComment: '炉批号',
                comment: {
                  value: '炉批号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 13,
              },
              testReportNo: {
                name: 'testReportNo',
                type: 'String',
                isEnable: true,
                sysComment: '实验报告号',
                comment: {
                  value: '实验报告号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 14,
              },
              netQuantity: {
                name: 'netQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '最终净值（决定是取地磅称重还是手填的净值）',
                comment: {
                  value: '最终净值（决定是取地磅称重还是手填的净值）',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 15,
              },
              roughQuantity: {
                name: 'roughQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '毛重',
                comment: {
                  value: '毛重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 16,
              },
              conversionRate: {
                name: 'conversionRate',
                type: 'Number',
                isEnable: true,
                sysComment: '转化率',
                comment: {
                  value: '转化率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 17,
              },
              deductRate: {
                name: 'deductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '扣率',
                comment: {
                  value: '扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 18,
              },
              deductQuantity: {
                name: 'deductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '扣吨',
                comment: {
                  value: '扣吨',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 19,
              },
              oriNetQuantity: {
                name: 'oriNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '原始净重',
                comment: {
                  value: '原始净重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 20,
              },
              auxiliaryNetQuantity: {
                name: 'auxiliaryNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '辅单位净重',
                comment: {
                  value: '辅单位净重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 21,
              },
              mainNetQuantity: {
                name: 'mainNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '净重主单位',
                comment: {
                  value: '净重主单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 22,
              },
              remark: {
                name: 'remark',
                type: 'String',
                isEnable: true,
                sysComment: '备注',
                comment: {
                  value: '备注',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 23,
              },
              oriMaterialId: {
                name: 'oriMaterialId',
                type: 'String',
                isEnable: true,
                sysComment: '材料信息varchar主键',
                comment: {
                  value: '材料信息varchar主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 24,
              },
              oriClassId: {
                name: 'oriClassId',
                type: 'String',
                isEnable: true,
                sysComment: '材料类别varchar主键',
                comment: {
                  value: '材料类别varchar主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 25,
              },
              oriCommonId: {
                name: 'oriCommonId',
                type: 'String',
                isEnable: true,
                sysComment: '材料信息其他预留主键sV_Col5',
                comment: {
                  value: '材料信息其他预留主键sV_Col5',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 26,
              },
              oriItemId: {
                name: 'oriItemId',
                type: 'String',
                isEnable: true,
                sysComment: '上传之前的主键',
                comment: {
                  value: '上传之前的主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 27,
              },
              oriOrderId: {
                name: 'oriOrderId',
                type: 'String',
                isEnable: true,
                sysComment: '上传之前的order主键',
                comment: {
                  value: '上传之前的order主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 28,
              },
              creatorId: {
                name: 'creatorId',
                type: 'Number',
                isEnable: true,
                sysComment: '添加人主键',
                comment: {
                  value: '添加人主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 29,
              },
              creatorName: {
                name: 'creatorName',
                type: 'String',
                isEnable: true,
                sysComment: '添加人',
                comment: {
                  value: '添加人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 30,
              },
              modifierId: {
                name: 'modifierId',
                type: 'Number',
                isEnable: true,
                sysComment: '修改人主键',
                comment: {
                  value: '修改人主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 31,
              },
              modifierName: {
                name: 'modifierName',
                type: 'String',
                isEnable: true,
                sysComment: '修改人',
                comment: {
                  value: '修改人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 32,
              },
              itemBarCode: {
                name: 'itemBarCode',
                type: 'String',
                isEnable: true,
                sysComment: '条码',
                comment: {
                  value: '条码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 33,
              },
              isAccounted: {
                name: 'isAccounted',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 34,
              },
              accountor: {
                name: 'accountor',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 35,
              },
              accountDate: {
                name: 'accountDate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 36,
              },
              accountOrderId: {
                name: 'accountOrderId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 37,
              },
              oriOrgId: {
                name: 'oriOrgId',
                type: 'String',
                isEnable: true,
                sysComment: '对接组织机构',
                comment: {
                  value: '对接组织机构',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 38,
              },
              storagePlace: {
                name: 'storagePlace',
                type: 'String',
                isEnable: true,
                sysComment: '存放地',
                comment: {
                  value: '存放地',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 39,
              },
              skillCardNo: {
                name: 'skillCardNo',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 40,
              },
              isNew: {
                name: 'isNew',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 41,
              },
              receivePrice: {
                name: 'receivePrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 42,
              },
              sortCode: {
                name: 'sortCode',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 43,
              },
              waybillWeight: {
                name: 'waybillWeight',
                type: 'Number',
                isEnable: true,
                sysComment: '运单重量',
                comment: {
                  value: '运单重量',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 44,
              },
              serviceType: {
                name: 'serviceType',
                type: 'Number',
                isEnable: true,
                sysComment:
                  '业务类型 0代表调入（20） 1代表收料（10） 调入退（-21） 收料退（-11）',
                comment: {
                  value:
                    '业务类型 0代表调入（20） 1代表收料（10） 调入退（-21） 收料退（-11）',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 45,
              },
              orderType: {
                name: 'orderType',
                type: 'Number',
                isEnable: true,
                sysComment:
                  '操作类型默认值  1冲红（-1）2补录3退料（去掉）4正常',
                comment: {
                  value: '操作类型默认值  1冲红（-1）2补录3退料（去掉）4正常',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 46,
              },
              isRed: {
                name: 'isRed',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 47,
              },
              submitDate: {
                name: 'submitDate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 48,
              },
              taxRate: {
                name: 'taxRate',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 49,
              },
              taxFreePrice: {
                name: 'taxFreePrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 50,
              },
              taxFreeSum: {
                name: 'taxFreeSum',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 51,
              },
              taxIncludedPrice: {
                name: 'taxIncludedPrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 52,
              },
              taxIncludedSum: {
                name: 'taxIncludedSum',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 53,
              },
              taxAmount: {
                name: 'taxAmount',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 54,
              },
              accountQuantity: {
                name: 'accountQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 55,
              },
              itemDataId: {
                name: 'itemDataId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 56,
              },
              checkState: {
                name: 'checkState',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 57,
              },
              externalUploadState: {
                name: 'externalUploadState',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 58,
              },
              oriItemRedId: {
                name: 'oriItemRedId',
                type: 'String',
                isEnable: true,
                sysComment: '冲红材料原始id',
                comment: {
                  value: '冲红材料原始id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 59,
              },
              qualityCertificate: {
                name: 'qualityCertificate',
                type: 'String',
                isEnable: true,
                sysComment: '质量证明文件',
                comment: {
                  value: '质量证明文件',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 60,
              },
              acceptanceRecord: {
                name: 'acceptanceRecord',
                type: 'String',
                isEnable: true,
                sysComment: '验收情况记录',
                comment: {
                  value: '验收情况记录',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 61,
              },
              priceType: {
                name: 'priceType',
                type: 'String',
                isEnable: true,
                sysComment: '价格类型,合同价调查价',
                comment: {
                  value: '价格类型,合同价调查价',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 62,
              },
              createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: '创建时间',
                comment: {
                  value: '创建时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 63,
              },
              updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: '修改时间',
                comment: {
                  value: '修改时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 64,
              },
              version: {
                name: 'version',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 65,
              },
              isRemoved: {
                name: 'isRemoved',
                type: 'Boolean',
                isEnable: true,
                sysComment: '删除标记',
                comment: {
                  value: '删除标记',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 66,
              },
              stockbinFullName: {
                name: 'stockbinFullName',
                type: 'String',
                isEnable: true,
                sysComment: '存放地',
                comment: {
                  value: '存放地',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 67,
              },
              stockbinId: {
                name: 'stockbinId',
                type: 'Number',
                isEnable: true,
                sysComment: '存放地id',
                comment: {
                  value: '存放地id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 68,
              },
              oriStockbinId: {
                name: 'oriStockbinId',
                type: 'String',
                isEnable: true,
                sysComment: '存放地第三方id',
                comment: {
                  value: '存放地第三方id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 69,
              },
              summaryId: {
                name: 'summaryId',
                type: 'Number',
                isEnable: true,
                sysComment: '收料汇总id',
                comment: {
                  value: '收料汇总id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 70,
              },
              freight: {
                name: 'freight',
                type: 'Number',
                isEnable: true,
                sysComment: '运费',
                comment: {
                  value: '运费',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 71,
              },
              isVoid: {
                name: 'isVoid',
                type: 'Boolean',
                isEnable: true,
                sysComment: '是否作废',
                comment: {
                  value: '是否作废',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 72,
              },
              checkStateEg: {
                name: 'checkStateEg',
                type: 'Number',
                isEnable: true,
                sysComment: '核对状态 0未核对  1已核对',
                comment: {
                  value: '核对状态 0未核对  1已核对',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 73,
              },
              isAccountedEg: {
                name: 'isAccountedEg',
                type: 'Boolean',
                isEnable: true,
                sysComment: '对账状态',
                comment: {
                  value: '对账状态',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 74,
              },
              accountOrderIdEg: {
                name: 'accountOrderIdEg',
                type: 'Number',
                isEnable: true,
                sysComment: '对账单号ID',
                comment: {
                  value: '对账单号ID',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 75,
              },
              isCode: {
                name: 'isCode',
                type: 'Boolean',
                isEnable: true,
                sysComment: '数据是否从码单来',
                comment: {
                  value: '数据是否从码单来',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 76,
              },
              oriPlanId: {
                name: 'oriPlanId',
                type: 'Number',
                isEnable: true,
                sysComment: '采购计划id',
                comment: {
                  value: '采购计划id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 77,
              },
              typeMark: {
                name: 'typeMark',
                type: 'String',
                isEnable: true,
                sysComment: '原发料id',
                comment: {
                  value: '原发料id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 78,
              },
              pushState: {
                name: 'pushState',
                type: 'Number',
                isEnable: true,
                sysComment: '推送状态',
                comment: {
                  value: '推送状态',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 79,
              },
              pushFailReason: {
                name: 'pushFailReason',
                type: 'String',
                isEnable: true,
                sysComment: '推送失败原因',
                comment: {
                  value: '推送失败原因',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 80,
              },
              pushTime: {
                name: 'pushTime',
                type: 'String',
                isEnable: true,
                sysComment: '推送时间',
                comment: {
                  value: '推送时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 81,
              },
              technicalRequest: {
                name: 'technicalRequest',
                type: 'String',
                isEnable: true,
                sysComment: '技术要求',
                comment: {
                  value: '技术要求',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 82,
              },
              declarationState: {
                name: 'declarationState',
                type: 'String',
                isEnable: true,
                sysComment: '报验情况',
                comment: {
                  value: '报验情况',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 83,
              },
              labDeductRate: {
                name: 'labDeductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '实验室测定扣率',
                comment: {
                  value: '实验室测定扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 84,
              },
              labDeductQuantity: {
                name: 'labDeductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '实验室测定扣重',
                comment: {
                  value: '实验室测定扣重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 85,
              },
              purchaseMethods: {
                name: 'purchaseMethods',
                type: 'String',
                isEnable: true,
                sysComment: '采购方式',
                comment: {
                  value: '采购方式',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 86,
              },
              purchaseMethodFullNames: {
                name: 'purchaseMethodFullNames',
                type: 'String',
                isEnable: true,
                sysComment: '采购方式全称',
                comment: {
                  value: '采购方式全称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 87,
              },
              diffRemark: {
                name: 'diffRemark',
                type: 'String',
                isEnable: true,
                sysComment: '调差备注',
                comment: {
                  value: '调差备注',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 88,
              },
              accTaxRate: {
                name: 'accTaxRate',
                type: 'Number',
                isEnable: true,
                sysComment: '对账税率',
                comment: {
                  value: '对账税率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 89,
              },
              accTaxIncludedPrice: {
                name: 'accTaxIncludedPrice',
                type: 'Number',
                isEnable: true,
                sysComment: '对账单价',
                comment: {
                  value: '对账单价',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 90,
              },
              accDeductQuantity: {
                name: 'accDeductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '对账扣吨',
                comment: {
                  value: '对账扣吨',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 91,
              },
              accDeductRate: {
                name: 'accDeductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '对账扣率',
                comment: {
                  value: '对账扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 92,
              },
              originalOrgId: {
                name: 'originalOrgId',
                type: 'Number',
                isEnable: true,
                sysComment: '原条码orgId',
                comment: {
                  value: '原条码orgId',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 93,
              },
              receiveType: {
                name: 'receiveType',
                type: 'Number',
                isEnable: true,
                sysComment: '单据类型',
                comment: {
                  value: '单据类型',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 94,
              },
              itemContractId: {
                name: 'itemContractId',
                type: 'Number',
                isEnable: true,
                sysComment: '合同id',
                comment: {
                  value: '合同id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 95,
              },
              itemContractCode: {
                name: 'itemContractCode',
                type: 'String',
                isEnable: true,
                sysComment: '合同编号',
                comment: {
                  value: '合同编号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 96,
              },
              isMarched: {
                name: 'isMarched',
                type: 'Boolean',
                isEnable: true,
                sysComment: '是否已经匹配库存',
                comment: {
                  value: '是否已经匹配库存',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 97,
              },
            },
          },
          {
            remark: '照片配置',
            title: '照片配置',
            code: 'itemTablePhoto',
            content: {
              tenant: {
                name: 'tenant',
                type: 'String',
                isEnable: true,
                sysComment: '租户编码',
                comment: {
                  value: '租户编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 0,
              },
              orgId: {
                name: 'orgId',
                type: 'Number',
                isEnable: true,
                sysComment: '组织机构主键',
                comment: {
                  value: '组织机构主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 1,
              },
              id: {
                name: 'id',
                type: 'Number',
                isEnable: true,
                sysComment: '主键id',
                comment: {
                  value: '主键id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 2,
              },
              orderId: {
                name: 'orderId',
                type: 'Number',
                isEnable: true,
                sysComment: '主表主键',
                comment: {
                  value: '主表主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 3,
              },
              cameraPosition: {
                name: 'cameraPosition',
                type: 'String',
                isEnable: true,
                sysComment: '摄像机位置',
                comment: {
                  value: '摄像机位置',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 4,
              },
              photoType: {
                name: 'photoType',
                type: 'String',
                isEnable: true,
                sysComment: '照片类型（入场、出场）',
                comment: {
                  value: '照片类型（入场、出场）',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 5,
              },
              cameraCode: {
                name: 'cameraCode',
                type: 'String',
                isEnable: true,
                sysComment: '摄像机编码',
                comment: {
                  value: '摄像机编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 6,
              },
              photoUrl: {
                name: 'photoUrl',
                type: 'String',
                isEnable: true,
                sysComment: '照片路径',
                comment: {
                  value: '照片路径',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 7,
              },
              oriItemId: {
                name: 'oriItemId',
                type: 'String',
                isEnable: true,
                sysComment: '上传前id',
                comment: {
                  value: '上传前id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 8,
              },
              oriOrderId: {
                name: 'oriOrderId',
                type: 'String',
                isEnable: true,
                sysComment: '上传之前的order主键',
                comment: {
                  value: '上传之前的order主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 9,
              },
              creatorId: {
                name: 'creatorId',
                type: 'Number',
                isEnable: true,
                sysComment: '添加人主键',
                comment: {
                  value: '添加人主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 10,
              },
              creatorName: {
                name: 'creatorName',
                type: 'String',
                isEnable: true,
                sysComment: '添加人',
                comment: {
                  value: '添加人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 11,
              },
              modifierId: {
                name: 'modifierId',
                type: 'Number',
                isEnable: true,
                sysComment: '修改人主键',
                comment: {
                  value: '修改人主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 12,
              },
              modifierName: {
                name: 'modifierName',
                type: 'String',
                isEnable: true,
                sysComment: '修改人',
                comment: {
                  value: '修改人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 13,
              },
              externalUploadState: {
                name: 'externalUploadState',
                type: 'String',
                isEnable: true,
                sysComment: '对外第三方对接上传状态',
                comment: {
                  value: '对外第三方对接上传状态',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 14,
              },
              createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: '创建时间',
                comment: {
                  value: '创建时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 15,
              },
              updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: '修改时间',
                comment: {
                  value: '修改时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 16,
              },
              version: {
                name: 'version',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 17,
              },
              isRemoved: {
                name: 'isRemoved',
                type: 'Boolean',
                isEnable: true,
                sysComment: '删除标记',
                comment: {
                  value: '删除标记',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 18,
              },
            },
          },
          {
            remark: '',
            title: '',
            code: 'orderTableConfig',
            content: {
              id: {
                name: 'id',
                type: 'Number',
                isEnable: true,
                sysComment: '主键id',
                comment: {
                  value: '主键id666',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: 'left',
                },
                sort: {
                  custom: true,
                  value: true,
                },
                columnSort: 0,
              },
              tenant: {
                name: 'tenant',
                type: 'String',
                isEnable: true,
                sysComment: '租户编码',
                comment: {
                  value: '租户编码123',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 222,
                },
                fixed: {
                  value: 'left',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 1,
              },
              /*orgId: {
                name: 'orgId',
                type: 'Number',
                isEnable: true,
                sysComment: '组织机构主键',
                comment: {
                  value: '组织机构主键456',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: 'left',
                },
                sort: {
                  custom: true,
                  value: true,
                },
                columnSort: 2,
              },
              orgName: {
                name: 'orgName',
                type: 'String',
                isEnable: true,
                sysComment: '组织机构名称',
                comment: {
                  value: '组织机构名称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: 'right',
                },
                sort: {
                  custom: true,
                  value: true,
                },
                columnSort: 3,
              },
              orderDate: {
                name: 'orderDate',
                type: 'String',
                isEnable: true,
                sysComment: '单据日期',
                comment: {
                  value: '单据日期',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: 'right',
                },
                sort: {
                  custom: true,
                  value: true,
                },
                columnSort: 4,
              },
              orderCode: {
                name: 'orderCode',
                type: 'String',
                isEnable: true,
                sysComment: '单据编号',
                comment: {
                  value: '单据编号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: 'right',
                },
                sort: {
                  custom: true,
                  value: true,
                },
                columnSort: 5,
              },
              orderOrigin: {
                name: 'orderOrigin',
                type: 'Number',
                isEnable: true,
                sysComment: '单据来源 或者0代表磅单1代表pda',
                comment: {
                  value: '单据来源 或者0代表磅单1代表pda',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: 'right',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 6,
              },
              maker: {
                name: 'maker',
                type: 'String',
                isEnable: true,
                sysComment: '制单人',
                comment: {
                  value: '制单人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 7,
              },
              makerDate: {
                name: 'makerDate',
                type: 'String',
                isEnable: true,
                sysComment: '制单日期',
                comment: {
                  value: '制单日期',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 8,
              },
              remark: {
                name: 'remark',
                type: 'String',
                isEnable: true,
                sysComment: '备注',
                comment: {
                  value: '备注',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 9,
              },
              supplierId: {
                name: 'supplierId',
                type: 'Number',
                isEnable: true,
                sysComment: '供应商id',
                comment: {
                  value: '供应商id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 10,
              },
              supplierName: {
                name: 'supplierName',
                type: 'String',
                isEnable: true,
                sysComment: '供应商名称',
                comment: {
                  value: '供应商名称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 11,
              },
              exitTime: {
                name: 'exitTime',
                type: 'String',
                isEnable: true,
                sysComment: '出场时间',
                comment: {
                  value: '出场时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 12,
              },
              isRed: {
                name: 'isRed',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 13,
              },
              isAudit: {
                name: 'isAudit',
                type: 'Boolean',
                isEnable: true,
                sysComment: '审核（默认为0）',
                comment: {
                  value: '审核（默认为0）',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 14,
              },
              auditor: {
                name: 'auditor',
                type: 'String',
                isEnable: true,
                sysComment: '审核人',
                comment: {
                  value: '审核人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 15,
              },
              auditDate: {
                name: 'auditDate',
                type: 'String',
                isEnable: true,
                sysComment: '审核时间',
                comment: {
                  value: '审核时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 16,
              },
              oriOrgId: {
                name: 'oriOrgId',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 17,
              },
              oriSupplierId: {
                name: 'oriSupplierId',
                type: 'String',
                isEnable: true,
                sysComment: '预留对接主键字段【常用供应商】',
                comment: {
                  value: '预留对接主键字段【常用供应商】',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 18,
              },
              oriOrderId: {
                name: 'oriOrderId',
                type: 'String',
                isEnable: true,
                sysComment: '上传之前的order主键',
                comment: {
                  value: '上传之前的order主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 19,
              },
              creatorId: {
                name: 'creatorId',
                type: 'Number',
                isEnable: true,
                sysComment: '添加人主键',
                comment: {
                  value: '添加人主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 20,
              },
              creatorName: {
                name: 'creatorName',
                type: 'String',
                isEnable: true,
                sysComment: '添加人',
                comment: {
                  value: '添加人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 21,
              },
              modifierId: {
                name: 'modifierId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 22,
              },
              modifierName: {
                name: 'modifierName',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 23,
              },
              orderBarCode: {
                name: 'orderBarCode',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 24,
              },
              longitude: {
                name: 'longitude',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 25,
              },
              latitude: {
                name: 'latitude',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 26,
              },
              recordedDate: {
                name: 'recordedDate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 27,
              },
              orderDataId: {
                name: 'orderDataId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 28,
              },
              sortOrderCode: {
                name: 'sortOrderCode',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 29,
              },
              rdsId: {
                name: 'rdsId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 30,
              },
              isRds: {
                name: 'isRds',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 31,
              },
              purchaseMethod: {
                name: 'purchaseMethod',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 32,
              },
              purchaseMethodFullName: {
                name: 'purchaseMethodFullName',
                type: 'String',
                isEnable: true,
                sysComment: '采购方式全称',
                comment: {
                  value: '采购方式全称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 33,
              },
              createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: '创建时间',
                comment: {
                  value: '创建时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 34,
              },
              updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 35,
              },
              version: {
                name: 'version',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 36,
              },
              isRemoved: {
                name: 'isRemoved',
                type: 'Boolean',
                isEnable: true,
                sysComment: '删除标记',
                comment: {
                  value: '删除标记',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 37,
              },
              insertFrom: {
                name: 'insertFrom',
                type: 'String',
                isEnable: true,
                sysComment: '区分对接数据',
                comment: {
                  value: '区分对接数据',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 38,
              },
              originalOrderId: {
                name: 'originalOrderId',
                type: 'Number',
                isEnable: true,
                sysComment: '原单据Id',
                comment: {
                  value: '原单据Id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 39,
              },
              originalOrderCode: {
                name: 'originalOrderCode',
                type: 'String',
                isEnable: true,
                sysComment: '原单据编号',
                comment: {
                  value: '原单据编号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 40,
              },
              contractId: {
                name: 'contractId',
                type: 'Number',
                isEnable: true,
                sysComment: '合同id',
                comment: {
                  value: '合同id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 41,
              },
              contractCode: {
                name: 'contractCode',
                type: 'String',
                isEnable: true,
                sysComment: '合同编号',
                comment: {
                  value: '合同编号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 42,
              },
              settlementId: {
                name: 'settlementId',
                type: 'Number',
                isEnable: true,
                sysComment: '结算单位Id',
                comment: {
                  value: '结算单位Id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 43,
              },
              settlementName: {
                name: 'settlementName',
                type: 'String',
                isEnable: true,
                sysComment: '结算单位名称',
                comment: {
                  value: '结算单位名称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 44,
              },
              freight: {
                name: 'freight',
                type: 'Number',
                isEnable: true,
                sysComment: '运费',
                comment: {
                  value: '运费',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 45,
              },
              isVoid: {
                name: 'isVoid',
                type: 'Boolean',
                isEnable: true,
                sysComment: '是否作废',
                comment: {
                  value: '是否作废',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 46,
              },
              isProduction: {
                name: 'isProduction',
                type: 'Boolean',
                isEnable: true,
                sysComment: '是否生产组织发料生成',
                comment: {
                  value: '是否生产组织发料生成',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 47,
              },
              receiveType: {
                name: 'receiveType',
                type: 'Number',
                isEnable: true,
                sysComment: '单据类型',
                comment: {
                  value: '单据类型',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 48,
              },
              receiveOriOrderId: {
                name: 'receiveOriOrderId',
                type: 'String',
                isEnable: true,
                sysComment: '直收直发分解后收料oriOrderId',
                comment: {
                  value: '直收直发分解后收料oriOrderId',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 49,
              },
              taxRate: {
                name: 'taxRate',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 50,
              },
              priceType: {
                name: 'priceType',
                type: 'String',
                isEnable: true,
                sysComment: '价格类型,合同价调查价',
                comment: {
                  value: '价格类型,合同价调查价',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 51,
              },
              orderId: {
                name: 'orderId',
                type: 'Number',
                isEnable: true,
                sysComment: '主表主键',
                comment: {
                  value: '主表主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 52,
              },
              materialId: {
                name: 'materialId',
                type: 'Number',
                isEnable: true,
                sysComment: '主材主键',
                comment: {
                  value: '主材主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 53,
              },
              materialCode: {
                name: 'materialCode',
                type: 'String',
                isEnable: true,
                sysComment: '材料编码',
                comment: {
                  value: '材料编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 54,
              },
              materialName: {
                name: 'materialName',
                type: 'String',
                isEnable: true,
                sysComment: '材料名称',
                comment: {
                  value: '材料名称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 55,
              },
              materialModel: {
                name: 'materialModel',
                type: 'String',
                isEnable: true,
                sysComment: '规格型号',
                comment: {
                  value: '规格型号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 56,
              },
              materialUnit: {
                name: 'materialUnit',
                type: 'String',
                isEnable: true,
                sysComment: '主单位',
                comment: {
                  value: '主单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 57,
              },
              auxiliaryUnit: {
                name: 'auxiliaryUnit',
                type: 'String',
                isEnable: true,
                sysComment: '辅单位',
                comment: {
                  value: '辅单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 58,
              },
              classId: {
                name: 'classId',
                type: 'Number',
                isEnable: true,
                sysComment: '材料类别id',
                comment: {
                  value: '材料类别id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 59,
              },
              classFullId: {
                name: 'classFullId',
                type: 'String',
                isEnable: true,
                sysComment: '材料类别主键链',
                comment: {
                  value: '材料类别主键链',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 60,
              },
              manufacturer: {
                name: 'manufacturer',
                type: 'String',
                isEnable: true,
                sysComment: '生产厂商',
                comment: {
                  value: '生产厂商',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 61,
              },
              batchNo: {
                name: 'batchNo',
                type: 'String',
                isEnable: true,
                sysComment: '炉批号',
                comment: {
                  value: '炉批号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 62,
              },
              testReportNo: {
                name: 'testReportNo',
                type: 'String',
                isEnable: true,
                sysComment: '实验报告号',
                comment: {
                  value: '实验报告号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 63,
              },
              netQuantity: {
                name: 'netQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '最终净值（决定是取地磅称重还是手填的净值）',
                comment: {
                  value: '最终净值（决定是取地磅称重还是手填的净值）',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 64,
              },
              roughQuantity: {
                name: 'roughQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '毛重',
                comment: {
                  value: '毛重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 65,
              },
              conversionRate: {
                name: 'conversionRate',
                type: 'Number',
                isEnable: true,
                sysComment: '转化率',
                comment: {
                  value: '转化率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 66,
              },
              deductRate: {
                name: 'deductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '扣率',
                comment: {
                  value: '扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 67,
              },
              deductQuantity: {
                name: 'deductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '扣吨',
                comment: {
                  value: '扣吨',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 68,
              },
              auto_1693464411122: {
                isParent: true,
                isEnable: true,
                name: 'auto_1693464411122',
                sysComment: '单据类型',
                comment: {
                  value: '单据类型',
                },
                fixed: {
                  value: '',
                },
                isShow: {
                  value: true,
                },
                columnSort: 69,
                children: {
                  serviceType: {
                    name: 'serviceType',
                    type: 'Number',
                    isEnable: true,
                    sysComment: null,
                    comment: {
                      value: null,
                    },
                    isShow: {
                      value: true,
                    },
                    width: {
                      value: 100,
                    },
                    fixed: {
                      value: '',
                    },
                    sort: {
                      custom: true,
                      value: false,
                    },
                    columnSort: 0,
                  },
                  orderType: {
                    name: 'orderType',
                    type: 'Number',
                    isEnable: true,
                    sysComment: null,
                    comment: {
                      value: null,
                    },
                    isShow: {
                      value: true,
                    },
                    width: {
                      value: 100,
                    },
                    fixed: {
                      value: '',
                    },
                    sort: {
                      custom: true,
                      value: false,
                    },
                    columnSort: 1,
                  },
                },
              },
              oriNetQuantity: {
                name: 'oriNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '原始净重',
                comment: {
                  value: '原始净重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 70,
              },
              auxiliaryNetQuantity: {
                name: 'auxiliaryNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '辅单位净重',
                comment: {
                  value: '辅单位净重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 71,
              },*/
              mainNetQuantity: {
                name: 'mainNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '净重主单位',
                comment: {
                  value: '净重主单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 72,
              },
              auto_1693464326402: {
                isParent: true,
                isEnable: true,
                name: 'auto_1693464326402',
                sysComment: '车牌次数',
                comment: {
                  value: '车牌次数',
                },
                fixed: {
                  value: '',
                },
                isShow: {
                  value: true,
                },
                columnSort: 73,
                children: {
                  printTimes: {
                    name: 'printTimes',
                    type: 'Number',
                    isEnable: true,
                    sysComment: '打印次数',
                    comment: {
                      value: '打印次数',
                    },
                    isShow: {
                      value: true,
                    },
                    width: {
                      value: 100,
                    },
                    fixed: {
                      value: '',
                    },
                    sort: {
                      custom: true,
                      value: false,
                    },
                    columnSort: 0,
                  },
                  plateNumber: {
                    name: 'plateNumber',
                    type: 'String',
                    isEnable: true,
                    sysComment: '车牌号',
                    comment: {
                      value: '车牌号',
                    },
                    isShow: {
                      value: true,
                    },
                    width: {
                      value: 100,
                    },
                    fixed: {
                      value: '',
                    },
                    sort: {
                      custom: true,
                      value: false,
                    },
                    columnSort: 1,
                  },
                },
              },
              /*oriMaterialId: {
                name: 'oriMaterialId',
                type: 'String',
                isEnable: true,
                sysComment: '材料信息varchar主键',
                comment: {
                  value: '材料信息varchar主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 74,
              },
              oriClassId: {
                name: 'oriClassId',
                type: 'String',
                isEnable: true,
                sysComment: '材料类别varchar主键',
                comment: {
                  value: '材料类别varchar主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 75,
              },
              oriCommonId: {
                name: 'oriCommonId',
                type: 'String',
                isEnable: true,
                sysComment: '材料信息其他预留主键sV_Col5',
                comment: {
                  value: '材料信息其他预留主键sV_Col5',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 76,
              },
              oriItemId: {
                name: 'oriItemId',
                type: 'String',
                isEnable: true,
                sysComment: '上传之前的主键',
                comment: {
                  value: '上传之前的主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 77,
              },
              itemBarCode: {
                name: 'itemBarCode',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 78,
              },
              isAccounted: {
                name: 'isAccounted',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 79,
              },
              accountor: {
                name: 'accountor',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 80,
              },
              accountDate: {
                name: 'accountDate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 81,
              },
              accountOrderId: {
                name: 'accountOrderId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 82,
              },
              storagePlace: {
                name: 'storagePlace',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 83,
              },
              skillCardNo: {
                name: 'skillCardNo',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 84,
              },
              isNew: {
                name: 'isNew',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 85,
              },
              receivePrice: {
                name: 'receivePrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 86,
              },
              sortCode: {
                name: 'sortCode',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 87,
              },
              waybillWeight: {
                name: 'waybillWeight',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 88,
              },
              submitDate: {
                name: 'submitDate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 89,
              },
              taxFreePrice: {
                name: 'taxFreePrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 90,
              },
              taxFreeSum: {
                name: 'taxFreeSum',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 91,
              },
              taxIncludedPrice: {
                name: 'taxIncludedPrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 92,
              },
              taxIncludedSum: {
                name: 'taxIncludedSum',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 93,
              },
              taxAmount: {
                name: 'taxAmount',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 94,
              },
              accountQuantity: {
                name: 'accountQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 95,
              },
              itemDataId: {
                name: 'itemDataId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 96,
              },
              checkState: {
                name: 'checkState',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 97,
              },
              externalUploadState: {
                name: 'externalUploadState',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 98,
              },
              oriItemRedId: {
                name: 'oriItemRedId',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 99,
              },
              qualityCertificate: {
                name: 'qualityCertificate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 100,
              },
              acceptanceRecord: {
                name: 'acceptanceRecord',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 101,
              },
              stockbinFullName: {
                name: 'stockbinFullName',
                type: 'String',
                isEnable: true,
                sysComment: '存放地',
                comment: {
                  value: '存放地',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 102,
              },
              stockbinId: {
                name: 'stockbinId',
                type: 'Number',
                isEnable: true,
                sysComment: '存放地id',
                comment: {
                  value: '存放地id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 103,
              },
              oriStockbinId: {
                name: 'oriStockbinId',
                type: 'String',
                isEnable: true,
                sysComment: '存放地第三方id',
                comment: {
                  value: '存放地第三方id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 104,
              },
              summaryId: {
                name: 'summaryId',
                type: 'Number',
                isEnable: true,
                sysComment: '收料汇总id',
                comment: {
                  value: '收料汇总id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 105,
              },
              checkStateEg: {
                name: 'checkStateEg',
                type: 'Number',
                isEnable: true,
                sysComment: '核对状态 0未核对  1已核对',
                comment: {
                  value: '核对状态 0未核对  1已核对',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 106,
              },
              isAccountedEg: {
                name: 'isAccountedEg',
                type: 'Boolean',
                isEnable: true,
                sysComment: '对账状态',
                comment: {
                  value: '对账状态',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 107,
              },
              accountOrderIdEg: {
                name: 'accountOrderIdEg',
                type: 'Number',
                isEnable: true,
                sysComment: '对账单号ID',
                comment: {
                  value: '对账单号ID',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 108,
              },
              isCode: {
                name: 'isCode',
                type: 'Boolean',
                isEnable: true,
                sysComment: '数据是否从码单来',
                comment: {
                  value: '数据是否从码单来',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 109,
              },
              oriPlanId: {
                name: 'oriPlanId',
                type: 'Number',
                isEnable: true,
                sysComment: '采购计划id',
                comment: {
                  value: '采购计划id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 110,
              },
              typeMark: {
                name: 'typeMark',
                type: 'String',
                isEnable: true,
                sysComment: '原发料id',
                comment: {
                  value: '原发料id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 111,
              },
              pushState: {
                name: 'pushState',
                type: 'Number',
                isEnable: true,
                sysComment: '推送状态',
                comment: {
                  value: '推送状态',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 112,
              },
              pushFailReason: {
                name: 'pushFailReason',
                type: 'String',
                isEnable: true,
                sysComment: '推送失败原因',
                comment: {
                  value: '推送失败原因',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 113,
              },
              pushTime: {
                name: 'pushTime',
                type: 'String',
                isEnable: true,
                sysComment: '推送时间',
                comment: {
                  value: '推送时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 114,
              },
              technicalRequest: {
                name: 'technicalRequest',
                type: 'String',
                isEnable: true,
                sysComment: '技术要求',
                comment: {
                  value: '技术要求',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 115,
              },
              declarationState: {
                name: 'declarationState',
                type: 'String',
                isEnable: true,
                sysComment: '报验情况',
                comment: {
                  value: '报验情况',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 116,
              },
              labDeductRate: {
                name: 'labDeductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '实验室测定扣率',
                comment: {
                  value: '实验室测定扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 117,
              },
              labDeductQuantity: {
                name: 'labDeductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '实验室测定扣重',
                comment: {
                  value: '实验室测定扣重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 118,
              },
              purchaseMethods: {
                name: 'purchaseMethods',
                type: 'String',
                isEnable: true,
                sysComment: '采购方式',
                comment: {
                  value: '采购方式',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 119,
              },
              purchaseMethodFullNames: {
                name: 'purchaseMethodFullNames',
                type: 'String',
                isEnable: true,
                sysComment: '采购方式全称',
                comment: {
                  value: '采购方式全称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 120,
              },
              diffRemark: {
                name: 'diffRemark',
                type: 'String',
                isEnable: true,
                sysComment: '调差备注',
                comment: {
                  value: '调差备注',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 121,
              },*/
              auto_1693469636983: {
                isParent: true,
                isEnable: true,
                name: 'auto_1693469636983',
                sysComment: 'aaa',
                comment: {
                  value: 'aaa',
                },
                fixed: {
                  value: '',
                },
                isShow: {
                  value: true,
                },
                columnSort: 122,
                children: {
                  originalOrgId: {
                    name: 'originalOrgId',
                    type: 'Number',
                    isEnable: true,
                    sysComment: '原条码orgId',
                    comment: {
                      value: '原条码orgId',
                    },
                    isShow: {
                      value: true,
                    },
                    width: {
                      value: 100,
                    },
                    fixed: {
                      value: '',
                    },
                    sort: {
                      custom: true,
                      value: false,
                    },
                    columnSort: 0,
                  },
                  itemContractId: {
                    name: 'itemContractId',
                    type: 'Number',
                    isEnable: true,
                    sysComment: '合同id',
                    comment: {
                      value: '合同id',
                    },
                    isShow: {
                      value: true,
                    },
                    width: {
                      value: 100,
                    },
                    fixed: {
                      value: '',
                    },
                    sort: {
                      custom: true,
                      value: false,
                    },
                    columnSort: 1,
                  },
                  itemContractCode: {
                    name: 'itemContractCode',
                    type: 'String',
                    isEnable: true,
                    sysComment: '合同编号',
                    comment: {
                      value: '合同编号',
                    },
                    isShow: {
                      value: true,
                    },
                    width: {
                      value: 100,
                    },
                    fixed: {
                      value: '',
                    },
                    sort: {
                      custom: true,
                      value: false,
                    },
                    columnSort: 2,
                  },
                },
              },
              auto_1693469705815: {
                isParent: true,
                isEnable: true,
                name: 'auto_1693469705815',
                sysComment: 'xxxx',
                comment: {
                  value: 'xxxx',
                },
                fixed: {
                  value: '',
                },
                isShow: {
                  value: true,
                },
                columnSort: 123,
                children: {
                  accTaxRate: {
                    name: 'accTaxRate',
                    type: 'Number',
                    isEnable: true,
                    sysComment: '对账税率',
                    comment: {
                      value: '对账税率',
                    },
                    isShow: {
                      value: true,
                    },
                    width: {
                      value: 100,
                    },
                    fixed: {
                      value: '',
                    },
                    sort: {
                      custom: true,
                      value: false,
                    },
                    columnSort: 0,
                  },
                  auto_1693469655956: {
                    isParent: true,
                    isEnable: true,
                    name: 'auto_1693469655956',
                    sysComment: 'bbb',
                    comment: {
                      value: 'bbb',
                    },
                    fixed: {
                      value: '',
                    },
                    isShow: {
                      value: true,
                    },
                    columnSort: 1,
                    children: {
                      accTaxIncludedPrice: {
                        name: 'accTaxIncludedPrice',
                        type: 'Number',
                        isEnable: true,
                        sysComment: '对账单价',
                        comment: {
                          value: '对账单价',
                        },
                        isShow: {
                          value: true,
                        },
                        width: {
                          value: 100,
                        },
                        fixed: {
                          value: '',
                        },
                        sort: {
                          custom: true,
                          value: false,
                        },
                        columnSort: 0,
                      },
                      accDeductQuantity: {
                        name: 'accDeductQuantity',
                        type: 'Number',
                        isEnable: true,
                        sysComment: '对账扣吨',
                        comment: {
                          value: '对账扣吨',
                        },
                        isShow: {
                          value: true,
                        },
                        width: {
                          value: 100,
                        },
                        fixed: {
                          value: '',
                        },
                        sort: {
                          custom: true,
                          value: false,
                        },
                        columnSort: 1,
                      },
                      accDeductRate: {
                        name: 'accDeductRate',
                        type: 'Number',
                        isEnable: true,
                        sysComment: '对账扣率',
                        comment: {
                          value: '对账扣率',
                        },
                        isShow: {
                          value: true,
                        },
                        width: {
                          value: 100,
                        },
                        fixed: {
                          value: '',
                        },
                        sort: {
                          custom: true,
                          value: false,
                        },
                        columnSort: 2,
                      },
                    },
                  },
                },
              },
            },
          },
        ],
        printConfigs: [],
        exportConfigs: [],
      },
    };
    return {
      code: 201,
      status: 'success',
      result: {
        tableConfigs: [
          {
            remark: '明细表格配置',
            title: '',
            code: 'itemTableConfig',
            content: {
              tenant: {
                name: 'tenant',
                type: 'String',
                isEnable: true,
                sysComment: '租户编码',
                comment: {
                  value: '租户编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 97,
              },
              orgId: {
                name: 'orgId',
                type: 'Number',
                isEnable: true,
                sysComment: '组织机构主键',
                comment: {
                  value: '组织机构主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 98,
              },
              id: {
                name: 'id',
                type: 'Number',
                isEnable: true,
                sysComment: '主键id',
                comment: {
                  value: '主键id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 100,
              },
              orderId: {
                name: 'orderId',
                type: 'Number',
                isEnable: true,
                sysComment: '主表主键',
                comment: {
                  value: '主表主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 99,
              },
              materialId: {
                name: 'materialId',
                type: 'Number',
                isEnable: true,
                sysComment: '主材主键',
                comment: {
                  value: '主材主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 104,
              },
              materialCode: {
                name: 'materialCode',
                type: 'String',
                isEnable: true,
                sysComment: '材料编码',
                comment: {
                  value: '材料编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 105,
              },
              materialName: {
                name: 'materialName',
                type: 'String',
                isEnable: true,
                sysComment: '材料名称',
                comment: {
                  value: '材料名称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 106,
              },
              materialModel: {
                name: 'materialModel',
                type: 'String',
                isEnable: true,
                sysComment: '规格型号',
                comment: {
                  value: '规格型号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 107,
              },
              materialUnit: {
                name: 'materialUnit',
                type: 'String',
                isEnable: true,
                sysComment: '主单位',
                comment: {
                  value: '主单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 108,
              },
              auxiliaryUnit: {
                name: 'auxiliaryUnit',
                type: 'String',
                isEnable: true,
                sysComment: '辅单位',
                comment: {
                  value: '辅单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 109,
              },
              classId: {
                name: 'classId',
                type: 'Number',
                isEnable: true,
                sysComment: '材料类别id',
                comment: {
                  value: '材料类别id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 110,
              },
              classFullId: {
                name: 'classFullId',
                type: 'String',
                isEnable: true,
                sysComment: '材料类别主键链',
                comment: {
                  value: '材料类别主键链',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 111,
              },
              manufacturer: {
                name: 'manufacturer',
                type: 'String',
                isEnable: true,
                sysComment: '生产厂商',
                comment: {
                  value: '生产厂商',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 145,
              },
              batchNo: {
                name: 'batchNo',
                type: 'String',
                isEnable: true,
                sysComment: '炉批号',
                comment: {
                  value: '炉批号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 146,
              },
              testReportNo: {
                name: 'testReportNo',
                type: 'String',
                isEnable: true,
                sysComment: '实验报告号',
                comment: {
                  value: '实验报告号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 147,
              },
              netQuantity: {
                name: 'netQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '最终净值（决定是取地磅称重还是手填的净值）',
                comment: {
                  value: '最终净值（决定是取地磅称重还是手填的净值）',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 112,
              },
              roughQuantity: {
                name: 'roughQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '毛重',
                comment: {
                  value: '毛重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 113,
              },
              conversionRate: {
                name: 'conversionRate',
                type: 'Number',
                isEnable: true,
                sysComment: '转化率',
                comment: {
                  value: '转化率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 114,
              },
              deductRate: {
                name: 'deductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '扣率',
                comment: {
                  value: '扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 115,
              },
              deductQuantity: {
                name: 'deductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '扣吨',
                comment: {
                  value: '扣吨',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 116,
              },
              oriNetQuantity: {
                name: 'oriNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '原始净重',
                comment: {
                  value: '原始净重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 117,
              },
              auxiliaryNetQuantity: {
                name: 'auxiliaryNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '辅单位净重',
                comment: {
                  value: '辅单位净重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 118,
              },
              mainNetQuantity: {
                name: 'mainNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '净重主单位',
                comment: {
                  value: '净重主单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 119,
              },
              remark: {
                name: 'remark',
                type: 'String',
                isEnable: true,
                sysComment: '备注',
                comment: {
                  value: '备注',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 122,
              },
              oriMaterialId: {
                name: 'oriMaterialId',
                type: 'String',
                isEnable: true,
                sysComment: '材料信息varchar主键',
                comment: {
                  value: '材料信息varchar主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 123,
              },
              oriClassId: {
                name: 'oriClassId',
                type: 'String',
                isEnable: true,
                sysComment: '材料类别varchar主键',
                comment: {
                  value: '材料类别varchar主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 124,
              },
              oriCommonId: {
                name: 'oriCommonId',
                type: 'String',
                isEnable: true,
                sysComment: '材料信息其他预留主键sV_Col5',
                comment: {
                  value: '材料信息其他预留主键sV_Col5',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 125,
              },
              oriItemId: {
                name: 'oriItemId',
                type: 'String',
                isEnable: true,
                sysComment: '上传之前的主键',
                comment: {
                  value: '上传之前的主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 126,
              },
              oriOrderId: {
                name: 'oriOrderId',
                type: 'String',
                isEnable: true,
                sysComment: '上传之前的order主键',
                comment: {
                  value: '上传之前的order主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 127,
              },
              creatorId: {
                name: 'creatorId',
                type: 'Number',
                isEnable: true,
                sysComment: '添加人主键',
                comment: {
                  value: '添加人主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 129,
              },
              creatorName: {
                name: 'creatorName',
                type: 'String',
                isEnable: true,
                sysComment: '添加人',
                comment: {
                  value: '添加人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 130,
              },
              modifierId: {
                name: 'modifierId',
                type: 'Number',
                isEnable: true,
                sysComment: '修改人主键',
                comment: {
                  value: '修改人主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 131,
              },
              modifierName: {
                name: 'modifierName',
                type: 'String',
                isEnable: true,
                sysComment: '修改人',
                comment: {
                  value: '修改人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 132,
              },
              itemBarCode: {
                name: 'itemBarCode',
                type: 'String',
                isEnable: true,
                sysComment: '条码',
                comment: {
                  value: '条码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 121,
              },
              isAccounted: {
                name: 'isAccounted',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 34,
              },
              accountor: {
                name: 'accountor',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 35,
              },
              accountDate: {
                name: 'accountDate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 36,
              },
              accountOrderId: {
                name: 'accountOrderId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 37,
              },
              oriOrgId: {
                name: 'oriOrgId',
                type: 'String',
                isEnable: true,
                sysComment: '对接组织机构',
                comment: {
                  value: '对接组织机构',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 128,
              },
              storagePlace: {
                name: 'storagePlace',
                type: 'String',
                isEnable: true,
                sysComment: '存放地',
                comment: {
                  value: '存放地',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 150,
              },
              skillCardNo: {
                name: 'skillCardNo',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 40,
              },
              isNew: {
                name: 'isNew',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 41,
              },
              receivePrice: {
                name: 'receivePrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 42,
              },
              sortCode: {
                name: 'sortCode',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 43,
              },
              waybillWeight: {
                name: 'waybillWeight',
                type: 'Number',
                isEnable: true,
                sysComment: '运单重量',
                comment: {
                  value: '运单重量',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 120,
              },
              serviceType: {
                name: 'serviceType',
                type: 'Number',
                isEnable: true,
                sysComment:
                  '业务类型 0代表调入（20） 1代表收料（10） 调入退（-21） 收料退（-11）',
                comment: {
                  value:
                    '业务类型 0代表调入（20） 1代表收料（10） 调入退（-21） 收料退（-11）',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 101,
              },
              orderType: {
                name: 'orderType',
                type: 'Number',
                isEnable: true,
                sysComment:
                  '操作类型默认值  1冲红（-1）2补录3退料（去掉）4正常',
                comment: {
                  value: '操作类型默认值  1冲红（-1）2补录3退料（去掉）4正常',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 102,
              },
              isRed: {
                name: 'isRed',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 47,
              },
              submitDate: {
                name: 'submitDate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 48,
              },
              taxRate: {
                name: 'taxRate',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 49,
              },
              taxFreePrice: {
                name: 'taxFreePrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 50,
              },
              taxFreeSum: {
                name: 'taxFreeSum',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 51,
              },
              taxIncludedPrice: {
                name: 'taxIncludedPrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 52,
              },
              taxIncludedSum: {
                name: 'taxIncludedSum',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 53,
              },
              taxAmount: {
                name: 'taxAmount',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 54,
              },
              accountQuantity: {
                name: 'accountQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 55,
              },
              itemDataId: {
                name: 'itemDataId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 56,
              },
              checkState: {
                name: 'checkState',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 57,
              },
              externalUploadState: {
                name: 'externalUploadState',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 133,
              },
              oriItemRedId: {
                name: 'oriItemRedId',
                type: 'String',
                isEnable: true,
                sysComment: '冲红材料原始id',
                comment: {
                  value: '冲红材料原始id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 134,
              },
              qualityCertificate: {
                name: 'qualityCertificate',
                type: 'String',
                isEnable: true,
                sysComment: '质量证明文件',
                comment: {
                  value: '质量证明文件',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 148,
              },
              acceptanceRecord: {
                name: 'acceptanceRecord',
                type: 'String',
                isEnable: true,
                sysComment: '验收情况记录',
                comment: {
                  value: '验收情况记录',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 149,
              },
              priceType: {
                name: 'priceType',
                type: 'String',
                isEnable: true,
                sysComment: '价格类型,合同价调查价',
                comment: {
                  value: '价格类型,合同价调查价',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 62,
              },
              createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: '创建时间',
                comment: {
                  value: '创建时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 135,
              },
              updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: '修改时间',
                comment: {
                  value: '修改时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 136,
              },
              version: {
                name: 'version',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 137,
              },
              isRemoved: {
                name: 'isRemoved',
                type: 'Boolean',
                isEnable: true,
                sysComment: '删除标记',
                comment: {
                  value: '删除标记',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 138,
              },
              stockbinFullName: {
                name: 'stockbinFullName',
                type: 'String',
                isEnable: true,
                sysComment: '存放地',
                comment: {
                  value: '存放地',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 67,
              },
              stockbinId: {
                name: 'stockbinId',
                type: 'Number',
                isEnable: true,
                sysComment: '存放地id',
                comment: {
                  value: '存放地id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 68,
              },
              oriStockbinId: {
                name: 'oriStockbinId',
                type: 'String',
                isEnable: true,
                sysComment: '存放地第三方id',
                comment: {
                  value: '存放地第三方id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 69,
              },
              summaryId: {
                name: 'summaryId',
                type: 'Number',
                isEnable: true,
                sysComment: '收料汇总id',
                comment: {
                  value: '收料汇总id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 139,
              },
              freight: {
                name: 'freight',
                type: 'Number',
                isEnable: true,
                sysComment: '运费',
                comment: {
                  value: '运费',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 71,
              },
              isVoid: {
                name: 'isVoid',
                type: 'Boolean',
                isEnable: true,
                sysComment: '是否作废',
                comment: {
                  value: '是否作废',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 72,
              },
              checkStateEg: {
                name: 'checkStateEg',
                type: 'Number',
                isEnable: true,
                sysComment: '核对状态 0未核对  1已核对',
                comment: {
                  value: '核对状态 0未核对  1已核对',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 73,
              },
              isAccountedEg: {
                name: 'isAccountedEg',
                type: 'Boolean',
                isEnable: true,
                sysComment: '对账状态',
                comment: {
                  value: '对账状态',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 74,
              },
              accountOrderIdEg: {
                name: 'accountOrderIdEg',
                type: 'Number',
                isEnable: true,
                sysComment: '对账单号ID',
                comment: {
                  value: '对账单号ID',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 75,
              },
              isCode: {
                name: 'isCode',
                type: 'Boolean',
                isEnable: true,
                sysComment: '数据是否从码单来',
                comment: {
                  value: '数据是否从码单来',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 76,
              },
              oriPlanId: {
                name: 'oriPlanId',
                type: 'Number',
                isEnable: true,
                sysComment: '采购计划id',
                comment: {
                  value: '采购计划id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 77,
              },
              typeMark: {
                name: 'typeMark',
                type: 'String',
                isEnable: true,
                sysComment: '原发料id',
                comment: {
                  value: '原发料id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 78,
              },
              pushState: {
                name: 'pushState',
                type: 'Number',
                isEnable: true,
                sysComment: '推送状态',
                comment: {
                  value: '推送状态',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 140,
              },
              pushFailReason: {
                name: 'pushFailReason',
                type: 'String',
                isEnable: true,
                sysComment: '推送失败原因',
                comment: {
                  value: '推送失败原因',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 141,
              },
              pushTime: {
                name: 'pushTime',
                type: 'String',
                isEnable: true,
                sysComment: '推送时间',
                comment: {
                  value: '推送时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 142,
              },
              technicalRequest: {
                name: 'technicalRequest',
                type: 'String',
                isEnable: true,
                sysComment: '技术要求',
                comment: {
                  value: '技术要求',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 82,
              },
              declarationState: {
                name: 'declarationState',
                type: 'String',
                isEnable: true,
                sysComment: '报验情况',
                comment: {
                  value: '报验情况',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 83,
              },
              labDeductRate: {
                name: 'labDeductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '实验室测定扣率',
                comment: {
                  value: '实验室测定扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 143,
              },
              labDeductQuantity: {
                name: 'labDeductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '实验室测定扣重',
                comment: {
                  value: '实验室测定扣重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 144,
              },
              purchaseMethods: {
                name: 'purchaseMethods',
                type: 'String',
                isEnable: true,
                sysComment: '采购方式',
                comment: {
                  value: '采购方式',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 151,
              },
              purchaseMethodFullNames: {
                name: 'purchaseMethodFullNames',
                type: 'String',
                isEnable: true,
                sysComment: '采购方式全称',
                comment: {
                  value: '采购方式全称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 152,
              },
              diffRemark: {
                name: 'diffRemark',
                type: 'String',
                isEnable: true,
                sysComment: '调差备注',
                comment: {
                  value: '调差备注',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 88,
              },
              accTaxRate: {
                name: 'accTaxRate',
                type: 'Number',
                isEnable: true,
                sysComment: '对账税率',
                comment: {
                  value: '对账税率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 89,
              },
              accTaxIncludedPrice: {
                name: 'accTaxIncludedPrice',
                type: 'Number',
                isEnable: true,
                sysComment: '对账单价',
                comment: {
                  value: '对账单价',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 90,
              },
              accDeductQuantity: {
                name: 'accDeductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '对账扣吨',
                comment: {
                  value: '对账扣吨',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 91,
              },
              accDeductRate: {
                name: 'accDeductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '对账扣率',
                comment: {
                  value: '对账扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 92,
              },
              originalOrgId: {
                name: 'originalOrgId',
                type: 'Number',
                isEnable: true,
                sysComment: '原条码orgId',
                comment: {
                  value: '原条码orgId',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 93,
              },
              receiveType: {
                name: 'receiveType',
                type: 'Number',
                isEnable: true,
                sysComment: '单据类型',
                comment: {
                  value: '单据类型',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 153,
              },
              itemContractId: {
                name: 'itemContractId',
                type: 'Number',
                isEnable: true,
                sysComment: '合同id',
                comment: {
                  value: '合同id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 95,
              },
              itemContractCode: {
                name: 'itemContractCode',
                type: 'String',
                isEnable: true,
                sysComment: '合同编号',
                comment: {
                  value: '合同编号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 96,
              },
              isMarched: {
                name: 'isMarched',
                type: 'Boolean',
                isEnable: true,
                sysComment: '是否已经匹配库存',
                comment: {
                  value: '是否已经匹配库存',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 103,
              },
            },
          },
          {
            remark: '照片配置',
            title: '照片配置',
            code: 'itemTablePhoto',
            content: {
              tenant: {
                name: 'tenant',
                type: 'String',
                isEnable: true,
                sysComment: '租户编码',
                comment: {
                  value: '租户编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 0,
              },
              orgId: {
                name: 'orgId',
                type: 'Number',
                isEnable: true,
                sysComment: '组织机构主键',
                comment: {
                  value: '组织机构主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 1,
              },
              id: {
                name: 'id',
                type: 'Number',
                isEnable: true,
                sysComment: '主键id',
                comment: {
                  value: '主键id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 2,
              },
              orderId: {
                name: 'orderId',
                type: 'Number',
                isEnable: true,
                sysComment: '主表主键',
                comment: {
                  value: '主表主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 3,
              },
              cameraPosition: {
                name: 'cameraPosition',
                type: 'String',
                isEnable: true,
                sysComment: '摄像机位置',
                comment: {
                  value: '摄像机位置',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 4,
              },
              photoType: {
                name: 'photoType',
                type: 'String',
                isEnable: true,
                sysComment: '照片类型（入场、出场）',
                comment: {
                  value: '照片类型（入场、出场）',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 5,
              },
              cameraCode: {
                name: 'cameraCode',
                type: 'String',
                isEnable: true,
                sysComment: '摄像机编码',
                comment: {
                  value: '摄像机编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 6,
              },
              photoUrl: {
                name: 'photoUrl',
                type: 'String',
                isEnable: true,
                sysComment: '照片路径',
                comment: {
                  value: '照片路径',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 7,
              },
              oriItemId: {
                name: 'oriItemId',
                type: 'String',
                isEnable: true,
                sysComment: '上传前id',
                comment: {
                  value: '上传前id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 8,
              },
              oriOrderId: {
                name: 'oriOrderId',
                type: 'String',
                isEnable: true,
                sysComment: '上传之前的order主键',
                comment: {
                  value: '上传之前的order主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 9,
              },
              creatorId: {
                name: 'creatorId',
                type: 'Number',
                isEnable: true,
                sysComment: '添加人主键',
                comment: {
                  value: '添加人主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 10,
              },
              creatorName: {
                name: 'creatorName',
                type: 'String',
                isEnable: true,
                sysComment: '添加人',
                comment: {
                  value: '添加人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 11,
              },
              modifierId: {
                name: 'modifierId',
                type: 'Number',
                isEnable: true,
                sysComment: '修改人主键',
                comment: {
                  value: '修改人主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 12,
              },
              modifierName: {
                name: 'modifierName',
                type: 'String',
                isEnable: true,
                sysComment: '修改人',
                comment: {
                  value: '修改人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 13,
              },
              externalUploadState: {
                name: 'externalUploadState',
                type: 'String',
                isEnable: true,
                sysComment: '对外第三方对接上传状态',
                comment: {
                  value: '对外第三方对接上传状态',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 14,
              },
              createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: '创建时间',
                comment: {
                  value: '创建时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 15,
              },
              updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: '修改时间',
                comment: {
                  value: '修改时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 16,
              },
              version: {
                name: 'version',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 17,
              },
              isRemoved: {
                name: 'isRemoved',
                type: 'Boolean',
                isEnable: true,
                sysComment: '删除标记',
                comment: {
                  value: '删除标记',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 18,
              },
            },
          },
          {
            remark: '主表表格配置',
            title: '',
            code: 'orderTableConfig',
            content: {
              tenant: {
                name: 'tenant',
                type: 'String',
                isEnable: true,
                sysComment: '租户编码',
                comment: {
                  value: '租户编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 56,
              },
              orgId: {
                name: 'orgId',
                type: 'Number',
                isEnable: true,
                sysComment: '组织机构主键',
                comment: {
                  value: '组织机构主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 57,
              },
              id: {
                name: 'id',
                type: 'Number',
                isEnable: true,
                sysComment: '主键id',
                comment: {
                  value: '主键id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 58,
              },
              orgName: {
                name: 'orgName',
                type: 'String',
                isEnable: true,
                sysComment: '组织机构名称',
                comment: {
                  value: '组织机构名称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 3,
              },
              orderDate: {
                name: 'orderDate',
                type: 'String',
                isEnable: true,
                sysComment: '单据日期',
                comment: {
                  value: '单据日期',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 4,
              },
              orderCode: {
                name: 'orderCode',
                type: 'String',
                isEnable: true,
                sysComment: '单据编号',
                comment: {
                  value: '单据编号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 5,
              },
              orderOrigin: {
                name: 'orderOrigin',
                type: 'Number',
                isEnable: true,
                sysComment: '单据来源 或者0代表磅单1代表pda',
                comment: {
                  value: '单据来源 或者0代表磅单1代表pda',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 6,
              },
              serviceType: {
                name: 'serviceType',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 101,
              },
              orderType: {
                name: 'orderType',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 102,
              },
              maker: {
                name: 'maker',
                type: 'String',
                isEnable: true,
                sysComment: '制单人',
                comment: {
                  value: '制单人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 9,
              },
              makerDate: {
                name: 'makerDate',
                type: 'String',
                isEnable: true,
                sysComment: '制单日期',
                comment: {
                  value: '制单日期',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 10,
              },
              remark: {
                name: 'remark',
                type: 'String',
                isEnable: true,
                sysComment: '备注',
                comment: {
                  value: '备注',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 79,
              },
              printTimes: {
                name: 'printTimes',
                type: 'Number',
                isEnable: true,
                sysComment: '打印次数',
                comment: {
                  value: '打印次数',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 12,
              },
              plateNumber: {
                name: 'plateNumber',
                type: 'String',
                isEnable: true,
                sysComment: '车牌号',
                comment: {
                  value: '车牌号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 13,
              },
              supplierId: {
                name: 'supplierId',
                type: 'Number',
                isEnable: true,
                sysComment: '供应商id',
                comment: {
                  value: '供应商id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 14,
              },
              supplierName: {
                name: 'supplierName',
                type: 'String',
                isEnable: true,
                sysComment: '供应商名称',
                comment: {
                  value: '供应商名称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 15,
              },
              exitTime: {
                name: 'exitTime',
                type: 'String',
                isEnable: true,
                sysComment: '出场时间',
                comment: {
                  value: '出场时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 16,
              },
              isRed: {
                name: 'isRed',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 103,
              },
              isAudit: {
                name: 'isAudit',
                type: 'Boolean',
                isEnable: true,
                sysComment: '审核（默认为0）',
                comment: {
                  value: '审核（默认为0）',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 18,
              },
              auditor: {
                name: 'auditor',
                type: 'String',
                isEnable: true,
                sysComment: '审核人',
                comment: {
                  value: '审核人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 19,
              },
              auditDate: {
                name: 'auditDate',
                type: 'String',
                isEnable: true,
                sysComment: '审核时间',
                comment: {
                  value: '审核时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 20,
              },
              oriOrgId: {
                name: 'oriOrgId',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 94,
              },
              oriSupplierId: {
                name: 'oriSupplierId',
                type: 'String',
                isEnable: true,
                sysComment: '预留对接主键字段【常用供应商】',
                comment: {
                  value: '预留对接主键字段【常用供应商】',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 22,
              },
              oriOrderId: {
                name: 'oriOrderId',
                type: 'String',
                isEnable: true,
                sysComment: '上传之前的order主键',
                comment: {
                  value: '上传之前的order主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 84,
              },
              creatorId: {
                name: 'creatorId',
                type: 'Number',
                isEnable: true,
                sysComment: '添加人主键',
                comment: {
                  value: '添加人主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 85,
              },
              creatorName: {
                name: 'creatorName',
                type: 'String',
                isEnable: true,
                sysComment: '添加人',
                comment: {
                  value: '添加人',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 86,
              },
              modifierId: {
                name: 'modifierId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 87,
              },
              modifierName: {
                name: 'modifierName',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 88,
              },
              orderBarCode: {
                name: 'orderBarCode',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 28,
              },
              longitude: {
                name: 'longitude',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 29,
              },
              latitude: {
                name: 'latitude',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 30,
              },
              recordedDate: {
                name: 'recordedDate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 31,
              },
              orderDataId: {
                name: 'orderDataId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 32,
              },
              sortOrderCode: {
                name: 'sortOrderCode',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 33,
              },
              rdsId: {
                name: 'rdsId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 34,
              },
              isRds: {
                name: 'isRds',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 35,
              },
              purchaseMethod: {
                name: 'purchaseMethod',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 36,
              },
              purchaseMethodFullName: {
                name: 'purchaseMethodFullName',
                type: 'String',
                isEnable: true,
                sysComment: '采购方式全称',
                comment: {
                  value: '采购方式全称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 37,
              },
              createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: '创建时间',
                comment: {
                  value: '创建时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 119,
              },
              updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 120,
              },
              version: {
                name: 'version',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 121,
              },
              isRemoved: {
                name: 'isRemoved',
                type: 'Boolean',
                isEnable: true,
                sysComment: '删除标记',
                comment: {
                  value: '删除标记',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 122,
              },
              insertFrom: {
                name: 'insertFrom',
                type: 'String',
                isEnable: true,
                sysComment: '区分对接数据',
                comment: {
                  value: '区分对接数据',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 42,
              },
              originalOrderId: {
                name: 'originalOrderId',
                type: 'Number',
                isEnable: true,
                sysComment: '原单据Id',
                comment: {
                  value: '原单据Id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 43,
              },
              originalOrderCode: {
                name: 'originalOrderCode',
                type: 'String',
                isEnable: true,
                sysComment: '原单据编号',
                comment: {
                  value: '原单据编号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 44,
              },
              contractId: {
                name: 'contractId',
                type: 'Number',
                isEnable: true,
                sysComment: '合同id',
                comment: {
                  value: '合同id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 45,
              },
              contractCode: {
                name: 'contractCode',
                type: 'String',
                isEnable: true,
                sysComment: '合同编号',
                comment: {
                  value: '合同编号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 46,
              },
              settlementId: {
                name: 'settlementId',
                type: 'Number',
                isEnable: true,
                sysComment: '结算单位Id',
                comment: {
                  value: '结算单位Id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 47,
              },
              settlementName: {
                name: 'settlementName',
                type: 'String',
                isEnable: true,
                sysComment: '结算单位名称',
                comment: {
                  value: '结算单位名称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 48,
              },
              freight: {
                name: 'freight',
                type: 'Number',
                isEnable: true,
                sysComment: '运费',
                comment: {
                  value: '运费',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 127,
              },
              isVoid: {
                name: 'isVoid',
                type: 'Boolean',
                isEnable: true,
                sysComment: '是否作废',
                comment: {
                  value: '是否作废',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 128,
              },
              isProduction: {
                name: 'isProduction',
                type: 'Boolean',
                isEnable: true,
                sysComment: '是否生产组织发料生成',
                comment: {
                  value: '是否生产组织发料生成',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 51,
              },
              receiveType: {
                name: 'receiveType',
                type: 'Number',
                isEnable: true,
                sysComment: '单据类型',
                comment: {
                  value: '单据类型',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 150,
              },
              receiveOriOrderId: {
                name: 'receiveOriOrderId',
                type: 'String',
                isEnable: true,
                sysComment: '直收直发分解后收料oriOrderId',
                comment: {
                  value: '直收直发分解后收料oriOrderId',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 53,
              },
              taxRate: {
                name: 'taxRate',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 105,
              },
              priceType: {
                name: 'priceType',
                type: 'String',
                isEnable: true,
                sysComment: '价格类型,合同价调查价',
                comment: {
                  value: '价格类型,合同价调查价',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 118,
              },
              orderId: {
                name: 'orderId',
                type: 'Number',
                isEnable: true,
                sysComment: '主表主键',
                comment: {
                  value: '主表主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 59,
              },
              materialId: {
                name: 'materialId',
                type: 'Number',
                isEnable: true,
                sysComment: '主材主键',
                comment: {
                  value: '主材主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 60,
              },
              materialCode: {
                name: 'materialCode',
                type: 'String',
                isEnable: true,
                sysComment: '材料编码',
                comment: {
                  value: '材料编码',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 61,
              },
              materialName: {
                name: 'materialName',
                type: 'String',
                isEnable: true,
                sysComment: '材料名称',
                comment: {
                  value: '材料名称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 62,
              },
              materialModel: {
                name: 'materialModel',
                type: 'String',
                isEnable: true,
                sysComment: '规格型号',
                comment: {
                  value: '规格型号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 63,
              },
              materialUnit: {
                name: 'materialUnit',
                type: 'String',
                isEnable: true,
                sysComment: '主单位',
                comment: {
                  value: '主单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 64,
              },
              auxiliaryUnit: {
                name: 'auxiliaryUnit',
                type: 'String',
                isEnable: true,
                sysComment: '辅单位',
                comment: {
                  value: '辅单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 65,
              },
              classId: {
                name: 'classId',
                type: 'Number',
                isEnable: true,
                sysComment: '材料类别id',
                comment: {
                  value: '材料类别id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 66,
              },
              classFullId: {
                name: 'classFullId',
                type: 'String',
                isEnable: true,
                sysComment: '材料类别主键链',
                comment: {
                  value: '材料类别主键链',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 67,
              },
              manufacturer: {
                name: 'manufacturer',
                type: 'String',
                isEnable: true,
                sysComment: '生产厂商',
                comment: {
                  value: '生产厂商',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 68,
              },
              batchNo: {
                name: 'batchNo',
                type: 'String',
                isEnable: true,
                sysComment: '炉批号',
                comment: {
                  value: '炉批号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 69,
              },
              testReportNo: {
                name: 'testReportNo',
                type: 'String',
                isEnable: true,
                sysComment: '实验报告号',
                comment: {
                  value: '实验报告号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 70,
              },
              netQuantity: {
                name: 'netQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '最终净值（决定是取地磅称重还是手填的净值）',
                comment: {
                  value: '最终净值（决定是取地磅称重还是手填的净值）',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 71,
              },
              roughQuantity: {
                name: 'roughQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '毛重',
                comment: {
                  value: '毛重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 72,
              },
              conversionRate: {
                name: 'conversionRate',
                type: 'Number',
                isEnable: true,
                sysComment: '转化率',
                comment: {
                  value: '转化率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 73,
              },
              deductRate: {
                name: 'deductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '扣率',
                comment: {
                  value: '扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 74,
              },
              deductQuantity: {
                name: 'deductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '扣吨',
                comment: {
                  value: '扣吨',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 75,
              },
              oriNetQuantity: {
                name: 'oriNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '原始净重',
                comment: {
                  value: '原始净重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 76,
              },
              auxiliaryNetQuantity: {
                name: 'auxiliaryNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '辅单位净重',
                comment: {
                  value: '辅单位净重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 77,
              },
              mainNetQuantity: {
                name: 'mainNetQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '净重主单位',
                comment: {
                  value: '净重主单位',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 78,
              },
              oriMaterialId: {
                name: 'oriMaterialId',
                type: 'String',
                isEnable: true,
                sysComment: '材料信息varchar主键',
                comment: {
                  value: '材料信息varchar主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 80,
              },
              oriClassId: {
                name: 'oriClassId',
                type: 'String',
                isEnable: true,
                sysComment: '材料类别varchar主键',
                comment: {
                  value: '材料类别varchar主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 81,
              },
              oriCommonId: {
                name: 'oriCommonId',
                type: 'String',
                isEnable: true,
                sysComment: '材料信息其他预留主键sV_Col5',
                comment: {
                  value: '材料信息其他预留主键sV_Col5',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 82,
              },
              oriItemId: {
                name: 'oriItemId',
                type: 'String',
                isEnable: true,
                sysComment: '上传之前的主键',
                comment: {
                  value: '上传之前的主键',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 83,
              },
              itemBarCode: {
                name: 'itemBarCode',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 89,
              },
              isAccounted: {
                name: 'isAccounted',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 90,
              },
              accountor: {
                name: 'accountor',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 91,
              },
              accountDate: {
                name: 'accountDate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 92,
              },
              accountOrderId: {
                name: 'accountOrderId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 93,
              },
              storagePlace: {
                name: 'storagePlace',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 95,
              },
              skillCardNo: {
                name: 'skillCardNo',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 96,
              },
              isNew: {
                name: 'isNew',
                type: 'Boolean',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 97,
              },
              receivePrice: {
                name: 'receivePrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 98,
              },
              sortCode: {
                name: 'sortCode',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 99,
              },
              waybillWeight: {
                name: 'waybillWeight',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 100,
              },
              submitDate: {
                name: 'submitDate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 104,
              },
              taxFreePrice: {
                name: 'taxFreePrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 106,
              },
              taxFreeSum: {
                name: 'taxFreeSum',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 107,
              },
              taxIncludedPrice: {
                name: 'taxIncludedPrice',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 108,
              },
              taxIncludedSum: {
                name: 'taxIncludedSum',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 109,
              },
              taxAmount: {
                name: 'taxAmount',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 110,
              },
              accountQuantity: {
                name: 'accountQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 111,
              },
              itemDataId: {
                name: 'itemDataId',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 112,
              },
              checkState: {
                name: 'checkState',
                type: 'Number',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 113,
              },
              externalUploadState: {
                name: 'externalUploadState',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 114,
              },
              oriItemRedId: {
                name: 'oriItemRedId',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 115,
              },
              qualityCertificate: {
                name: 'qualityCertificate',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 116,
              },
              acceptanceRecord: {
                name: 'acceptanceRecord',
                type: 'String',
                isEnable: true,
                sysComment: null,
                comment: {
                  value: null,
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 117,
              },
              stockbinFullName: {
                name: 'stockbinFullName',
                type: 'String',
                isEnable: true,
                sysComment: '存放地',
                comment: {
                  value: '存放地',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 123,
              },
              stockbinId: {
                name: 'stockbinId',
                type: 'Number',
                isEnable: true,
                sysComment: '存放地id',
                comment: {
                  value: '存放地id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 124,
              },
              oriStockbinId: {
                name: 'oriStockbinId',
                type: 'String',
                isEnable: true,
                sysComment: '存放地第三方id',
                comment: {
                  value: '存放地第三方id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 125,
              },
              summaryId: {
                name: 'summaryId',
                type: 'Number',
                isEnable: true,
                sysComment: '收料汇总id',
                comment: {
                  value: '收料汇总id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 126,
              },
              checkStateEg: {
                name: 'checkStateEg',
                type: 'Number',
                isEnable: true,
                sysComment: '核对状态 0未核对  1已核对',
                comment: {
                  value: '核对状态 0未核对  1已核对',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 129,
              },
              isAccountedEg: {
                name: 'isAccountedEg',
                type: 'Boolean',
                isEnable: true,
                sysComment: '对账状态',
                comment: {
                  value: '对账状态',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 130,
              },
              accountOrderIdEg: {
                name: 'accountOrderIdEg',
                type: 'Number',
                isEnable: true,
                sysComment: '对账单号ID',
                comment: {
                  value: '对账单号ID',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 131,
              },
              isCode: {
                name: 'isCode',
                type: 'Boolean',
                isEnable: true,
                sysComment: '数据是否从码单来',
                comment: {
                  value: '数据是否从码单来',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 132,
              },
              oriPlanId: {
                name: 'oriPlanId',
                type: 'Number',
                isEnable: true,
                sysComment: '采购计划id',
                comment: {
                  value: '采购计划id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 133,
              },
              typeMark: {
                name: 'typeMark',
                type: 'String',
                isEnable: true,
                sysComment: '原发料id',
                comment: {
                  value: '原发料id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 134,
              },
              pushState: {
                name: 'pushState',
                type: 'Number',
                isEnable: true,
                sysComment: '推送状态',
                comment: {
                  value: '推送状态',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 135,
              },
              pushFailReason: {
                name: 'pushFailReason',
                type: 'String',
                isEnable: true,
                sysComment: '推送失败原因',
                comment: {
                  value: '推送失败原因',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 136,
              },
              pushTime: {
                name: 'pushTime',
                type: 'String',
                isEnable: true,
                sysComment: '推送时间',
                comment: {
                  value: '推送时间',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 137,
              },
              technicalRequest: {
                name: 'technicalRequest',
                type: 'String',
                isEnable: true,
                sysComment: '技术要求',
                comment: {
                  value: '技术要求',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 138,
              },
              declarationState: {
                name: 'declarationState',
                type: 'String',
                isEnable: true,
                sysComment: '报验情况',
                comment: {
                  value: '报验情况',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 139,
              },
              labDeductRate: {
                name: 'labDeductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '实验室测定扣率',
                comment: {
                  value: '实验室测定扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 140,
              },
              labDeductQuantity: {
                name: 'labDeductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '实验室测定扣重',
                comment: {
                  value: '实验室测定扣重',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 141,
              },
              purchaseMethods: {
                name: 'purchaseMethods',
                type: 'String',
                isEnable: true,
                sysComment: '采购方式',
                comment: {
                  value: '采购方式',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 142,
              },
              purchaseMethodFullNames: {
                name: 'purchaseMethodFullNames',
                type: 'String',
                isEnable: true,
                sysComment: '采购方式全称',
                comment: {
                  value: '采购方式全称',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 143,
              },
              diffRemark: {
                name: 'diffRemark',
                type: 'String',
                isEnable: true,
                sysComment: '调差备注',
                comment: {
                  value: '调差备注',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 144,
              },
              accTaxRate: {
                name: 'accTaxRate',
                type: 'Number',
                isEnable: true,
                sysComment: '对账税率',
                comment: {
                  value: '对账税率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 145,
              },
              accTaxIncludedPrice: {
                name: 'accTaxIncludedPrice',
                type: 'Number',
                isEnable: true,
                sysComment: '对账单价',
                comment: {
                  value: '对账单价',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 146,
              },
              accDeductQuantity: {
                name: 'accDeductQuantity',
                type: 'Number',
                isEnable: true,
                sysComment: '对账扣吨',
                comment: {
                  value: '对账扣吨',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 147,
              },
              accDeductRate: {
                name: 'accDeductRate',
                type: 'Number',
                isEnable: true,
                sysComment: '对账扣率',
                comment: {
                  value: '对账扣率',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 148,
              },
              originalOrgId: {
                name: 'originalOrgId',
                type: 'Number',
                isEnable: true,
                sysComment: '原条码orgId',
                comment: {
                  value: '原条码orgId',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 149,
              },
              itemContractId: {
                name: 'itemContractId',
                type: 'Number',
                isEnable: true,
                sysComment: '合同id',
                comment: {
                  value: '合同id',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 151,
              },
              itemContractCode: {
                name: 'itemContractCode',
                type: 'String',
                isEnable: true,
                sysComment: '合同编号',
                comment: {
                  value: '合同编号',
                },
                isShow: {
                  value: true,
                },
                width: {
                  value: 100,
                },
                fixed: {
                  value: '',
                },
                sort: {
                  custom: true,
                  value: false,
                },
                columnSort: 152,
              },
            },
          },
        ],
        printConfigs: [],
        exportConfigs: [],
      },
    };
  }

  getTableConfigPanel() {
    return {
      code: 201,
      status: 'success',
      result: {
        content:
          '{"ghName":{"name":"ghName","comment":{"editable":true},"isShow":{"editable":true},"width":{"editable":true},"fixed":{"editable":true},"align":{"editable":false},"sort":{"editable":true}},"ghFullName":{"name":"ghFullName","comment":{"editable":true},"isShow":{"editable":true},"width":{"editable":true},"fixed":{"editable":true},"align":{"editable":false},"sort":{"editable":true}},"orgName":{"name":"orgName","comment":{"editable":true},"isShow":{"editable":true},"width":{"editable":true},"fixed":{"editable":true},"align":{"editable":false},"sort":{"editable":true}}}',
        level: 3,
        path: '0_0',
        remark: '工号计划表格配置',
        moduleId: 'Sg0MgIjEoP5Hy47T0B0G5',
        modelId: 'qWReCjXsea7dxMiN7eNvF',
        modelName: '工号计划模型',
        tableCode: 'ghCheckTableConfig',
        permissionJson:
          '{"ghName":{"name":"ghName","comment":{"editable":{"value":true,"isEnable":true}},"isShow":{"editable":{"value":true,"isEnable":true}},"width":{"editable":{"value":true,"isEnable":true}},"fixed":{"editable":{"value":true,"isEnable":true}},"align":{"editable":{"value":false,"isEnable":false}},"sort":{"editable":{"value":true,"isEnable":true}}},"ghFullName":{"name":"ghFullName","comment":{"editable":{"value":true,"isEnable":true}},"isShow":{"editable":{"value":true,"isEnable":true}},"width":{"editable":{"value":true,"isEnable":true}},"fixed":{"editable":{"value":true,"isEnable":true}},"align":{"editable":{"value":false,"isEnable":false}},"sort":{"editable":{"value":true,"isEnable":true}}},"orgName":{"name":"orgName","comment":{"editable":{"value":true,"isEnable":true}},"isShow":{"editable":{"value":true,"isEnable":true}},"width":{"editable":{"value":true,"isEnable":true}},"fixed":{"editable":{"value":true,"isEnable":true}},"align":{"editable":{"value":false,"isEnable":false}},"sort":{"editable":{"value":true,"isEnable":true}}}}',
        valueJson:
          '{"ghName":{"name":"ghName","type":"String","isEnable":true,"sysComment":"工号名称","comment":{"value":"工号名称"},"isShow":{"value":true},"width":{"value":100},"align":{"value":"left"},"fixed":{"value":""},"sort":{"custom":true,"value":false},"columnSort":0},"ghFullName":{"name":"ghFullName","type":"String","isEnable":true,"sysComment":"工号全称","comment":{"value":"工号全称"},"isShow":{"value":true},"width":{"value":100},"align":{"value":"left"},"fixed":{"value":""},"sort":{"custom":true,"value":false},"columnSort":1},"orgName":{"name":"orgName","type":"String","isEnable":true,"sysComment":"组织机构名称","comment":{"value":"组织机构名称"},"isShow":{"value":true},"width":{"value":100},"align":{"value":"left"},"fixed":{"value":""},"sort":{"custom":true,"value":false},"columnSort":2}}',
      },
    };
  }

  getAssemModel() {
    return {
      code: 200,
      status: 'success',
      result: [
        {
          id: '-JTUORfUghlm9Lwc30SdQ',
          structure:
            '{"structure":{"name":"qDelivery","fields":{"tenant":{"name":"tenant","type":"String","comment":"租户编码","defaultValue":"gslq4dev"},"id":{"name":"id","type":"Number","comment":"主键id","defaultValue":1231667323368448},"orgId":{"name":"orgId","type":"Number","comment":"组织机构主键","defaultValue":587089923772928},"orgName":{"name":"orgName","type":"String","comment":"组织机构名称","defaultValue":"专用测试项目部"},"orderDate":{"name":"orderDate","type":"String","comment":"单据日期","defaultValue":"2022-03"},"orderCode":{"name":"orderCode","type":"String","comment":"单据编号","defaultValue":"发料-20220300001"},"orderOrigin":{"name":"orderOrigin","type":"Number","comment":"单据来源 或者0代表磅单1代表pda","defaultValue":2},"serviceType":{"name":"serviceType","type":"Number","comment":"业务类型 或者0代表调入 1代表收料","defaultValue":10},"orderType":{"name":"orderType","type":"Number","comment":"类型默认值（0）1冲红2补录3退料4普通","defaultValue":4},"maker":{"name":"maker","type":"String","comment":"制单人","defaultValue":"邓维刚"},"makerDate":{"name":"makerDate","type":"String","comment":"制单日期","defaultValue":"2022-03-18"},"remark":{"name":"remark","type":"String","comment":"主表备注","defaultValue":null},"printTimes":{"name":"printTimes","type":"Number","comment":"打印次数","defaultValue":null},"plateNumber":{"name":"plateNumber","type":"String","comment":"车牌号","defaultValue":"甘MM6050"},"labourId":{"name":"labourId","type":"Number","comment":"用料单位编号","defaultValue":1195893881181184},"labourName":{"name":"labourName","type":"String","comment":"用料单位名称","defaultValue":"重庆贝特鞋业有限公司"},"ghId":{"name":"ghId","type":"Number","comment":"工号主键","defaultValue":997553756794880},"ghFullId":{"name":"ghFullId","type":"String","comment":"工号主键链","defaultValue":"997551450492928|997551716814848|997551834091520|997553756794880"},"ghFullName":{"name":"ghFullName","type":"String","comment":"工号全称","defaultValue":"1#大桥|上部结构|垫石|1#垫石"},"ghName":{"name":"ghName","type":"String","comment":"工号名称","defaultValue":"1#垫石"},"exitTime":{"name":"exitTime","type":"String","comment":"出场时间","defaultValue":"2022-03-18 10:33:13"},"isRed":{"name":"isRed","type":"Boolean","comment":"是否冲红（0）","defaultValue":null},"isAudit":{"name":"isAudit","type":"Boolean","comment":"审核（默认为0）","defaultValue":true},"auditor":{"name":"auditor","type":"String","comment":"审核人","defaultValue":"邓维刚"},"auditDate":{"name":"auditDate","type":"String","comment":"审核时间","defaultValue":"2022-03-18 10:33:50"},"oriOrgId":{"name":"oriOrgId","type":"String","comment":"对接组织机构","defaultValue":null},"oriLabourId":{"name":"oriLabourId","type":"String","comment":"【常用用料单位】预留","defaultValue":"1195893881181184"},"oriGhId":{"name":"oriGhId","type":"String","comment":"【工号】预留","defaultValue":null},"oriOrderId":{"name":"oriOrderId","type":"String","comment":null,"defaultValue":null},"creatorId":{"name":"creatorId","type":"Number","comment":null,"defaultValue":1129769534649344},"creatorName":{"name":"creatorName","type":"String","comment":null,"defaultValue":"邓维刚"},"modifierId":{"name":"modifierId","type":"Number","comment":null,"defaultValue":1129769534649344},"modifierName":{"name":"modifierName","type":"String","comment":null,"defaultValue":"邓维刚"},"orderBarCode":{"name":"orderBarCode","type":"String","comment":null,"defaultValue":null},"longitude":{"name":"longitude","type":"Number","comment":null,"defaultValue":null},"latitude":{"name":"latitude","type":"Number","comment":null,"defaultValue":null},"recordedDate":{"name":"recordedDate","type":"String","comment":null,"defaultValue":"2022-03-18"},"allotId":{"name":"allotId","type":"Number","comment":null,"defaultValue":null},"orderDataId":{"name":"orderDataId","type":"Number","comment":null,"defaultValue":null},"materialType":{"name":"materialType","type":"String","comment":null,"defaultValue":"全部"},"sortOrderCode":{"name":"sortOrderCode","type":"String","comment":null,"defaultValue":"20220300001"},"deliveryType":{"name":"deliveryType","type":"Number","comment":null,"defaultValue":0},"rdsId":{"name":"rdsId","type":"Number","comment":null,"defaultValue":0},"isRds":{"name":"isRds","type":"Boolean","comment":"是否是直进直出","defaultValue":"0"},"createdAt":{"name":"createdAt","type":"DateTime","comment":null,"defaultValue":"2022-03-18T02:33:50.000Z"},"updatedAt":{"name":"updatedAt","type":"DateTime","comment":null,"defaultValue":"2022-04-24T07:29:49.000Z"},"version":{"name":"version","type":"Number","comment":null,"defaultValue":1258000991172803},"isRemoved":{"name":"isRemoved","type":"Boolean","comment":null,"defaultValue":"0"},"concretePlanId":{"name":"concretePlanId","type":"Number","comment":"混凝土计划通知单id","defaultValue":0},"concretePlanCode":{"name":"concretePlanCode","type":"String","comment":"混凝土计划通知单编号","defaultValue":null},"isToProduction":{"name":"isToProduction","type":"Boolean","comment":"是否为生产组织发料单","defaultValue":"0"},"insertFrom":{"name":"insertFrom","type":"String","comment":"区分对接数据","defaultValue":null},"deliveryQuantity":{"name":"deliveryQuantity","type":"Number","comment":"发料总量(四局混凝土发料单用)","defaultValue":0},"originalOrderId":{"name":"originalOrderId","type":"Number","comment":"原单据Id","defaultValue":null},"originalOrderCode":{"name":"originalOrderCode","type":"String","comment":"原单据编号","defaultValue":"123123123123"},"gqId":{"name":"gqId","type":"Number","comment":"工区id","defaultValue":null},"gqName":{"name":"gqName","type":"String","comment":"工区名称","defaultValue":null},"isVoid":{"name":"isVoid","type":"Boolean","comment":"是否作废","defaultValue":"0"},"scrapReason":{"name":"scrapReason","type":"String","comment":"报废原因","defaultValue":null},"methodHandle":{"name":"methodHandle","type":"String","comment":"废材处理方式","defaultValue":null},"teamLeader":{"name":"teamLeader","type":"String","comment":"队长姓名","defaultValue":null},"teamId":{"name":"teamId","type":"Number","comment":"队伍id","defaultValue":1195893881181184},"teamName":{"name":"teamName","type":"String","comment":"队伍名称","defaultValue":"重庆贝特鞋业有限公司"},"deductType":{"name":"deductType","type":"Number","comment":"代扣款类型 0不扣款 1  代购扣款","defaultValue":0},"receiveOriOrderId":{"name":"receiveOriOrderId","type":"String","comment":"直收直发分解后收料oriOrderId","defaultValue":null},"affirm":{"name":"affirm","type":"Boolean","comment":"半成品过磅复称标记","defaultValue":"0"},"oriSemiId":{"name":"oriSemiId","type":"String","comment":"原过磅复称orderId","defaultValue":null},"recoveryName":{"name":"recoveryName","type":"String","comment":"回收单位名称","defaultValue":""},"secondaryNum":{"name":"secondaryNum","type":"Number","comment":"二次发料次数","defaultValue":0}},"details":[{"isShow":false,"extensions":[],"dbName":"global_mtlp","name":"qDeliveryMoreMaterial","fields":{"tenant":{"name":"tenant","type":"String","comment":"租户编码","defaultValue":"gslq4dev"},"id":{"name":"id","type":"Number","comment":"主键id","defaultValue":664148376276992},"orderId":{"name":"orderId","type":"Number","comment":"主表主键","defaultValue":664148374228992},"orgId":{"name":"orgId","type":"Number","comment":"组织机构主键","defaultValue":587557737304576},"materialId":{"name":"materialId","type":"Number","comment":"主材主键","defaultValue":606706095157250},"materialCode":{"name":"materialCode","type":"String","comment":"材料编码","defaultValue":"0003"},"materialName":{"name":"materialName","type":"String","comment":"材料名称","defaultValue":"盘条"},"materialModel":{"name":"materialModel","type":"String","comment":"规格型号","defaultValue":"HPB300Φ6.5mm"},"materialUnit":{"name":"materialUnit","type":"String","comment":"主单位","defaultValue":"吨"},"auxiliaryUnit":{"name":"auxiliaryUnit","type":"String","comment":"辅单位","defaultValue":"吨"},"classId":{"name":"classId","type":"Number","comment":"材料类别id","defaultValue":606705025028099},"classFullId":{"name":"classFullId","type":"String","comment":"材料类别主键链","defaultValue":null},"oriOrgId":{"name":"oriOrgId","type":"String","comment":"对接ORgId","defaultValue":null},"itemBarCode":{"name":"itemBarCode","type":"String","comment":"单据条形码","defaultValue":"P20200106145226Saay"},"receivePrice":{"name":"receivePrice","type":"Number","comment":"收料单价","defaultValue":null},"netQuantity":{"name":"netQuantity","type":"Number","comment":"最终净值（决定是取地磅称重还是手填的净值）","defaultValue":10},"conversionRate":{"name":"conversionRate","type":"Number","comment":"转化率","defaultValue":null},"deductRate":{"name":"deductRate","type":"Number","comment":"扣率","defaultValue":null},"deductQuantity":{"name":"deductQuantity","type":"Number","comment":"扣吨","defaultValue":null},"auxiliaryNetQuantity":{"name":"auxiliaryNetQuantity","type":"Number","comment":"辅单位净重","defaultValue":10},"mainNetQuantity":{"name":"mainNetQuantity","type":"Number","comment":"净重主单位","defaultValue":10},"remark":{"name":"remark","type":"String","comment":"备注","defaultValue":null},"isAccounted":{"name":"isAccounted","type":"Boolean","comment":"对账状态","defaultValue":null},"accountor":{"name":"accountor","type":"String","comment":"对账人","defaultValue":null},"accountDate":{"name":"accountDate","type":"String","comment":"对账时间","defaultValue":null},"accountOrderId":{"name":"accountOrderId","type":"Number","comment":"对账单的主键","defaultValue":null},"oriMaterialId":{"name":"oriMaterialId","type":"String","comment":"材料信息varchar主键","defaultValue":null},"oriClassId":{"name":"oriClassId","type":"String","comment":"材料类别varchar主键","defaultValue":null},"oriCommonId":{"name":"oriCommonId","type":"String","comment":"材料信息其他预留主键sV_Col5","defaultValue":null},"oriItemId":{"name":"oriItemId","type":"String","comment":"上传之前的主键","defaultValue":null},"oriOrderId":{"name":"oriOrderId","type":"String","comment":"上传之前的order主键","defaultValue":null},"creatorId":{"name":"creatorId","type":"Number","comment":"添加人主键","defaultValue":10001},"creatorName":{"name":"creatorName","type":"String","comment":"添加人","defaultValue":null},"modifierId":{"name":"modifierId","type":"Number","comment":"修改人主键","defaultValue":10001},"modifierName":{"name":"modifierName","type":"String","comment":null,"defaultValue":null},"sortCode":{"name":"sortCode","type":"Number","comment":null,"defaultValue":1},"serviceType":{"name":"serviceType","type":"Number","comment":null,"defaultValue":10},"orderType":{"name":"orderType","type":"Number","comment":null,"defaultValue":4},"isRed":{"name":"isRed","type":"Boolean","comment":null,"defaultValue":null},"submitDate":{"name":"submitDate","type":"String","comment":null,"defaultValue":"2020-01-06"},"listSale":{"name":"listSale","type":"Number","comment":null,"defaultValue":0},"itemDataId":{"name":"itemDataId","type":"Number","comment":null,"defaultValue":null},"externalUploadState":{"name":"externalUploadState","type":"String","comment":null,"defaultValue":"hello world"},"oriItemRedId":{"name":"oriItemRedId","type":"String","comment":"冲红材料原始id","defaultValue":null},"createdAt":{"name":"createdAt","type":"DateTime","comment":"创建时间","defaultValue":"2020-01-06T06:53:35.000Z"},"updatedAt":{"name":"updatedAt","type":"DateTime","comment":"修改时间","defaultValue":"2020-01-06T11:43:40.000Z"},"version":{"name":"version","type":"Number","comment":null,"defaultValue":664290955972608},"isRemoved":{"name":"isRemoved","type":"Boolean","comment":"删除标记","defaultValue":"0"},"summaryId":{"name":"summaryId","type":"Number","comment":"发料汇总id","defaultValue":null},"isVoid":{"name":"isVoid","type":"Boolean","comment":"是否作废","defaultValue":"0"},"returnQuantity":{"name":"returnQuantity","type":"Number","comment":"退发料量","defaultValue":0},"quantity":{"name":"quantity","type":"Number","comment":"库存量","defaultValue":0},"rawOrderCode":{"name":"rawOrderCode","type":"String","comment":"原发料单号","defaultValue":null},"rawId":{"name":"rawId","type":"Number","comment":"原发料id","defaultValue":0},"technicalRequest":{"name":"technicalRequest","type":"String","comment":"技术要求","defaultValue":null},"receiveAmount":{"name":"receiveAmount","type":"Number","comment":"金额，单价乘出库数量","defaultValue":null},"transMete":{"name":"transMete","type":"Number","comment":"本车方量","defaultValue":0},"weightCheckOffset":{"name":"weightCheckOffset","type":"Number","comment":"复核偏差","defaultValue":0}},"index":0,"details":[{"isShow":false,"extensions":[],"dbName":"global_mtlp","name":"qReceiveMoreMaterialTempData","fields":{"orgId":{"name":"orgId","type":"Number","comment":"组织机构主键","defaultValue":586892181115392},"orderId":{"name":"orderId","type":"Number","comment":"主表主键","defaultValue":664026059182080},"id":{"name":"id","type":"Number","comment":"主键id","defaultValue":664027254280192},"serviceType":{"name":"serviceType","type":"Number","comment":"业务类型 0代表调入（20） 1代表收料（10） 调入退（-21） 收料退（-11）","defaultValue":-11},"orderType":{"name":"orderType","type":"Number","comment":"操作类型默认值  1冲红（-1）2补录3退料（去掉）4正常","defaultValue":4},"isMarched":{"name":"isMarched","type":"Boolean","comment":"是否已经匹配库存","defaultValue":"0"},"materialId":{"name":"materialId","type":"Number","comment":"主材主键","defaultValue":606706095172283},"materialCode":{"name":"materialCode","type":"String","comment":"材料编码","defaultValue":"010"},"materialName":{"name":"materialName","type":"String","comment":"材料名称","defaultValue":"粘接胶"},"materialModel":{"name":"materialModel","type":"String","comment":"规格型号","defaultValue":null},"materialUnit":{"name":"materialUnit","type":"String","comment":"主单位","defaultValue":"个"},"auxiliaryUnit":{"name":"auxiliaryUnit","type":"String","comment":"辅单位","defaultValue":"个"},"classId":{"name":"classId","type":"Number","comment":"材料类别id","defaultValue":606705025028296},"classFullId":{"name":"classFullId","type":"String","comment":"材料类别主键链","defaultValue":"0103040005"},"netQuantity":{"name":"netQuantity","type":"Number","comment":"最终净值（决定是取地磅称重还是手填的净值）","defaultValue":3.85},"roughQuantity":{"name":"roughQuantity","type":"Number","comment":"毛重","defaultValue":3.86},"conversionRate":{"name":"conversionRate","type":"Number","comment":"转化率","defaultValue":1},"deductRate":{"name":"deductRate","type":"Number","comment":"扣率","defaultValue":null},"deductQuantity":{"name":"deductQuantity","type":"Number","comment":"扣吨","defaultValue":null},"oriNetQuantity":{"name":"oriNetQuantity","type":"Number","comment":"原始净重","defaultValue":null},"auxiliaryNetQuantity":{"name":"auxiliaryNetQuantity","type":"Number","comment":"辅单位净重","defaultValue":3.85},"mainNetQuantity":{"name":"mainNetQuantity","type":"Number","comment":"净重主单位","defaultValue":3.85},"waybillWeight":{"name":"waybillWeight","type":"Number","comment":"运单重量","defaultValue":3.85},"itemBarCode":{"name":"itemBarCode","type":"String","comment":"条码","defaultValue":null},"remark":{"name":"remark","type":"String","comment":"备注","defaultValue":null},"oriMaterialId":{"name":"oriMaterialId","type":"String","comment":"材料信息varchar主键","defaultValue":"cb50fb5d-6ddd-4bdd-9f54-aacd0106215f"},"oriClassId":{"name":"oriClassId","type":"String","comment":"材料类别varchar主键","defaultValue":"00000000-0000-0000-0000-000000000000"},"oriCommonId":{"name":"oriCommonId","type":"String","comment":"材料信息其他预留主键sV_Col5","defaultValue":null},"oriItemId":{"name":"oriItemId","type":"String","comment":"上传之前的主键","defaultValue":"d26e3611-7246-42e9-9439-aace00a9c05d"},"oriOrderId":{"name":"oriOrderId","type":"String","comment":"上传之前的order主键","defaultValue":"d26e3611-7246-42e9-9439-aace00a9c05d"},"oriOrgId":{"name":"oriOrgId","type":"String","comment":"对接组织机构","defaultValue":null},"creatorId":{"name":"creatorId","type":"Number","comment":"添加人主键","defaultValue":null},"creatorName":{"name":"creatorName","type":"String","comment":"添加人","defaultValue":"过磅员"},"modifierId":{"name":"modifierId","type":"Number","comment":"修改人主键","defaultValue":null},"modifierName":{"name":"modifierName","type":"String","comment":"修改人","defaultValue":"过磅员"},"externalUploadState":{"name":"externalUploadState","type":"String","comment":null,"defaultValue":"hello world"},"oriItemRedId":{"name":"oriItemRedId","type":"String","comment":"冲红材料原始id","defaultValue":null},"createdAt":{"name":"createdAt","type":"DateTime","comment":"创建时间","defaultValue":"2019-09-20T00:00:00.000Z"},"updatedAt":{"name":"updatedAt","type":"DateTime","comment":"修改时间","defaultValue":"2022-07-06T08:34:55.000Z"},"version":{"name":"version","type":"Number","comment":null,"defaultValue":1309701567100928},"isRemoved":{"name":"isRemoved","type":"Boolean","comment":"删除标记","defaultValue":"0"},"summaryId":{"name":"summaryId","type":"Number","comment":"收料汇总id","defaultValue":null},"pushState":{"name":"pushState","type":"Number","comment":"推送状态","defaultValue":0},"pushFailReason":{"name":"pushFailReason","type":"String","comment":"推送失败原因","defaultValue":null},"pushTime":{"name":"pushTime","type":"String","comment":"推送时间","defaultValue":null},"labDeductRate":{"name":"labDeductRate","type":"Number","comment":"实验室测定扣率","defaultValue":0},"labDeductQuantity":{"name":"labDeductQuantity","type":"Number","comment":"实验室测定扣重","defaultValue":0},"manufacturer":{"name":"manufacturer","type":"String","comment":"生产厂商","defaultValue":null},"batchNo":{"name":"batchNo","type":"String","comment":"炉批号","defaultValue":null},"testReportNo":{"name":"testReportNo","type":"String","comment":"实验报告号","defaultValue":null},"qualityCertificate":{"name":"qualityCertificate","type":"String","comment":"质量证明文件","defaultValue":null},"acceptanceRecord":{"name":"acceptanceRecord","type":"String","comment":"验收情况记录","defaultValue":null},"storagePlace":{"name":"storagePlace","type":"String","comment":"存放地","defaultValue":null},"purchaseMethods":{"name":"purchaseMethods","type":"String","comment":"采购方式","defaultValue":null},"purchaseMethodFullNames":{"name":"purchaseMethodFullNames","type":"String","comment":"采购方式全称","defaultValue":null},"receiveType":{"name":"receiveType","type":"Number","comment":"单据类型","defaultValue":0},"tenant":{"name":"tenant","type":"String","comment":"租户编码","defaultValue":"gslq4dev"}}}]},{"isShow":false,"extensions":[],"dbName":"global_mtlp","name":"qDeliveryMoreOrder","fields":{"tenant":{"name":"tenant","type":"String","comment":"租户编码","defaultValue":"gslq4dev"},"id":{"name":"id","type":"Number","comment":"主键id","defaultValue":1272237747797505},"orderId":{"name":"orderId","type":"Number","comment":"主表主键","defaultValue":1272237730738688},"orgId":{"name":"orgId","type":"Number","comment":"组织机构主键","defaultValue":587089923772928},"materialId":{"name":"materialId","type":"Number","comment":"主材主键","defaultValue":1032194521233408},"materialCode":{"name":"materialCode","type":"String","comment":"材料编码","defaultValue":"0011"},"materialName":{"name":"materialName","type":"String","comment":"材料名称","defaultValue":"通用锂基润滑脂"},"materialModel":{"name":"materialModel","type":"String","comment":"规格型号","defaultValue":"3#"},"materialUnit":{"name":"materialUnit","type":"String","comment":"主单位","defaultValue":"桶"},"auxiliaryUnit":{"name":"auxiliaryUnit","type":"String","comment":"辅单位","defaultValue":"桶"},"receivePrice":{"name":"receivePrice","type":"Number","comment":"收料单价","defaultValue":21},"netQuantity":{"name":"netQuantity","type":"Number","comment":"最终净值（决定是取地磅称重还是手填的净值）","defaultValue":2},"length":{"name":"length","type":"Number","comment":"钢筋根长(cm) 钢板长度(cm)","defaultValue":0},"weight":{"name":"weight","type":"Number","comment":"钢筋存储总重(kg) 混凝土存储配比发料量(kg)","defaultValue":0},"ratio":{"name":"ratio","type":"Number","comment":"钢筋理论重量(kg/m) 钢板密度(g/cm3)","defaultValue":0},"quantity":{"name":"quantity","type":"Number","comment":"库存量","defaultValue":0},"semiId":{"name":"semiId","type":"Number","comment":"半成品发料表主键","defaultValue":0},"itemBarCode":{"name":"itemBarCode","type":"String","comment":"单据条形码","defaultValue":"H20220506190027UGsk"},"typeMark":{"name":"typeMark","type":"String","comment":"材料/批次维度","defaultValue":"批次维度"},"remark":{"name":"remark","type":"String","comment":"备注","defaultValue":null},"creatorId":{"name":"creatorId","type":"Number","comment":"添加人主键","defaultValue":1132559099466752},"creatorName":{"name":"creatorName","type":"String","comment":"添加人","defaultValue":"fmf"},"modifierId":{"name":"modifierId","type":"Number","comment":"修改人主键","defaultValue":1132559099466752},"modifierName":{"name":"modifierName","type":"String","comment":null,"defaultValue":"fmf"},"sortCode":{"name":"sortCode","type":"Number","comment":null,"defaultValue":1},"createdAt":{"name":"createdAt","type":"DateTime","comment":"创建时间","defaultValue":"2022-05-14T10:14:34.000Z"},"updatedAt":{"name":"updatedAt","type":"DateTime","comment":"修改时间","defaultValue":"2022-05-17T06:15:47.000Z"},"version":{"name":"version","type":"Number","comment":null,"defaultValue":1274243738836480},"isRemoved":{"name":"isRemoved","type":"Boolean","comment":"删除标记","defaultValue":"0"},"rebarCount":{"name":"rebarCount","type":"Number","comment":"钢筋根数 钢板数量","defaultValue":null},"rebarType":{"name":"rebarType","type":"Number","comment":"钢筋类型","defaultValue":null},"width":{"name":"width","type":"Number","comment":"材料宽度","defaultValue":0},"thickness":{"name":"thickness","type":"Number","comment":"材料厚度","defaultValue":0},"materialType":{"name":"materialType","type":"Number","comment":"半成品材料类型 0 钢筋1钢板","defaultValue":0},"designQuantity":{"name":"designQuantity","type":"Number","comment":"设计量(钢筋构件)","defaultValue":null},"shippedQuantity":{"name":"shippedQuantity","type":"Number","comment":"已供量(钢筋构件)","defaultValue":null},"signQuantity":{"name":"signQuantity","type":"Number","comment":"签收量","defaultValue":0},"deliveryQuantity":{"name":"deliveryQuantity","type":"Number","comment":"发料量","defaultValue":0},"applyId":{"name":"applyId","type":"Number","comment":"申请主表id","defaultValue":null},"sumLength":{"name":"sumLength","type":"Number","comment":"总长","defaultValue":null},"ratioCode":{"name":"ratioCode","type":"String","comment":"编号","defaultValue":null},"ratioOrderId":{"name":"ratioOrderId","type":"Number","comment":"构件库料单id","defaultValue":null}}},{"isShow":false,"extensions":[],"dbName":"global_mtlp","name":"qDeliveryPhoto","fields":{"tenant":{"name":"tenant","type":"String","comment":"租户编码","defaultValue":"gslq4dev"},"id":{"name":"id","type":"Number","comment":"主键id","defaultValue":612755971985408},"orderId":{"name":"orderId","type":"Number","comment":"主表主键","defaultValue":612755971870720},"orgId":{"name":"orgId","type":"Number","comment":"组织机构主键","defaultValue":441292771463168},"cameraPosition":{"name":"cameraPosition","type":"String","comment":"摄像机位置","defaultValue":null},"photoType":{"name":"photoType","type":"String","comment":"照片类型（入场、出场）","defaultValue":"入场"},"cameraCode":{"name":"cameraCode","type":"String","comment":"摄像机编码","defaultValue":null},"photoUrl":{"name":"photoUrl","type":"String","comment":"照片路径","defaultValue":"picture_1572020122216.jpg"},"oriItemId":{"name":"oriItemId","type":"String","comment":"上传前id","defaultValue":null},"oriOrderId":{"name":"oriOrderId","type":"String","comment":"上传之前的order主键","defaultValue":null},"creatorId":{"name":"creatorId","type":"Number","comment":"添加人主键","defaultValue":452353557336064},"creatorName":{"name":"creatorName","type":"String","comment":"添加人","defaultValue":null},"modifierId":{"name":"modifierId","type":"Number","comment":"修改人主键","defaultValue":null},"modifierName":{"name":"modifierName","type":"String","comment":"修改人","defaultValue":null},"externalUploadState":{"name":"externalUploadState","type":"String","comment":"对外第三方对接上传状态","defaultValue":null},"createdAt":{"name":"createdAt","type":"DateTime","comment":"创建时间","defaultValue":"2019-10-25T16:15:28.000Z"},"updatedAt":{"name":"updatedAt","type":"DateTime","comment":"修改时间","defaultValue":"2019-10-25T16:15:28.000Z"},"version":{"name":"version","type":"Number","comment":"版本号","defaultValue":612755971985408},"isRemoved":{"name":"isRemoved","type":"Boolean","comment":"删除标记","defaultValue":"0"}}}],"isRoot":true,"extensions":[],"dbName":"global_mtlp"},"model":{"name":"qDelivery","fields":{"tenant":{"comment":"租户编码","defaultValue":"gslq4dev","type":"String"},"id":{"comment":"主键id","defaultValue":1231667323368448,"type":"Number"},"orgId":{"comment":"组织机构主键","defaultValue":587089923772928,"type":"Number"},"orgName":{"comment":"组织机构名称","defaultValue":"专用测试项目部","type":"String"},"orderDate":{"comment":"单据日期","defaultValue":"2022-03","type":"String"},"orderCode":{"comment":"单据编号","defaultValue":"发料-20220300001","type":"String"},"orderOrigin":{"comment":"单据来源 或者0代表磅单1代表pda","defaultValue":2,"type":"Number"},"serviceType":{"comment":"业务类型 或者0代表调入 1代表收料","defaultValue":10,"type":"Number"},"orderType":{"comment":"类型默认值（0）1冲红2补录3退料4普通","defaultValue":4,"type":"Number"},"maker":{"comment":"制单人","defaultValue":"邓维刚","type":"String"},"makerDate":{"comment":"制单日期","defaultValue":"2022-03-18","type":"String"},"remark":{"comment":"主表备注","defaultValue":null,"type":"String"},"printTimes":{"comment":"打印次数","defaultValue":null,"type":"Number"},"plateNumber":{"comment":"车牌号","defaultValue":"甘MM6050","type":"String"},"labourId":{"comment":"用料单位编号","defaultValue":1195893881181184,"type":"Number"},"labourName":{"comment":"用料单位名称","defaultValue":"重庆贝特鞋业有限公司","type":"String"},"ghId":{"comment":"工号主键","defaultValue":997553756794880,"type":"Number"},"ghFullId":{"comment":"工号主键链","defaultValue":"997551450492928|997551716814848|997551834091520|997553756794880","type":"String"},"ghFullName":{"comment":"工号全称","defaultValue":"1#大桥|上部结构|垫石|1#垫石","type":"String"},"ghName":{"comment":"工号名称","defaultValue":"1#垫石","type":"String"},"exitTime":{"comment":"出场时间","defaultValue":"2022-03-18 10:33:13","type":"String"},"isRed":{"comment":"是否冲红（0）","defaultValue":null,"type":"Boolean"},"isAudit":{"comment":"审核（默认为0）","defaultValue":true,"type":"Boolean"},"auditor":{"comment":"审核人","defaultValue":"邓维刚","type":"String"},"auditDate":{"comment":"审核时间","defaultValue":"2022-03-18 10:33:50","type":"String"},"oriOrgId":{"comment":"对接组织机构","defaultValue":null,"type":"String"},"oriLabourId":{"comment":"【常用用料单位】预留","defaultValue":"1195893881181184","type":"String"},"oriGhId":{"comment":"【工号】预留","defaultValue":null,"type":"String"},"oriOrderId":{"comment":null,"defaultValue":null,"type":"String"},"creatorId":{"comment":null,"defaultValue":1129769534649344,"type":"Number"},"creatorName":{"comment":null,"defaultValue":"邓维刚","type":"String"},"modifierId":{"comment":null,"defaultValue":1129769534649344,"type":"Number"},"modifierName":{"comment":null,"defaultValue":"邓维刚","type":"String"},"orderBarCode":{"comment":null,"defaultValue":null,"type":"String"},"longitude":{"comment":null,"defaultValue":null,"type":"Number"},"latitude":{"comment":null,"defaultValue":null,"type":"Number"},"recordedDate":{"comment":null,"defaultValue":"2022-03-18","type":"String"},"allotId":{"comment":null,"defaultValue":null,"type":"Number"},"orderDataId":{"comment":null,"defaultValue":null,"type":"Number"},"materialType":{"comment":null,"defaultValue":"全部","type":"String"},"sortOrderCode":{"comment":null,"defaultValue":"20220300001","type":"String"},"deliveryType":{"comment":null,"defaultValue":0,"type":"Number"},"rdsId":{"comment":null,"defaultValue":0,"type":"Number"},"isRds":{"comment":"是否是直进直出","defaultValue":"0","type":"Boolean"},"createdAt":{"comment":null,"defaultValue":"2022-03-18T02:33:50.000Z","type":"DateTime"},"updatedAt":{"comment":null,"defaultValue":"2022-04-24T07:29:49.000Z","type":"DateTime"},"version":{"comment":null,"defaultValue":1258000991172803,"type":"Number"},"isRemoved":{"comment":null,"defaultValue":"0","type":"Boolean"},"concretePlanId":{"comment":"混凝土计划通知单id","defaultValue":0,"type":"Number"},"concretePlanCode":{"comment":"混凝土计划通知单编号","defaultValue":null,"type":"String"},"isToProduction":{"comment":"是否为生产组织发料单","defaultValue":"0","type":"Boolean"},"insertFrom":{"comment":"区分对接数据","defaultValue":null,"type":"String"},"deliveryQuantity":{"comment":"发料总量(四局混凝土发料单用)","defaultValue":0,"type":"Number"},"originalOrderId":{"comment":"原单据Id","defaultValue":null,"type":"Number"},"originalOrderCode":{"comment":"原单据编号","defaultValue":"123123123123","type":"String"},"gqId":{"comment":"工区id","defaultValue":null,"type":"Number"},"gqName":{"comment":"工区名称","defaultValue":null,"type":"String"},"isVoid":{"comment":"是否作废","defaultValue":"0","type":"Boolean"},"scrapReason":{"comment":"报废原因","defaultValue":null,"type":"String"},"methodHandle":{"comment":"废材处理方式","defaultValue":null,"type":"String"},"teamLeader":{"comment":"队长姓名","defaultValue":null,"type":"String"},"teamId":{"comment":"队伍id","defaultValue":1195893881181184,"type":"Number"},"teamName":{"comment":"队伍名称","defaultValue":"重庆贝特鞋业有限公司","type":"String"},"deductType":{"comment":"代扣款类型 0不扣款 1  代购扣款","defaultValue":0,"type":"Number"},"receiveOriOrderId":{"comment":"直收直发分解后收料oriOrderId","defaultValue":null,"type":"String"},"affirm":{"comment":"半成品过磅复称标记","defaultValue":"0","type":"Boolean"},"oriSemiId":{"comment":"原过磅复称orderId","defaultValue":null,"type":"String"},"recoveryName":{"comment":"回收单位名称","defaultValue":"","type":"String"},"secondaryNum":{"comment":"二次发料次数","defaultValue":0,"type":"Number"}},"extensions":[],"details":[{"name":"qDeliveryMoreMaterial","fields":{"tenant":{"comment":"租户编码","defaultValue":"gslq4dev","type":"String"},"id":{"comment":"主键id","defaultValue":664148376276992,"type":"Number"},"orderId":{"comment":"主表主键","defaultValue":664148374228992,"type":"Number"},"orgId":{"comment":"组织机构主键","defaultValue":587557737304576,"type":"Number"},"materialId":{"comment":"主材主键","defaultValue":606706095157250,"type":"Number"},"materialCode":{"comment":"材料编码","defaultValue":"0003","type":"String"},"materialName":{"comment":"材料名称","defaultValue":"盘条","type":"String"},"materialModel":{"comment":"规格型号","defaultValue":"HPB300Φ6.5mm","type":"String"},"materialUnit":{"comment":"主单位","defaultValue":"吨","type":"String"},"auxiliaryUnit":{"comment":"辅单位","defaultValue":"吨","type":"String"},"classId":{"comment":"材料类别id","defaultValue":606705025028099,"type":"Number"},"classFullId":{"comment":"材料类别主键链","defaultValue":null,"type":"String"},"oriOrgId":{"comment":"对接ORgId","defaultValue":null,"type":"String"},"itemBarCode":{"comment":"单据条形码","defaultValue":"P20200106145226Saay","type":"String"},"receivePrice":{"comment":"收料单价","defaultValue":null,"type":"Number"},"netQuantity":{"comment":"最终净值（决定是取地磅称重还是手填的净值）","defaultValue":10,"type":"Number"},"conversionRate":{"comment":"转化率","defaultValue":null,"type":"Number"},"deductRate":{"comment":"扣率","defaultValue":null,"type":"Number"},"deductQuantity":{"comment":"扣吨","defaultValue":null,"type":"Number"},"auxiliaryNetQuantity":{"comment":"辅单位净重","defaultValue":10,"type":"Number"},"mainNetQuantity":{"comment":"净重主单位","defaultValue":10,"type":"Number"},"remark":{"comment":"备注","defaultValue":null,"type":"String"},"isAccounted":{"comment":"对账状态","defaultValue":null,"type":"Boolean"},"accountor":{"comment":"对账人","defaultValue":null,"type":"String"},"accountDate":{"comment":"对账时间","defaultValue":null,"type":"String"},"accountOrderId":{"comment":"对账单的主键","defaultValue":null,"type":"Number"},"oriMaterialId":{"comment":"材料信息varchar主键","defaultValue":null,"type":"String"},"oriClassId":{"comment":"材料类别varchar主键","defaultValue":null,"type":"String"},"oriCommonId":{"comment":"材料信息其他预留主键sV_Col5","defaultValue":null,"type":"String"},"oriItemId":{"comment":"上传之前的主键","defaultValue":null,"type":"String"},"oriOrderId":{"comment":"上传之前的order主键","defaultValue":null,"type":"String"},"creatorId":{"comment":"添加人主键","defaultValue":10001,"type":"Number"},"creatorName":{"comment":"添加人","defaultValue":null,"type":"String"},"modifierId":{"comment":"修改人主键","defaultValue":10001,"type":"Number"},"modifierName":{"comment":null,"defaultValue":null,"type":"String"},"sortCode":{"comment":null,"defaultValue":1,"type":"Number"},"serviceType":{"comment":null,"defaultValue":10,"type":"Number"},"orderType":{"comment":null,"defaultValue":4,"type":"Number"},"isRed":{"comment":null,"defaultValue":null,"type":"Boolean"},"submitDate":{"comment":null,"defaultValue":"2020-01-06","type":"String"},"listSale":{"comment":null,"defaultValue":0,"type":"Number"},"itemDataId":{"comment":null,"defaultValue":null,"type":"Number"},"externalUploadState":{"comment":null,"defaultValue":"hello world","type":"String"},"oriItemRedId":{"comment":"冲红材料原始id","defaultValue":null,"type":"String"},"createdAt":{"comment":"创建时间","defaultValue":"2020-01-06T06:53:35.000Z","type":"DateTime"},"updatedAt":{"comment":"修改时间","defaultValue":"2020-01-06T11:43:40.000Z","type":"DateTime"},"version":{"comment":null,"defaultValue":664290955972608,"type":"Number"},"isRemoved":{"comment":"删除标记","defaultValue":"0","type":"Boolean"},"summaryId":{"comment":"发料汇总id","defaultValue":null,"type":"Number"},"isVoid":{"comment":"是否作废","defaultValue":"0","type":"Boolean"},"returnQuantity":{"comment":"退发料量","defaultValue":0,"type":"Number"},"quantity":{"comment":"库存量","defaultValue":0,"type":"Number"},"rawOrderCode":{"comment":"原发料单号","defaultValue":null,"type":"String"},"rawId":{"comment":"原发料id","defaultValue":0,"type":"Number"},"technicalRequest":{"comment":"技术要求","defaultValue":null,"type":"String"},"receiveAmount":{"comment":"金额，单价乘出库数量","defaultValue":null,"type":"Number"},"transMete":{"comment":"本车方量","defaultValue":0,"type":"Number"},"weightCheckOffset":{"comment":"复核偏差","defaultValue":0,"type":"Number"}},"extensions":[],"details":[{"name":"qReceiveMoreMaterialTempData","fields":{"orgId":{"comment":"组织机构主键","defaultValue":586892181115392,"type":"Number"},"orderId":{"comment":"主表主键","defaultValue":664026059182080,"type":"Number"},"id":{"comment":"主键id","defaultValue":664027254280192,"type":"Number"},"serviceType":{"comment":"业务类型 0代表调入（20） 1代表收料（10） 调入退（-21） 收料退（-11）","defaultValue":-11,"type":"Number"},"orderType":{"comment":"操作类型默认值  1冲红（-1）2补录3退料（去掉）4正常","defaultValue":4,"type":"Number"},"isMarched":{"comment":"是否已经匹配库存","defaultValue":"0","type":"Boolean"},"materialId":{"comment":"主材主键","defaultValue":606706095172283,"type":"Number"},"materialCode":{"comment":"材料编码","defaultValue":"010","type":"String"},"materialName":{"comment":"材料名称","defaultValue":"粘接胶","type":"String"},"materialModel":{"comment":"规格型号","defaultValue":null,"type":"String"},"materialUnit":{"comment":"主单位","defaultValue":"个","type":"String"},"auxiliaryUnit":{"comment":"辅单位","defaultValue":"个","type":"String"},"classId":{"comment":"材料类别id","defaultValue":606705025028296,"type":"Number"},"classFullId":{"comment":"材料类别主键链","defaultValue":"0103040005","type":"String"},"netQuantity":{"comment":"最终净值（决定是取地磅称重还是手填的净值）","defaultValue":3.85,"type":"Number"},"roughQuantity":{"comment":"毛重","defaultValue":3.86,"type":"Number"},"conversionRate":{"comment":"转化率","defaultValue":1,"type":"Number"},"deductRate":{"comment":"扣率","defaultValue":null,"type":"Number"},"deductQuantity":{"comment":"扣吨","defaultValue":null,"type":"Number"},"oriNetQuantity":{"comment":"原始净重","defaultValue":null,"type":"Number"},"auxiliaryNetQuantity":{"comment":"辅单位净重","defaultValue":3.85,"type":"Number"},"mainNetQuantity":{"comment":"净重主单位","defaultValue":3.85,"type":"Number"},"waybillWeight":{"comment":"运单重量","defaultValue":3.85,"type":"Number"},"itemBarCode":{"comment":"条码","defaultValue":null,"type":"String"},"remark":{"comment":"备注","defaultValue":null,"type":"String"},"oriMaterialId":{"comment":"材料信息varchar主键","defaultValue":"cb50fb5d-6ddd-4bdd-9f54-aacd0106215f","type":"String"},"oriClassId":{"comment":"材料类别varchar主键","defaultValue":"00000000-0000-0000-0000-000000000000","type":"String"},"oriCommonId":{"comment":"材料信息其他预留主键sV_Col5","defaultValue":null,"type":"String"},"oriItemId":{"comment":"上传之前的主键","defaultValue":"d26e3611-7246-42e9-9439-aace00a9c05d","type":"String"},"oriOrderId":{"comment":"上传之前的order主键","defaultValue":"d26e3611-7246-42e9-9439-aace00a9c05d","type":"String"},"oriOrgId":{"comment":"对接组织机构","defaultValue":null,"type":"String"},"creatorId":{"comment":"添加人主键","defaultValue":null,"type":"Number"},"creatorName":{"comment":"添加人","defaultValue":"过磅员","type":"String"},"modifierId":{"comment":"修改人主键","defaultValue":null,"type":"Number"},"modifierName":{"comment":"修改人","defaultValue":"过磅员","type":"String"},"externalUploadState":{"comment":null,"defaultValue":"hello world","type":"String"},"oriItemRedId":{"comment":"冲红材料原始id","defaultValue":null,"type":"String"},"createdAt":{"comment":"创建时间","defaultValue":"2019-09-20T00:00:00.000Z","type":"DateTime"},"updatedAt":{"comment":"修改时间","defaultValue":"2022-07-06T08:34:55.000Z","type":"DateTime"},"version":{"comment":null,"defaultValue":1309701567100928,"type":"Number"},"isRemoved":{"comment":"删除标记","defaultValue":"0","type":"Boolean"},"summaryId":{"comment":"收料汇总id","defaultValue":null,"type":"Number"},"pushState":{"comment":"推送状态","defaultValue":0,"type":"Number"},"pushFailReason":{"comment":"推送失败原因","defaultValue":null,"type":"String"},"pushTime":{"comment":"推送时间","defaultValue":null,"type":"String"},"labDeductRate":{"comment":"实验室测定扣率","defaultValue":0,"type":"Number"},"labDeductQuantity":{"comment":"实验室测定扣重","defaultValue":0,"type":"Number"},"manufacturer":{"comment":"生产厂商","defaultValue":null,"type":"String"},"batchNo":{"comment":"炉批号","defaultValue":null,"type":"String"},"testReportNo":{"comment":"实验报告号","defaultValue":null,"type":"String"},"qualityCertificate":{"comment":"质量证明文件","defaultValue":null,"type":"String"},"acceptanceRecord":{"comment":"验收情况记录","defaultValue":null,"type":"String"},"storagePlace":{"comment":"存放地","defaultValue":null,"type":"String"},"purchaseMethods":{"comment":"采购方式","defaultValue":null,"type":"String"},"purchaseMethodFullNames":{"comment":"采购方式全称","defaultValue":null,"type":"String"},"receiveType":{"comment":"单据类型","defaultValue":0,"type":"Number"},"tenant":{"comment":"租户编码","defaultValue":"gslq4dev","type":"String"}},"extensions":[],"details":[]}]},{"name":"qDeliveryMoreOrder","fields":{"tenant":{"comment":"租户编码","defaultValue":"gslq4dev","type":"String"},"id":{"comment":"主键id","defaultValue":1272237747797505,"type":"Number"},"orderId":{"comment":"主表主键","defaultValue":1272237730738688,"type":"Number"},"orgId":{"comment":"组织机构主键","defaultValue":587089923772928,"type":"Number"},"materialId":{"comment":"主材主键","defaultValue":1032194521233408,"type":"Number"},"materialCode":{"comment":"材料编码","defaultValue":"0011","type":"String"},"materialName":{"comment":"材料名称","defaultValue":"通用锂基润滑脂","type":"String"},"materialModel":{"comment":"规格型号","defaultValue":"3#","type":"String"},"materialUnit":{"comment":"主单位","defaultValue":"桶","type":"String"},"auxiliaryUnit":{"comment":"辅单位","defaultValue":"桶","type":"String"},"receivePrice":{"comment":"收料单价","defaultValue":21,"type":"Number"},"netQuantity":{"comment":"最终净值（决定是取地磅称重还是手填的净值）","defaultValue":2,"type":"Number"},"length":{"comment":"钢筋根长(cm) 钢板长度(cm)","defaultValue":0,"type":"Number"},"weight":{"comment":"钢筋存储总重(kg) 混凝土存储配比发料量(kg)","defaultValue":0,"type":"Number"},"ratio":{"comment":"钢筋理论重量(kg/m) 钢板密度(g/cm3)","defaultValue":0,"type":"Number"},"quantity":{"comment":"库存量","defaultValue":0,"type":"Number"},"semiId":{"comment":"半成品发料表主键","defaultValue":0,"type":"Number"},"itemBarCode":{"comment":"单据条形码","defaultValue":"H20220506190027UGsk","type":"String"},"typeMark":{"comment":"材料/批次维度","defaultValue":"批次维度","type":"String"},"remark":{"comment":"备注","defaultValue":null,"type":"String"},"creatorId":{"comment":"添加人主键","defaultValue":1132559099466752,"type":"Number"},"creatorName":{"comment":"添加人","defaultValue":"fmf","type":"String"},"modifierId":{"comment":"修改人主键","defaultValue":1132559099466752,"type":"Number"},"modifierName":{"comment":null,"defaultValue":"fmf","type":"String"},"sortCode":{"comment":null,"defaultValue":1,"type":"Number"},"createdAt":{"comment":"创建时间","defaultValue":"2022-05-14T10:14:34.000Z","type":"DateTime"},"updatedAt":{"comment":"修改时间","defaultValue":"2022-05-17T06:15:47.000Z","type":"DateTime"},"version":{"comment":null,"defaultValue":1274243738836480,"type":"Number"},"isRemoved":{"comment":"删除标记","defaultValue":"0","type":"Boolean"},"rebarCount":{"comment":"钢筋根数 钢板数量","defaultValue":null,"type":"Number"},"rebarType":{"comment":"钢筋类型","defaultValue":null,"type":"Number"},"width":{"comment":"材料宽度","defaultValue":0,"type":"Number"},"thickness":{"comment":"材料厚度","defaultValue":0,"type":"Number"},"materialType":{"comment":"半成品材料类型 0 钢筋1钢板","defaultValue":0,"type":"Number"},"designQuantity":{"comment":"设计量(钢筋构件)","defaultValue":null,"type":"Number"},"shippedQuantity":{"comment":"已供量(钢筋构件)","defaultValue":null,"type":"Number"},"signQuantity":{"comment":"签收量","defaultValue":0,"type":"Number"},"deliveryQuantity":{"comment":"发料量","defaultValue":0,"type":"Number"},"applyId":{"comment":"申请主表id","defaultValue":null,"type":"Number"},"sumLength":{"comment":"总长","defaultValue":null,"type":"Number"},"ratioCode":{"comment":"编号","defaultValue":null,"type":"String"},"ratioOrderId":{"comment":"构件库料单id","defaultValue":null,"type":"Number"}},"extensions":[],"details":[]},{"name":"qDeliveryPhoto","fields":{"tenant":{"comment":"租户编码","defaultValue":"gslq4dev","type":"String"},"id":{"comment":"主键id","defaultValue":612755971985408,"type":"Number"},"orderId":{"comment":"主表主键","defaultValue":612755971870720,"type":"Number"},"orgId":{"comment":"组织机构主键","defaultValue":441292771463168,"type":"Number"},"cameraPosition":{"comment":"摄像机位置","defaultValue":null,"type":"String"},"photoType":{"comment":"照片类型（入场、出场）","defaultValue":"入场","type":"String"},"cameraCode":{"comment":"摄像机编码","defaultValue":null,"type":"String"},"photoUrl":{"comment":"照片路径","defaultValue":"picture_1572020122216.jpg","type":"String"},"oriItemId":{"comment":"上传前id","defaultValue":null,"type":"String"},"oriOrderId":{"comment":"上传之前的order主键","defaultValue":null,"type":"String"},"creatorId":{"comment":"添加人主键","defaultValue":452353557336064,"type":"Number"},"creatorName":{"comment":"添加人","defaultValue":null,"type":"String"},"modifierId":{"comment":"修改人主键","defaultValue":null,"type":"Number"},"modifierName":{"comment":"修改人","defaultValue":null,"type":"String"},"externalUploadState":{"comment":"对外第三方对接上传状态","defaultValue":null,"type":"String"},"createdAt":{"comment":"创建时间","defaultValue":"2019-10-25T16:15:28.000Z","type":"DateTime"},"updatedAt":{"comment":"修改时间","defaultValue":"2019-10-25T16:15:28.000Z","type":"DateTime"},"version":{"comment":"版本号","defaultValue":612755971985408,"type":"Number"},"isRemoved":{"comment":"删除标记","defaultValue":"0","type":"Boolean"}},"extensions":[],"details":[]}]}}',
          remark: '发料模型',
          moduleId: 'Sg0MgIjEoP5Hy47T0B0G5',
          modelCode: 'qDelivery',
          modelName: '发料模型',
        },
        {
          id: 'tZmsEC2fufrt2dxTCwVxT',
          structure:
            '{"structure":{"name":"qReceive","fields":{"tenant":{"name":"tenant","type":"String","comment":"租户编码","defaultValue":"gslq4dev"},"orgId":{"name":"orgId","type":"Number","comment":"组织机构主键","defaultValue":null},"id":{"name":"id","type":"Number","comment":"主键id","defaultValue":1484458506031616},"orgName":{"name":"orgName","type":"String","comment":"组织机构名称","defaultValue":"徐环环测试拌合站"},"orderDate":{"name":"orderDate","type":"String","comment":"单据日期","defaultValue":"2023-03"},"orderCode":{"name":"orderCode","type":"String","comment":"单据编号","defaultValue":"收料-20230300001"},"orderOrigin":{"name":"orderOrigin","type":"Number","comment":"单据来源 或者0代表磅单1代表pda","defaultValue":2},"serviceType":{"name":"serviceType","type":"Number","comment":"业务类型 或者0代表调入 1代表收料","defaultValue":10},"orderType":{"name":"orderType","type":"Number","comment":"类型默认值（0）1冲红2补录3退料4普通","defaultValue":4},"maker":{"name":"maker","type":"String","comment":"制单人","defaultValue":"x"},"makerDate":{"name":"makerDate","type":"String","comment":"制单日期","defaultValue":"2023-03-10"},"remark":{"name":"remark","type":"String","comment":"主表备注","defaultValue":null},"printTimes":{"name":"printTimes","type":"Number","comment":"打印次数","defaultValue":null},"plateNumber":{"name":"plateNumber","type":"String","comment":"车牌号","defaultValue":null},"supplierId":{"name":"supplierId","type":"Number","comment":"供应商id","defaultValue":1298232861612032},"supplierName":{"name":"supplierName","type":"String","comment":"供应商名称","defaultValue":"丁浩测试拌合站"},"exitTime":{"name":"exitTime","type":"String","comment":"出场时间","defaultValue":"2023-03-10 14:18:22"},"isRed":{"name":"isRed","type":"Boolean","comment":"是否冲红（0）","defaultValue":null},"isAudit":{"name":"isAudit","type":"Boolean","comment":"审核（默认为0）","defaultValue":true},"auditor":{"name":"auditor","type":"String","comment":"审核人","defaultValue":"x"},"auditDate":{"name":"auditDate","type":"String","comment":"审核时间","defaultValue":"2023-03-10 14:18:49"},"oriOrgId":{"name":"oriOrgId","type":"String","comment":"对接组织机构","defaultValue":null},"oriSupplierId":{"name":"oriSupplierId","type":"String","comment":"预留对接主键字段【常用供应商】","defaultValue":null},"oriOrderId":{"name":"oriOrderId","type":"String","comment":"上传之前的磅单主键","defaultValue":null},"creatorId":{"name":"creatorId","type":"Number","comment":"添加人主键","defaultValue":1213988792489472},"creatorName":{"name":"creatorName","type":"String","comment":null,"defaultValue":"x"},"modifierId":{"name":"modifierId","type":"Number","comment":null,"defaultValue":1213988792489472},"modifierName":{"name":"modifierName","type":"String","comment":null,"defaultValue":"x"},"orderBarCode":{"name":"orderBarCode","type":"String","comment":null,"defaultValue":null},"longitude":{"name":"longitude","type":"Number","comment":null,"defaultValue":null},"latitude":{"name":"latitude","type":"Number","comment":null,"defaultValue":null},"recordedDate":{"name":"recordedDate","type":"String","comment":null,"defaultValue":"2023-03-10"},"orderDataId":{"name":"orderDataId","type":"Number","comment":null,"defaultValue":null},"sortOrderCode":{"name":"sortOrderCode","type":"String","comment":null,"defaultValue":"20230300001"},"rdsId":{"name":"rdsId","type":"Number","comment":null,"defaultValue":0},"isRds":{"name":"isRds","type":"Boolean","comment":null,"defaultValue":"0"},"purchaseMethod":{"name":"purchaseMethod","type":"String","comment":null,"defaultValue":null},"purchaseMethodFullName":{"name":"purchaseMethodFullName","type":"String","comment":"采购方式全称","defaultValue":null},"createdAt":{"name":"createdAt","type":"DateTime","comment":null,"defaultValue":"2023-03-10T06:18:49.000Z"},"updatedAt":{"name":"updatedAt","type":"DateTime","comment":null,"defaultValue":"2023-03-10T06:18:49.000Z"},"version":{"name":"version","type":"Number","comment":null,"defaultValue":1484458512462336},"isRemoved":{"name":"isRemoved","type":"Boolean","comment":null,"defaultValue":"0"},"insertFrom":{"name":"insertFrom","type":"String","comment":"区分对接数据","defaultValue":null},"originalOrderId":{"name":"originalOrderId","type":"Number","comment":"原单据Id","defaultValue":null},"originalOrderCode":{"name":"originalOrderCode","type":"String","comment":"原单据编号","defaultValue":null},"contractId":{"name":"contractId","type":"Number","comment":"合同id","defaultValue":null},"contractCode":{"name":"contractCode","type":"String","comment":"合同编号","defaultValue":null},"settlementId":{"name":"settlementId","type":"Number","comment":"结算单位Id","defaultValue":null},"settlementName":{"name":"settlementName","type":"String","comment":"结算单位名称","defaultValue":null},"freight":{"name":"freight","type":"Number","comment":"运费","defaultValue":0},"isVoid":{"name":"isVoid","type":"Boolean","comment":"是否作废","defaultValue":"0"},"isProduction":{"name":"isProduction","type":"Boolean","comment":"是否生产组织发料生成","defaultValue":"0"},"receiveType":{"name":"receiveType","type":"Number","comment":"单据类型","defaultValue":0},"receiveOriOrderId":{"name":"receiveOriOrderId","type":"String","comment":"直收直发分解后收料oriOrderId","defaultValue":""},"taxRate":{"name":"taxRate","type":"Number","comment":"税率","defaultValue":null},"priceType":{"name":"priceType","type":"String","comment":"价格类型","defaultValue":""}},"details":[{"isShow":false,"extensions":[],"dbName":"global_mtlp","name":"qReceiveMoreMaterial","fields":{"orgId":{"name":"orgId","type":"Number","comment":"组织机构主键","defaultValue":null},"id":{"name":"id","type":"Number","comment":"主键id","defaultValue":1484458506441216},"orderId":{"name":"orderId","type":"Number","comment":"主表主键","defaultValue":1484458506031616},"materialId":{"name":"materialId","type":"Number","comment":"主材主键","defaultValue":1031608411158794},"materialCode":{"name":"materialCode","type":"String","comment":"材料编码","defaultValue":"007001000019"},"materialName":{"name":"materialName","type":"String","comment":"材料名称","defaultValue":"膨化炸药"},"materialModel":{"name":"materialModel","type":"String","comment":"规格型号","defaultValue":"大包"},"materialUnit":{"name":"materialUnit","type":"String","comment":"主单位","defaultValue":"吨"},"auxiliaryUnit":{"name":"auxiliaryUnit","type":"String","comment":"辅单位","defaultValue":"吨"},"classId":{"name":"classId","type":"Number","comment":"材料类别id","defaultValue":null},"classFullId":{"name":"classFullId","type":"String","comment":"材料类别主键链","defaultValue":null},"manufacturer":{"name":"manufacturer","type":"String","comment":"生产厂商","defaultValue":null},"batchNo":{"name":"batchNo","type":"String","comment":"炉批号","defaultValue":null},"testReportNo":{"name":"testReportNo","type":"String","comment":"实验报告号","defaultValue":null},"netQuantity":{"name":"netQuantity","type":"Number","comment":"最终净值（决定是取地磅称重还是手填的净值）","defaultValue":34},"roughQuantity":{"name":"roughQuantity","type":"Number","comment":"毛重","defaultValue":null},"conversionRate":{"name":"conversionRate","type":"Number","comment":"转化率","defaultValue":null},"deductRate":{"name":"deductRate","type":"Number","comment":"扣率","defaultValue":null},"deductQuantity":{"name":"deductQuantity","type":"Number","comment":"扣吨","defaultValue":null},"oriNetQuantity":{"name":"oriNetQuantity","type":"Number","comment":"原始净重","defaultValue":null},"auxiliaryNetQuantity":{"name":"auxiliaryNetQuantity","type":"Number","comment":"辅单位净重","defaultValue":null},"mainNetQuantity":{"name":"mainNetQuantity","type":"Number","comment":"净重主单位","defaultValue":null},"remark":{"name":"remark","type":"String","comment":"备注","defaultValue":null},"oriMaterialId":{"name":"oriMaterialId","type":"String","comment":"材料信息varchar主键","defaultValue":"007001-007001000019"},"oriClassId":{"name":"oriClassId","type":"String","comment":"材料类别varchar主键","defaultValue":null},"oriCommonId":{"name":"oriCommonId","type":"String","comment":"材料信息其他预留主键sV_Col5","defaultValue":null},"oriItemId":{"name":"oriItemId","type":"String","comment":"上传之前的主键","defaultValue":null},"oriOrderId":{"name":"oriOrderId","type":"String","comment":"上传之前的order主键","defaultValue":null},"creatorId":{"name":"creatorId","type":"Number","comment":"添加人主键","defaultValue":1213988792489472},"creatorName":{"name":"creatorName","type":"String","comment":"添加人","defaultValue":"x"},"modifierId":{"name":"modifierId","type":"Number","comment":null,"defaultValue":1213988792489472},"modifierName":{"name":"modifierName","type":"String","comment":null,"defaultValue":"x"},"itemBarCode":{"name":"itemBarCode","type":"String","comment":null,"defaultValue":"H20230310141848WFMm"},"isAccounted":{"name":"isAccounted","type":"Boolean","comment":null,"defaultValue":null},"accountor":{"name":"accountor","type":"String","comment":null,"defaultValue":null},"accountDate":{"name":"accountDate","type":"String","comment":null,"defaultValue":null},"accountOrderId":{"name":"accountOrderId","type":"Number","comment":null,"defaultValue":null},"oriOrgId":{"name":"oriOrgId","type":"String","comment":null,"defaultValue":null},"storagePlace":{"name":"storagePlace","type":"String","comment":null,"defaultValue":null},"skillCardNo":{"name":"skillCardNo","type":"String","comment":null,"defaultValue":null},"isNew":{"name":"isNew","type":"Boolean","comment":null,"defaultValue":null},"receivePrice":{"name":"receivePrice","type":"Number","comment":null,"defaultValue":null},"sortCode":{"name":"sortCode","type":"Number","comment":null,"defaultValue":1},"waybillWeight":{"name":"waybillWeight","type":"Number","comment":null,"defaultValue":null},"serviceType":{"name":"serviceType","type":"Number","comment":null,"defaultValue":10},"orderType":{"name":"orderType","type":"Number","comment":null,"defaultValue":4},"isRed":{"name":"isRed","type":"Boolean","comment":null,"defaultValue":null},"submitDate":{"name":"submitDate","type":"String","comment":null,"defaultValue":"2023-03-10"},"taxRate":{"name":"taxRate","type":"Number","comment":null,"defaultValue":13},"taxFreePrice":{"name":"taxFreePrice","type":"Number","comment":null,"defaultValue":0},"taxFreeSum":{"name":"taxFreeSum","type":"Number","comment":null,"defaultValue":0},"taxIncludedPrice":{"name":"taxIncludedPrice","type":"Number","comment":null,"defaultValue":0},"taxIncludedSum":{"name":"taxIncludedSum","type":"Number","comment":null,"defaultValue":0},"taxAmount":{"name":"taxAmount","type":"Number","comment":null,"defaultValue":0},"accountQuantity":{"name":"accountQuantity","type":"Number","comment":null,"defaultValue":0},"itemDataId":{"name":"itemDataId","type":"Number","comment":null,"defaultValue":null},"checkState":{"name":"checkState","type":"Number","comment":null,"defaultValue":0},"externalUploadState":{"name":"externalUploadState","type":"String","comment":null,"defaultValue":null},"oriItemRedId":{"name":"oriItemRedId","type":"String","comment":null,"defaultValue":null},"qualityCertificate":{"name":"qualityCertificate","type":"String","comment":null,"defaultValue":null},"acceptanceRecord":{"name":"acceptanceRecord","type":"String","comment":null,"defaultValue":null},"priceType":{"name":"priceType","type":"String","comment":"价格类型,合同价调查价","defaultValue":null},"createdAt":{"name":"createdAt","type":"DateTime","comment":"创建时间","defaultValue":"2023-03-10T06:18:49.000Z"},"updatedAt":{"name":"updatedAt","type":"DateTime","comment":null,"defaultValue":"2023-03-10T06:18:49.000Z"},"version":{"name":"version","type":"Number","comment":null,"defaultValue":1484458506441216},"isRemoved":{"name":"isRemoved","type":"Boolean","comment":"删除标记","defaultValue":"0"},"stockbinFullName":{"name":"stockbinFullName","type":"String","comment":"存放地","defaultValue":null},"stockbinId":{"name":"stockbinId","type":"Number","comment":"存放地id","defaultValue":0},"oriStockbinId":{"name":"oriStockbinId","type":"String","comment":"存放地第三方id","defaultValue":null},"summaryId":{"name":"summaryId","type":"Number","comment":"收料汇总id","defaultValue":null},"freight":{"name":"freight","type":"Number","comment":"运费","defaultValue":0},"isVoid":{"name":"isVoid","type":"Boolean","comment":"是否作废","defaultValue":"0"},"checkStateEg":{"name":"checkStateEg","type":"Number","comment":"核对状态 0未核对  1已核对","defaultValue":null},"isAccountedEg":{"name":"isAccountedEg","type":"Boolean","comment":"对账状态","defaultValue":"0"},"accountOrderIdEg":{"name":"accountOrderIdEg","type":"Number","comment":"对账单号ID","defaultValue":null},"isCode":{"name":"isCode","type":"Boolean","comment":"数据是否从码单来","defaultValue":"0"},"oriPlanId":{"name":"oriPlanId","type":"Number","comment":"采购计划id","defaultValue":0},"typeMark":{"name":"typeMark","type":"String","comment":"原发料id","defaultValue":"批次维度"},"pushState":{"name":"pushState","type":"Number","comment":"推送状态","defaultValue":0},"pushFailReason":{"name":"pushFailReason","type":"String","comment":"推送失败原因","defaultValue":null},"pushTime":{"name":"pushTime","type":"String","comment":"推送时间","defaultValue":null},"technicalRequest":{"name":"technicalRequest","type":"String","comment":"技术要求","defaultValue":null},"declarationState":{"name":"declarationState","type":"String","comment":"报验情况","defaultValue":null},"labDeductRate":{"name":"labDeductRate","type":"Number","comment":"实验室测定扣率","defaultValue":0},"labDeductQuantity":{"name":"labDeductQuantity","type":"Number","comment":"实验室测定扣重","defaultValue":0},"purchaseMethods":{"name":"purchaseMethods","type":"String","comment":"采购方式","defaultValue":null},"purchaseMethodFullNames":{"name":"purchaseMethodFullNames","type":"String","comment":"采购方式全称","defaultValue":null},"diffRemark":{"name":"diffRemark","type":"String","comment":"调差备注","defaultValue":""},"accTaxRate":{"name":"accTaxRate","type":"Number","comment":"对账税率","defaultValue":0},"accTaxIncludedPrice":{"name":"accTaxIncludedPrice","type":"Number","comment":"对账单价","defaultValue":0},"accDeductQuantity":{"name":"accDeductQuantity","type":"Number","comment":"对账扣吨","defaultValue":0},"accDeductRate":{"name":"accDeductRate","type":"Number","comment":"对账扣率","defaultValue":0},"originalOrgId":{"name":"originalOrgId","type":"Number","comment":"原条码orgId","defaultValue":0},"receiveType":{"name":"receiveType","type":"Number","comment":"单据类型","defaultValue":0},"itemContractId":{"name":"itemContractId","type":"Number","comment":"合同id","defaultValue":0},"itemContractCode":{"name":"itemContractCode","type":"String","comment":"合同编号","defaultValue":""}},"index":0},{"isShow":false,"extensions":[],"dbName":"global_mtlp","name":"qReceivePhoto","fields":{"orgId":{"name":"orgId","type":"Number","comment":"组织机构主键","defaultValue":441292771463168},"id":{"name":"id","type":"Number","comment":"主键id","defaultValue":611743064436736},"orderId":{"name":"orderId","type":"Number","comment":"主表主键","defaultValue":611743063977984},"cameraPosition":{"name":"cameraPosition","type":"String","comment":"摄像机位置","defaultValue":null},"photoType":{"name":"photoType","type":"String","comment":"照片类型（入场、出场）","defaultValue":null},"cameraCode":{"name":"cameraCode","type":"String","comment":"摄像机编码","defaultValue":null},"photoUrl":{"name":"photoUrl","type":"String","comment":"照片路径","defaultValue":null},"oriItemId":{"name":"oriItemId","type":"String","comment":"上传前id","defaultValue":"8a984930-39ad-4eed-8fd4-c0146a6a7390"},"oriOrderId":{"name":"oriOrderId","type":"String","comment":"上传之前的order主键","defaultValue":"ae1370cc-ff41-4dac-b6ba-a89911129413"},"creatorId":{"name":"creatorId","type":"Number","comment":"添加人主键","defaultValue":null},"creatorName":{"name":"creatorName","type":"String","comment":"添加人","defaultValue":null},"modifierId":{"name":"modifierId","type":"Number","comment":"修改人主键","defaultValue":null},"modifierName":{"name":"modifierName","type":"String","comment":"修改人","defaultValue":null},"externalUploadState":{"name":"externalUploadState","type":"String","comment":"对外第三方对接上传状态","defaultValue":null},"createdAt":{"name":"createdAt","type":"DateTime","comment":"创建时间","defaultValue":"2019-10-24T05:54:48.000Z"},"updatedAt":{"name":"updatedAt","type":"DateTime","comment":"修改时间","defaultValue":"2019-10-24T05:54:48.000Z"},"version":{"name":"version","type":"Number","comment":null,"defaultValue":611743064436736},"isRemoved":{"name":"isRemoved","type":"Boolean","comment":"删除标记","defaultValue":"0"}}}],"isRoot":true,"extensions":[],"dbName":"global_mtlp"},"model":{"name":"qReceive","fields":{"tenant":{"comment":"租户编码","defaultValue":"gslq4dev","type":"String"},"orgId":{"comment":"组织机构主键","defaultValue":null,"type":"Number"},"id":{"comment":"主键id","defaultValue":1484458506031616,"type":"Number"},"orgName":{"comment":"组织机构名称","defaultValue":"徐环环测试拌合站","type":"String"},"orderDate":{"comment":"单据日期","defaultValue":"2023-03","type":"String"},"orderCode":{"comment":"单据编号","defaultValue":"收料-20230300001","type":"String"},"orderOrigin":{"comment":"单据来源 或者0代表磅单1代表pda","defaultValue":2,"type":"Number"},"serviceType":{"comment":"业务类型 或者0代表调入 1代表收料","defaultValue":10,"type":"Number"},"orderType":{"comment":"类型默认值（0）1冲红2补录3退料4普通","defaultValue":4,"type":"Number"},"maker":{"comment":"制单人","defaultValue":"x","type":"String"},"makerDate":{"comment":"制单日期","defaultValue":"2023-03-10","type":"String"},"remark":{"comment":"主表备注","defaultValue":null,"type":"String"},"printTimes":{"comment":"打印次数","defaultValue":null,"type":"Number"},"plateNumber":{"comment":"车牌号","defaultValue":null,"type":"String"},"supplierId":{"comment":"供应商id","defaultValue":1298232861612032,"type":"Number"},"supplierName":{"comment":"供应商名称","defaultValue":"丁浩测试拌合站","type":"String"},"exitTime":{"comment":"出场时间","defaultValue":"2023-03-10 14:18:22","type":"String"},"isRed":{"comment":"是否冲红（0）","defaultValue":null,"type":"Boolean"},"isAudit":{"comment":"审核（默认为0）","defaultValue":true,"type":"Boolean"},"auditor":{"comment":"审核人","defaultValue":"x","type":"String"},"auditDate":{"comment":"审核时间","defaultValue":"2023-03-10 14:18:49","type":"String"},"oriOrgId":{"comment":"对接组织机构","defaultValue":null,"type":"String"},"oriSupplierId":{"comment":"预留对接主键字段【常用供应商】","defaultValue":null,"type":"String"},"oriOrderId":{"comment":"上传之前的磅单主键","defaultValue":null,"type":"String"},"creatorId":{"comment":"添加人主键","defaultValue":1213988792489472,"type":"Number"},"creatorName":{"comment":null,"defaultValue":"x","type":"String"},"modifierId":{"comment":null,"defaultValue":1213988792489472,"type":"Number"},"modifierName":{"comment":null,"defaultValue":"x","type":"String"},"orderBarCode":{"comment":null,"defaultValue":null,"type":"String"},"longitude":{"comment":null,"defaultValue":null,"type":"Number"},"latitude":{"comment":null,"defaultValue":null,"type":"Number"},"recordedDate":{"comment":null,"defaultValue":"2023-03-10","type":"String"},"orderDataId":{"comment":null,"defaultValue":null,"type":"Number"},"sortOrderCode":{"comment":null,"defaultValue":"20230300001","type":"String"},"rdsId":{"comment":null,"defaultValue":0,"type":"Number"},"isRds":{"comment":null,"defaultValue":"0","type":"Boolean"},"purchaseMethod":{"comment":null,"defaultValue":null,"type":"String"},"purchaseMethodFullName":{"comment":"采购方式全称","defaultValue":null,"type":"String"},"createdAt":{"comment":null,"defaultValue":"2023-03-10T06:18:49.000Z","type":"DateTime"},"updatedAt":{"comment":null,"defaultValue":"2023-03-10T06:18:49.000Z","type":"DateTime"},"version":{"comment":null,"defaultValue":1484458512462336,"type":"Number"},"isRemoved":{"comment":null,"defaultValue":"0","type":"Boolean"},"insertFrom":{"comment":"区分对接数据","defaultValue":null,"type":"String"},"originalOrderId":{"comment":"原单据Id","defaultValue":null,"type":"Number"},"originalOrderCode":{"comment":"原单据编号","defaultValue":null,"type":"String"},"contractId":{"comment":"合同id","defaultValue":null,"type":"Number"},"contractCode":{"comment":"合同编号","defaultValue":null,"type":"String"},"settlementId":{"comment":"结算单位Id","defaultValue":null,"type":"Number"},"settlementName":{"comment":"结算单位名称","defaultValue":null,"type":"String"},"freight":{"comment":"运费","defaultValue":0,"type":"Number"},"isVoid":{"comment":"是否作废","defaultValue":"0","type":"Boolean"},"isProduction":{"comment":"是否生产组织发料生成","defaultValue":"0","type":"Boolean"},"receiveType":{"comment":"单据类型","defaultValue":0,"type":"Number"},"receiveOriOrderId":{"comment":"直收直发分解后收料oriOrderId","defaultValue":"","type":"String"},"taxRate":{"comment":"税率","defaultValue":null,"type":"Number"},"priceType":{"comment":"价格类型","defaultValue":"","type":"String"}},"extensions":[],"details":[{"name":"qReceiveMoreMaterial","fields":{"orgId":{"comment":"组织机构主键","defaultValue":null,"type":"Number"},"id":{"comment":"主键id","defaultValue":1484458506441216,"type":"Number"},"orderId":{"comment":"主表主键","defaultValue":1484458506031616,"type":"Number"},"materialId":{"comment":"主材主键","defaultValue":1031608411158794,"type":"Number"},"materialCode":{"comment":"材料编码","defaultValue":"007001000019","type":"String"},"materialName":{"comment":"材料名称","defaultValue":"膨化炸药","type":"String"},"materialModel":{"comment":"规格型号","defaultValue":"大包","type":"String"},"materialUnit":{"comment":"主单位","defaultValue":"吨","type":"String"},"auxiliaryUnit":{"comment":"辅单位","defaultValue":"吨","type":"String"},"classId":{"comment":"材料类别id","defaultValue":null,"type":"Number"},"classFullId":{"comment":"材料类别主键链","defaultValue":null,"type":"String"},"manufacturer":{"comment":"生产厂商","defaultValue":null,"type":"String"},"batchNo":{"comment":"炉批号","defaultValue":null,"type":"String"},"testReportNo":{"comment":"实验报告号","defaultValue":null,"type":"String"},"netQuantity":{"comment":"最终净值（决定是取地磅称重还是手填的净值）","defaultValue":34,"type":"Number"},"roughQuantity":{"comment":"毛重","defaultValue":null,"type":"Number"},"conversionRate":{"comment":"转化率","defaultValue":null,"type":"Number"},"deductRate":{"comment":"扣率","defaultValue":null,"type":"Number"},"deductQuantity":{"comment":"扣吨","defaultValue":null,"type":"Number"},"oriNetQuantity":{"comment":"原始净重","defaultValue":null,"type":"Number"},"auxiliaryNetQuantity":{"comment":"辅单位净重","defaultValue":null,"type":"Number"},"mainNetQuantity":{"comment":"净重主单位","defaultValue":null,"type":"Number"},"remark":{"comment":"备注","defaultValue":null,"type":"String"},"oriMaterialId":{"comment":"材料信息varchar主键","defaultValue":"007001-007001000019","type":"String"},"oriClassId":{"comment":"材料类别varchar主键","defaultValue":null,"type":"String"},"oriCommonId":{"comment":"材料信息其他预留主键sV_Col5","defaultValue":null,"type":"String"},"oriItemId":{"comment":"上传之前的主键","defaultValue":null,"type":"String"},"oriOrderId":{"comment":"上传之前的order主键","defaultValue":null,"type":"String"},"creatorId":{"comment":"添加人主键","defaultValue":1213988792489472,"type":"Number"},"creatorName":{"comment":"添加人","defaultValue":"x","type":"String"},"modifierId":{"comment":null,"defaultValue":1213988792489472,"type":"Number"},"modifierName":{"comment":null,"defaultValue":"x","type":"String"},"itemBarCode":{"comment":null,"defaultValue":"H20230310141848WFMm","type":"String"},"isAccounted":{"comment":null,"defaultValue":null,"type":"Boolean"},"accountor":{"comment":null,"defaultValue":null,"type":"String"},"accountDate":{"comment":null,"defaultValue":null,"type":"String"},"accountOrderId":{"comment":null,"defaultValue":null,"type":"Number"},"oriOrgId":{"comment":null,"defaultValue":null,"type":"String"},"storagePlace":{"comment":null,"defaultValue":null,"type":"String"},"skillCardNo":{"comment":null,"defaultValue":null,"type":"String"},"isNew":{"comment":null,"defaultValue":null,"type":"Boolean"},"receivePrice":{"comment":null,"defaultValue":null,"type":"Number"},"sortCode":{"comment":null,"defaultValue":1,"type":"Number"},"waybillWeight":{"comment":null,"defaultValue":null,"type":"Number"},"serviceType":{"comment":null,"defaultValue":10,"type":"Number"},"orderType":{"comment":null,"defaultValue":4,"type":"Number"},"isRed":{"comment":null,"defaultValue":null,"type":"Boolean"},"submitDate":{"comment":null,"defaultValue":"2023-03-10","type":"String"},"taxRate":{"comment":null,"defaultValue":13,"type":"Number"},"taxFreePrice":{"comment":null,"defaultValue":0,"type":"Number"},"taxFreeSum":{"comment":null,"defaultValue":0,"type":"Number"},"taxIncludedPrice":{"comment":null,"defaultValue":0,"type":"Number"},"taxIncludedSum":{"comment":null,"defaultValue":0,"type":"Number"},"taxAmount":{"comment":null,"defaultValue":0,"type":"Number"},"accountQuantity":{"comment":null,"defaultValue":0,"type":"Number"},"itemDataId":{"comment":null,"defaultValue":null,"type":"Number"},"checkState":{"comment":null,"defaultValue":0,"type":"Number"},"externalUploadState":{"comment":null,"defaultValue":null,"type":"String"},"oriItemRedId":{"comment":null,"defaultValue":null,"type":"String"},"qualityCertificate":{"comment":null,"defaultValue":null,"type":"String"},"acceptanceRecord":{"comment":null,"defaultValue":null,"type":"String"},"priceType":{"comment":"价格类型,合同价调查价","defaultValue":null,"type":"String"},"createdAt":{"comment":"创建时间","defaultValue":"2023-03-10T06:18:49.000Z","type":"DateTime"},"updatedAt":{"comment":null,"defaultValue":"2023-03-10T06:18:49.000Z","type":"DateTime"},"version":{"comment":null,"defaultValue":1484458506441216,"type":"Number"},"isRemoved":{"comment":"删除标记","defaultValue":"0","type":"Boolean"},"stockbinFullName":{"comment":"存放地","defaultValue":null,"type":"String"},"stockbinId":{"comment":"存放地id","defaultValue":0,"type":"Number"},"oriStockbinId":{"comment":"存放地第三方id","defaultValue":null,"type":"String"},"summaryId":{"comment":"收料汇总id","defaultValue":null,"type":"Number"},"freight":{"comment":"运费","defaultValue":0,"type":"Number"},"isVoid":{"comment":"是否作废","defaultValue":"0","type":"Boolean"},"checkStateEg":{"comment":"核对状态 0未核对  1已核对","defaultValue":null,"type":"Number"},"isAccountedEg":{"comment":"对账状态","defaultValue":"0","type":"Boolean"},"accountOrderIdEg":{"comment":"对账单号ID","defaultValue":null,"type":"Number"},"isCode":{"comment":"数据是否从码单来","defaultValue":"0","type":"Boolean"},"oriPlanId":{"comment":"采购计划id","defaultValue":0,"type":"Number"},"typeMark":{"comment":"原发料id","defaultValue":"批次维度","type":"String"},"pushState":{"comment":"推送状态","defaultValue":0,"type":"Number"},"pushFailReason":{"comment":"推送失败原因","defaultValue":null,"type":"String"},"pushTime":{"comment":"推送时间","defaultValue":null,"type":"String"},"technicalRequest":{"comment":"技术要求","defaultValue":null,"type":"String"},"declarationState":{"comment":"报验情况","defaultValue":null,"type":"String"},"labDeductRate":{"comment":"实验室测定扣率","defaultValue":0,"type":"Number"},"labDeductQuantity":{"comment":"实验室测定扣重","defaultValue":0,"type":"Number"},"purchaseMethods":{"comment":"采购方式","defaultValue":null,"type":"String"},"purchaseMethodFullNames":{"comment":"采购方式全称","defaultValue":null,"type":"String"},"diffRemark":{"comment":"调差备注","defaultValue":"","type":"String"},"accTaxRate":{"comment":"对账税率","defaultValue":0,"type":"Number"},"accTaxIncludedPrice":{"comment":"对账单价","defaultValue":0,"type":"Number"},"accDeductQuantity":{"comment":"对账扣吨","defaultValue":0,"type":"Number"},"accDeductRate":{"comment":"对账扣率","defaultValue":0,"type":"Number"},"originalOrgId":{"comment":"原条码orgId","defaultValue":0,"type":"Number"},"receiveType":{"comment":"单据类型","defaultValue":0,"type":"Number"},"itemContractId":{"comment":"合同id","defaultValue":0,"type":"Number"},"itemContractCode":{"comment":"合同编号","defaultValue":"","type":"String"}},"extensions":[],"details":[]},{"name":"qReceivePhoto","fields":{"orgId":{"comment":"组织机构主键","defaultValue":441292771463168,"type":"Number"},"id":{"comment":"主键id","defaultValue":611743064436736,"type":"Number"},"orderId":{"comment":"主表主键","defaultValue":611743063977984,"type":"Number"},"cameraPosition":{"comment":"摄像机位置","defaultValue":null,"type":"String"},"photoType":{"comment":"照片类型（入场、出场）","defaultValue":null,"type":"String"},"cameraCode":{"comment":"摄像机编码","defaultValue":null,"type":"String"},"photoUrl":{"comment":"照片路径","defaultValue":null,"type":"String"},"oriItemId":{"comment":"上传前id","defaultValue":"8a984930-39ad-4eed-8fd4-c0146a6a7390","type":"String"},"oriOrderId":{"comment":"上传之前的order主键","defaultValue":"ae1370cc-ff41-4dac-b6ba-a89911129413","type":"String"},"creatorId":{"comment":"添加人主键","defaultValue":null,"type":"Number"},"creatorName":{"comment":"添加人","defaultValue":null,"type":"String"},"modifierId":{"comment":"修改人主键","defaultValue":null,"type":"Number"},"modifierName":{"comment":"修改人","defaultValue":null,"type":"String"},"externalUploadState":{"comment":"对外第三方对接上传状态","defaultValue":null,"type":"String"},"createdAt":{"comment":"创建时间","defaultValue":"2019-10-24T05:54:48.000Z","type":"DateTime"},"updatedAt":{"comment":"修改时间","defaultValue":"2019-10-24T05:54:48.000Z","type":"DateTime"},"version":{"comment":null,"defaultValue":611743064436736,"type":"Number"},"isRemoved":{"comment":"删除标记","defaultValue":"0","type":"Boolean"}},"extensions":[],"details":[]}]}}',
          remark: '收料模型',
          moduleId: 'Sg0MgIjEoP5Hy47T0B0G5',
          modelCode: 'qReceive',
          modelName: '单表模型',
        },
      ],
    };
  }
}
